const challenges = [
  {
    id: 1,
    title: "Total com desconto",
    topic: "Expressões, operadores e funções",
    lesson: "Aula 05 · expressões e operadores",
    difficulty: "Iniciante",
    functionName: "calcular_total",
    prompt: "Implemente <code class=\"inline-code\">calcular_total(precos, desconto_percentual)</code>. A função deve somar os preços, aplicar o desconto informado e devolver o total arredondado para duas casas decimais. O desconto é um número entre 0 e 100.",
    examples: [
      { input: "([10, 20, 5], 10)", output: "31.5" },
      { input: "([12.5, 7.5], 10)", output: "18.0" },
      { input: "([], 25)", output: "0" }
    ],
    hint: "Some os valores primeiro e aplique o desconto com a fórmula: total * (1 - desconto_percentual / 100). Use round(resultado, 2) para limitar as casas decimais.",
    solution: "def calcular_total(precos, desconto_percentual):\n    total = sum(precos)\n    total_com_desconto = total * (1 - desconto_percentual / 100)\n    return round(total_com_desconto, 2)",
    starter: "def calcular_total(precos, desconto_percentual):\n    # Calcule e devolva o total com desconto.\n    pass",
    tests: [
      { args: [[10, 20, 5], 10], expected: 31.5 },
      { args: [[12.5, 7.5], 10], expected: 18 },
      { args: [[100], 0], expected: 100 },
      { args: [[], 25], expected: 0 }
    ]
  },
  {
    id: 2,
    title: "Ano bissexto",
    topic: "Condicionais e operadores lógicos",
    lesson: "Aula 06 · seleção e lógica",
    difficulty: "Iniciante",
    functionName: "eh_bissexto",
    prompt: "Implemente <code class=\"inline-code\">eh_bissexto(ano)</code> para devolver <code class=\"inline-code\">True</code> quando o ano for bissexto e <code class=\"inline-code\">False</code> caso contrário. Um ano é bissexto se for divisível por 4, exceto os séculos que não são divisíveis por 400.",
    examples: [
      { input: "(2024)", output: "True" },
      { input: "(1900)", output: "False" },
      { input: "(2000)", output: "True" }
    ],
    hint: "Trate primeiro a regra dos séculos: divisível por 400. Nos outros anos, basta verificar se é divisível por 4.",
    solution: "def eh_bissexto(ano):\n    return ano % 400 == 0 or (ano % 4 == 0 and ano % 100 != 0)",
    starter: "def eh_bissexto(ano):\n    # Devolva True ou False.\n    pass",
    tests: [
      { args: [2024], expected: true },
      { args: [1900], expected: false },
      { args: [2000], expected: true },
      { args: [2023], expected: false },
      { args: [2400], expected: true }
    ]
  },
  {
    id: 3,
    title: "Resultado da prova",
    topic: "Decisões encadeadas e comparações",
    lesson: "Aulas 06 e 07 · seleção composta",
    difficulty: "Iniciante",
    functionName: "classificar_nota",
    prompt: "Implemente <code class=\"inline-code\">classificar_nota(nota)</code> para classificar uma nota de 0 a 10. Devolva <code class=\"inline-code\">\"Aprovado\"</code> para nota maior ou igual a 7, <code class=\"inline-code\">\"Recuperação\"</code> para nota a partir de 5 e <code class=\"inline-code\">\"Reprovado\"</code> para notas menores que 5.",
    examples: [
      { input: "(8.5)", output: "\"Aprovado\"" },
      { input: "(6)", output: "\"Recuperação\"" },
      { input: "(4.5)", output: "\"Reprovado\"" }
    ],
    hint: "Use if, elif e else. Verifique primeiro a maior nota mínima (7) para não classificar uma nota aprovada como recuperação.",
    solution: "def classificar_nota(nota):\n    if nota >= 7:\n        return \"Aprovado\"\n    elif nota >= 5:\n        return \"Recuperação\"\n    else:\n        return \"Reprovado\"",
    starter: "def classificar_nota(nota):\n    # Devolva a classificação da nota.\n    pass",
    tests: [
      { args: [8.5], expected: "Aprovado" },
      { args: [7], expected: "Aprovado" },
      { args: [6], expected: "Recuperação" },
      { args: [5], expected: "Recuperação" },
      { args: [4.5], expected: "Reprovado" }
    ]
  },
  {
    id: 4,
    title: "Soma dos pares",
    topic: "Laços, contadores e acumuladores",
    lesson: "Aulas 09, 10 e 12 · repetição while, aninhada e for",
    difficulty: "Intermediário",
    functionName: "somar_pares",
    prompt: "Implemente <code class=\"inline-code\">somar_pares(n)</code> para devolver a soma de todos os números pares entre 0 e <code class=\"inline-code\">n</code>, incluindo os limites quando forem pares. Se <code class=\"inline-code\">n</code> for negativo, devolva 0.",
    examples: [
      { input: "(10)", output: "30  (0 + 2 + 4 + 6 + 8 + 10)" },
      { input: "(7)", output: "12  (0 + 2 + 4 + 6)" },
      { input: "(-3)", output: "0" }
    ],
    hint: "Percorra os valores com range e some os que satisfazem numero % 2 == 0. Uma variável acumuladora começa em zero.",
    solution: "def somar_pares(n):\n    total = 0\n    for numero in range(n + 1):\n        if numero % 2 == 0:\n            total += numero\n    return total",
    starter: "def somar_pares(n):\n    # Some os números pares de 0 até n.\n    pass",
    tests: [
      { args: [10], expected: 30 },
      { args: [7], expected: 12 },
      { args: [1], expected: 0 },
      { args: [0], expected: 0 },
      { args: [-3], expected: 0 }
    ]
  },
  {
    id: 5,
    title: "Contador de vogais",
    topic: "Strings e percorrimento de sequências",
    lesson: "Aulas 07 e 13 · strings e sequências",
    difficulty: "Intermediário",
    functionName: "contar_vogais",
    prompt: "Implemente <code class=\"inline-code\">contar_vogais(texto)</code> para contar vogais sem diferenciar maiúsculas de minúsculas. Considere também as vogais acentuadas em português: a, e, i, o, u com acentos agudo, grave, circunflexo e til quando aplicável.",
    examples: [
      { input: "(\"Python\")", output: "1" },
      { input: "(\"Olá, mundo!\")", output: "4" },
      { input: "(\"EDUCACAO\")", output: "5" }
    ],
    hint: "Percorra cada caractere de texto.lower() e conte os que pertencem a uma string ou conjunto contendo todas as vogais, inclusive as acentuadas.",
    solution: "def contar_vogais(texto):\n    vogais = \"aeiouáàâãéêíóôõú\"\n    return sum(1 for caractere in texto.lower() if caractere in vogais)",
    starter: "def contar_vogais(texto):\n    # Conte as vogais, incluindo as acentuadas.\n    pass",
    tests: [
      { args: ["Python"], expected: 1 },
      { args: ["Olá, mundo!"], expected: 4 },
      { args: ["EDUCACAO"], expected: 5 },
      { args: ["áàâãéêíóôõú"], expected: 11 },
      { args: ["rhythms"], expected: 0 }
    ]
  },
  {
    id: 6,
    title: "Remover repetidos",
    topic: "Listas e operações básicas em sequências",
    lesson: "Aulas 13 e 14 · sequências, objetos e cópias",
    difficulty: "Intermediário",
    functionName: "remover_repetidos",
    prompt: "Implemente <code class=\"inline-code\">remover_repetidos(itens)</code> para devolver uma nova lista sem valores repetidos. Mantenha a ordem da primeira aparição de cada valor; não altere a lista recebida.",
    examples: [
      { input: "([3, 1, 3, 2, 1])", output: "[3, 1, 2]" },
      { input: "([\"a\", \"a\", \"b\"])", output: "[\"a\", \"b\"]" },
      { input: "([])", output: "[]" }
    ],
    hint: "Crie uma lista de resultado. Percorra os itens de entrada e acrescente cada item apenas quando ele ainda não estiver no resultado.",
    solution: "def remover_repetidos(itens):\n    resultado = []\n    for item in itens:\n        if item not in resultado:\n            resultado.append(item)\n    return resultado",
    starter: "def remover_repetidos(itens):\n    # Devolva uma nova lista na ordem original.\n    pass",
    tests: [
      { args: [[3, 1, 3, 2, 1]], expected: [3, 1, 2], preserveInput: true },
      { args: [["a", "a", "b", "c", "b"]], expected: ["a", "b", "c"], preserveInput: true },
      { args: [[4, 4, 4]], expected: [4], preserveInput: true },
      { args: [[]], expected: [], preserveInput: true }
    ]
  },
  {
    id: 7,
    title: "Maior trecho crescente",
    topic: "Laços e análise de sequências",
    lesson: "Aulas 10 e 12 · laços aninhados e for",
    difficulty: "Avançado",
    functionName: "maior_sequencia_crescente",
    prompt: "Implemente <code class=\"inline-code\">maior_sequencia_crescente(numeros)</code> para devolver o tamanho do maior trecho contíguo estritamente crescente. O trecho deve usar elementos vizinhos da lista. Para uma lista vazia, devolva 0.",
    examples: [
      { input: "([1, 2, 2, 3, 4, 1])", output: "3  (o trecho [2, 3, 4])" },
      { input: "([5, 4, 3])", output: "1" },
      { input: "([])", output: "0" }
    ],
    hint: "Mantenha dois contadores: o tamanho do trecho atual e o maior encontrado. Reinicie o atual quando o elemento não for maior que o anterior.",
    solution: "def maior_sequencia_crescente(numeros):\n    if not numeros:\n        return 0\n    maior = atual = 1\n    for indice in range(1, len(numeros)):\n        if numeros[indice] > numeros[indice - 1]:\n            atual += 1\n            maior = max(maior, atual)\n        else:\n            atual = 1\n    return maior",
    starter: "def maior_sequencia_crescente(numeros):\n    # Devolva o tamanho do maior trecho crescente contíguo.\n    pass",
    tests: [
      { args: [[1, 2, 2, 3, 4, 1]], expected: 3 },
      { args: [[5, 4, 3]], expected: 1 },
      { args: [[1, 2, 3, 4]], expected: 4 },
      { args: [[2, 2, 2]], expected: 1 },
      { args: [[]], expected: 0 }
    ]
  },
  {
    id: 8,
    title: "Soma das diagonais",
    topic: "Matrizes, tabelas e laços aninhados",
    lesson: "Aula 14 · matrizes e tabelas",
    difficulty: "Avançado",
    functionName: "somar_diagonais",
    prompt: "Implemente <code class=\"inline-code\">somar_diagonais(matriz)</code> para devolver a soma das duas diagonais de uma matriz quadrada. Se a matriz tiver dimensão ímpar, conte o elemento central apenas uma vez. Uma matriz vazia tem soma 0.",
    examples: [
      { input: "([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", output: "25  (1 + 5 + 9 + 3 + 7)" },
      { input: "([[1, 2], [3, 4]])", output: "10" },
      { input: "([])", output: "0" }
    ],
    hint: "Para cada linha i, os elementos diagonais estão nas colunas i e n - 1 - i. Evite somar duas vezes a posição central.",
    solution: "def somar_diagonais(matriz):\n    tamanho = len(matriz)\n    total = 0\n    for indice in range(tamanho):\n        total += matriz[indice][indice]\n        outra_coluna = tamanho - 1 - indice\n        if outra_coluna != indice:\n            total += matriz[indice][outra_coluna]\n    return total",
    starter: "def somar_diagonais(matriz):\n    # Some as diagonais sem duplicar o centro.\n    pass",
    tests: [
      { args: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]]], expected: 25 },
      { args: [[[1, 2], [3, 4]]], expected: 10 },
      { args: [[[5]]], expected: 5 },
      { args: [[]], expected: 0 }
    ]
  },
  {
    id: 9,
    title: "Busca binária",
    topic: "Busca em sequências ordenadas",
    lesson: "Aula 15 · busca linear e binária",
    difficulty: "Avançado",
    functionName: "busca_binaria",
    prompt: "Implemente <code class=\"inline-code\">busca_binaria(lista, alvo)</code> para procurar um valor em uma lista de números já ordenada em ordem crescente. Devolva o índice do alvo ou <code class=\"inline-code\">-1</code> se ele não estiver na lista. Sua solução deve descartar metade do intervalo a cada comparação.",
    examples: [
      { input: "([1, 3, 5, 7, 9], 7)", output: "3" },
      { input: "([2, 4, 6, 8], 5)", output: "-1" },
      { input: "([], 10)", output: "-1" }
    ],
    hint: "Use os limites esquerdo e direito. Calcule o meio, compare com o alvo e atualize um dos limites para reduzir a busca pela metade.",
    solution: "def busca_binaria(lista, alvo):\n    esquerda, direita = 0, len(lista) - 1\n    while esquerda <= direita:\n        meio = (esquerda + direita) // 2\n        if lista[meio] == alvo:\n            return meio\n        if lista[meio] < alvo:\n            esquerda = meio + 1\n        else:\n            direita = meio - 1\n    return -1",
    starter: "def busca_binaria(lista, alvo):\n    # Procure o alvo reduzindo o intervalo pela metade.\n    pass",
    tests: [
      { args: [[1, 3, 5, 7, 9], 7], expected: 3 },
      { args: [[2, 4, 6, 8], 5], expected: -1 },
      { args: [[], 10], expected: -1 },
      { args: [[-5, -1, 0, 8, 12, 19], -5], expected: 0 },
      { args: [[-5, -1, 0, 8, 12, 19], 19], expected: 5 }
    ]
  },
  {
    id: 10,
    title: "Ordenação por bolhas",
    topic: "Ordenação de sequências",
    lesson: "Aula 15 · algoritmos de ordenação",
    difficulty: "Avançado",
    functionName: "ordenar_bubble",
    prompt: "Implemente <code class=\"inline-code\">ordenar_bubble(numeros)</code> usando o algoritmo bubble sort para devolver uma nova lista em ordem crescente. Não altere a lista recebida. O algoritmo compara elementos vizinhos e troca os que estiverem fora de ordem.",
    examples: [
      { input: "([5, 1, 4, 2])", output: "[1, 2, 4, 5]" },
      { input: "([3, 3, -1])", output: "[-1, 3, 3]" },
      { input: "([])", output: "[]" }
    ],
    hint: "Copie a lista antes de ordenar. Em cada passada, compare pares vizinhos e troque quando o da esquerda for maior. Encerre antes se uma passada não fizer trocas.",
    solution: "def ordenar_bubble(numeros):\n    resultado = numeros.copy()\n    for fim in range(len(resultado) - 1, 0, -1):\n        trocou = False\n        for indice in range(fim):\n            if resultado[indice] > resultado[indice + 1]:\n                resultado[indice], resultado[indice + 1] = resultado[indice + 1], resultado[indice]\n                trocou = True\n        if not trocou:\n            break\n    return resultado",
    starter: "def ordenar_bubble(numeros):\n    # Ordene uma copia da lista com bubble sort.\n    pass",
    tests: [
      { args: [[5, 1, 4, 2]], expected: [1, 2, 4, 5], preserveInput: true },
      { args: [[3, 3, -1]], expected: [-1, 3, 3], preserveInput: true },
      { args: [[1, 2, 3]], expected: [1, 2, 3], preserveInput: true },
      { args: [[]], expected: [], preserveInput: true }
    ]
  }
];

