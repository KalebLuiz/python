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
    ],
    traceCode: [
      "def calcular_total(precos, desconto_percentual):",
      "    total = sum(precos)",
      "    fator = 1 - (desconto_percentual / 100)",
      "    total_com_desconto = round(total * fator, 2)",
      "    return total_com_desconto"
    ],
    traceColumns: ["Passo", "Linha", "precos", "desconto", "total", "fator", "total_com_desconto", "Ação / Retorno"],
    traceCases: [
      { label: "Caso 1: [10, 20, 5] com 10% de desconto", precos: [10, 20, 5], desconto: 10 },
      { label: "Caso 2: [12.5, 7.5] com 10% de desconto", precos: [12.5, 7.5], desconto: 10 },
      { label: "Caso 3: Lista vazia com 25% de desconto", precos: [], desconto: 25 }
    ],
    quizzes: [
      {
        question: "Com a lista precos = [10, 20, 5] e desconto de 10%, qual é o valor calculado na linha 2 para a variável total?",
        options: ["30", "35", "40", "25"],
        correct: 1,
        explanation: "sum([10, 20, 5]) = 10 + 20 + 5 = 35."
      },
      {
        question: "Qual o valor do multiplicador fator calculado na linha 3 para um desconto de 10%?",
        options: ["0.1", "0.9", "1.1", "0.95"],
        correct: 1,
        explanation: "fator = 1 - (10 / 100) = 1 - 0.1 = 0.9."
      },
      {
        question: "Qual é o valor final retornado pela função para calcular_total([10, 20, 5], 10)?",
        options: ["31.5", "32.0", "31.0", "35.0"],
        correct: 0,
        explanation: "round(35 * 0.9, 2) = 31.5."
      }
    ],
    generateTrace(caseIndex) {
      const { precos, desconto } = this.traceCases[caseIndex];
      const sumPrecos = precos.reduce((a, b) => a + b, 0);
      const fatorVal = +(1 - desconto / 100).toFixed(4);
      const finalVal = +(sumPrecos * fatorVal).toFixed(2);
      return [
        {
          step: 1,
          line: 1,
          explanation: `Início da função. Parâmetros recebidos: precos = ${JSON.stringify(precos)} e desconto_percentual = ${desconto}.`,
          values: { precos: JSON.stringify(precos), desconto: String(desconto), total: "-", fator: "-", total_com_desconto: "-" },
          changed: ["precos", "desconto"],
          action: "Entrada dos argumentos",
          question: { varName: "total", prompt: "Qual será o valor da variável total na linha 2?", expected: String(sumPrecos) }
        },
        {
          step: 2,
          line: 2,
          explanation: `Calcula sum(precos). A soma dos itens resulta em ${sumPrecos}.`,
          values: { precos: JSON.stringify(precos), desconto: String(desconto), total: String(sumPrecos), fator: "-", total_com_desconto: "-" },
          changed: ["total"],
          action: `total = ${sumPrecos}`,
          question: { varName: "fator", prompt: "Qual será o valor de fator na linha 3?", expected: String(fatorVal) }
        },
        {
          step: 3,
          line: 3,
          explanation: `Calcula o multiplicador com desconto: 1 - (${desconto} / 100) = ${fatorVal}.`,
          values: { precos: JSON.stringify(precos), desconto: String(desconto), total: String(sumPrecos), fator: String(fatorVal), total_com_desconto: "-" },
          changed: ["fator"],
          action: `fator = ${fatorVal}`,
          question: { varName: "total_com_desconto", prompt: "Qual será o total com desconto na linha 4?", expected: String(finalVal) }
        },
        {
          step: 4,
          line: 4,
          explanation: `Multiplica o total pelo fator e arredonda: round(${sumPrecos} * ${fatorVal}, 2) = ${finalVal}.`,
          values: { precos: JSON.stringify(precos), desconto: String(desconto), total: String(sumPrecos), fator: String(fatorVal), total_com_desconto: String(finalVal) },
          changed: ["total_com_desconto"],
          action: `total_com_desconto = ${finalVal}`
        },
        {
          step: 5,
          line: 5,
          explanation: `Retorna o valor final com desconto: ${finalVal}.`,
          values: { precos: JSON.stringify(precos), desconto: String(desconto), total: String(sumPrecos), fator: String(fatorVal), total_com_desconto: String(finalVal) },
          changed: [],
          action: `return ${finalVal}`
        }
      ];
    }
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
    ],
    traceCode: [
      "def eh_bissexto(ano):",
      "    div_400 = (ano % 400 == 0)",
      "    div_4 = (ano % 4 == 0)",
      "    div_100 = (ano % 100 == 0)",
      "    resultado = div_400 or (div_4 and not div_100)",
      "    return resultado"
    ],
    traceColumns: ["Passo", "Linha", "ano", "div_400", "div_4", "div_100", "resultado", "Ação / Retorno"],
    traceCases: [
      { label: "Caso 1: 2024 (divisível por 4, não século)", ano: 2024 },
      { label: "Caso 2: 1900 (século não divisível por 400)", ano: 1900 },
      { label: "Caso 3: 2000 (século divisível por 400)", ano: 2000 },
      { label: "Caso 4: 2023 (ano comum ímpar)", ano: 2023 }
    ],
    quizzes: [
      {
        question: "Por que o ano 1900 NÃO é considerado bissexto?",
        options: ["Porque não é divisível por 4", "Porque é um século (divisível por 100) mas não é divisível por 400", "Porque é um número ímpar", "Porque tem 366 dias"],
        correct: 1,
        explanation: "Pela regra dos anos bissextos, anos que terminam em 00 só são bissextos se forem divisíveis por 400."
      },
      {
        question: "Para o ano 2024, qual o resultado de div_4 = (ano % 4 == 0)?",
        options: ["True", "False", "0", "None"],
        correct: 0,
        explanation: "2024 dividido por 4 dá 506 com resto 0, logo é True."
      },
      {
        question: "Qual é o valor final de resultado retornado para eh_bissexto(2000)?",
        options: ["True", "False", "Erro", "2000"],
        correct: 0,
        explanation: "2000 % 400 == 0 é True, logo 2000 é bissexto."
      }
    ],
    generateTrace(caseIndex) {
      const { ano } = this.traceCases[caseIndex];
      const div400 = ano % 400 === 0;
      const div4 = ano % 4 === 0;
      const div100 = ano % 100 === 0;
      const res = div400 || (div4 && !div100);
      return [
        {
          step: 1,
          line: 1,
          explanation: `Início da função com ano = ${ano}.`,
          values: { ano: String(ano), div_400: "-", div_4: "-", div_100: "-", resultado: "-" },
          changed: ["ano"],
          action: `Entrada: ano = ${ano}`,
          question: { varName: "div_400", prompt: `O ano ${ano} é divisível por 400? (True ou False)`, expected: div400 ? "True" : "False" }
        },
        {
          step: 2,
          line: 2,
          explanation: `Avalia ano % 400 == 0: ${ano} % 400 = ${ano % 400} -> ${div400 ? "True" : "False"}.`,
          values: { ano: String(ano), div_400: div400 ? "True" : "False", div_4: "-", div_100: "-", resultado: "-" },
          changed: ["div_400"],
          action: `div_400 = ${div400 ? "True" : "False"}`,
          question: { varName: "div_4", prompt: `O ano ${ano} é divisível por 4? (True ou False)`, expected: div4 ? "True" : "False" }
        },
        {
          step: 3,
          line: 3,
          explanation: `Avalia ano % 4 == 0: ${ano} % 4 = ${ano % 4} -> ${div4 ? "True" : "False"}.`,
          values: { ano: String(ano), div_400: div400 ? "True" : "False", div_4: div4 ? "True" : "False", div_100: "-", resultado: "-" },
          changed: ["div_4"],
          action: `div_4 = ${div4 ? "True" : "False"}`,
          question: { varName: "resultado", prompt: `Qual o valor lógico final de resultado? (True ou False)`, expected: res ? "True" : "False" }
        },
        {
          step: 4,
          line: 4,
          explanation: `Avalia ano % 100 == 0: ${ano} % 100 = ${ano % 100} -> ${div100 ? "True" : "False"}.`,
          values: { ano: String(ano), div_400: div400 ? "True" : "False", div_4: div4 ? "True" : "False", div_100: div100 ? "True" : "False", resultado: "-" },
          changed: ["div_100"],
          action: `div_100 = ${div100 ? "True" : "False"}`
        },
        {
          step: 5,
          line: 5,
          explanation: `Expressão lógica: ${div400 ? "True" : "False"} or (${div4 ? "True" : "False"} and not ${div100 ? "True" : "False"}) -> ${res ? "True" : "False"}.`,
          values: { ano: String(ano), div_400: div400 ? "True" : "False", div_4: div4 ? "True" : "False", div_100: div100 ? "True" : "False", resultado: res ? "True" : "False" },
          changed: ["resultado"],
          action: `resultado = ${res ? "True" : "False"}`
        },
        {
          step: 6,
          line: 6,
          explanation: `Retorna ${res ? "True (Bissexto)" : "False (Não bissexto)"}.`,
          values: { ano: String(ano), div_400: div400 ? "True" : "False", div_4: div4 ? "True" : "False", div_100: div100 ? "True" : "False", resultado: res ? "True" : "False" },
          changed: [],
          action: `return ${res ? "True" : "False"}`
        }
      ];
    }
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
    ],
    traceCode: [
      "def classificar_nota(nota):",
      "    if nota >= 7:",
      "        return \"Aprovado\"",
      "    elif nota >= 5:",
      "        return \"Recuperação\"",
      "    else:",
      "        return \"Reprovado\""
    ],
    traceColumns: ["Passo", "Linha", "nota", "nota >= 7", "nota >= 5", "Retorno", "Ação / Explicação"],
    traceCases: [
      { label: "Caso 1: nota = 8.5 (Aprovado direto)", nota: 8.5 },
      { label: "Caso 2: nota = 6.0 (Recuperação)", nota: 6.0 },
      { label: "Caso 3: nota = 4.5 (Reprovado)", nota: 4.5 }
    ],
    quizzes: [
      {
        question: "Para a nota 6.0, qual condição do código é avaliada como True?",
        options: ["if nota >= 7", "elif nota >= 5", "else", "Nenhuma"],
        correct: 1,
        explanation: "6.0 >= 7 é False, mas 6.0 >= 5 é True."
      },
      {
        question: "Para a nota 4.5, qual linha de retorno será executada?",
        options: ["Linha 3 (Aprovado)", "Linha 5 (Recuperação)", "Linha 7 (Reprovado)", "Linha 1"],
        correct: 2,
        explanation: "Como 4.5 < 7 e 4.5 < 5, a execução cai no else e retorna 'Reprovado'."
      },
      {
        question: "Se a nota for exatamente 7.0, qual será o retorno?",
        options: ["\"Aprovado\"", "\"Recuperação\"", "\"Reprovado\"", "7.0"],
        correct: 0,
        explanation: "7.0 >= 7 é True, logo o retorno é 'Aprovado'."
      }
    ],
    generateTrace(caseIndex) {
      const { nota } = this.traceCases[caseIndex];
      const steps = [];
      const ge7 = nota >= 7;

      steps.push({
        step: 1,
        line: 1,
        explanation: `Início da função recebendo nota = ${nota}.`,
        values: { nota: String(nota), "nota >= 7": "-", "nota >= 5": "-", Retorno: "-" },
        changed: ["nota"],
        action: `Recebe nota = ${nota}`,
        question: { varName: "nota >= 7", prompt: `A condição nota >= 7 (${nota} >= 7) é True ou False?`, expected: ge7 ? "True" : "False" }
      });

      steps.push({
        step: 2,
        line: 2,
        explanation: `Testa primeira condição: nota >= 7 (${nota} >= 7) -> ${ge7 ? "True" : "False"}.`,
        values: { nota: String(nota), "nota >= 7": ge7 ? "True" : "False", "nota >= 5": "-", Retorno: "-" },
        changed: ["nota >= 7"],
        action: `if nota >= 7: ${ge7 ? "True" : "False"}`
      });

      if (ge7) {
        steps.push({
          step: 3,
          line: 3,
          explanation: `Condição atendida! Executa return "Aprovado".`,
          values: { nota: String(nota), "nota >= 7": "True", "nota >= 5": "-", Retorno: "\"Aprovado\"" },
          changed: ["Retorno"],
          action: "return \"Aprovado\""
        });
      } else {
        const ge5 = nota >= 5;
        steps.push({
          step: 3,
          line: 4,
          explanation: `Como a primeira foi falsa, testa elif nota >= 5 (${nota} >= 5) -> ${ge5 ? "True" : "False"}.`,
          values: { nota: String(nota), "nota >= 7": "False", "nota >= 5": ge5 ? "True" : "False", Retorno: "-" },
          changed: ["nota >= 5"],
          action: `elif nota >= 5: ${ge5 ? "True" : "False"}`,
          question: { varName: "Retorno", prompt: `Qual string será retornada para a nota ${nota}?`, expected: ge5 ? "Recuperação" : "Reprovado" }
        });
        if (ge5) {
          steps.push({
            step: 4,
            line: 5,
            explanation: `Condição atendida! Executa return "Recuperação".`,
            values: { nota: String(nota), "nota >= 7": "False", "nota >= 5": "True", Retorno: "\"Recuperação\"" },
            changed: ["Retorno"],
            action: "return \"Recuperação\""
          });
        } else {
          steps.push({
            step: 4,
            line: 6,
            explanation: `Nenhuma condição anterior atendida; desvia para o bloco else.`,
            values: { nota: String(nota), "nota >= 7": "False", "nota >= 5": "False", Retorno: "-" },
            changed: [],
            action: "Cai no else"
          });
          steps.push({
            step: 5,
            line: 7,
            explanation: `Executa return "Reprovado".`,
            values: { nota: String(nota), "nota >= 7": "False", "nota >= 5": "False", Retorno: "\"Reprovado\"" },
            changed: ["Retorno"],
            action: "return \"Reprovado\""
          });
        }
      }
      return steps;
    }
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
    ],
    traceCode: [
      "def somar_pares(n):",
      "    total = 0",
      "    for numero in range(n + 1):",
      "        if numero % 2 == 0:",
      "            total += numero",
      "    return total"
    ],
    traceColumns: ["Passo", "Linha", "n", "numero", "numero % 2 == 0", "total", "Ação"],
    traceCases: [
      { label: "Caso 1: n = 6 (pares: 0, 2, 4, 6 -> 12)", n: 6 },
      { label: "Caso 2: n = 4 (pares: 0, 2, 4 -> 6)", n: 4 },
      { label: "Caso 3: n = 3 (pares: 0, 2 -> 2)", n: 3 }
    ],
    quizzes: [
      {
        question: "Para n = 6, quantos números pares (incluindo o 0) serão somados?",
        options: ["3", "4", "5", "6"],
        correct: 1,
        explanation: "Os pares no intervalo de 0 a 6 são: 0, 2, 4 e 6 (4 números)."
      },
      {
        question: "Qual o valor acumulado em total imediatamente após processar numero = 4 (com n = 6)?",
        options: ["4", "6", "10", "2"],
        correct: 1,
        explanation: "0 + 2 + 4 = 6."
      },
      {
        question: "Qual o valor final devolvido por somar_pares(6)?",
        options: ["12", "10", "14", "6"],
        correct: 0,
        explanation: "0 + 2 + 4 + 6 = 12."
      }
    ],
    generateTrace(caseIndex) {
      const { n } = this.traceCases[caseIndex];
      const steps = [];
      let total = 0;
      let stepNum = 1;

      steps.push({
        step: stepNum++,
        line: 1,
        explanation: `Início da função com limite n = ${n}.`,
        values: { n: String(n), numero: "-", "numero % 2 == 0": "-", total: "-" },
        changed: ["n"],
        action: `Recebe n = ${n}`,
        question: { varName: "total", prompt: "Qual é o valor inicial do acumulador total?", expected: "0" }
      });

      steps.push({
        step: stepNum++,
        line: 2,
        explanation: `Inicializa o acumulador total = 0.`,
        values: { n: String(n), numero: "-", "numero % 2 == 0": "-", total: "0" },
        changed: ["total"],
        action: "total = 0"
      });

      for (let num = 0; num <= n; num++) {
        const isEven = num % 2 === 0;
        steps.push({
          step: stepNum++,
          line: 3,
          explanation: `Laço for: numero assume o valor ${num}.`,
          values: { n: String(n), numero: String(num), "numero % 2 == 0": "-", total: String(total) },
          changed: ["numero"],
          action: `numero = ${num}`
        });

        steps.push({
          step: stepNum++,
          line: 4,
          explanation: `Verifica se ${num} é par (${num} % 2 == 0) -> ${isEven ? "True" : "False"}.`,
          values: { n: String(n), numero: String(num), "numero % 2 == 0": isEven ? "True" : "False", total: String(total) },
          changed: ["numero % 2 == 0"],
          action: `${num} % 2 == 0: ${isEven ? "True" : "False"}`,
          question: isEven && num > 0 ? { varName: "total", prompt: `Com numero = ${num}, qual será o novo valor de total?`, expected: String(total + num) } : null
        });

        if (isEven) {
          total += num;
          steps.push({
            step: stepNum++,
            line: 5,
            explanation: `Número par! Acumula ${num} ao total: novo total = ${total}.`,
            values: { n: String(n), numero: String(num), "numero % 2 == 0": "True", total: String(total) },
            changed: ["total"],
            action: `total += ${num} (total: ${total})`
          });
        }
      }

      steps.push({
        step: stepNum++,
        line: 6,
        explanation: `Fim do laço for. Retorna a soma acumulada dos pares: ${total}.`,
        values: { n: String(n), numero: String(n), "numero % 2 == 0": "-", total: String(total) },
        changed: [],
        action: `return ${total}`
      });

      return steps;
    }
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
    ],
    traceCode: [
      "def contar_vogais(texto):",
      "    vogais = \"aeiouáàâãéêíóôõú\"",
      "    total = 0",
      "    for c in texto.lower():",
      "        if c in vogais:",
      "            total += 1",
      "    return total"
    ],
    traceColumns: ["Passo", "Linha", "c", "c in vogais", "total", "Ação"],
    traceCases: [
      { label: "Caso 1: texto = \"Python\" (vogal: o -> 1)", texto: "Python" },
      { label: "Caso 2: texto = \"Olá\" (vogais: o, á -> 2)", texto: "Olá" },
      { label: "Caso 3: texto = \"Café\" (vogais: a, é -> 2)", texto: "Café" }
    ],
    quizzes: [
      {
        question: "Na palavra 'Python', qual é a única vogal identificada pelo algoritmo?",
        options: ["y", "o", "p", "h"],
        correct: 1,
        explanation: "'o' é a única vogal pertencente ao conjunto de vogais."
      },
      {
        question: "O algoritmo reconhece vogais acentuadas em português como 'á' e 'é'?",
        options: ["Sim, pois pertencem à cadeia de vogais válidas", "Não, acentos são ignorados", "Apenas maiúsculas", "Gera erro"],
        correct: 0,
        explanation: "A string de vogais inclui todas as variações com acento (á, à, â, ã, é, ê, etc.)."
      },
      {
        question: "Qual o total de vogais contado para a palavra 'Café'?",
        options: ["1", "2", "3", "4"],
        correct: 1,
        explanation: "As vogais são 'a' e 'é' (total 2)."
      }
    ],
    generateTrace(caseIndex) {
      const { texto } = this.traceCases[caseIndex];
      const vogais = "aeiouáàâãéêíóôõú";
      const steps = [];
      let total = 0;
      let stepNum = 1;

      steps.push({
        step: stepNum++,
        line: 1,
        explanation: `Início da função com texto = \"${texto}\".`,
        values: { c: "-", "c in vogais": "-", total: "-" },
        changed: [],
        action: `Recebe \"${texto}\"`
      });

      steps.push({
        step: stepNum++,
        line: 2,
        explanation: `Define a cadeia de vogais válidas: \"aeiouáàâãéêíóôõú\".`,
        values: { c: "-", "c in vogais": "-", total: "-" },
        changed: [],
        action: "Define vogais"
      });

      steps.push({
        step: stepNum++,
        line: 3,
        explanation: `Inicializa o contador total = 0.`,
        values: { c: "-", "c in vogais": "-", total: "0" },
        changed: ["total"],
        action: "total = 0"
      });

      const lower = texto.toLowerCase();
      for (let i = 0; i < lower.length; i++) {
        const char = lower[i];
        const isVowel = vogais.includes(char);

        steps.push({
          step: stepNum++,
          line: 4,
          explanation: `Iteração do for: caractere '${char}' (posição ${i}).`,
          values: { c: `'${char}'`, "c in vogais": "-", total: String(total) },
          changed: ["c"],
          action: `c = '${char}'`,
          question: { varName: "c in vogais", prompt: `'${char}' é uma vogal? (True ou False)`, expected: isVowel ? "True" : "False" }
        });

        steps.push({
          step: stepNum++,
          line: 5,
          explanation: `Testa se '${char}' in vogais -> ${isVowel ? "True" : "False"}.`,
          values: { c: `'${char}'`, "c in vogais": isVowel ? "True" : "False", total: String(total) },
          changed: ["c in vogais"],
          action: `'${char}' in vogais: ${isVowel ? "True" : "False"}`
        });

        if (isVowel) {
          total++;
          steps.push({
            step: stepNum++,
            line: 6,
            explanation: `'${char}' é vogal! Incrementa o contador: total = ${total}.`,
            values: { c: `'${char}'`, "c in vogais": "True", total: String(total) },
            changed: ["total"],
            action: `total += 1 (total: ${total})`
          });
        }
      }

      steps.push({
        step: stepNum++,
        line: 7,
        explanation: `Fim do percorrimento da string. Retorna total = ${total}.`,
        values: { c: "-", "c in vogais": "-", total: String(total) },
        changed: [],
        action: `return ${total}`
      });

      return steps;
    }
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
    ],
    traceCode: [
      "def remover_repetidos(itens):",
      "    resultado = []",
      "    for item in itens:",
      "        if item not in resultado:",
      "            resultado.append(item)",
      "    return resultado"
    ],
    traceColumns: ["Passo", "Linha", "item", "item not in resultado", "resultado", "Ação"],
    traceCases: [
      { label: "Caso 1: [3, 1, 3, 2, 1] -> [3, 1, 2]", itens: [3, 1, 3, 2, 1] },
      { label: "Caso 2: [\"a\", \"b\", \"a\"] -> [\"a\", \"b\"]", itens: ["a", "b", "a"] },
      { label: "Caso 3: [4, 4, 4] -> [4]", itens: [4, 4, 4] }
    ],
    quizzes: [
      {
        question: "Para a lista [3, 1, 3, 2, 1], o que acontece quando o laço processa o segundo número 3?",
        options: ["Ele é adicionado novamente ao resultado", "A condição '3 not in resultado' é False e ele é ignorado", "O resultado é esvaziado", "Gera um erro de duplicidade"],
        correct: 1,
        explanation: "Como 3 já está em resultado ([3, 1]), a condição de inserção falha."
      },
      {
        question: "Qual o tamanho da lista resultante para [3, 1, 3, 2, 1]?",
        options: ["5", "3", "2", "4"],
        correct: 1,
        explanation: "Apenas 3, 1 e 2 são preservados (tamanho 3)."
      },
      {
        question: "Qual ordem é mantida nos elementos resultantes?",
        options: ["Ordem crescente", "Ordem da primeira aparição", "Ordem decrescente", "Aleatória"],
        correct: 1,
        explanation: "O algoritmo mantém estritamente a ordem da primeira ocorrência de cada elemento."
      }
    ],
    generateTrace(caseIndex) {
      const { itens } = this.traceCases[caseIndex];
      const steps = [];
      const resultado = [];
      let stepNum = 1;

      steps.push({
        step: stepNum++,
        line: 1,
        explanation: `Início da função com itens = ${JSON.stringify(itens)}.`,
        values: { item: "-", "item not in resultado": "-", resultado: "[]" },
        changed: [],
        action: `Recebe itens = ${JSON.stringify(itens)}`
      });

      steps.push({
        step: stepNum++,
        line: 2,
        explanation: `Cria a nova lista vazia resultado = [].`,
        values: { item: "-", "item not in resultado": "-", resultado: "[]" },
        changed: ["resultado"],
        action: "resultado = []"
      });

      for (let i = 0; i < itens.length; i++) {
        const item = itens[i];
        const notIn = !resultado.includes(item);

        steps.push({
          step: stepNum++,
          line: 3,
          explanation: `Iteração ${i + 1}: lendo item = ${JSON.stringify(item)}.`,
          values: { item: JSON.stringify(item), "item not in resultado": "-", resultado: JSON.stringify(resultado) },
          changed: ["item"],
          action: `item = ${JSON.stringify(item)}`,
          question: { varName: "not_in", prompt: `O elemento ${JSON.stringify(item)} já está em ${JSON.stringify(resultado)}? (True para novo / False para repetido)`, expected: notIn ? "True" : "False" }
        });

        steps.push({
          step: stepNum++,
          line: 4,
          explanation: `Verifica se ${JSON.stringify(item)} not in ${JSON.stringify(resultado)} -> ${notIn ? "True" : "False"}.`,
          values: { item: JSON.stringify(item), "item not in resultado": notIn ? "True" : "False", resultado: JSON.stringify(resultado) },
          changed: ["item not in resultado"],
          action: `not in: ${notIn ? "True" : "False"}`
        });

        if (notIn) {
          resultado.push(item);
          steps.push({
            step: stepNum++,
            line: 5,
            explanation: `Item novo! Executa resultado.append(${JSON.stringify(item)}). Lista passa a ser ${JSON.stringify(resultado)}.`,
            values: { item: JSON.stringify(item), "item not in resultado": "True", resultado: JSON.stringify(resultado) },
            changed: ["resultado"],
            action: `append(${JSON.stringify(item)})`
          });
        }
      }

      steps.push({
        step: stepNum++,
        line: 6,
        explanation: `Fim do laço for. Retorna a lista final sem repetições: ${JSON.stringify(resultado)}.`,
        values: { item: "-", "item not in resultado": "-", resultado: JSON.stringify(resultado) },
        changed: [],
        action: `return ${JSON.stringify(resultado)}`
      });

      return steps;
    }
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
    ],
    traceCode: [
      "def maior_sequencia_crescente(numeros):",
      "    if not numeros: return 0",
      "    maior = atual = 1",
      "    for i in range(1, len(numeros)):",
      "        if numeros[i] > numeros[i - 1]:",
      "            atual += 1",
      "            maior = max(maior, atual)",
      "        else:",
      "            atual = 1",
      "    return maior"
    ],
    traceColumns: ["Passo", "Linha", "i", "num[i]", "num[i-1]", "crescente?", "atual", "maior", "Ação"],
    traceCases: [
      { label: "Caso 1: [1, 2, 2, 3, 4, 1] (maior trecho: [2, 3, 4] -> 3)", numeros: [1, 2, 2, 3, 4, 1] },
      { label: "Caso 2: [5, 4, 3] (lista decrescente -> 1)", numeros: [5, 4, 3] },
      { label: "Caso 3: [1, 2, 3, 4] (estritamente crescente -> 4)", numeros: [1, 2, 3, 4] }
    ],
    quizzes: [
      {
        question: "Para a lista [1, 2, 2, 3, 4, 1], o que acontece com a variável atual quando comparamos 2 com 2?",
        options: ["atual incrementa para 3", "atual reinicia para 1, pois 2 > 2 é False", "atual vira 0", "maior vira 0"],
        correct: 1,
        explanation: "O trecho precisa ser estritamente crescente (>). Como 2 não é maior que 2, o trecho atual é reiniciado com 1."
      },
      {
        question: "Qual o maior valor atingido pela variável atual na lista [1, 2, 2, 3, 4, 1]?",
        options: ["2", "3", "4", "5"],
        correct: 1,
        explanation: "O trecho contíguo crescente [2, 3, 4] possui tamanho 3."
      },
      {
        question: "O que a função devolve para uma lista vazia []?",
        options: ["0", "1", "None", "-1"],
        correct: 0,
        explanation: "Se a lista estiver vazia, o algoritmo retorna 0 imediatamente."
      }
    ],
    generateTrace(caseIndex) {
      const { numeros } = this.traceCases[caseIndex];
      const steps = [];
      let stepNum = 1;

      steps.push({
        step: stepNum++,
        line: 1,
        explanation: `Início da função com lista: ${JSON.stringify(numeros)}.`,
        values: { i: "-", "num[i]": "-", "num[i-1]": "-", "crescente?": "-", atual: "-", maior: "-" },
        changed: [],
        action: `Recebe numeros = ${JSON.stringify(numeros)}`
      });

      if (!numeros.length) {
        steps.push({
          step: stepNum++,
          line: 2,
          explanation: "Lista vazia detectada. Retorna 0.",
          values: { i: "-", "num[i]": "-", "num[i-1]": "-", "crescente?": "-", atual: "0", maior: "0" },
          changed: ["maior"],
          action: "return 0"
        });
        return steps;
      }

      let maior = 1;
      let atual = 1;

      steps.push({
        step: stepNum++,
        line: 3,
        explanation: "Inicializa contadores: maior = 1 e atual = 1.",
        values: { i: "-", "num[i]": "-", "num[i-1]": "-", "crescente?": "-", atual: "1", maior: "1" },
        changed: ["atual", "maior"],
        action: "maior = atual = 1"
      });

      for (let i = 1; i < numeros.length; i++) {
        const cur = numeros[i];
        const prev = numeros[i - 1];
        const isUp = cur > prev;

        steps.push({
          step: stepNum++,
          line: 4,
          explanation: `Laço for: índice i = ${i}, vizinhos são ${cur} e ${prev}.`,
          values: { i: String(i), "num[i]": String(cur), "num[i-1]": String(prev), "crescente?": "-", atual: String(atual), maior: String(maior) },
          changed: ["i", "num[i]", "num[i-1]"],
          action: `i = ${i} (num[${i}] = ${cur})`,
          question: { varName: "is_up", prompt: `O valor ${cur} é estritamente maior que ${prev}? (True ou False)`, expected: isUp ? "True" : "False" }
        });

        steps.push({
          step: stepNum++,
          line: 5,
          explanation: `Compara se ${cur} > ${prev} -> ${isUp ? "True" : "False"}.`,
          values: { i: String(i), "num[i]": String(cur), "num[i-1]": String(prev), "crescente?": isUp ? "True" : "False", atual: String(atual), maior: String(maior) },
          changed: ["crescente?"],
          action: `${cur} > ${prev}: ${isUp ? "True" : "False"}`
        });

        if (isUp) {
          atual++;
          maior = Math.max(maior, atual);
          steps.push({
            step: stepNum++,
            line: 6,
            explanation: `Crescimento contíguo! atual incrementado para ${atual}; maior atualizado para ${maior}.`,
            values: { i: String(i), "num[i]": String(cur), "num[i-1]": String(prev), "crescente?": "True", atual: String(atual), maior: String(maior) },
            changed: ["atual", "maior"],
            action: `atual = ${atual}, maior = ${maior}`
          });
        } else {
          atual = 1;
          steps.push({
            step: stepNum++,
            line: 9,
            explanation: `Sequência quebrou (${cur} <= ${prev}). Reinicia contador atual = 1.`,
            values: { i: String(i), "num[i]": String(cur), "num[i-1]": String(prev), "crescente?": "False", atual: "1", maior: String(maior) },
            changed: ["atual"],
            action: "atual = 1 (reinicia)"
          });
        }
      }

      steps.push({
        step: stepNum++,
        line: 10,
        explanation: `Fim da análise. Retorna o tamanho do maior trecho crescente encontrado: ${maior}.`,
        values: { i: "-", "num[i]": "-", "num[i-1]": "-", "crescente?": "-", atual: String(atual), maior: String(maior) },
        changed: [],
        action: `return ${maior}`
      });

      return steps;
    }
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
    ],
    traceCode: [
      "def somar_diagonais(matriz):",
      "    tamanho = len(matriz)",
      "    total = 0",
      "    for i in range(tamanho):",
      "        total += matriz[i][i]",
      "        j = tamanho - 1 - i",
      "        if j != i:",
      "            total += matriz[i][j]",
      "    return total"
    ],
    traceColumns: ["Passo", "Linha", "i", "matriz[i][i]", "j", "j != i", "matriz[i][j]", "total", "Ação"],
    traceCases: [
      { label: "Caso 1: Matriz 3x3 [[1,2,3],[4,5,6],[7,8,9]] -> 25", matriz: [[1, 2, 3], [4, 5, 6], [7, 8, 9]] },
      { label: "Caso 2: Matriz 2x2 [[1,2],[3,4]] -> 10", matriz: [[1, 2], [3, 4]] },
      { label: "Caso 3: Matriz 1x1 [[5]] -> 5", matriz: [[5]] }
    ],
    quizzes: [
      {
        question: "Em uma matriz 3x3, por que o elemento central matriz[1][1] não pode ser somado duas vezes?",
        options: ["Porque pertence tanto à diagonal principal quanto à secundária", "Porque o centro é sempre zero", "Porque matrizes 3x3 não têm secundária", "Por erro de overflow"],
        correct: 0,
        explanation: "O centro é a interseção exata das duas diagonais; somá-lo duas vezes duplicaria o valor."
      },
      {
        question: "Qual expressão calcula o índice da coluna da diagonal secundária?",
        options: ["j = tamanho - 1 - i", "j = i + 1", "j = tamanho // 2", "j = i - 1"],
        correct: 0,
        explanation: "Para i = 0 em matriz 3x3: j = 3 - 1 - 0 = 2."
      },
      {
        question: "Qual o resultado final para a matriz 3x3 com valores de 1 a 9?",
        options: ["25", "30", "45", "15"],
        correct: 0,
        explanation: "Principal (1 + 5 + 9) + Secundária sem centro (3 + 7) = 15 + 10 = 25."
      }
    ],
    generateTrace(caseIndex) {
      const { matriz } = this.traceCases[caseIndex];
      const steps = [];
      const n = matriz.length;
      let total = 0;
      let stepNum = 1;

      steps.push({
        step: stepNum++,
        line: 1,
        explanation: `Início da função. Matriz de ordem ${n}x${n}.`,
        values: { i: "-", "matriz[i][i]": "-", j: "-", "j != i": "-", "matriz[i][j]": "-", total: "-" },
        changed: [],
        action: `Recebe matriz ${n}x${n}`
      });

      steps.push({
        step: stepNum++,
        line: 2,
        explanation: `Determina tamanho = ${n} e inicializa total = 0.`,
        values: { i: "-", "matriz[i][i]": "-", j: "-", "j != i": "-", "matriz[i][j]": "-", total: "0" },
        changed: ["total"],
        action: `tamanho = ${n}, total = 0`
      });

      for (let i = 0; i < n; i++) {
        const diagPrinc = matriz[i][i];
        total += diagPrinc;
        const j = n - 1 - i;
        const isNotSame = j !== i;

        steps.push({
          step: stepNum++,
          line: 4,
          explanation: `Linha i = ${i}: soma diagonal principal matriz[${i}][${i}] = ${diagPrinc}. Total: ${total}.`,
          values: { i: String(i), "matriz[i][i]": String(diagPrinc), j: "-", "j != i": "-", "matriz[i][j]": "-", total: String(total) },
          changed: ["i", "matriz[i][i]", "total"],
          action: `total += matriz[${i}][${i}] (${diagPrinc})`,
          question: { varName: "j", prompt: `Para a linha i = ${i}, qual o índice j da diagonal secundária?`, expected: String(j) }
        });

        steps.push({
          step: stepNum++,
          line: 5,
          explanation: `Calcula coluna da diagonal secundária: j = ${n} - 1 - ${i} = ${j}.`,
          values: { i: String(i), "matriz[i][i]": String(diagPrinc), j: String(j), "j != i": "-", "matriz[i][j]": "-", total: String(total) },
          changed: ["j"],
          action: `j = ${j}`
        });

        steps.push({
          step: stepNum++,
          line: 6,
          explanation: `Verifica se j != i (${j} != ${i}) -> ${isNotSame ? "True" : "False (elemento central)"}.`,
          values: { i: String(i), "matriz[i][i]": String(diagPrinc), j: String(j), "j != i": isNotSame ? "True" : "False", "matriz[i][j]": "-", total: String(total) },
          changed: ["j != i"],
          action: `j != i: ${isNotSame ? "True" : "False"}`
        });

        if (isNotSame) {
          const diagSec = matriz[i][j];
          total += diagSec;
          steps.push({
            step: stepNum++,
            line: 7,
            explanation: `Posições distintas: soma diagonal secundária matriz[${i}][${j}] = ${diagSec}. Total: ${total}.`,
            values: { i: String(i), "matriz[i][i]": String(diagPrinc), j: String(j), "j != i": "True", "matriz[i][j]": String(diagSec), total: String(total) },
            changed: ["matriz[i][j]", "total"],
            action: `total += matriz[${i}][${j}] (${diagSec})`
          });
        }
      }

      steps.push({
        step: stepNum++,
        line: 8,
        explanation: `Fim do cálculo. Retorna a soma total das diagonais: ${total}.`,
        values: { i: "-", "matriz[i][i]": "-", j: "-", "j != i": "-", "matriz[i][j]": "-", total: String(total) },
        changed: [],
        action: `return ${total}`
      });

      return steps;
    }
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
    ],
    traceCode: [
      "def busca_binaria(lista, alvo):",
      "    esquerda = 0",
      "    direita = len(lista) - 1",
      "    while esquerda <= direita:",
      "        meio = (esquerda + direita) // 2",
      "        if lista[meio] == alvo:",
      "            return meio",
      "        if lista[meio] < alvo:",
      "            esquerda = meio + 1",
      "        else:",
      "            direita = meio - 1",
      "    return -1"
    ],
    traceColumns: ["Passo", "Linha", "esquerda", "direita", "meio", "lista[meio]", "comparação", "Ação"],
    traceCases: [
      { label: "Caso 1: lista = [1, 3, 5, 7, 9], alvo = 7 (encontra no índice 3)", lista: [1, 3, 5, 7, 9], alvo: 7 },
      { label: "Caso 2: lista = [2, 4, 6, 8], alvo = 5 (não existe -> -1)", lista: [2, 4, 6, 8], alvo: 5 },
      { label: "Caso 3: lista = [1, 3, 5, 7, 9], alvo = 1 (encontra no índice 0)", lista: [1, 3, 5, 7, 9], alvo: 1 }
    ],
    quizzes: [
      {
        question: "Na lista [1, 3, 5, 7, 9] buscando o alvo 7, qual o primeiro índice meio calculado?",
        options: ["0", "1", "2", "3"],
        correct: 2,
        explanation: "(0 + 4) // 2 = 2. O elemento em lista[2] é 5."
      },
      {
        question: "Como lista[2] = 5 é menor que 7, qual variável é atualizada?",
        options: ["direita = meio - 1", "esquerda = meio + 1 (esquerda vira 3)", "meio = 0", "alvo = 5"],
        correct: 1,
        explanation: "Como o alvo é maior que o meio, descartamos a metade esquerda fazendo esquerda = meio + 1."
      },
      {
        question: "Em qual índice o alvo 7 é localizado e retornado?",
        options: ["3", "4", "2", "-1"],
        correct: 0,
        explanation: "Na segunda iteração, meio = (3 + 4) // 2 = 3. lista[3] == 7 (True), retornando 3."
      }
    ],
    generateTrace(caseIndex) {
      const { lista, alvo } = this.traceCases[caseIndex];
      const steps = [];
      let esq = 0;
      let dir = lista.length - 1;
      let stepNum = 1;

      steps.push({
        step: stepNum++,
        line: 1,
        explanation: `Início da busca binária na lista ordenada ${JSON.stringify(lista)} procurando alvo = ${alvo}.`,
        values: { esquerda: "-", direita: "-", meio: "-", "lista[meio]": "-", comparação: "-" },
        changed: [],
        action: `alvo = ${alvo}`
      });

      steps.push({
        step: stepNum++,
        line: 2,
        explanation: `Define os limites iniciais: esquerda = 0 e direita = len(lista) - 1 = ${dir}.`,
        values: { esquerda: "0", direita: String(dir), meio: "-", "lista[meio]": "-", comparação: "-" },
        changed: ["esquerda", "direita"],
        action: `esq = 0, dir = ${dir}`,
        question: { varName: "meio", prompt: `Com esq = 0 e dir = ${dir}, qual será o primeiro índice meio?`, expected: String(Math.floor(dir / 2)) }
      });

      let found = false;
      while (esq <= dir) {
        steps.push({
          step: stepNum++,
          line: 4,
          explanation: `Condição while esquerda <= direita (${esq} <= ${dir}) é True. Continua no intervalo.`,
          values: { esquerda: String(esq), direita: String(dir), meio: "-", "lista[meio]": "-", comparação: `${esq} <= ${dir}` },
          changed: [],
          action: `while ${esq} <= ${dir}: True`
        });

        const meio = Math.floor((esq + dir) / 2);
        const valMeio = lista[meio];

        steps.push({
          step: stepNum++,
          line: 5,
          explanation: `Calcula o ponto central: meio = (${esq} + ${dir}) // 2 = ${meio}. Elemento lista[${meio}] = ${valMeio}.`,
          values: { esquerda: String(esq), direita: String(dir), meio: String(meio), "lista[meio]": String(valMeio), comparação: "-" },
          changed: ["meio", "lista[meio]"],
          action: `meio = ${meio} (val = ${valMeio})`,
          question: valMeio === alvo 
            ? { varName: "achou", prompt: `O elemento lista[${meio}] (${valMeio}) é igual ao alvo (${alvo})? (True ou False)`, expected: "True" }
            : { varName: "direcao", prompt: `O alvo (${alvo}) está à esquerda ou direita de ${valMeio}? (direita ou esquerda)`, expected: valMeio < alvo ? "direita" : "esquerda" }
        });

        if (valMeio === alvo) {
          steps.push({
            step: stepNum++,
            line: 6,
            explanation: `lista[${meio}] == ${alvo} é True! Alvo encontrado no índice ${meio}.`,
            values: { esquerda: String(esq), direita: String(dir), meio: String(meio), "lista[meio]": String(valMeio), comparação: `${valMeio} == ${alvo}` },
            changed: ["comparação"],
            action: "Alvo encontrado!"
          });
          steps.push({
            step: stepNum++,
            line: 7,
            explanation: `Retorna o índice encontrado: ${meio}.`,
            values: { esquerda: String(esq), direita: String(dir), meio: String(meio), "lista[meio]": String(valMeio), comparação: "True" },
            changed: [],
            action: `return ${meio}`
          });
          found = true;
          break;
        }

        if (valMeio < alvo) {
          esq = meio + 1;
          steps.push({
            step: stepNum++,
            line: 8,
            explanation: `lista[${meio}] (${valMeio}) < alvo (${alvo}) é True. O alvo está na metade direita. Nova esquerda = meio + 1 = ${esq}.`,
            values: { esquerda: String(esq), direita: String(dir), meio: String(meio), "lista[meio]": String(valMeio), comparação: `${valMeio} < ${alvo}` },
            changed: ["esquerda"],
            action: `esq = ${esq} (descarta esquerda)`
          });
        } else {
          dir = meio - 1;
          steps.push({
            step: stepNum++,
            line: 10,
            explanation: `lista[${meio}] (${valMeio}) > alvo (${alvo}). O alvo está na metade esquerda. Nova direita = meio - 1 = ${dir}.`,
            values: { esquerda: String(esq), direita: String(dir), meio: String(meio), "lista[meio]": String(valMeio), comparação: `${valMeio} > ${alvo}` },
            changed: ["direita"],
            action: `dir = ${dir} (descarta direita)`
          });
        }
      }

      if (!found) {
        steps.push({
          step: stepNum++,
          line: 4,
          explanation: `Condição while esquerda <= direita (${esq} <= ${dir}) é False. O intervalo de busca esgotou.`,
          values: { esquerda: String(esq), direita: String(dir), meio: "-", "lista[meio]": "-", comparação: `${esq} <= ${dir}` },
          changed: [],
          action: `Fim do while (${esq} > ${dir})`
        });

        steps.push({
          step: stepNum++,
          line: 11,
          explanation: "Alvo não está presente na lista ordenada. Retorna -1.",
          values: { esquerda: String(esq), direita: String(dir), meio: "-", "lista[meio]": "-", comparação: "Não encontrado" },
          changed: [],
          action: "return -1"
        });
      }

      return steps;
    }
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
    ],
    traceCode: [
      "def ordenar_bubble(numeros):",
      "    resultado = numeros.copy()",
      "    for fim in range(len(resultado) - 1, 0, -1):",
      "        trocou = False",
      "        for i in range(fim):",
      "            if resultado[i] > resultado[i + 1]:",
      "                resultado[i], resultado[i + 1] = resultado[i + 1], resultado[i]",
      "                trocou = True",
      "        if not trocou:",
      "            break",
      "    return resultado"
    ],
    traceColumns: ["Passo", "Linha", "fim", "i", "res[i]", "res[i+1]", "troca?", "trocou", "resultado", "Ação"],
    traceCases: [
      { label: "Caso 1: [5, 1, 4, 2] -> [1, 2, 4, 5]", numeros: [5, 1, 4, 2] },
      { label: "Caso 2: [3, 2, 1] -> [1, 2, 3]", numeros: [3, 2, 1] },
      { label: "Caso 3: [1, 2, 3] (já ordenada, parada antecipada)", numeros: [1, 2, 3] }
    ],
    quizzes: [
      {
        question: "Para a lista [5, 1, 4, 2], qual elemento vai para o final ao término da primeira passada externa?",
        options: ["1", "2", "4", "5"],
        correct: 3,
        explanation: "O maior elemento (5) 'borbulha' sucessivamente até a última posição."
      },
      {
        question: "Qual o papel da variável trocou no Bubble Sort?",
        options: ["Contar as trocas totais", "Detectar se a lista já está ordenada e encerrar antecipadamente com break", "Inverter a lista", "Armazenar o elemento temporário"],
        correct: 1,
        explanation: "Se uma passada inteira não realizar nenhuma troca (trocou permanece False), a lista já está ordenada e o laço encerra."
      },
      {
        question: "Qual o resultado final devolvido para [5, 1, 4, 2]?",
        options: ["[1, 2, 4, 5]", "[5, 4, 2, 1]", "[1, 4, 2, 5]", "[2, 1, 4, 5]"],
        correct: 0,
        explanation: "A lista ordenada em ordem crescente é [1, 2, 4, 5]."
      }
    ],
    generateTrace(caseIndex) {
      const { numeros } = this.traceCases[caseIndex];
      const steps = [];
      const res = [...numeros];
      let stepNum = 1;

      steps.push({
        step: stepNum++,
        line: 1,
        explanation: `Início do Bubble Sort com a lista original ${JSON.stringify(numeros)}.`,
        values: { fim: "-", i: "-", "res[i]": "-", "res[i+1]": "-", "troca?": "-", trocou: "-", resultado: JSON.stringify(res) },
        changed: [],
        action: `Recebe ${JSON.stringify(numeros)}`
      });

      steps.push({
        step: stepNum++,
        line: 2,
        explanation: `Copia a lista original para preservar a entrada: resultado = ${JSON.stringify(res)}.`,
        values: { fim: "-", i: "-", "res[i]": "-", "res[i+1]": "-", "troca?": "-", trocou: "-", resultado: JSON.stringify(res) },
        changed: ["resultado"],
        action: "resultado = numeros.copy()"
      });

      for (let fim = res.length - 1; fim > 0; fim--) {
        let trocou = false;

        steps.push({
          step: stepNum++,
          line: 3,
          explanation: `Nova passada externa: fim = ${fim}. O maior elemento desta passada irá borbulhar até o índice ${fim}.`,
          values: { fim: String(fim), i: "-", "res[i]": "-", "res[i+1]": "-", "troca?": "-", trocou: "False", resultado: JSON.stringify(res) },
          changed: ["fim", "trocou"],
          action: `Passada fim = ${fim}`
        });

        for (let i = 0; i < fim; i++) {
          const v1 = res[i];
          const v2 = res[i + 1];
          const deveTrocar = v1 > v2;

          steps.push({
            step: stepNum++,
            line: 5,
            explanation: `Compara vizinhos: res[${i}] = ${v1} e res[${i + 1}] = ${v2}. ${v1} > ${v2} é ${deveTrocar ? "True (fora de ordem)" : "False (em ordem)"}.`,
            values: { fim: String(fim), i: String(i), "res[i]": String(v1), "res[i+1]": String(v2), "troca?": deveTrocar ? "Sim" : "Não", trocou: trocou ? "True" : "False", resultado: JSON.stringify(res) },
            changed: ["i", "res[i]", "res[i+1]", "troca?"],
            action: `${v1} > ${v2}: ${deveTrocar ? "Trocar" : "Manter"}`,
            question: { varName: "trocar", prompt: `res[${i}] (${v1}) > res[${i + 1}] (${v2}) deve trocar? (Sim ou Não)`, expected: deveTrocar ? "Sim" : "Não" }
          });

          if (deveTrocar) {
            res[i] = v2;
            res[i + 1] = v1;
            trocou = true;

            steps.push({
              step: stepNum++,
              line: 7,
              explanation: `Troca realizada! ${v1} e ${v2} invertidos. Lista atualizada: ${JSON.stringify(res)}.`,
              values: { fim: String(fim), i: String(i), "res[i]": String(v2), "res[i+1]": String(v1), "troca?": "Sim", trocou: "True", resultado: JSON.stringify(res) },
              changed: ["resultado", "trocou"],
              action: `Troca: ${v1} ↔ ${v2}`
            });
          }
        }

        if (!trocou) {
          steps.push({
            step: stepNum++,
            line: 9,
            explanation: `Nenhuma troca efetuada nesta passada (trocou == False). A lista já está perfeitamente ordenada!`,
            values: { fim: String(fim), i: "-", "res[i]": "-", "res[i+1]": "-", "troca?": "-", trocou: "False", resultado: JSON.stringify(res) },
            changed: [],
            action: "break (otimização antecipada)"
          });
          break;
        }
      }

      steps.push({
        step: stepNum++,
        line: 11,
        explanation: `Ordenação concluída com sucesso! Retorna ${JSON.stringify(res)}.`,
        values: { fim: "-", i: "-", "res[i]": "-", "res[i+1]": "-", "troca?": "-", trocou: "-", resultado: JSON.stringify(res) },
        changed: [],
        action: `return ${JSON.stringify(res)}`
      });

      return steps;
    }
  }
];

