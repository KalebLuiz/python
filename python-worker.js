let pyodide;
let SQL;
let sqlDatabaseBytes;

self.addEventListener("message", async (event) => {
  const message = event.data;

  // Inicializa os dois executores independentes e carrega o banco de exemplo.
  if (message.type === "init") {
    try {
      importScripts("https://cdn.jsdelivr.net/pyodide/v0.27.7/full/pyodide.js");
      pyodide = await loadPyodide();
      const sqlJsBase = "https://cdn.jsdelivr.net/npm/sql.js@1.10.3/dist/";
      importScripts(`${sqlJsBase}sql-wasm.js`);
      SQL = await initSqlJs({ locateFile: (file) => `${sqlJsBase}${file}` });

      const response = await fetch("./mysql_financ.db");
      if (!response.ok) {
        throw new Error(`Não foi possível carregar mysql_financ.db (HTTP ${response.status}).`);
      }
      sqlDatabaseBytes = new Uint8Array(await response.arrayBuffer());
      self.postMessage({ type: "ready", sqlReady: true });
    } catch (error) {
      self.postMessage({ type: "error", message: `Não foi possível inicializar os executores: ${error.message}` });
    }
    return;
  }

  // Execução de testes em código Python
  if (message.type === "run" && pyodide) {
    try {
      const codeLiteral = JSON.stringify(JSON.stringify(message.code));
      const functionLiteral = JSON.stringify(JSON.stringify(message.functionName));
      const testsLiteral = JSON.stringify(JSON.stringify(message.tests));
      const resultJson = await pyodide.runPythonAsync(`
import copy as __copy
import json as __json
import math as __math

__code = __json.loads(${codeLiteral})
__function_name = __json.loads(${functionLiteral})
__tests = __json.loads(${testsLiteral})
__namespace = {}
exec(compile(__code, "<solucao>", "exec"), __namespace)
__function = __namespace.get(__function_name)
if not callable(__function):
    raise TypeError("Defina uma funcao chamada " + __function_name)

__results = []
for __index, __test in enumerate(__tests, start=1):
    __args = __test["args"]
    __before = __copy.deepcopy(__args) if __test.get("preserveInput") else None
    try:
        __actual = __function(*__args)
        __expected = __test["expected"]
        if isinstance(__actual, (int, float)) and isinstance(__expected, (int, float)):
            __passed = __math.isclose(__actual, __expected, rel_tol=1e-9, abs_tol=1e-9)
        else:
            __passed = __actual == __expected
        if __test.get("preserveInput") and __args != __before:
            __passed = False
            __error = "A funcao alterou a lista recebida."
        else:
            __error = None
        __results.append({
            "index": __index,
            "passed": bool(__passed),
            "expected": repr(__expected),
            "actual": repr(__actual),
            "error": __error
        })
    except Exception as __error:
        __results.append({
            "index": __index,
            "passed": False,
            "expected": repr(__test["expected"]),
            "actual": "",
            "error": type(__error).__name__ + ": " + str(__error)
        })
__json.dumps(__results, ensure_ascii=False)
`);
      self.postMessage({ type: "results", results: JSON.parse(resultJson) });
    } catch (error) {
      self.postMessage({ type: "error", message: error.message || "Erro ao interpretar o codigo Python." });
    }
    return;
  }

  // Executa as consultas em cópias descartáveis da base para preservar os dados.
  if (message.type === "run-sql" && SQL && sqlDatabaseBytes) {
    try {
      const start = performance.now();
      const userResult = executeSql(message.query || "");
      const expectedResult = message.expectedQuery
        ? executeSql(message.expectedQuery)
        : null;
      const passed = expectedResult !== null && resultsMatch(userResult, expectedResult);
      self.postMessage({
        type: "sql-results",
        challengeId: message.challengeId,
        data: {
          success: true,
          columns: userResult.columns,
          rows: userResult.rows.slice(0, 100),
          totalRows: userResult.rows.length,
          displayedRows: Math.min(userResult.rows.length, 100),
          elapsedMs: Math.round((performance.now() - start) * 100) / 100,
          passed,
          expectedTotalRows: expectedResult === null ? null : expectedResult.rows.length,
          expectedColumns: expectedResult === null ? null : expectedResult.columns
        }
      });
    } catch (error) {
      self.postMessage({
        type: "sql-error",
        message: error.message || "Erro ao executar consulta SQL.",
        challengeId: message.challengeId
      });
    }
    return;
  }
});

function executeSql(query) {
  const db = new SQL.Database(new Uint8Array(sqlDatabaseBytes));
  try {
    const results = db.exec(query);
    if (results.length > 1) {
      throw new Error("Execute uma consulta por vez.");
    }
    const result = results[0] || { columns: [], values: [] };
    return { columns: result.columns, rows: result.values };
  } finally {
    db.close();
  }
}

function resultsMatch(actual, expected) {
  if (actual.rows.length !== expected.rows.length
      || actual.columns.length !== expected.columns.length
      || actual.columns.some((column, index) => column.toLowerCase() !== expected.columns[index].toLowerCase())) {
    return false;
  }

  return actual.rows.every((row, rowIndex) => row.every((value, columnIndex) => {
    const expectedValue = expected.rows[rowIndex][columnIndex];
    if (value === null || expectedValue === null) {
      return value === expectedValue;
    }
    if (typeof value === "number" && typeof expectedValue === "number") {
      return Math.abs(value - expectedValue) <= Math.max(1e-4, Math.abs(expectedValue) * 1e-4);
    }
    return String(value ?? "").trim().toLowerCase() === String(expectedValue ?? "").trim().toLowerCase();
  }));
}