const STORAGE_KEYS = {
  codes: "laboratorio-py-codes-v1",
  solved: "laboratorio-py-solved-v1"
};
const challengeList = document.querySelector("#challenge-list");
const content = document.querySelector("#challenge-content");
const editorStorage = readStorage(STORAGE_KEYS.codes, {});
const solvedIds = new Set(readStorage(STORAGE_KEYS.solved, []));
let activeChallenge = challenges[0];
let worker;
let workerReady = false;
let workerTimer;

function readStorage(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch {
    return fallback;
  }
}

function saveStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    showFeedback("Não foi possível salvar o progresso neste navegador.", "error");
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function updateProgress() {
  const completed = solvedIds.size;
  document.querySelector("#progress-label").textContent = `${completed} de ${challenges.length} concluídos`;
  document.querySelector("#progress-fill").style.width = `${(completed / challenges.length) * 100}%`;
  document.querySelector(".progress-track").setAttribute("aria-valuenow", String(completed));
  document.querySelector("#challenge-count").textContent = `${challenges.length} exercícios`;
}

function renderChallengeList() {
  challengeList.replaceChildren();
  for (const challenge of challenges) {
    const button = document.createElement("button");
    button.className = `challenge-link${solvedIds.has(challenge.id) ? " is-solved" : ""}`;
    button.type = "button";
    button.setAttribute("aria-current", challenge.id === activeChallenge.id ? "page" : "false");
    button.innerHTML = `
      <span class="challenge-number">${solvedIds.has(challenge.id) ? "✓" : String(challenge.id).padStart(2, "0")}</span>
      <span class="challenge-link-copy">
        <strong>${escapeHtml(challenge.title)}</strong>
        <small>${escapeHtml(challenge.difficulty)}</small>
      </span>`;
    button.addEventListener("click", () => selectChallenge(challenge.id));
    challengeList.append(button);
  }
}

