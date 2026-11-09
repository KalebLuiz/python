let pyodide;

self.addEventListener("message", async (event) => {
  const message = event.data;
  if (message.type === "init") {
    try {
      importScripts("https://cdn.jsdelivr.net/pyodide/v0.27.7/full/pyodide.js");
      pyodide = await loadPyodide();
      self.postMessage({ type: "ready" });
    } catch (error) {
      self.postMessage({ type: "error", message: `Nao foi possivel carregar o Python: ${error.message}` });
    }
    return;
  }

  if (message.type !== "run" || !pyodide) return;

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
});