const STORAGE_KEYS = {
  codes: "laboratorio-py-codes-v1",
  solved: "laboratorio-py-solved-v1",
  traces: "laboratorio-py-traces-v1",
  quizzes: "laboratorio-py-quizzes-v1"
};

const challengeList = document.querySelector("#challenge-list");
const content = document.querySelector("#challenge-content");
const editorStorage = readStorage(STORAGE_KEYS.codes, {});
const solvedIds = new Set(readStorage(STORAGE_KEYS.solved, []));
const solvedTraces = new Set(readStorage(STORAGE_KEYS.traces, []));
const solvedQuizzes = new Set(readStorage(STORAGE_KEYS.quizzes, []));

let activeChallenge = challenges[0];
let activeView = "code"; // "code" | "trace" | "interactive"
let traceCaseIndex = 0;
let traceCurrentStep = 0;
let traceSteps = [];
let autoPlayTimer = null;
let playbackSpeedMs = 1200;

// Interactive Answering States
let interactiveSubmode = "step-challenge"; // "step-challenge" | "quiz" | "table-fill"
let quizSelectedAnswers = {};
let stepChallengeIndex = 0;
let stepChallengeScore = { correct: 0, total: 0 };
let stepChallengeFeedback = null;
let tableFillAnswers = {};
let tableFillChecked = false;

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
  const completedCode = solvedIds.size;
  const completedTrace = solvedTraces.size;
  const completedQuiz = solvedQuizzes.size;
  const total = challenges.length;

  const codeLabel = document.querySelector("#progress-label");
  const codeFill = document.querySelector("#progress-fill");
  if (codeLabel && codeFill) {
    codeLabel.textContent = `${completedCode} de ${total} concluídos`;
    codeFill.style.width = `${(completedCode / total) * 100}%`;
  }

  const traceLabel = document.querySelector("#trace-progress-label");
  const traceFill = document.querySelector("#trace-progress-fill");
  if (traceLabel && traceFill) {
    traceLabel.textContent = `${completedTrace} de ${total} explorados`;
    traceFill.style.width = `${(completedTrace / total) * 100}%`;
  }

  const quizLabel = document.querySelector("#quiz-progress-label");
  const quizFill = document.querySelector("#quiz-progress-fill");
  if (quizLabel && quizFill) {
    quizLabel.textContent = `${completedQuiz} de ${total} dominados`;
    quizFill.style.width = `${(completedQuiz / total) * 100}%`;
  }

  const countBadge = document.querySelector("#challenge-count");
  if (countBadge) {
    countBadge.textContent = `${total} disponíveis`;
  }
}