function renderExamples(examples) {
  return examples.map((example) => `
    <div class="example-row">
      <code>${escapeHtml(example.input)}</code>
      <code>${escapeHtml(example.output)}</code>
    </div>`).join("");
}

function renderChallenge() {
  const challenge = activeChallenge;
  const code = editorStorage[challenge.id] ?? challenge.starter;
  content.innerHTML = `
    <div class="challenge-topline">
      <span class="challenge-kicker">DESAFIO ${String(challenge.id).padStart(2, "0")} / ${String(challenges.length).padStart(2, "0")}</span>
      <span class="difficulty">${escapeHtml(challenge.difficulty)}</span>
    </div>
    <h2 class="challenge-title">${escapeHtml(challenge.title)}</h2>
    <p class="challenge-topic">${escapeHtml(challenge.topic)} <span aria-hidden="true">·</span> ${escapeHtml(challenge.lesson)}</p>
    <div class="challenge-statement">${challenge.prompt}</div>
    <div class="example-box">
      <div class="example-heading">Exemplos</div>
      ${renderExamples(challenge.examples)}
    </div>
    <div class="editor-header">
      <label class="editor-label" for="python-editor"><span class="file-icon">▤</span> Sua solução</label>
      <span class="editor-lang">PYTHON 3</span>
    </div>
    <div class="editor-wrap">
      <div class="editor-gutter"><span class="window-dot" aria-hidden="true"></span><span>solucao.py</span></div>
      <textarea id="python-editor" class="editor-area" spellcheck="false" autocapitalize="off" autocomplete="off" aria-label="Editor de código Python">${escapeHtml(code)}</textarea>
    </div>
    <div class="editor-actions">
      <button id="run-button" class="button button-primary" type="button"><span class="button-icon">▶</span> Testar solução</button>
      <button id="hint-button" class="button" type="button"><span class="button-icon">?</span> Dica</button>
      <button id="solution-button" class="button" type="button"><span class="button-icon">⌁</span> Ver solução</button>
      <span class="action-spacer"></span>
      <button id="copy-button" class="button button-quiet" type="button">Copiar</button>
      <button id="reset-button" class="button button-quiet" type="button">Restaurar</button>
    </div>
    <div id="feedback" class="feedback" role="status" hidden></div>
    <div id="hint-panel" class="helper-panel" hidden><strong>Dica</strong><span>${escapeHtml(challenge.hint)}</span></div>
    <div id="solution-panel" class="helper-panel" hidden><strong>Uma solução possível</strong><pre>${escapeHtml(challenge.solution)}</pre></div>`;

  const editor = document.querySelector("#python-editor");
  editor.addEventListener("input", () => {
    editorStorage[challenge.id] = editor.value;
    saveStorage(STORAGE_KEYS.codes, editorStorage);
  });
  document.querySelector("#run-button").addEventListener("click", runTests);
  document.querySelector("#hint-button").addEventListener("click", () => togglePanel("hint-panel", "hint-button", "Dica", "Ocultar dica"));
  document.querySelector("#solution-button").addEventListener("click", () => togglePanel("solution-panel", "solution-button", "Ver solução", "Ocultar solução"));
  document.querySelector("#copy-button").addEventListener("click", copyCode);
  document.querySelector("#reset-button").addEventListener("click", resetCode);
}

function togglePanel(panelId, buttonId, closedLabel, openLabel) {
  const panel = document.getElementById(panelId);
  panel.hidden = !panel.hidden;
  document.getElementById(buttonId).lastChild.textContent = panel.hidden ? ` ${closedLabel}` : ` ${openLabel}`;
}

function showFeedback(message, state, details = []) {
  const feedback = document.querySelector("#feedback");
  if (!feedback) return;
  feedback.dataset.state = state;
  feedback.hidden = false;
  feedback.replaceChildren();
  const title = document.createElement("strong");
  title.textContent = message;
  feedback.append(title);
  if (details.length) {
    const list = document.createElement("ul");
    for (const detail of details) {
      const item = document.createElement("li");
      item.textContent = detail;
      list.append(item);
    }
    feedback.append(list);
  }
}

function setRunnerLoading(isLoading) {
  const button = document.querySelector("#run-button");
  if (!button) return;
  button.disabled = isLoading;
  button.innerHTML = isLoading
    ? '<span class="button-icon">…</span> Executando testes'
    : '<span class="button-icon">▶</span> Testar solução';
  challengeList.querySelectorAll("button").forEach((item) => {
    item.disabled = isLoading;
  });
}

function createWorker() {
  workerReady = false;
  worker = new Worker("./python-worker.js");
  worker.addEventListener("message", (event) => {
    const message = event.data;
    if (message.type === "ready") {
      workerReady = true;
      return;
    }
    if (message.type === "results") {
      clearTimeout(workerTimer);
      setRunnerLoading(false);
      const failed = message.results.filter((result) => !result.passed);
      if (!failed.length) {
        solvedIds.add(activeChallenge.id);
        saveStorage(STORAGE_KEYS.solved, [...solvedIds]);
        updateProgress();
        renderChallengeList();
        showFeedback(`Muito bem! Você passou nos ${message.results.length} testes.`, "success");
      } else {
        const details = failed.map((result) => {
          const label = `Teste ${result.index}: esperado ${result.expected}`;
          return result.error ? `${label}; erro: ${result.error}` : `${label}; recebido ${result.actual}`;
        });
        showFeedback(`${failed.length} de ${message.results.length} testes ainda falharam. Revise sua lógica e tente de novo.`, "error", details);
      }
      return;
    }
    if (message.type === "error") {
      clearTimeout(workerTimer);
      setRunnerLoading(false);
      showFeedback(message.message || "Ocorreu um erro ao executar os testes.", "error");
    }
  });
  worker.addEventListener("error", () => {
    clearTimeout(workerTimer);
    setRunnerLoading(false);
    worker.terminate();
    showFeedback("Não foi possível iniciar o executor Python. Verifique sua conexão com a internet e abra o site por um servidor local.", "error");
  });
  worker.postMessage({ type: "init" });
}