function renderChallengeList() {
  challengeList.replaceChildren();
  for (const challenge of challenges) {
    const isCodeSolved = solvedIds.has(challenge.id);
    const isTraceSolved = solvedTraces.has(challenge.id);
    const isQuizSolved = solvedQuizzes.has(challenge.id);

    const button = document.createElement("button");
    button.className = `challenge-link${isCodeSolved ? " is-solved" : ""}`;
    button.type = "button";
    button.setAttribute("aria-current", challenge.id === activeChallenge.id ? "page" : "false");
    
    button.innerHTML = `
      <span class="challenge-number">${isCodeSolved ? "✓" : String(challenge.id).padStart(2, "0")}</span>
      <span class="challenge-link-copy">
        <strong>${escapeHtml(challenge.title)}</strong>
        <small>${escapeHtml(challenge.difficulty)}</small>
      </span>
      <span class="challenge-badges">
        ${isCodeSolved ? '<span class="badge-dot is-code-done" title="Solução em código aprovada">💻</span>' : ""}
        ${isTraceSolved ? '<span class="badge-dot is-trace-done" title="Teste de mesa explorado">📊</span>' : ""}
        ${isQuizSolved ? '<span class="badge-dot is-quiz-done" title="Desafios respondidos com sucesso">🎯</span>' : ""}
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

function syncViewTabs() {
  const codeTab = document.querySelector("#tab-code-btn");
  const traceTab = document.querySelector("#tab-trace-btn");
  const interactiveTab = document.querySelector("#tab-interactive-btn");

  const navCode = document.querySelector("#nav-mode-code");
  const navTrace = document.querySelector("#nav-mode-trace");
  const navQuiz = document.querySelector("#nav-mode-quiz");

  const tabs = [
    { view: "code", panelBtn: codeTab, navBtn: navCode },
    { view: "trace", panelBtn: traceTab, navBtn: navTrace },
    { view: "interactive", panelBtn: interactiveTab, navBtn: navQuiz }
  ];

  tabs.forEach(t => {
    const isActive = t.view === activeView;
    t.panelBtn?.classList.toggle("is-active", isActive);
    t.panelBtn?.setAttribute("aria-selected", isActive ? "true" : "false");
    t.navBtn?.classList.toggle("is-active", isActive);
    t.navBtn?.setAttribute("aria-selected", isActive ? "true" : "false");
  });
}

function setView(view) {
  if (autoPlayTimer) stopAutoPlay();
  activeView = view;
  syncViewTabs();
  renderActiveView();
}

function renderChallenge() {
  syncViewTabs();
  renderActiveView();
}

function renderActiveView() {
  if (activeView === "code") {
    renderCodeView();
  } else if (activeView === "trace") {
    initTraceView();
  } else {
    initInteractiveView();
  }
}

function renderCodeView() {
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
      <button id="open-trace-btn" class="button button-accent" type="button"><span class="button-icon">📊</span> Ver teste de mesa</button>
      <button id="open-quiz-btn" class="button button-accent" type="button"><span class="button-icon">🎯</span> Responder teste</button>
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
  document.querySelector("#open-trace-btn").addEventListener("click", () => setView("trace"));
  document.querySelector("#open-quiz-btn").addEventListener("click", () => setView("interactive"));
  document.querySelector("#hint-button").addEventListener("click", () => togglePanel("hint-panel", "hint-button", "Dica", "Ocultar dica"));
  document.querySelector("#solution-button").addEventListener("click", () => togglePanel("solution-panel", "solution-button", "Ver solução", "Ocultar solução"));
  document.querySelector("#copy-button").addEventListener("click", copyCode);
  document.querySelector("#reset-button").addEventListener("click", resetCode);
}

/* ========================================================
   MODO 1: SIMULAÇÃO DE TESTE DE MESA (PASSO A PASSO GUIADO)
======================================================== */

function initTraceView() {
  const challenge = activeChallenge;
  traceCaseIndex = 0;
  traceCurrentStep = 0;
  traceSteps = challenge.generateTrace(traceCaseIndex);

  solvedTraces.add(challenge.id);
  saveStorage(STORAGE_KEYS.traces, [...solvedTraces]);
  updateProgress();
  renderChallengeList();

  renderTraceView();
}

function renderTraceView() {
  const challenge = activeChallenge;
  const currentStepData = traceSteps[traceCurrentStep] || traceSteps[0];

  const caseOptions = challenge.traceCases.map((c, idx) => 
    `<option value="${idx}" ${idx === traceCaseIndex ? "selected" : ""}>${escapeHtml(c.label)}</option>`
  ).join("");

  const linesHtml = challenge.traceCode.map((lineText, idx) => {
    const lineNum = idx + 1;
    const isActive = lineNum === currentStepData.line;
    return `
      <div class="trace-code-line ${isActive ? "is-active" : ""}">
        <span class="trace-line-num">${lineNum}</span>
        <span class="trace-line-arrow">${isActive ? "➔" : ""}</span>
        <span class="trace-line-text">${escapeHtml(lineText)}</span>
      </div>`;
  }).join("");

  const varsEntries = Object.entries(currentStepData.values).filter(([k]) => k !== "Passo" && k !== "Linha");
  const varsHtml = varsEntries.map(([name, val]) => {
    const isChanged = currentStepData.changed && currentStepData.changed.includes(name);
    return `
      <div class="trace-var-item ${isChanged ? "is-changed" : ""}">
        <span class="trace-var-label">
          <span>${escapeHtml(name)}</span>
          ${isChanged ? '<span class="trace-var-changed-tag">alterado</span>' : ""}
        </span>
        <span class="trace-var-value">${escapeHtml(val)}</span>
      </div>`;
  }).join("");

  const tableRowsHtml = traceSteps.map((stepItem, idx) => {
    const isActive = idx === traceCurrentStep;
    const isFuture = idx > traceCurrentStep;
    const rowClass = isActive ? "is-active-row" : (isFuture ? "is-future-row" : "is-past-row");

    const cellsHtml = challenge.traceColumns.map((colName) => {
      if (colName === "Passo") return `<td><strong>${stepItem.step}</strong></td>`;
      if (colName === "Linha") return `<td>L${stepItem.line}</td>`;
      if (colName.startsWith("Ação")) return `<td class="trace-cell-action">${escapeHtml(stepItem.action)}</td>`;
      const val = stepItem.values[colName] ?? "-";
      return `<td><code>${escapeHtml(val)}</code></td>`;
    }).join("");

    return `<tr class="${rowClass}">${cellsHtml}</tr>`;
  }).join("");

  const thHtml = challenge.traceColumns.map(col => `<th>${escapeHtml(col)}</th>`).join("");

  content.innerHTML = `
    <div class="trace-panel-wrapper">
      <div class="challenge-topline">
        <span class="challenge-kicker">SIMULAÇÃO DE MESA · EXERCÍCIO ${String(challenge.id).padStart(2, "0")} / ${String(challenges.length).padStart(2, "0")}</span>
        <span class="difficulty">${escapeHtml(challenge.difficulty)}</span>
      </div>
      <h2 class="challenge-title">${escapeHtml(challenge.title)} — Simulação Guiada</h2>
      <p class="challenge-topic">${escapeHtml(challenge.topic)} <span aria-hidden="true">·</span> ${escapeHtml(challenge.lesson)}</p>

      <div class="trace-header-toolbar">
        <div class="trace-case-selector">
          <label for="trace-case-select">Caso de teste:</label>
          <select id="trace-case-select" class="trace-select">
            ${caseOptions}
          </select>
        </div>

        <div style="display: flex; gap: 8px;">
          <button id="switch-to-answer-btn" class="button button-accent" type="button">
            🎯 Responder testes deste algoritmo
          </button>
        </div>
      </div>

      <div class="trace-visual-grid">
        <div class="trace-code-card">
          <div class="trace-code-header">
            <span>ALGORITMO PYTHON</span>
            <span>LINHA EM EXECUÇÃO: L${currentStepData.line}</span>
          </div>
          <div class="trace-code-body">
            ${linesHtml}
          </div>
          <div class="trace-step-explanation">
            <strong><span>Passo ${currentStepData.step} de ${traceSteps.length}</span> · ${escapeHtml(currentStepData.action)}</strong>
            <div>${escapeHtml(currentStepData.explanation)}</div>
          </div>
        </div>

        <div class="trace-vars-card">
          <div class="trace-vars-header">
            <span>INSPETOR DE VARIÁVEIS</span>
            <span>MEMÓRIA ATUAL</span>
          </div>
          <div class="trace-vars-grid">
            ${varsHtml}
          </div>
        </div>
      </div>

      <div class="trace-playback-bar">
        <div class="trace-player-buttons">
          <button id="btn-trace-first" class="trace-ctrl-btn" type="button" title="Reiniciar (Início)">⏮</button>
          <button id="btn-trace-prev" class="trace-ctrl-btn" type="button" title="Passo anterior (Seta esquerda)">◀ Anterior</button>
          <button id="btn-trace-play" class="trace-ctrl-btn btn-play" type="button" title="Reproduzir automaticamente (Espaço)">
            ${autoPlayTimer ? "⏸ Pausar" : "▶ Executar"}
          </button>
          <button id="btn-trace-next" class="trace-ctrl-btn" type="button" title="Próximo passo (Seta direita)">Próximo ▶</button>
          <button id="btn-trace-last" class="trace-ctrl-btn" type="button" title="Ir para o final">⏭</button>
        </div>

        <div class="trace-step-status">
          <span class="trace-step-pill">Passo ${traceCurrentStep + 1} de ${traceSteps.length}</span>
          <div class="trace-speed-wrap">
            <label for="trace-speed-select">Velocidade:</label>
            <select id="trace-speed-select" class="trace-select">
              <option value="1800" ${playbackSpeedMs === 1800 ? "selected" : ""}>0.5x</option>
              <option value="1200" ${playbackSpeedMs === 1200 ? "selected" : ""}>1x</option>
              <option value="600" ${playbackSpeedMs === 600 ? "selected" : ""}>2x</option>
            </select>
          </div>
          <div class="trace-keyboard-hint">
            <kbd>←</kbd> <kbd>→</kbd> <kbd>Espaço</kbd>
          </div>
        </div>
      </div>

      <div class="trace-table-card">
        <div class="trace-table-header">
          <span>TABELA DE TESTE DE MESA</span>
          <div class="trace-table-tools">
            <button id="btn-copy-table" class="trace-tool-btn" type="button">📋 Copiar Markdown</button>
          </div>
        </div>
        <div class="trace-table-scroll">
          <table class="trace-table">
            <thead>
              <tr>${thHtml}</tr>
            </thead>
            <tbody>
              ${tableRowsHtml}
            </tbody>
          </table>
        </div>
      </div>
    </div>`;

  setupTraceViewEvents(challenge);
}

function setupTraceViewEvents(challenge) {
  document.querySelector("#switch-to-answer-btn")?.addEventListener("click", () => setView("interactive"));

  const caseSelect = document.querySelector("#trace-case-select");
  caseSelect?.addEventListener("change", (e) => {
    stopAutoPlay();
    traceCaseIndex = Number(e.target.value);
    traceCurrentStep = 0;
    traceSteps = challenge.generateTrace(traceCaseIndex);
    renderTraceView();
  });

  document.querySelector("#btn-trace-first")?.addEventListener("click", () => goToStep(0));
  document.querySelector("#btn-trace-prev")?.addEventListener("click", () => stepTrace(-1));
  document.querySelector("#btn-trace-next")?.addEventListener("click", () => stepTrace(1));
  document.querySelector("#btn-trace-last")?.addEventListener("click", () => goToStep(traceSteps.length - 1));
  document.querySelector("#btn-trace-play")?.addEventListener("click", toggleAutoPlay);

  const speedSelect = document.querySelector("#trace-speed-select");
  speedSelect?.addEventListener("change", (e) => {
    playbackSpeedMs = Number(e.target.value);
    if (autoPlayTimer) {
      stopAutoPlay();
      startAutoPlay();
    }
  });

  document.querySelector("#btn-copy-table")?.addEventListener("click", copyTraceMarkdown);
}

function copyTraceMarkdown() {
  const challenge = activeChallenge;
  const header = `| ${challenge.traceColumns.join(" | ")} |`;
  const sep = `| ${challenge.traceColumns.map(() => "---").join(" | ")} |`;
  const rows = traceSteps.map(s => {
    const cols = challenge.traceColumns.map(col => {
      if (col === "Passo") return s.step;
      if (col === "Linha") return `L${s.line}`;
      if (col.startsWith("Ação")) return s.action;
      return s.values[col] ?? "-";
    });
    return `| ${cols.join(" | ")} |`;
  });
  const md = [header, sep, ...rows].join("\n");
  navigator.clipboard.writeText(md).then(() => {
    alert("Tabela de Teste de Mesa copiada em formato Markdown!");
  });
}

function stepTrace(delta) {
  const newIndex = traceCurrentStep + delta;
  if (newIndex >= 0 && newIndex < traceSteps.length) {
    traceCurrentStep = newIndex;
    renderTraceView();
  } else if (newIndex >= traceSteps.length && autoPlayTimer) {
    stopAutoPlay();
  }
}

function goToStep(index) {
  traceCurrentStep = Math.max(0, Math.min(index, traceSteps.length - 1));
  renderTraceView();
}

function toggleAutoPlay() {
  if (autoPlayTimer) {
    stopAutoPlay();
  } else {
    if (traceCurrentStep >= traceSteps.length - 1) {
      traceCurrentStep = 0;
    }
    startAutoPlay();
  }
  renderTraceView();
}

function startAutoPlay() {
  autoPlayTimer = setInterval(() => {
    if (traceCurrentStep < traceSteps.length - 1) {
      traceCurrentStep++;
      renderTraceView();
    } else {
      stopAutoPlay();
      renderTraceView();
    }
  }, playbackSpeedMs);
}

function stopAutoPlay() {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer);
    autoPlayTimer = null;
  }
}

/* ========================================================
   MODO 2: RESPONDER TESTES DE MESA (INTERAÇÃO DIRETA DO USUÁRIO)
======================================================== */

function initInteractiveView() {
  const challenge = activeChallenge;
  traceSteps = challenge.generateTrace(traceCaseIndex || 0);
  quizSelectedAnswers = {};
  stepChallengeIndex = 0;
  stepChallengeScore = { correct: 0, total: 0 };
  stepChallengeFeedback = null;
  tableFillAnswers = {};
  tableFillChecked = false;

  renderInteractiveView();
}

function renderInteractiveView() {
  const challenge = activeChallenge;
  
  content.innerHTML = `
    <div class="interactive-panel-wrapper">
      <div class="challenge-topline">
        <span class="challenge-kicker">INTERAÇÃO · EXERCÍCIO ${String(challenge.id).padStart(2, "0")} / ${String(challenges.length).padStart(2, "0")}</span>
        <span class="difficulty">${escapeHtml(challenge.difficulty)}</span>
      </div>
      <h2 class="challenge-title">${escapeHtml(challenge.title)} — Responder Teste de Mesa</h2>
      <p class="challenge-topic">${escapeHtml(challenge.topic)} <span aria-hidden="true">·</span> ${escapeHtml(challenge.lesson)}</p>

      <div class="interactive-nav-bar">
        <div class="interactive-mode-pills" role="tablist">
          <button id="sub-mode-step-btn" class="interactive-pill-btn ${interactiveSubmode === "step-challenge" ? "is-active" : ""}" type="button">
            🎯 Desafio Passo a Passo
          </button>
          <button id="sub-mode-quiz-btn" class="interactive-pill-btn ${interactiveSubmode === "quiz" ? "is-active" : ""}" type="button">
            ❓ Quiz do Algoritmo
          </button>
          <button id="sub-mode-table-btn" class="interactive-pill-btn ${interactiveSubmode === "table-fill" ? "is-active" : ""}" type="button">
            📝 Preencher Tabela Completa
          </button>
        </div>

        <div class="interactive-score-card">
          <span>Seu desempenho:</span>
          <span class="interactive-score-pill">
            ${solvedQuizzes.has(challenge.id) ? "🏆 Dominado" : "⭐ Em andamento"}
          </span>
        </div>
      </div>

      <div id="interactive-subview-area">
        ${renderCurrentInteractiveSubmodeHtml(challenge)}
      </div>
    </div>`;

  setupInteractiveViewEvents(challenge);
}

function renderCurrentInteractiveSubmodeHtml(challenge) {
  if (interactiveSubmode === "step-challenge") {
    return renderStepChallengeHtml(challenge);
  } else if (interactiveSubmode === "quiz") {
    return renderQuizHtml(challenge);
  } else {
    return renderTableFillHtml(challenge);
  }
}

/* Submodo A: Desafio Passo a Passo (O que acontece agora?) */
function renderStepChallengeHtml(challenge) {
  const questionsInTrace = traceSteps.filter(s => s.question);
  if (!questionsInTrace.length) {
    return `<div class="step-challenge-card"><p>Não há perguntas passo a passo para este caso.</p></div>`;
  }

  const currentStepWithQ = questionsInTrace[stepChallengeIndex] || questionsInTrace[0];
  const qData = currentStepWithQ.question;
  const isFinished = stepChallengeIndex >= questionsInTrace.length;

  if (isFinished) {
    const perfect = stepChallengeScore.correct === questionsInTrace.length;
    if (perfect) {
      solvedQuizzes.add(challenge.id);
      saveStorage(STORAGE_KEYS.quizzes, [...solvedQuizzes]);
      updateProgress();
      renderChallengeList();
    }

    return `
      <div class="step-challenge-card" style="text-align: center; padding: 32px 20px;">
        <span style="font-size: 38px;">🎉</span>
        <h3 style="margin: 12px 0 6px; font-size: 18px;">Desafio Passo a Passo Concluído!</h3>
        <p style="color: var(--muted); margin: 0 0 18px;">
          Você acertou <strong>${stepChallengeScore.correct} de ${questionsInTrace.length}</strong> perguntas deste algoritmo.
        </p>
        <div style="display: flex; gap: 10px; justify-content: center;">
          <button id="btn-restart-step-challenge" class="button button-primary" type="button">↺ Repetir Desafio</button>
          <button id="btn-goto-quiz" class="button" type="button">❓ Fazer Quiz Completo</button>
        </div>
      </div>`;
  }

  return `
    <div class="step-challenge-card">
      <div class="step-challenge-header">
        <span class="step-challenge-kicker">Pergunta ${stepChallengeIndex + 1} de ${questionsInTrace.length}</span>
        <span>Linha L${currentStepWithQ.line} · Passo ${currentStepWithQ.step}</span>
      </div>

      <div class="step-challenge-code">
        <span style="color: var(--subtle); font-size: 10px; display: block; margin-bottom: 4px;">EXECUÇÃO PAUSADA NA LINHA ${currentStepWithQ.line}:</span>
        <span class="paused-line">➔ L${currentStepWithQ.line}: ${escapeHtml(challenge.traceCode[currentStepWithQ.line - 1])}</span>
      </div>

      <div class="step-question-prompt">
        👉 ${escapeHtml(qData.prompt)}
      </div>

      <form id="step-challenge-form" class="step-answer-form">
        <input 
          id="step-challenge-input" 
          type="text" 
          class="step-answer-input" 
          placeholder="Digite sua resposta..." 
          autocomplete="off" 
          autofocus 
          ${stepChallengeFeedback ? "disabled" : ""}
        />
        ${!stepChallengeFeedback ? `
          <button id="btn-submit-step-ans" class="button button-primary" type="submit">
            Responder
          </button>
          <button id="btn-skip-step-ans" class="button button-quiet" type="button">
            Pular
          </button>
        ` : `
          <button id="btn-next-step-challenge" class="button button-primary" type="button">
            Próxima Pergunta ▶
          </button>
        `}
      </form>

      ${stepChallengeFeedback ? `
        <div class="step-feedback-banner ${stepChallengeFeedback.isCorrect ? "is-correct" : "is-wrong"}">
          <span>${stepChallengeFeedback.isCorrect ? "✅" : "❌"}</span>
          <div>
            <strong>${stepChallengeFeedback.isCorrect ? "Correto!" : "Resposta incorreta."}</strong>
            <div>${escapeHtml(stepChallengeFeedback.message)}</div>
          </div>
        </div>
      ` : ""}
    </div>`;
}

/* Submodo B: Quiz de Rastreamento (Perguntas Objetivas) */
function renderQuizHtml(challenge) {
  const quizList = challenge.quizzes || [];
  let answeredCount = 0;
  let correctCount = 0;

  const quizCardsHtml = quizList.map((q, qIndex) => {
    const selected = quizSelectedAnswers[qIndex];
    const isAnswered = selected !== undefined;
    if (isAnswered) {
      answeredCount++;
      if (selected === q.correct) correctCount++;
    }

    const letters = ["A", "B", "C", "D"];
    const optionsHtml = q.options.map((optText, optIndex) => {
      let optionClass = "";
      if (isAnswered) {
        if (optIndex === q.correct) optionClass = "is-correct";
        else if (selected === optIndex) optionClass = "is-wrong";
      }

      return `
        <button 
          class="quiz-option-btn ${optionClass}" 
          data-q="${qIndex}" 
          data-opt="${optIndex}" 
          type="button" 
          ${isAnswered ? "disabled" : ""}
        >
          <span class="quiz-option-letter">${letters[optIndex]}</span>
          <span>${escapeHtml(optText)}</span>
        </button>`;
    }).join("");

    return `
      <div class="quiz-card ${isAnswered ? (selected === q.correct ? "is-answered-correct" : "is-answered-wrong") : ""}">
        <h4 class="quiz-question-title">
          <span class="quiz-num-badge">${qIndex + 1}</span>
          <span>${escapeHtml(q.question)}</span>
        </h4>
        <div class="quiz-options-grid">
          ${optionsHtml}
        </div>
        ${isAnswered ? `
          <div class="quiz-explanation-box">
            <strong>${selected === q.correct ? "✓ Explicação do rastreio" : "✗ Por que essa não é a resposta?"}</strong>
            <div>${escapeHtml(q.explanation)}</div>
          </div>
        ` : ""}
      </div>`;
  }).join("");

  const allAnswered = answeredCount === quizList.length;
  if (allAnswered && correctCount === quizList.length) {
    solvedQuizzes.add(challenge.id);
    saveStorage(STORAGE_KEYS.quizzes, [...solvedQuizzes]);
    updateProgress();
    renderChallengeList();
  }

  return `
    <div class="quiz-list">
      ${quizCardsHtml}
      
      <div class="quiz-actions-footer">
        <div>
          <strong>Placar: ${correctCount} de ${quizList.length} acertos</strong>
          <span style="color: var(--muted); font-size: 11px; margin-left: 8px;">
            ${allAnswered ? (correctCount === quizList.length ? "🎉 Parabéns! Gabaritou o quiz deste exercício!" : "Revise as explicações e tente novamente.") : "Clique em uma alternativa para responder."}
          </span>
        </div>
        <button id="btn-reset-quiz" class="button button-quiet" type="button">↺ Reiniciar Quiz</button>
      </div>
    </div>`;
}

/* Submodo C: Preencher Tabela de Teste de Mesa */
function renderTableFillHtml(challenge) {
  const thHtml = challenge.traceColumns.map(col => `<th>${escapeHtml(col)}</th>`).join("");
  let totalInputCells = 0;
  let correctInputCells = 0;

  const tableRowsHtml = traceSteps.map((stepItem, stepIdx) => {
    const isFirstStep = stepIdx === 0;

    const cellsHtml = challenge.traceColumns.map((colName) => {
      if (colName === "Passo") return `<td><strong>${stepItem.step}</strong></td>`;
      if (colName === "Linha") return `<td>L${stepItem.line}</td>`;
      if (colName.startsWith("Ação")) return `<td class="trace-cell-action">${escapeHtml(stepItem.action)}</td>`;

      const expectedVal = String(stepItem.values[colName] ?? "-").trim();
      if (isFirstStep || expectedVal === "-") {
        return `<td><code>${escapeHtml(expectedVal)}</code></td>`;
      }

      totalInputCells++;
      const cellKey = `${stepIdx}_${colName}`;
      const userVal = tableFillAnswers[cellKey] ?? "";
      
      let validationClass = "";
      if (tableFillChecked) {
        const isMatch = userVal.trim().toLowerCase() === expectedVal.toLowerCase();
        if (isMatch) {
          validationClass = "is-correct";
          correctInputCells++;
        } else {
          validationClass = "is-wrong";
        }
      }

      return `
        <td>
          <input 
            type="text" 
            class="trace-cell-input ${validationClass}" 
            data-key="${cellKey}" 
            data-expected="${escapeHtml(expectedVal)}"
            value="${escapeHtml(userVal)}"
            placeholder="?"
            aria-label="Passo ${stepItem.step}, coluna ${colName}"
          />
        </td>`;
    }).join("");

    return `<tr>${cellsHtml}</tr>`;
  }).join("");

  const isPerfect = tableFillChecked && totalInputCells > 0 && correctInputCells === totalInputCells;
  if (isPerfect) {
    solvedQuizzes.add(challenge.id);
    saveStorage(STORAGE_KEYS.quizzes, [...solvedQuizzes]);
    updateProgress();
    renderChallengeList();
  }

  return `
    <div class="trace-table-card">
      <div class="trace-table-header">
        <span>PREENCHIMENTO COMPLETO DA TABELA DE TESTE DE MESA</span>
        <span>Preencha as variáveis ao longo dos passos e valide suas respostas</span>
      </div>
      <div class="trace-table-scroll">
        <table class="trace-table">
          <thead>
            <tr>${thHtml}</tr>
          </thead>
          <tbody>
            ${tableRowsHtml}
          </tbody>
        </table>
      </div>

      <div class="trace-practice-toolbar">
        <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
          <button id="btn-table-fill-check" class="button button-primary" type="button">✓ Conferir Respostas</button>
          <button id="btn-table-fill-reveal" class="button" type="button">💡 Revelar Gabarito</button>
          <button id="btn-table-fill-clear" class="button button-quiet" type="button">↺ Limpar</button>
        </div>

        ${tableFillChecked ? `
          <div class="trace-score-banner ${isPerfect ? "is-perfect" : ""}">
            ${isPerfect ? "🎉 <strong>Perfeito!</strong> Você completou com precisão todas as células do teste de mesa!" : `<strong>${correctInputCells} de ${totalInputCells} acertos.</strong> Revise as células em vermelho e tente novamente.`}
          </div>` : ""}
      </div>
    </div>`;
}

function setupInteractiveViewEvents(challenge) {
  // Mode switcher tabs
  document.querySelector("#sub-mode-step-btn")?.addEventListener("click", () => {
    interactiveSubmode = "step-challenge";
    renderInteractiveView();
  });
  document.querySelector("#sub-mode-quiz-btn")?.addEventListener("click", () => {
    interactiveSubmode = "quiz";
    renderInteractiveView();
  });
  document.querySelector("#sub-mode-table-btn")?.addEventListener("click", () => {
    interactiveSubmode = "table-fill";
    renderInteractiveView();
  });

  // Step Challenge Form Handlers
  if (interactiveSubmode === "step-challenge") {
    const form = document.querySelector("#step-challenge-form");
    const input = document.querySelector("#step-challenge-input");
    
    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!input || !input.value.trim()) return;

      const questionsInTrace = traceSteps.filter(s => s.question);
      const curQ = questionsInTrace[stepChallengeIndex]?.question;
      if (!curQ) return;

      const userAns = input.value.trim().toLowerCase();
      const expAns = curQ.expected.trim().toLowerCase();
      const isCorrect = userAns === expAns;

      stepChallengeScore.total++;
      if (isCorrect) stepChallengeScore.correct++;

      stepChallengeFeedback = {
        isCorrect,
        message: isCorrect
          ? `Excelente! O valor correto para '${curQ.varName}' é ${curQ.expected}.`
          : `O valor esperado era '${curQ.expected}'. Você digitou '${input.value.trim()}'.`
      };

      renderInteractiveView();
    });

    document.querySelector("#btn-skip-step-ans")?.addEventListener("click", () => {
      const questionsInTrace = traceSteps.filter(s => s.question);
      const curQ = questionsInTrace[stepChallengeIndex]?.question;
      stepChallengeFeedback = {
        isCorrect: false,
        message: `Passo pulado. O valor esperado para '${curQ?.varName}' era '${curQ?.expected}'.`
      };
      renderInteractiveView();
    });

    document.querySelector("#btn-next-step-challenge")?.addEventListener("click", () => {
      stepChallengeIndex++;
      stepChallengeFeedback = null;
      renderInteractiveView();
    });

    document.querySelector("#btn-restart-step-challenge")?.addEventListener("click", () => {
      stepChallengeIndex = 0;
      stepChallengeScore = { correct: 0, total: 0 };
      stepChallengeFeedback = null;
      renderInteractiveView();
    });

    document.querySelector("#btn-goto-quiz")?.addEventListener("click", () => {
      interactiveSubmode = "quiz";
      renderInteractiveView();
    });
  }

  // Quiz Mode Option Handlers
  if (interactiveSubmode === "quiz") {
    const optionBtns = document.querySelectorAll(".quiz-option-btn");
    optionBtns.forEach(btn => {
      btn.addEventListener("click", (e) => {
        const qIndex = Number(btn.dataset.q);
        const optIndex = Number(btn.dataset.opt);
        quizSelectedAnswers[qIndex] = optIndex;
        renderInteractiveView();
      });
    });

    document.querySelector("#btn-reset-quiz")?.addEventListener("click", () => {
      quizSelectedAnswers = {};
      renderInteractiveView();
    });
  }

  // Table Fill Handlers
  if (interactiveSubmode === "table-fill") {
    const inputs = document.querySelectorAll(".trace-cell-input");
    inputs.forEach(inp => {
      inp.addEventListener("input", (e) => {
        tableFillAnswers[e.target.dataset.key] = e.target.value;
      });
      inp.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          tableFillChecked = true;
          renderInteractiveView();
        }
      });
    });

    document.querySelector("#btn-table-fill-check")?.addEventListener("click", () => {
      tableFillChecked = true;
      renderInteractiveView();
    });

    document.querySelector("#btn-table-fill-reveal")?.addEventListener("click", () => {
      inputs.forEach(inp => {
        tableFillAnswers[inp.dataset.key] = inp.dataset.expected;
      });
      tableFillChecked = true;
      renderInteractiveView();
    });

    document.querySelector("#btn-table-fill-clear")?.addEventListener("click", () => {
      tableFillAnswers = {};
      tableFillChecked = false;
      renderInteractiveView();
    });
  }
}

// Global Keyboard Navigation (when in Simulation mode)
window.addEventListener("keydown", (event) => {
  if (activeView !== "trace") return;
  if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName)) return;

  if (event.key === "ArrowRight") {
    event.preventDefault();
    stepTrace(1);
  } else if (event.key === "ArrowLeft") {
    event.preventDefault();
    stepTrace(-1);
  } else if (event.key === " " || event.code === "Space") {
    event.preventDefault();
    toggleAutoPlay();
  } else if (event.key.toLowerCase() === "r") {
    event.preventDefault();
    goToStep(0);
  }
});

function togglePanel(panelId, buttonId, closedLabel, openLabel) {
  const panel = document.getElementById(panelId);
  if (!panel) return;
  panel.hidden = !panel.hidden;
  const button = document.getElementById(buttonId);
  if (button && button.lastChild) {
    button.lastChild.textContent = panel.hidden ? ` ${closedLabel}` : ` ${openLabel}`;
  }
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
  if (!editor || !editor.value.trim()) {
    showFeedback("Escreva sua função Python antes de testar.", "info");
    editor?.focus();
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
    const editor = document.querySelector("#python-editor");
    if (!editor) return;
    await navigator.clipboard.writeText(editor.value);
    showFeedback("Código copiado para a área de transferência.", "success");
  } catch {
    showFeedback("O navegador não permitiu copiar automaticamente. Selecione o código e copie manualmente.", "error");
  }
}

function resetCode() {
  const editor = document.querySelector("#python-editor");
  if (!editor) return;
  editor.value = activeChallenge.starter;
  editorStorage[activeChallenge.id] = editor.value;
  saveStorage(STORAGE_KEYS.codes, editorStorage);
  const fb = document.querySelector("#feedback");
  if (fb) fb.hidden = true;
  editor.focus();
}

function selectChallenge(id) {
  const editor = document.querySelector("#python-editor");
  if (editor && activeView === "code") {
    editorStorage[activeChallenge.id] = editor.value;
    saveStorage(STORAGE_KEYS.codes, editorStorage);
  }
  stopAutoPlay();
  activeChallenge = challenges.find((challenge) => challenge.id === id);
  traceCaseIndex = 0;
  traceCurrentStep = 0;
  quizSelectedAnswers = {};
  stepChallengeIndex = 0;
  stepChallengeScore = { correct: 0, total: 0 };
  stepChallengeFeedback = null;
  tableFillAnswers = {};
  tableFillChecked = false;

  renderChallengeList();
  renderChallenge();
}

// Global topbar & panel tab switcher events
document.querySelector("#nav-mode-code")?.addEventListener("click", () => setView("code"));
document.querySelector("#nav-mode-trace")?.addEventListener("click", () => setView("trace"));
document.querySelector("#nav-mode-quiz")?.addEventListener("click", () => setView("interactive"));

document.querySelector("#tab-code-btn")?.addEventListener("click", () => setView("code"));
document.querySelector("#tab-trace-btn")?.addEventListener("click", () => setView("trace"));
document.querySelector("#tab-interactive-btn")?.addEventListener("click", () => setView("interactive"));

renderChallengeList();
renderChallenge();
updateProgress();
createWorker();