function runTests() {
  const editor = document.querySelector("#python-editor");
  if (!editor.value.trim()) {
    showFeedback("Escreva sua função Python antes de testar.", "info");
    editor.focus();
    return;
  }
  if (!workerReady) {
    showFeedback("O Python ainda está carregando. Aguarde alguns segundos e tente novamente.", "info");
    return;
  }
  document.querySelector("#feedback").hidden = true;
  setRunnerLoading(true);
  worker.postMessage({
    type: "run",
    code: editor.value,
    functionName: activeChallenge.functionName,
    tests: activeChallenge.tests
  });
  workerTimer = setTimeout(() => {
    worker.terminate();
    setRunnerLoading(false);
    workerReady = false;
    showFeedback("A execução demorou mais de 5 segundos e foi interrompida. Confira se há um loop sem fim e tente novamente.", "error");
    createWorker();
  }, 5000);
}

async function copyCode() {
  try {
    await navigator.clipboard.writeText(document.querySelector("#python-editor").value);
    showFeedback("Código copiado para a área de transferência.", "success");
  } catch {
    showFeedback("O navegador não permitiu copiar automaticamente. Selecione o código e copie manualmente.", "error");
  }
}

function resetCode() {
  const editor = document.querySelector("#python-editor");
  editor.value = activeChallenge.starter;
  editorStorage[activeChallenge.id] = editor.value;
  saveStorage(STORAGE_KEYS.codes, editorStorage);
  document.querySelector("#feedback").hidden = true;
  editor.focus();
}

function selectChallenge(id) {
  const editor = document.querySelector("#python-editor");
  if (editor) {
    editorStorage[activeChallenge.id] = editor.value;
    saveStorage(STORAGE_KEYS.codes, editorStorage);
  }
  activeChallenge = challenges.find((challenge) => challenge.id === id);
  renderChallengeList();
  renderChallenge();
}

renderChallengeList();
renderChallenge();
updateProgress();
createWorker();
