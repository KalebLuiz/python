// Dados completos de teoria, miniexercícios e correlação com testes de mesa
// Baseado integralmente nos slides das aulas 03 a 15 de Linguagem de Programação
// Professor Ettore Baldini-Neto

const theoryTopics = [
  {
    id: 3,
    aulaNumber: "Aula 03",
    title: "Algoritmos, Pseudocódigo e Fundamentos do Teste de Mesa",
    subtitle: "Construção de algoritmos, fluxogramas, Portugol e rastreamento passo a passo",
    slideFile: "LP_Aula03.pdf",
    badge: "Fundamento Transversal",
    summary: "Compreenda a definição formal de algoritmo, as formas de representação gráfica (fluxogramas) e textual (Portugol) e a técnica vital do Teste de Mesa para validação de lógica antes do código.",
    sections: [
      {
        title: "O que é um Algoritmo e suas Propriedades",
        icon: "💡",
        contentHtml: `
          <p>Segundo a definição computacional e matemática, um <strong>algoritmo</strong> é um processo de cálculo ou sequência finita de regras bem definidas e não ambíguas que resolvem um problema ou realizam uma tarefa específica.</p>
          <div class="theory-callout">
            <strong>Propriedades fundamentais dos algoritmos (Slide 8):</strong>
            <ul>
              <li><strong>Entrada:</strong> valores fornecidos externamente (mínimo de zero entradas).</li>
              <li><strong>Saída:</strong> produz pelo menos um resultado concreto.</li>
              <li><strong>Definição e Clareza:</strong> cada instrução deve ser precisa e sem ambiguidades.</li>
              <li><strong>Efetividade:</strong> cada passo deve ser simples o bastante para ser executado em tempo finito.</li>
              <li><strong>Finitude:</strong> o algoritmo deve obrigatoriamente encerrar após um número finito de passos.</li>
            </ul>
          </div>
        `
      },
      {
        title: "Simbologia Padrão de Fluxogramas",
        icon: "📐",
        contentHtml: `
          <p>Os fluxogramas fornecem uma representação visual imediata da ordem de fluxo de controle:</p>
          <div class="theory-flowchart-guide">
            <div class="flow-item">
              <span class="flow-shape shape-terminal">Início / Fim</span>
              <p><strong>Terminal (elipse / retângulo arredondado):</strong> indica onde o algoritmo começa e termina.</p>
            </div>
            <div class="flow-item">
              <span class="flow-shape shape-io">Entrada / Saída</span>
              <p><strong>Paralelogramo:</strong> leitura de dados digitados ou exibição de mensagens para o usuário.</p>
            </div>
            <div class="flow-item">
              <span class="flow-shape shape-process">Processamento</span>
              <p><strong>Retângulo reto:</strong> cálculos, atribuição de valores a variáveis (ex: <code>soma &larr; soma + nota</code>).</p>
            </div>
            <div class="flow-item">
              <span class="flow-shape shape-decision">Decisão</span>
              <p><strong>Losango:</strong> bifurcação condicional com saídas &ldquo;Sim/Verdadeiro&rdquo; e &ldquo;Não/Falso&rdquo;.</p>
            </div>
          </div>
        `
      },
      {
        title: "Português Estruturado (Portugol)",
        icon: "📝",
        contentHtml: `
          <p>O Portugol é uma linguagem intermediária entre a linguagem natural e a sintaxe de programação real. Ele utiliza palavras-chave padronizadas como <code>Inicio</code>, <code>leia</code>, <code>escreva</code>, <code>se ... entao ... senao</code> e <code>enquanto ... faca</code>.</p>
          <pre class="theory-code"><code>// Exemplo clássico do cálculo da média (Slide 18)
Inicio
    leia n1, n2
    media &larr; (n1 + n2) / 2
    se media &gt;= 6.0 entao
        escreva "Aprovado"
    senao
        escreva "Reprovado"
    fim_se
Fim</code></pre>
        `
      }
    ],
    traceExplanation: {
      title: "Como funciona a técnica do Teste de Mesa?",
      contentHtml: `
        <p>O <strong>Teste de Mesa</strong> (ou tabela de rastreamento / <em>trace table</em>) é a simulação mental e manual do algoritmo feita com lápis e papel antes de rodar o código. Ele permite rastrear cada linha em sequência e observar a memória das variáveis mudando em cada instante de tempo.</p>
        <div class="theory-trace-rules">
          <h4>Regras de ouro do Teste de Mesa (Slides 22 a 26):</h4>
          <ol>
            <li><strong>Colunas estruturadas:</strong> crie uma coluna para o número do Passo, uma para a Linha do algoritmo, uma coluna para cada Variável e uma coluna para Ação/Saída.</li>
            <li><strong>Persistência de valor:</strong> quando uma linha executa, apenas a variável atribuída tem seu valor alterado. Todas as outras variáveis mantêm inalterado seu valor da linha anterior!</li>
            <li><strong>Avaliação de condição:</strong> nas linhas de decisão (<code>se</code> / <code>if</code> ou <code>enquanto</code> / <code>while</code>), anote o resultado lógico (<code>True</code> ou <code>False</code>) para justificar para qual linha o fluxo salta.</li>
          </ol>
        </div>
      `,
      tableExample: {
        columns: ["Passo", "Linha", "n1", "n2", "media", "Saída / Ação"],
        rows: [
          ["1", "1", "-", "-", "-", "Início do programa"],
          ["2", "2", "7.0", "5.0", "-", "leia n1, n2"],
          ["3", "3", "7.0", "5.0", "6.0", "media &larr; (7.0 + 5.0) / 2"],
          ["4", "4", "7.0", "5.0", "6.0", "Teste: 6.0 &gt;= 6.0 &rarr; Verdadeiro"],
          ["5", "5", "7.0", "5.0", "6.0", 'Exibe "Aprovado"']
        ]
      }
    },
    relatedChallenges: [
      { id: 1, title: "Total com desconto", reason: "Estrutura sequencial de cálculos e atribuições lineares." },
      { id: 2, title: "Ano bissexto", reason: "Bifurcação condicional baseada em expressões booleanas." },
      { id: 4, title: "Soma dos pares", reason: "Repetição com acumulador e contador rastreados passo a passo." }
    ],
    miniExercises: [
      {
        id: "m03_1",
        question: "Em um fluxograma padronizado, qual figura geométrica é utilizada para representar uma tomada de decisão condicional com bifurcação de caminhos?",
        options: [
          "Losango",
          "Retângulo com cantos retos",
          "Paralelogramo",
          "Círculo pequeno"
        ],
        correct: 0,
        explanation: "O losango representa tomada de decisão condicional (ex: se média >= 6), de onde saem dois caminhos: Verdadeiro/Sim e Falso/Não."
      },
      {
        id: "m03_2",
        question: "Durante a execução de um Teste de Mesa, quando uma linha de comando apenas exibe uma mensagem na tela (como print), o que acontece com os valores das variáveis na tabela?",
        options: [
          "Permanecem inalterados, preservando os mesmos valores do passo anterior",
          "Todas as variáveis são zeradas automaticamente",
          "Apenas as variáveis numéricas mudam para None",
          "A tabela deve descartar as colunas das variáveis"
        ],
        correct: 0,
        explanation: "Uma instrução de exibição ou teste lógico não altera o estado da memória. Logo, todas as variáveis preservam exatamente o valor anterior."
      }
    ]
  },
  {
    id: 4,
    aulaNumber: "Aula 04",
    title: "Fundamentos de Python: Variáveis, Tipos e Operadores Aritméticos",
    subtitle: "Interpretador IDLE, tipos primitivos, função type() e operadores matemáticos",
    slideFile: "LP_Aula04.pdf",
    badge: "Sintaxe & Tipos",
    summary: "Domine os modos de execução do Python, a tipagem dinâmica forte, a checagem com type(), as 7 operações aritméticas fundamentais e as regras de nomenclatura de variáveis.",
    sections: [
      {
        title: "Interpretador Python e Modos de Uso",
        icon: "🐍",
        contentHtml: `
          <p>O Python pode ser executado de duas maneiras principais (Slide 3 e 4):</p>
          <ul>
            <li><strong>Modo Interativo (Shell / IDLE):</strong> avalia expressões imediatamente após pressionar Enter (&gt;&gt;&gt;). Ideal para testes rápidos e inspeções.</li>
            <li><strong>Modo Script (Editor):</strong> salva as instruções em arquivos com extensão <code>.py</code> para execução completa pressionando <strong>F5</strong>.</li>
          </ul>
        `
      },
      {
        title: "Tipos de Dados Primitivos",
        icon: "📦",
        contentHtml: `
          <p>Python é dinamicamente tipado: o tipo é associado ao dado na memória, não ao nome da variável. A função integrada <code>type(objeto)</code> revela a classe do valor (Slide 16):</p>
          <div class="theory-table-wrapper">
            <table class="theory-table">
              <thead><tr><th>Tipo</th><th>Descrição</th><th>Exemplo Literal</th></tr></thead>
              <tbody>
                <tr><td><code>int</code></td><td>Números inteiros positivos ou negativos sem limite arbitrário</td><td><code>42</code>, <code>-15</code>, <code>0</code></td></tr>
                <tr><td><code>float</code></td><td>Números de ponto flutuante (decimais, separados por ponto)</td><td><code>3.1415</code>, <code>-0.5</code>, <code>2.0</code></td></tr>
                <tr><td><code>bool</code></td><td>Valores lógicos da álgebra booleana</td><td><code>True</code> ou <code>False</code> (com inicial maiúscula!)</td></tr>
                <tr><td><code>str</code></td><td>Cadeia de caracteres delimitada por aspas simples ou duplas</td><td><code>'Python'</code>, <code>"Impacta"</code></td></tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        title: "Operadores Aritméticos em Python",
        icon: "➗",
        contentHtml: `
          <p>Atenção especial às peculiaridades da divisão em Python (Slides 11 a 13):</p>
          <div class="theory-table-wrapper">
            <table class="theory-table">
              <thead><tr><th>Operador</th><th>Operação</th><th>Exemplo</th><th>Resultado</th><th>Tipo</th></tr></thead>
              <tbody>
                <tr><td><code>+</code> / <code>-</code></td><td>Adição / Subtração</td><td><code>7 + 3</code></td><td><code>10</code></td><td><code>int</code></td></tr>
                <tr><td><code>*</code></td><td>Multiplicação</td><td><code>4 * 2.5</code></td><td><code>10.0</code></td><td><code>float</code></td></tr>
                <tr><td><code>/</code></td><td><strong>Divisão real</strong> (sempre produz float!)</td><td><code>10 / 2</code></td><td><code>5.0</code></td><td><code>float</code></td></tr>
                <tr><td><code>//</code></td><td><strong>Divisão inteira</strong> (trunca o decimal)</td><td><code>10 // 3</code></td><td><code>3</code></td><td><code>int</code></td></tr>
                <tr><td><code>%</code></td><td><strong>Módulo / Resto</strong> da divisão inteira</td><td><code>10 % 3</code></td><td><code>1</code></td><td><code>int</code></td></tr>
                <tr><td><code>**</code></td><td><strong>Potenciação</strong></td><td><code>2 ** 3</code></td><td><code>8</code></td><td><code>int</code></td></tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        title: "Regras de Identificadores (Nomes de Variáveis)",
        icon: "🏷️",
        contentHtml: `
          <div class="theory-callout">
            <strong>Regras oficiais de identificadores (Slide 17):</strong>
            <ul>
              <li>Podem conter letras (maiúsculas e minúsculas), dígitos (0-9) e sublinhado (<code>_</code>).</li>
              <li><strong>NUNCA</strong> podem começar com dígito (ex: <code>1nota</code> é INVÁLIDO; <code>nota1</code> é VÁLIDO).</li>
              <li>Não podem conter espaços, hífen ou caracteres especiais (<code>@</code>, <code>$</code>, <code>#</code>).</li>
              <li>Python é <strong>case-sensitive</strong>: <code>total</code>, <code>Total</code> e <code>TOTAL</code> são três variáveis distintas na memória!</li>
              <li>Palavras reservadas da linguagem não podem ser usadas como nome de variável (ex: <code>def</code>, <code>if</code>, <code>while</code>, <code>class</code>).</li>
            </ul>
          </div>
        `
      }
    ],
    traceExplanation: {
      title: "O que observar no Teste de Mesa sobre Tipos?",
      contentHtml: `
        <p>No Teste de Mesa, anotar o tipo e a forma correta do valor evita confusões graves:</p>
        <ul>
          <li>Se o algoritmo executa <code>res = 8 / 2</code>, o valor registrado na coluna <code>res</code> deve ser <code>4.0</code> (float), e não <code>4</code>.</li>
          <li>Ao realizar operações modulares como <code>ano % 4 == 0</code>, calcule o resto exato da divisão inteira para decidir se o fluxo ramifica.</li>
        </ul>
      `,
      tableExample: {
        columns: ["Passo", "Linha", "a", "b", "div_real", "div_int", "resto"],
        rows: [
          ["1", "1", "14", "4", "-", "-", "-"],
          ["2", "2", "14", "4", "3.5", "-", "-"],
          ["3", "3", "14", "4", "3.5", "3", "-"],
          ["4", "4", "14", "4", "3.5", "3", "2"]
        ]
      }
    },
    relatedChallenges: [
      { id: 1, title: "Total com desconto", reason: "Uso de divisões decimais e multiplicação por percentual." },
      { id: 2, title: "Ano bissexto", reason: "Uso direto do operador módulo (%) para testar múltiplos." }
    ],
    miniExercises: [
      {
        id: "m04_1",
        question: "Qual é o valor e o tipo de dado resultante da instrução 15 / 3 executada no interpretador Python?",
        options: [
          "5.0 (tipo float)",
          "5 (tipo int)",
          "5.0 (tipo int)",
          "15/3 (tipo str)"
        ],
        correct: 0,
        explanation: "Em Python 3, o operador de barra simples (/) realiza divisão real e sempre devolve um número do tipo float, portanto 15 / 3 resulta em 5.0."
      },
      {
        id: "m04_2",
        question: "Qual das opções a seguir apresenta um identificador que gera erro de sintaxe se for usado como nome de variável em Python?",
        options: [
          "3_tentativas",
          "_contador",
          "salario_liquido",
          "notaFinal2"
        ],
        correct: 0,
        explanation: "Em Python, nomes de variáveis nunca podem começar com números. '3_tentativas' começa com o dígito 3, violando a regra de identificadores."
      }
    ]
  },
  {
    id: 5,
    aulaNumber: "Aula 05",
    title: "Expressões, Atribuição Composta, Entrada/Saída & Precedência",
    subtitle: "Ordem de avaliação, operadores +=, print com sep/end, input e tratamento de erros",
    slideFile: "LP_Aula05_nova.pdf",
    badge: "Precedência & I/O",
    summary: "Entenda a tabela de precedência matemática do Python, os operadores de atribuição aumentada, a conversão obrigatória em input(), os argumentos especiais de print() e os tipos de erros.",
    sections: [
      {
        title: "Precedência e Associatividade de Operadores",
        icon: "⚖️",
        contentHtml: `
          <p>Quando múltiplos operadores aparecem em uma mesma expressão, o Python obedece a uma hierarquia rigorosa (Slides 13 a 17):</p>
          <div class="theory-table-wrapper">
            <table class="theory-table">
              <thead><tr><th>Prioridade</th><th>Operadores</th><th>Descrição</th><th>Associatividade</th></tr></thead>
              <tbody>
                <tr><td>1ª (Maior)</td><td><code>()</code></td><td>Parênteses (mais internos primeiro)</td><td>-</td></tr>
                <tr><td>2ª</td><td><code>**</code></td><td>Potenciação</td><td><strong>À direita:</strong> <code>2**3**2 = 2**9 = 512</code></td></tr>
                <tr><td>3ª</td><td><code>*</code>, <code>/</code>, <code>//</code>, <code>%</code></td><td>Multiplicação, divisões e resto</td><td>À esquerda</td></tr>
                <tr><td>4ª (Menor)</td><td><code>+</code>, <code>-</code></td><td>Adição e subtração</td><td>À esquerda</td></tr>
              </tbody>
            </table>
          </div>
          <p><strong>Atenção ao exemplo do Slide 17:</strong> Na expressão <code>8 / 4 * 2</code>, ambos têm a mesma prioridade e são associativos à esquerda, logo avalia-se primeiro <code>(8 / 4) = 2.0</code> e depois <code>2.0 * 2 = 4.0</code>!</p>
        `
      },
      {
        title: "Operadores de Atribuição Composta (Aumentada)",
        icon: "⚡",
        contentHtml: `
          <p>Permitem atualizar uma variável utilizando seu valor anterior de forma compacta e eficiente (Slides 7 a 9):</p>
          <div class="theory-grid-2">
            <div class="theory-box">
              <code>x += 5</code> &equiv; <code>x = x + 5</code><br>
              <code>x -= 3</code> &equiv; <code>x = x - 3</code><br>
              <code>x *= 2</code> &equiv; <code>x = x * 2</code>
            </div>
            <div class="theory-box">
              <code>x /= 4</code> &equiv; <code>x = x / 4</code><br>
              <code>x //= 2</code> &equiv; <code>x = x // 2</code><br>
              <code>x %= 3</code> &equiv; <code>x = x % 3</code>
            </div>
          </div>
        `
      },
      {
        title: "Funções Integradas de Entrada e Saída (I/O)",
        icon: "⌨️",
        contentHtml: `
          <p><strong>Entrada com <code>input()</code>:</strong> SEMPRE retorna uma cadeia de texto (<code>str</code>). Para cálculos numéricos, a conversão é indispensável:</p>
          <pre class="theory-code"><code>idade = int(input("Digite sua idade: "))
preco = float(input("Digite o preço: "))</code></pre>
          <p><strong>Saída com <code>print()</code>:</strong> Parâmetros opcionais <code>sep</code> (separador entre itens) e <code>end</code> (caractere final):</p>
          <pre class="theory-code"><code>print(10, 20, 30, sep=" - ")  # Exibe: 10 - 20 - 30
print("Carregando...", end="") # Não pula linha ao final</code></pre>
        `
      },
      {
        title: "Classificação dos Erros em Programação",
        icon: "⚠️",
        contentHtml: `
          <div class="theory-callout">
            <strong>Três categorias de erros (Slide 32):</strong>
            <ul>
              <li><strong>Erros de Sintaxe:</strong> violação das regras gramaticais da linguagem. O código nem sequer inicia sua execução (ex: parêntese esquecido).</li>
              <li><strong>Erros de Execução (Runtime):</strong> o código é sintaticamente válido, mas durante o processamento ocorre uma operação impossível (ex: divisão por zero <code>10 / 0</code>).</li>
              <li><strong>Erros de Lógica:</strong> o programa roda até o fim sem falhar, mas produz resultados incorretos porque o algoritmo foi mal formulado.</li>
            </ul>
          </div>
        `
      }
    ],
    traceExplanation: {
      title: "Como registrar Atribuição Composta no Teste de Mesa?",
      contentHtml: `
        <p>Ao encontrar uma instrução como <code>total += item</code>:</p>
        <ol>
          <li>Consulte o valor atual da coluna <code>total</code> no passo anterior.</li>
          <li>Some ao valor de <code>item</code>.</li>
          <li>Grave o novo resultado na mesma coluna <code>total</code> nesta linha.</li>
        </ol>
      `,
      tableExample: {
        columns: ["Passo", "Linha", "preco", "desconto", "fator", "total"],
        rows: [
          ["1", "1", "100.0", "15", "-", "-"],
          ["2", "2", "100.0", "15", "0.85", "-"],
          ["3", "3", "100.0", "15", "0.85", "85.0"]
        ]
      }
    },
    relatedChallenges: [
      { id: 1, title: "Total com desconto", reason: "Cálculo de percentual e fator de desconto com round(total, 2)." }
    ],
    miniExercises: [
      {
        id: "m05_1",
        question: "Considerando a precedência e a associatividade à esquerda em Python, qual é o valor resultante da expressão 16 / 4 * 2?",
        options: [
          "8.0",
          "2.0",
          "8",
          "2"
        ],
        correct: 0,
        explanation: "Operadores / e * têm a mesma precedência e associam da esquerda para a direita. Primeiro calcula-se 16 / 4 = 4.0, e depois 4.0 * 2 = 8.0."
      },
      {
        id: "m05_2",
        question: "Se a variável valor tem inicialmente o número 14, qual será seu valor após a execução da instrução valor %= 4?",
        options: [
          "2",
          "3",
          "3.5",
          "0"
        ],
        correct: 0,
        explanation: "valor %= 4 equivale a valor = valor % 4. Como 14 dividido por 4 é 3 com resto 2, o novo valor de valor será 2."
      }
    ]
  },
  {
    id: 6,
    aulaNumber: "Aula 06",
    title: "Lógica Booleana & Estruturas de Seleção Simples e Compostas",
    subtitle: "Operadores relacionais, and/or/not, curto-circuito, De Morgan e blocos if-else",
    slideFile: "LP_Aula06.pdf",
    badge: "Condicionais",
    summary: "Compreenda a avaliação booleana, a tabela-verdade dos operadores lógicos, o mecanismo de curto-circuito que previne erros de execução, e as estruturas if e if-else.",
    sections: [
      {
        title: "Operadores Relacionais e Lógicos",
        icon: "🔀",
        contentHtml: `
          <p>Operadores relacionais comparam dois operandos e resultam em um valor booleano (<code>True</code> ou <code>False</code>):</p>
          <div class="theory-table-wrapper">
            <table class="theory-table">
              <thead><tr><th>Operador</th><th>Significado</th><th>Exemplo</th><th>Resultado</th></tr></thead>
              <tbody>
                <tr><td><code>==</code></td><td>Igual a (dois sinais de igual!)</td><td><code>5 == 5</code></td><td><code>True</code></td></tr>
                <tr><td><code>!=</code></td><td>Diferente de</td><td><code>4 != 3</code></td><td><code>True</code></td></tr>
                <tr><td><code>&gt;</code> / <code>&lt;</code></td><td>Maior que / Menor que</td><td><code>7 &gt; 9</code></td><td><code>False</code></td></tr>
                <tr><td><code>&gt;=</code> / <code>&lt;=</code></td><td>Maior ou igual / Menor ou igual</td><td><code>10 &gt;= 10</code></td><td><code>True</code></td></tr>
              </tbody>
            </table>
          </div>
          <p>Operadores lógicos combinam expressões booleanas:</p>
          <ul>
            <li><code>and</code> (E): resulta <code>True</code> somente se <strong>ambos</strong> os lados forem verdadeiros.</li>
            <li><code>or</code> (OU): resulta <code>True</code> se <strong>pelo menos um</strong> dos lados for verdadeiro.</li>
            <li><code>not</code> (NÃO): inverte o valor booleano (<code>not True</code> vira <code>False</code>).</li>
          </ul>
        `
      },
      {
        title: "Avaliação de Curto-Circuito (Short-Circuit)",
        icon: "🔌",
        contentHtml: `
          <p>Em expressões lógicas compostas, o Python interrompe a avaliação assim que o resultado final já é matematicamente certo (Slides 24 a 27):</p>
          <div class="theory-callout">
            <p><strong>Em <code>A and B</code>:</strong> se <code>A</code> for <code>False</code>, o Python <strong>NÃO</strong> avalia <code>B</code>, pois o resultado será <code>False</code> de qualquer forma.</p>
            <p><strong>Em <code>A or B</code>:</strong> se <code>A</code> for <code>True</code>, o Python <strong>NÃO</strong> avalia <code>B</code>, pois o resultado já será <code>True</code>.</p>
            <p><strong>Aplicação protetora prática:</strong> <code>if b != 0 and (a / b &gt; 2):</code> &mdash; se <code>b</code> for zero, a divisão nunca é executada, evitando o travamento do programa por <code>ZeroDivisionError</code>!</p>
          </div>
        `
      },
      {
        title: "Estruturas de Seleção Simples e Composta",
        icon: "🌲",
        contentHtml: `
          <p>A indentação (4 espaços) define rigorosamente quais instruções pertencem ao bloco condicional (Slides 28 a 35):</p>
          <div class="theory-grid-2">
            <div class="theory-box">
              <h4>Seleção Simples (if)</h4>
              <pre class="theory-code"><code>if nota &gt;= 6.0:
    print("Aprovado")</code></pre>
              <small>Executa o bloco apenas se a condição for verdadeira.</small>
            </div>
            <div class="theory-box">
              <h4>Seleção Composta (if-else)</h4>
              <pre class="theory-code"><code>if ano % 4 == 0:
    status = "Bissexto"
else:
    status = "Comum"</code></pre>
              <small>Garante a execução de exatamente uma das duas alternativas.</small>
            </div>
          </div>
          <p><em>Destaque do Slide 34:</em> <strong>&ldquo;Nem todo if precisa de else!&rdquo;</strong> Quando uma ação só deve ser realizada em caso afirmativo, use apenas o <code>if</code> simples.</p>
        `
      }
    ],
    traceExplanation: {
      title: "Como rastrear Ramificações Condicionais na Mesa?",
      contentHtml: `
        <p>No Teste de Mesa de uma condicional:</p>
        <ol>
          <li>Na linha do <code>if &lt;condi&ccedil;&atilde;o&gt;</code>, escreva explicitamente na coluna de A&ccedil;&atilde;o se ela avaliou como <code>True</code> ou <code>False</code>.</li>
          <li>Se avaliou como <code>True</code>, o próximo passo obrigatoriamente registra a primeira linha do bloco indentado do <code>if</code>.</li>
          <li>Se avaliou como <code>False</code>, salta diretamente para a linha do <code>else:</code> ou para o comando logo após o bloco condicional.</li>
        </ol>
      `,
      tableExample: {
        columns: ["Passo", "Linha", "ano", "div4", "div100", "div400", "bissexto", "Ação / Fluxo"],
        rows: [
          ["1", "1", "2024", "-", "-", "-", "-", "Recebe ano = 2024"],
          ["2", "2", "2024", "True", "False", "False", "-", "Teste: 2024 % 4 == 0 &rarr; True"],
          ["3", "3", "2024", "True", "False", "False", "True", "bissexto = True"],
          ["4", "6", "2024", "True", "False", "False", "True", "return True"]
        ]
      }
    },
    relatedChallenges: [
      { id: 2, title: "Ano bissexto", reason: "Lógica relacional com divisores múltiplos de 4, 100 e 400." },
      { id: 3, title: "Resultado da prova", reason: "Estrutura condicional para validar notas e aprovação." }
    ],
    miniExercises: [
      {
        id: "m06_1",
        question: "Qual é o valor booleano final da expressão: not (8 > 3 and 2 == 5)?",
        options: [
          "True",
          "False",
          "None",
          "SyntaxError"
        ],
        correct: 0,
        explanation: "8 > 3 é True e 2 == 5 é False. True and False resulta em False. A negação not False inverte para True."
      },
      {
        id: "m06_2",
        question: "No trecho divisor = 0; if divisor != 0 and (50 / divisor > 2): print('OK'), o que acontecerá quando o código for executado?",
        options: [
          "O programa não gera erro nem imprime nada, graças à avaliação de curto-circuito",
          "Lança imediatamente uma exceção ZeroDivisionError",
          "Imprime 'OK' na tela",
          "Gera um erro de sintaxe por tentar dividir por zero"
        ],
        correct: 0,
        explanation: "Como divisor != 0 avalia como False, o operador and encerra a checagem imediatamente (curto-circuito) sem executar a divisão 50 / divisor."
      }
    ]
  },
  {
    id: 7,
    aulaNumber: "Aula 07",
    title: "Strings, Formatação com f-strings, Flags & Estruturas if-elif-else",
    subtitle: "Manipulação textual, f-strings, ord/chr, flags booleanas e seleção encadeada",
    slideFile: "LP_Aula07.pdf",
    badge: "Strings & Elif",
    summary: "Domine a imutabilidade das strings, formatações ricas com f-strings, códigos de caracteres ord/chr, o uso de flags booleanas para sinalizar estados e a elegância do comando elif.",
    sections: [
      {
        title: "Strings em Python e Comparação Lexicográfica",
        icon: "🔡",
        contentHtml: `
          <p>Strings são sequências imutáveis de caracteres. Operações comuns (Slides 4 a 10):</p>
          <ul>
            <li><strong>Concatenação (<code>+</code>):</strong> une duas strings gerando uma nova string: <code>"Boa" + " tarde"</code> &rarr; <code>"Boa tarde"</code>.</li>
            <li><strong>Repetição (<code>*</code>):</strong> replica a cadeia: <code>"Py" * 3</code> &rarr; <code>"PyPyPy"</code>.</li>
            <li><strong>Tabela Unicode/ASCII:</strong> <code>ord('A') = 65</code> e <code>ord('a') = 97</code>. A função inversa é <code>chr(65) = 'A'</code>.</li>
            <li><strong>Comparação:</strong> letras maiúsculas têm códigos menores que minúsculas, logo <code>'Bia' &lt; 'beatriz'</code> é <code>True</code>!</li>
          </ul>
        `
      },
      {
        title: "Formatação Moderna com f-strings",
        icon: "✨",
        contentHtml: `
          <p>As <em>f-strings</em> (strings literais formatadas) são o padrão moderno mais rápido e legível do Python (Slides 13 a 19):</p>
          <pre class="theory-code"><code>nome = "Ana"
media = 8.6666
# Formatação de float com 2 casas decimais:
print(f"Aluna {nome}, média final: {media:.2f}") # 8.67

# Alinhamento e preenchimento de campos:
print(f"{'Total:':&gt;10} R$ {150.5:&gt;8.2f}")
# Exibe: '    Total: R$   150.50'</code></pre>
        `
      },
      {
        title: "Flags (Bandeiras) Booleanas",
        icon: "🚩",
        contentHtml: `
          <p>Uma <strong>flag</strong> é uma variável booleana criada para sinalizar a ocorrência de uma situação específica ao longo do código (Slides 20 a 25):</p>
          <pre class="theory-code"><code>tem_vogal = False
for letra in palavra:
    if letra in "aeiouAEIOU":
        tem_vogal = True
        break</code></pre>
          <p>A variável <code>tem_vogal</code> guarda o estado para ser consultado posteriormente em outras decisões do programa.</p>
        `
      },
      {
        title: "Estruturas Encadeadas com o comando elif",
        icon: "🪜",
        contentHtml: `
          <p>O comando <code>elif</code> é a fusão de <code>else</code> + <code>if</code>, eliminando recuos desnecessários e tornando cadeias de decisão mutuamente excludentes muito mais limpas (Slides 29 a 33):</p>
          <pre class="theory-code"><code>if media &gt;= 7.0:
    situacao = "Aprovado"
elif media &gt;= 5.0:
    situacao = "Recuperacao"
else:
    situacao = "Reprovado"</code></pre>
        `
      }
    ],
    traceExplanation: {
      title: "Como rastrear if-elif-else no Teste de Mesa?",
      contentHtml: `
        <p>Em uma cadeia <code>if-elif-else</code>, as condições são avaliadas de cima para baixo em ordem:</p>
        <ul>
          <li>Assim que uma condição resulta em <code>True</code>, o seu bloco é executado.</li>
          <li><strong>Ponto decisivo:</strong> todas as cláusulas <code>elif</code> e o <code>else</code> seguintes são imediatamente ignorados! O fluxo salta para o fim da estrutura.</li>
        </ul>
      `,
      tableExample: {
        columns: ["Passo", "Linha", "nota", "condição", "resultado", "Ação"],
        rows: [
          ["1", "1", "6.5", "-", "-", "nota = 6.5"],
          ["2", "2", "6.5", "6.5 &gt;= 7.0 &rarr; False", "-", "Salta para elif"],
          ["3", "4", "6.5", "6.5 &gt;= 5.0 &rarr; True", "-", "Entra no bloco do elif"],
          ["4", "5", "6.5", "-", "Recuperação", "resultado = 'Recuperação'"],
          ["5", "8", "6.5", "-", "Recuperação", "Salta else e encerra"]
        ]
      }
    },
    relatedChallenges: [
      { id: 3, title: "Resultado da prova", reason: "Classificação em faixas de nota com if-elif-else." },
      { id: 5, title: "Contador de vogais", reason: "Percorrimento de caracteres em string e verificação de pertinência." }
    ],
    miniExercises: [
      {
        id: "m07_1",
        question: "Qual o texto exato produzido pela expressão f'Nota: {9.458:.2f}'?",
        options: [
          "Nota: 9.46",
          "Nota: 9.45",
          "Nota: 9.458",
          "Nota: 9.5"
        ],
        correct: 0,
        explanation: "O especificador :.2f formata o número com 2 casas decimais e arredonda a terceira casa decimal (8 arredonda 5 para cima), resultando em 'Nota: 9.46'."
      },
      {
        id: "m07_2",
        question: "Dadas as instruções: x = 15; res = ''; if x < 10: res = 'P'; elif x < 20: res = 'M'; else: res = 'G'. Qual será o valor final de res?",
        options: [
          "'M'",
          "'P'",
          "'G'",
          "''"
        ],
        correct: 0,
        explanation: "Como 15 < 10 é False, o if é ignorado. Em seguida, a condição do elif (15 < 20) é True, atribuindo 'M' a res e saltando o else."
      }
    ]
  },
  {
    id: 8,
    aulaNumber: "Aula 08",
    title: "Funções em Python, Escopo & Retorno de Valores",
    subtitle: "Modularização com def, parâmetros, retorno com return vs print e variáveis locais",
    slideFile: "LP_Aula08.pdf",
    badge: "Funções & Escopo",
    summary: "Compreenda as vantagens da abstração em funções, a diferença vital entre print() e return, o fluxo de controle de chamadas e o escopo local de variáveis na memória.",
    sections: [
      {
        title: "Declaração e Anatomia de uma Função",
        icon: "⚙️",
        contentHtml: `
          <p>Funções agrupam blocos de código reutilizáveis sob um nome significativo (Slides 11 a 17):</p>
          <pre class="theory-code"><code>def somar_valores(n1, n2):
    """Calcula e retorna a soma de dois números."""
    resultado = n1 + n2
    return resultado</code></pre>
          <ul>
            <li><code>def</code>: palavra reservada que introduz a definição da função.</li>
            <li><code>n1, n2</code>: <strong>parâmetros</strong> (variáveis que recebem dados na definição).</li>
            <li><code>somar_valores(10, 25)</code>: <strong>argumentos</strong> (valores concretos passados na chamada).</li>
          </ul>
        `
      },
      {
        title: "Retorno vs Exibição de Valor: return versus print",
        icon: "🔄",
        contentHtml: `
          <div class="theory-comparison-grid">
            <div class="theory-box is-bad">
              <h4>❌ Função com print apenas</h4>
              <pre class="theory-code"><code>def soma(a, b):
    print(a + b)

x = soma(3, 4)
# x recebe None!
# Não permite novos cálculos</code></pre>
              <small>Apenas mostra texto na tela e retorna o valor <code>None</code>.</small>
            </div>
            <div class="theory-box is-good">
              <h4>✅ Função com return</h4>
              <pre class="theory-code"><code>def soma(a, b):
    return a + b

x = soma(3, 4)
# x recebe 7!
# Pronto para ser reutilizado</code></pre>
              <small>Entrega o valor calculado para quem chamou a função.</small>
            </div>
          </div>
          <p><strong>Atenção ao Slide 27:</strong> Em Python, uma função que chega ao final sem executar nenhum comando <code>return</code> devolve implicitamente o valor especial <code>None</code>.</p>
        `
      },
      {
        title: "Escopo de Variáveis (Local versus Global)",
        icon: "🔒",
        contentHtml: `
          <p>O ciclo de vida das variáveis depende de onde foram criadas (Slides 29 a 31):</p>
          <div class="theory-callout">
            <ul>
              <li><strong>Variáveis Locais:</strong> criadas dentro do corpo da função. Só existem enquanto a função está rodando e são destruídas assim que ela termina.</li>
              <li><strong>Variáveis Globais:</strong> definidas no programa principal, fora de funções.</li>
              <li>Tentar acessar uma variável local fora da sua respectiva função provoca um <code>NameError</code>!</li>
            </ul>
          </div>
        `
      }
    ],
    traceExplanation: {
      title: "Como rastrear Chamadas de Funções no Teste de Mesa?",
      contentHtml: `
        <p>No Teste de Mesa de uma função:</p>
        <ol>
          <li>Ao encontrar a linha da chamada <code>calcular_total([10, 20], 10)</code>, anote o momento de entrada na função com os parâmetros recebendo os argumentos.</li>
          <li>A cada linha da função, monitore as variáveis locais.</li>
          <li>Ao atingir a linha do <code>return valor</code>, registre o valor devolvido e encerre o contexto da função.</li>
        </ol>
      `,
      tableExample: {
        columns: ["Passo", "Linha", "n1", "n2", "s", "Retorno / Chamador"],
        rows: [
          ["1", "1", "10", "25", "-", "Entrada na função soma(10, 25)"],
          ["2", "2", "10", "25", "35", "s = n1 + n2"],
          ["3", "3", "10", "25", "35", "return 35 (devolve ao chamador)"]
        ]
      }
    },
    relatedChallenges: [
      { id: 1, title: "Total com desconto", reason: "Estrutura padrão de função com cálculo e retorno numérico." },
      { id: 2, title: "Ano bissexto", reason: "Função com múltiplos argumentos e retorno booleano." }
    ],
    miniExercises: [
      {
        id: "m08_1",
        question: "Dada a função def dobrar(x): print(x * 2). Se o programa executar a linha resposta = dobrar(5), qual será o valor armazenado na variável resposta?",
        options: [
          "None",
          "10",
          "5",
          "SyntaxError"
        ],
        correct: 0,
        explanation: "Como a função dobrar utiliza print e não possui instrução return, ela não devolve nenhum dado concreto. Portanto, resposta recebe o valor padrão None."
      },
      {
        id: "m08_2",
        question: "O que acontece se uma linha de código for posicionada logo após o comando return dentro do mesmo bloco de uma função?",
        options: [
          "Essa linha nunca será executada, pois o return encerra imediatamente a função",
          "O interpretador Python lança um erro de compilação",
          "A linha é executada antes do retorno",
          "A função é executada duas vezes"
        ],
        correct: 0,
        explanation: "O comando return finaliza imediatamente a execução da função e devolve o controle ao chamador. Qualquer instrução abaixo dele no mesmo fluxo se torna inalcançável."
      }
    ]
  },
  {
    id: 9,
    aulaNumber: "Aula 09",
    title: "Laço While, Contadores, Acumuladores e Sentinelas",
    subtitle: "Repetição indefinida, variáveis de controle, somatórios e prevenção de loops infinitos",
    slideFile: "LP_Aula09.pdf",
    badge: "Laço While",
    summary: "Domine a estrutura de repetição while, o papel indispensável das variáveis contadoras e acumuladoras, o valor sentinela de parada e como evitar o perigo de um loop infinito.",
    sections: [
      {
        title: "A Estrutura de Repetição While",
        icon: "🔁",
        contentHtml: `
          <p>O <code>while</code> é utilizado quando <strong>não sabemos previamente</strong> quantas vezes o bloco precisará ser repetido, dependendo de uma condição que muda durante a execução (Slides 10 a 13):</p>
          <pre class="theory-code"><code># Os três passos essenciais de um laço saudável:
x = 1             # 1. Inicialização da variável de controle
while x &lt;= 5:     # 2. Teste da condição de continuação
    print(x)
    x += 1        # 3. Atualização (incremento) obrigatória!</code></pre>
        `
      },
      {
        title: "Contadores versus Acumuladores",
        icon: "🧮",
        contentHtml: `
          <div class="theory-comparison-grid">
            <div class="theory-box">
              <h4>Variável Contadora (Slides 14-18)</h4>
              <p>Conta <strong>quantas vezes</strong> um evento ocorreu. Soma uma quantidade fixa constante (geralmente <code>+ 1</code>):</p>
              <code>qtd_pares += 1</code>
            </div>
            <div class="theory-box">
              <h4>Variável Acumuladora (Slides 19-24)</h4>
              <p>Acumula um <strong>total variável</strong> somando diferentes quantias a cada volta do laço:</p>
              <code>soma_total += preco_item</code>
            </div>
          </div>
        `
      },
      {
        title: "Sentinelas e o Perigo do Loop Infinito",
        icon: "🛑",
        contentHtml: `
          <p><strong>Valor Sentinela:</strong> é um valor convencional especial inserido para sinalizar o fim da leitura (por exemplo: digitar <code>-1</code> para parar a entrada de salários).</p>
          <div class="theory-callout">
            <p><strong>Loop Infinito (Slide 27):</strong> ocorre quando a condição do <code>while</code> nunca se torna <code>False</code>. A causa mais comum é esquecer de atualizar a variável de controle no final do corpo do laço (ex: esquecer a linha <code>i += 1</code>).</p>
          </div>
        `
      }
    ],
    traceExplanation: {
      title: "Como rastrear Laços While no Teste de Mesa?",
      contentHtml: `
        <p>No Teste de Mesa do laço <code>while</code>:</p>
        <ul>
          <li>Cada volta do laço produz linhas dedicadas: primeiro avalia a condição, depois altera as variáveis do corpo.</li>
          <li>Acompanhe com atenção as colunas do <strong>contador</strong> e do <strong>acumulador</strong>.</li>
          <li>Ao final, quando a condição se torna <code>False</code>, registre a checagem que determina a saída do laço.</li>
        </ul>
      `,
      tableExample: {
        columns: ["Passo", "Linha", "n", "soma", "condição (n <= 3)", "Ação"],
        rows: [
          ["1", "1", "1", "0", "-", "Inicialização: n = 1, soma = 0"],
          ["2", "2", "1", "0", "1 &lt;= 3 &rarr; True", "Entra no laço"],
          ["3", "3", "1", "1", "True", "soma &larr; 0 + 1 = 1"],
          ["4", "4", "2", "1", "True", "n &larr; 1 + 1 = 2"],
          ["5", "2", "2", "1", "2 &lt;= 3 &rarr; True", "Entra no laço"],
          ["6", "3", "2", "3", "True", "soma &larr; 1 + 2 = 3"],
          ["7", "4", "3", "3", "True", "n &larr; 2 + 1 = 3"],
          ["8", "2", "3", "3", "3 &lt;= 3 &rarr; True", "Entra no laço"],
          ["9", "3", "3", "6", "True", "soma &larr; 3 + 3 = 6"],
          ["10", "4", "4", "6", "True", "n &larr; 3 + 1 = 4"],
          ["11", "2", "4", "6", "4 &lt;= 3 &rarr; False", "Condição falsa: encerra laço"]
        ]
      }
    },
    relatedChallenges: [
      { id: 4, title: "Soma dos pares", reason: "Uso de laço com acumulador somando números pares e contagem." }
    ],
    miniExercises: [
      {
        id: "m09_1",
        question: "Dadas as instruções: c = 1; total = 0; while c <= 4: total += c; c += 1. Ao final da repetição, qual será o valor de total?",
        options: [
          "10",
          "4",
          "6",
          "15"
        ],
        correct: 0,
        explanation: "As iterações acumulam: 1 + 2 + 3 + 4 = 10. O laço encerra quando c passa a valer 5."
      },
      {
        id: "m09_2",
        question: "Qual das seguintes situações provocará obrigatoriamente um loop infinito em um laço while?",
        options: [
          "A condição de teste sempre avaliar como True porque a variável de controle nunca é atualizada dentro do laço",
          "Utilizar a instrução break dentro do bloco",
          "Declarar a variável acumuladora com valor zero antes do laço",
          "Colocar uma instrução print dentro do laço"
        ],
        correct: 0,
        explanation: "Se a variável que controla a condição não for incrementada/modificada, a condição de parada nunca será alcançada, mantendo o laço rodando infinitamente."
      }
    ]
  },
  {
    id: 10,
    aulaNumber: "Aula 10",
    title: "Controle de Repetição: Break, Continue, While True & Laços Aninhados",
    subtitle: "Comandos de interrupção, simulação de do-while e repetições dentro de repetições",
    slideFile: "LP_Aula10.pdf",
    badge: "Break & Aninhados",
    summary: "Aprenda a controlar o fluxo dos laços com break e continue, a técnica do while True para validação robusta de entradas e a dinâmica dos laços aninhados.",
    sections: [
      {
        title: "Os Comandos break e continue",
        icon: "🎛️",
        contentHtml: `
          <div class="theory-comparison-grid">
            <div class="theory-box">
              <h4>Comando break (Slides 6 a 10)</h4>
              <p>Encerra <strong>imediatamente</strong> o loop mais interno em que está inserido. O fluxo salta para fora do bloco do laço:</p>
              <pre class="theory-code"><code>while True:
    dado = input("Digite 'sair': ")
    if dado == 'sair':
        break # Interrompe o loop</code></pre>
            </div>
            <div class="theory-box">
              <h4>Comando continue (Slides 11 a 13)</h4>
              <p>Interrompe apenas a <strong>iteração atual</strong> e salta imediatamente para o teste da próxima volta:</p>
              <pre class="theory-code"><code>for n in range(10):
    if n % 2 == 0:
        continue # Pula números pares
    print(n)     # Só imprime ímpares</code></pre>
            </div>
          </div>
        `
      },
      {
        title: "Validação de Entrada com while True",
        icon: "🛡️",
        contentHtml: `
          <p>O padrão <code>while True:</code> obriga a execução do bloco pelo menos uma vez, simulando com precisão a estrutura <code>repeat ... until</code> de outras linguagens (Slides 14 a 20):</p>
          <pre class="theory-code"><code>while True:
    nota = float(input("Digite uma nota entre 0 e 10: "))
    if 0.0 &lt;= nota &lt;= 10.0:
        break  # Entrada válida: sai do laço!
    print("Nota inválida! Tente novamente.")</code></pre>
        `
      },
      {
        title: "Laços Aninhados (Loops dentro de Loops)",
        icon: "🕰️",
        contentHtml: `
          <p>Laços aninhados ocorrem quando uma repetição está contida no corpo de outra. O exemplo clássico do slide 22 é o <strong>Relógio Digital</strong>:</p>
          <div class="theory-callout">
            <p>Para cada <strong>1 avanço</strong> do laço de Horas, o laço de Minutos completa <strong>60 voltas</strong> (0 a 59). E para cada minuto, os Segundos completam outras 60 voltas.</p>
            <p><strong>Regra Crítica:</strong> o contador do laço interno deve ser devidamente reinicializado a cada passagem do laço externo!</p>
          </div>
        `
      }
    ],
    traceExplanation: {
      title: "Como rastrear Laços Aninhados no Teste de Mesa?",
      contentHtml: `
        <p>No Teste de Mesa de laços aninhados:</p>
        <ul>
          <li>Crie colunas separadas para a variável externa (ex: <code>i</code> ou <code>linha</code>) e interna (ex: <code>j</code> ou <code>coluna</code>).</li>
          <li>Note que para cada passo de <code>i</code>, <code>j</code> executa seu ciclo completo de zero até o limite antes que <code>i</code> avance.</li>
        </ul>
      `,
      tableExample: {
        columns: ["Passo", "Linha", "i (externo)", "j (interno)", "Produto (i * j)", "Ação"],
        rows: [
          ["1", "1", "1", "-", "-", "i assume 1"],
          ["2", "2", "1", "1", "1", "j assume 1 &rarr; i*j = 1"],
          ["3", "2", "1", "2", "2", "j assume 2 &rarr; i*j = 2"],
          ["4", "1", "2", "-", "-", "i avança para 2 (j reseta)"],
          ["5", "2", "2", "1", "2", "j assume 1 &rarr; i*j = 2"],
          ["6", "2", "2", "2", "4", "j assume 2 &rarr; i*j = 4"]
        ]
      }
    },
    relatedChallenges: [
      { id: 7, title: "Maior trecho crescente", reason: "Análise de sequências com controle de parada e reset de contadores." },
      { id: 8, title: "Soma das diagonais", reason: "Percorrimento de matriz bidimensional com laços aninhados." }
    ],
    miniExercises: [
      {
        id: "m10_1",
        question: "Qual é o efeito do comando continue quando executado dentro do corpo de um laço for?",
        options: [
          "Interrompe a volta atual e salta imediatamente para o próximo item da iteração",
          "Finaliza o laço completamente saindo do bloco",
          "Reinicia o laço a partir do primeiro item",
          "Provoca um encerramento forçado do programa"
        ],
        correct: 0,
        explanation: "O continue aborta apenas a iteração corrente, ignorando as linhas restantes daquela volta e avançando para a próxima iteração."
      },
      {
        id: "m10_2",
        question: "Se um laço externo repete 4 vezes e, para cada repetição externa, um laço interno executa 5 vezes, quantas vezes o bloco mais interno será executado no total?",
        options: [
          "20 vezes",
          "9 vezes",
          "4 vezes",
          "25 vezes"
        ],
        correct: 0,
        explanation: "Em laços aninhados, a quantidade de execuções do bloco interno é o produto das repetições: 4 * 5 = 20 vezes."
      }
    ]
  },
  {
    id: 11,
    aulaNumber: "Aula 11",
    title: "Tratamento de Exceções em Python (try / except / finally)",
    subtitle: "Hierarquia de erros, blocos de proteção, else, finally e programação defensiva",
    slideFile: "LP_Aula11.pdf",
    badge: "Exceções",
    summary: "Entenda o conceito de exceções através da analogia do elevador, a estrutura completa try-except-else-finally, a hierarquia de tipos de erros e como tratar falhas com elegância.",
    sections: [
      {
        title: "O que são Exceções e a Analogia do Elevador",
        icon: "🚨",
        contentHtml: `
          <p>Uma <strong>exceção</strong> é um evento que ocorre durante a execução de um programa que quebra o fluxo normal de instruções (Slides 2 e 3):</p>
          <div class="theory-callout">
            <p><strong>A analogia do elevador (Slide 2):</strong> Um elevador sem sensor de porta tentará fechar a porta a todo custo; se alguém estiver no meio, haverá um acidente grave. Um elevador com sensor detecta o obstáculo (a exceção) e reabre suavemente. O tratamento de exceções é o &ldquo;sensor de segurança&rdquo; do seu código!</p>
          </div>
        `
      },
      {
        title: "A Estrutura Completa do Bloco try",
        icon: "🛡️",
        contentHtml: `
          <p>O Python possui quatro palavras-chave coordenadas para proteção de código (Slides 12 a 14):</p>
          <div class="theory-table-wrapper">
            <table class="theory-table">
              <thead><tr><th>Cláusula</th><th>Quando é executada?</th><th>Finalidade típica</th></tr></thead>
              <tbody>
                <tr><td><code>try:</code></td><td>Sempre executado primeiro</td><td>Contém o código arriscado que pode falhar</td></tr>
                <tr><td><code>except Erro:</code></td><td>Apenas se o erro especificado ocorrer no <code>try</code></td><td>Trata a falha, exibe aviso e evita o colapso</td></tr>
                <tr><td><code>else:</code></td><td>Apenas se <strong>nenhum erro</strong> ocorreu no <code>try</code></td><td>Continua o fluxo normal com segurança</td></tr>
                <tr><td><code>finally:</code></td><td><strong>Sempre executado</strong> (com ou sem erro!)</td><td>Libera recursos (fechar arquivos, encerrar conexões)</td></tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        title: "Hierarquia e Exceções Comuns em Python",
        icon: "🌳",
        contentHtml: `
          <p>Em Python, todos os erros são classes derivadas de <code>BaseException &rarr; Exception</code> (Slides 4 a 9):</p>
          <ul>
            <li><code>ValueError</code>: valor incompatível (ex: converter <code>int("abc")</code>).</li>
            <li><code>ZeroDivisionError</code>: tentativa de divisão por zero (<code>10 / 0</code>).</li>
            <li><code>TypeError</code>: operação aplicada a tipos incompatíveis (<code>"texto" + 5</code>).</li>
            <li><code>IndexError</code>: tentativa de acesso a índice inexistente em lista (<code>nums[100]</code>).</li>
          </ul>
          <p><em>Dica de ouro do Slide 10:</em> com múltiplos <code>except</code>, ordene sempre do <strong>mais específico para o mais genérico</strong>!</p>
        `
      }
    ],
    traceExplanation: {
      title: "Como se comportam Exceções no Teste de Mesa?",
      contentHtml: `
        <p>No rastreamento de um bloco <code>try ... except</code>:</p>
        <ul>
          <li>Se a linha que causa o erro for atingida no <code>try</code>, as linhas restantes daquele bloco <code>try</code> são <strong>imediatamente descartadas</strong>.</li>
          <li>O fluxo de controle salta sem escalas para o bloco <code>except</code> compatível.</li>
          <li>Ao final do tratamento, se houver o bloco <code>finally</code>, ele é obrigatoriamente registrado antes de prosseguir.</li>
        </ul>
      `,
      tableExample: {
        columns: ["Passo", "Linha", "x", "y", "resultado", "Estado / Exceção"],
        rows: [
          ["1", "1", "10", "0", "-", "Valores fornecidos"],
          ["2", "3", "10", "0", "-", "try: inicia bloco protegido"],
          ["3", "4", "10", "0", "-", "Falha: 10 / 0 &rarr; Dispara ZeroDivisionError!"],
          ["4", "6", "10", "0", "Erro", "except ZeroDivisionError captura a falha"],
          ["5", "8", "10", "0", "Erro", "finally: executado com sucesso"]
        ]
      }
    },
    relatedChallenges: [
      { id: 1, title: "Total com desconto", reason: "Tratamento defensivo contra argumentos vazios ou percentuais negativos." },
      { id: 9, title: "Busca binária", reason: "Tratamento de limites de índices na lista." }
    ],
    miniExercises: [
      {
        id: "m11_1",
        question: "Em uma estrutura try ... except ... finally em Python, em qual cenário o bloco finally é executado?",
        options: [
          "Sempre, independentemente de ter ocorrido uma exceção ou não",
          "Apenas se nenhuma exceção tiver ocorrido no bloco try",
          "Apenas se o bloco except tiver capturado um erro",
          "Somente se o programa tiver sido encerrado pelo usuário"
        ],
        correct: 0,
        explanation: "O bloco finally é garantido de ser executado em todas as circunstâncias, mesmo havendo exceção, captura ou comandos de retorno."
      },
      {
        id: "m11_2",
        question: "Qual tipo de exceção é lançada pelo interpretador Python ao tentar executar a linha de comando int('impacta')?",
        options: [
          "ValueError",
          "TypeError",
          "ZeroDivisionError",
          "IndexError"
        ],
        correct: 0,
        explanation: "int() espera uma string com caracteres numéricos válidos. Ao receber 'impacta', que não representa um número, a função lança ValueError."
      }
    ]
  },
  {
    id: 12,
    aulaNumber: "Aula 12",
    title: "Sequências em Python & Estrutura de Repetição For",
    subtitle: "Listas, tuplas, range, mutabilidade, indexação positiva/negativa e laço for",
    slideFile: "LP_Aula12.pdf",
    badge: "Sequências & For",
    summary: "Descubra como o Python estrutura dados em sequências, as peculiaridades dos índices negativos, a diferença entre sequências mutáveis e imutáveis, e o poder do laço for com range().",
    sections: [
      {
        title: "O que são Sequências e Como Indexá-las?",
        icon: "📚",
        contentHtml: `
          <p>Uma sequência é uma coleção ordenada de itens acessíveis por índices numéricos (Slides 6 a 9):</p>
          <div class="theory-table-wrapper">
            <table class="theory-table">
              <thead><tr><th>Item</th><th>'P'</th><th>'y'</th><th>'t'</th><th>'h'</th><th>'o'</th><th>'n'</th></tr></thead>
              <tbody>
                <tr><td><strong>Índice Positivo</strong></td><td><code>0</code></td><td><code>1</code></td><td><code>2</code></td><td><code>3</code></td><td><code>4</code></td><td><code>5</code></td></tr>
                <tr><td><strong>Índice Negativo</strong></td><td><code>-6</code></td><td><code>-5</code></td><td><code>-4</code></td><td><code>-3</code></td><td><code>-2</code></td><td><code>-1</code></td></tr>
              </tbody>
            </table>
          </div>
          <p><strong>Particularidade do Python:</strong> <code>seq[-1]</code> acessa diretamente o último elemento da sequência!</p>
        `
      },
      {
        title: "Tipos de Sequências e Mutabilidade",
        icon: "🧬",
        contentHtml: `
          <div class="theory-grid-3">
            <div class="theory-box">
              <h4>Listas (<code>list</code>)</h4>
              <p>Delimitadas por <code>[ ]</code>. São <strong>mutáveis</strong> (seus elementos podem ser alterados diretamente na memória) e heterogêneas.</p>
              <code>nomes = ['Ana', 'Leo']</code>
            </div>
            <div class="theory-box">
              <h4>Tuplas (<code>tuple</code>)</h4>
              <p>Delimitadas por <code>( )</code>. São <strong>imutáveis</strong> (uma vez criadas, nenhum item pode ser alterado ou removido).</p>
              <code>ponto = (10, 20)</code>
            </div>
            <div class="theory-box">
              <h4>Intervalos (<code>range</code>)</h4>
              <p>Sequência imutável e homogênea geradora de números inteiros sob demanda.</p>
              <code>range(1, 10, 2)</code>
            </div>
          </div>
          <p><em>Atenção ao Slide 21:</em> O intervalo <code>range(inicio, fim, passo)</code> é <strong>aberto à direita</strong> (o valor <code>fim</code> nunca é incluído!). Ex: <code>range(1, 5)</code> gera <code>1, 2, 3, 4</code>.</p>
        `
      },
      {
        title: "Estrutura de Repetição Definida: O Laço For",
        icon: "🔄",
        contentHtml: `
          <p>O <code>for</code> é a estrutura ideal quando sabemos de antemão a sequência ou quantidade de repetições (Slides 28 a 33):</p>
          <pre class="theory-code"><code># 1. Percorrimento direto por itens:
for fruta in ['maçã', 'banana', 'uva']:
    print(fruta)

# 2. Percorrimento por posições (índices):
for i in range(len(lista)):
    print(i, lista[i])

# 3. Uso do sublinhado (_) quando o índice é irrelevante:
for _ in range(5):
    print("Impacta")</code></pre>
        `
      }
    ],
    traceExplanation: {
      title: "Como rastrear o Laço For no Teste de Mesa?",
      contentHtml: `
        <p>No Teste de Mesa do laço <code>for item in sequencia:</code>:</p>
        <ul>
          <li>A cada nova iteração, a coluna da variável do laço (<code>item</code>) recebe automaticamente o próximo elemento da coleção.</li>
          <li>Não há necessidade de somar manualmente <code>+ 1</code>: o iterador avança sozinho a cada passo.</li>
          <li>Quando a sequência não tem mais itens, a saída do laço é anotada.</li>
        </ul>
      `,
      tableExample: {
        columns: ["Passo", "Linha", "item", "total", "Ação / Explicação"],
        rows: [
          ["1", "1", "-", "0", "total inicializado com 0"],
          ["2", "2", "10", "0", "for recebe 1º elemento da lista [10, 20, 30]"],
          ["3", "3", "10", "10", "total &larr; 0 + 10 = 10"],
          ["4", "2", "20", "10", "for recebe 2º elemento (20)"],
          ["5", "3", "20", "30", "total &larr; 10 + 20 = 30"],
          ["6", "2", "30", "30", "for recebe 3º elemento (30)"],
          ["7", "3", "30", "60", "total &larr; 30 + 30 = 60"],
          ["8", "2", "-", "60", "Lista esgotada: sai do laço for"]
        ]
      }
    },
    relatedChallenges: [
      { id: 4, title: "Soma dos pares", reason: "Percorrimento de lista com laço for e teste condicional de paridade." },
      { id: 7, title: "Maior trecho crescente", reason: "Varredura de itens por índices adjacentes for i in range(1, len(nums))." }
    ],
    miniExercises: [
      {
        id: "m12_1",
        question: "Quais são exatamente os elementos produzidos ao converter a instrução list(range(3, 11, 3))?",
        options: [
          "[3, 6, 9]",
          "[3, 6, 9, 11]",
          "[3, 6, 9, 12]",
          "[0, 3, 6, 9]"
        ],
        correct: 0,
        explanation: "O range começa em 3 e pula de 3 em 3: 3, 6, 9. Como o limite final 11 é exclusivo, o próximo valor (12) não entra na lista."
      },
      {
        id: "m12_2",
        question: "Dada a lista valores = [100, 200, 300, 400], qual item é acessado pela instrução valores[-2] em Python?",
        options: [
          "300",
          "200",
          "400",
          "-200"
        ],
        correct: 0,
        explanation: "Índices negativos contam a partir do fim: valores[-1] é 400 e valores[-2] é 300."
      }
    ]
  },
  {
    id: 13,
    aulaNumber: "Aula 13",
    title: "Operações em Sequências: Fatiamento, Métodos de Listas & Desempacotamento",
    subtitle: "Operadores in, slicing, append, pop, split, join e desempacotamento de variáveis",
    slideFile: "LP_Aula13.pdf",
    badge: "Fatiamento & Métodos",
    summary: "Aprofunde-se no poder das sequências com fatiamento [inicio:fim:passo], funções integradas (len, min, max, sum), métodos mutáveis (append, pop, remove) e manipulações de strings.",
    sections: [
      {
        title: "Operações Comuns em Sequências",
        icon: "🪓",
        contentHtml: `
          <p>Operações universais que funcionam em strings, tuplas e listas (Slides 11 a 24):</p>
          <ul>
            <li><strong>Pertinência (<code>in</code> e <code>not in</code>):</strong> verifica se o elemento está presente: <code>'a' in 'banana'</code> &rarr; <code>True</code>.</li>
            <li><strong>Concatenação (<code>+</code>):</strong> une sequências gerando um <em>novo objeto</em>.</li>
            <li><strong>Repetição (<code>*</code>):</strong> gera repetições sem alterar os originais.</li>
            <li><strong>Funções de agregação:</strong> <code>len(s)</code>, <code>sum(s)</code>, <code>min(s)</code>, <code>max(s)</code>.</li>
            <li><strong>Busca e Contagem:</strong> <code>s.index(valor)</code> e <code>s.count(valor)</code>.</li>
          </ul>
        `
      },
      {
        title: "A Arte do Fatiamento (Slicing)",
        icon: "🍰",
        contentHtml: `
          <p>O fatiamento extrai sub-sequências utilizando a sintaxe <code>seq[inicio : fim : passo]</code> (Slides 19 e 20):</p>
          <pre class="theory-code"><code>frase = "Programacao"
print(frase[0:7])    # "Program" (índice 7 é exclusivo!)
print(frase[7:])     # "acao"    (do 7 até o final)
print(frase[:])      # Cópia rasa completa da sequência
print(frase[::-1])   # "oacamargorP" (inversão com passo negativo!)</code></pre>
        `
      },
      {
        title: "Métodos de Modificação em Listas",
        icon: "✏️",
        contentHtml: `
          <p>Listas são objetos mutáveis e oferecem métodos com efeitos colaterais diretos (Slides 26 a 30):</p>
          <div class="theory-table-wrapper">
            <table class="theory-table">
              <thead><tr><th>Operação</th><th>O que faz?</th><th>Modifica original?</th></tr></thead>
              <tbody>
                <tr><td><code>lista.append(x)</code></td><td>Adiciona o item <code>x</code> no final da lista</td><td>Sim</td></tr>
                <tr><td><code>lista.pop(i)</code></td><td>Remove e <strong>retorna</strong> o item no índice <code>i</code> (padrão: último)</td><td>Sim</td></tr>
                <tr><td><code>del lista[i]</code></td><td>Deleta o item no índice <code>i</code> da memória</td><td>Sim</td></tr>
                <tr><td><code>lista[i] = novo</code></td><td>Substitui o valor na posição <code>i</code></td><td>Sim</td></tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        title: "Desempacotamento de Sequências",
        icon: "📦",
        contentHtml: `
          <p>Permite distribuir os itens de uma sequência em variáveis individuais em uma única instrução (Slides 34 a 37):</p>
          <pre class="theory-code"><code>dia, mes, ano = [10, "Novembro", 2026]
# Métodos especiais de string: split e join
dados = "Impacta;Python;2026".split(";") # Gera lista
nova_str = " - ".join(dados)             # Junta com separador</code></pre>
        `
      }
    ],
    traceExplanation: {
      title: "Como rastrear Métodos Mutáveis no Teste de Mesa?",
      contentHtml: `
        <p>No Teste de Mesa com métodos como <code>append()</code> ou <code>pop()</code>:</p>
        <ul>
          <li>Na coluna da lista, registre a representação exata dos colchetes com os elementos atualizados.</li>
          <li>Ao realizar <code>item = lista.pop()</code>, anote simultaneamente a diminuição da lista e o novo valor armazenado na coluna <code>item</code>.</li>
        </ul>
      `,
      tableExample: {
        columns: ["Passo", "Linha", "lista", "novo_item", "item_removido", "Ação"],
        rows: [
          ["1", "1", "[10, 20]", "-", "-", "Lista inicial"],
          ["2", "2", "[10, 20, 30]", "30", "-", "lista.append(30)"],
          ["3", "3", "[10, 20]", "-", "30", "item_removido = lista.pop()"]
        ]
      }
    },
    relatedChallenges: [
      { id: 5, title: "Contador de vogais", reason: "Uso de operador de pertinência in com fatiamento e cadeias de caracteres." },
      { id: 6, title: "Remover repetidos", reason: "Construção de nova lista com verificação de elementos com not in e append." }
    ],
    miniExercises: [
      {
        id: "m13_1",
        question: "Dada a lista linguagens = ['C', 'Java', 'Python', 'Go', 'Rust'], qual sublista é devolvida pela fatia linguagens[1:4]?",
        options: [
          "['Java', 'Python', 'Go']",
          "['C', 'Java', 'Python']",
          "['Java', 'Python', 'Go', 'Rust']",
          "['Python', 'Go']"
        ],
        correct: 0,
        explanation: "A fatia inicia no índice 1 ('Java') e vai até o índice 4 exclusivo, incluindo os índices 1, 2 e 3: ['Java', 'Python', 'Go']."
      },
      {
        id: "m13_2",
        question: "Qual instrução remove o último item de uma lista mutável e ao mesmo tempo retorna esse item para ser guardado em uma variável?",
        options: [
          "ultimo = lista.pop()",
          "ultimo = del lista[-1]",
          "ultimo = lista.remove()",
          "ultimo = lista.clear()"
        ],
        correct: 0,
        explanation: "O método pop() retira o item do final da lista e o devolve como resultado da operação, permitindo atribuição imediata a uma variável."
      }
    ]
  },
  {
    id: 14,
    aulaNumber: "Aula 14",
    title: "Matrizes, Tabelas Bidimensionais & Cópias de Objetos (Rasa vs Profunda)",
    subtitle: "Listas aninhadas, coordenadas [l][c], aliasing, copy(), deepcopy() e argumentos mutáveis padrão",
    slideFile: "LP_Aula14.pdf",
    badge: "Matrizes & Cópias",
    summary: "Domine a representação de matrizes em listas aninhadas, os perigos do compartilhamento de memória (aliasing), a diferença vital entre cópia rasa e profunda, e o risco de listas como argumentos padrão.",
    sections: [
      {
        title: "Matrizes e Tabelas como Sequências Aninhadas",
        icon: "▦",
        contentHtml: `
          <p>Em Python, matrizes são representadas naturalmente como <strong>listas de listas</strong> (Slides 5 a 11):</p>
          <pre class="theory-code"><code># Matriz 3x3 de exemplo:
matriz = [
    [1, 2, 3],  # Linha 0
    [4, 5, 6],  # Linha 1
    [7, 8, 9]   # Linha 2
]
# Acesso a um elemento específico: matriz[linha][coluna]
print(matriz[1][2]) # Linha 1, Coluna 2 &rarr; 6</code></pre>
          <p>Percorrimento clássico com dois laços aninhados:</p>
          <pre class="theory-code"><code>for i in range(len(matriz)):
    for j in range(len(matriz[i])):
        print(f"Elemento [{i}][{j}] = {matriz[i][j]}")</code></pre>
        `
      },
      {
        title: "Cópia de Objetos: Atribuição vs Cópia Rasa vs Cópia Profunda",
        icon: "🧬",
        contentHtml: `
          <p>Um dos temas conceituais mais importantes de Python (Slides 27 a 32):</p>
          <div class="theory-table-wrapper">
            <table class="theory-table">
              <thead><tr><th>Tipo de Operação</th><th>Código</th><th>O que acontece na memória?</th></tr></thead>
              <tbody>
                <tr>
                  <td><strong>Atribuição Simples (Alias)</strong></td>
                  <td><code>b = a</code></td>
                  <td><strong>NÃO gera cópia!</strong> Ambas as variáveis apontam para exatamente o <em>mesmo endereço de memória</em>. Alterar <code>b</code> altera <code>a</code>!</td>
                </tr>
                <tr>
                  <td><strong>Cópia Rasa (Shallow Copy)</strong></td>
                  <td><code>b = a.copy()</code> ou <code>b = a[:]</code></td>
                  <td>Cria uma nova lista externa. Porém, se houver listas aninhadas internas, elas <em>continuam compartilhadas</em>!</td>
                </tr>
                <tr>
                  <td><strong>Cópia Profunda (Deep Copy)</strong></td>
                  <td><code>import copy<br>b = copy.deepcopy(a)</code></td>
                  <td>Duplica <strong>recursivamente todos os níveis</strong> de objetos. Alterações em <code>b</code> nunca afetam <code>a</code> em nenhum nível.</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        title: "O Perigo dos Argumentos Padrão Mutáveis",
        icon: "⚠️",
        contentHtml: `
          <div class="theory-callout">
            <p><strong>Armadilha clássica dos slides (Slides 42 a 46):</strong> Ao definir <code>def adicionar(item, lista=[]):</code>, a lista padrão é criada <strong>uma única vez</strong> no momento em que a função é carregada! Chamadas subsequentes acumularão itens na mesma lista compartilhada.</p>
            <p><strong>A solução canônica ensinada pelo professor:</strong></p>
            <pre class="theory-code"><code>def adicionar(item, lista=None):
    if lista is None:
        lista = [] # Cria uma nova lista para cada chamada
    lista.append(item)
    return lista</code></pre>
          </div>
        `
      }
    ],
    traceExplanation: {
      title: "Como rastrear Matrizes e Diagonais no Teste de Mesa?",
      contentHtml: `
        <p>No Teste de Mesa de matrizes bidimensionais:</p>
        <ul>
          <li>Crie colunas para as coordenadas: linha <code>i</code> e coluna <code>j</code>.</li>
          <li>Ao calcular a <strong>Diagonal Principal</strong>, observe a propriedade matemática fundamental onde <code>i == j</code>: posições <code>[0][0]</code>, <code>[1][1]</code>, <code>[2][2]</code>.</li>
          <li>Ao calcular a <strong>Diagonal Secundária</strong> em matriz $N \times N$, a coluna correspondente é obtida por <code>j = N - 1 - i</code>.</li>
        </ul>
      `,
      tableExample: {
        columns: ["Passo", "Linha", "i", "j", "matriz[i][j]", "diag_principal", "Ação"],
        rows: [
          ["1", "1", "-", "-", "-", "0", "Inicializa diag_principal = 0"],
          ["2", "2", "0", "0", "1", "1", "i == j (0,0): soma 1"],
          ["3", "2", "1", "1", "5", "6", "i == j (1,1): soma 5 &rarr; total 6"],
          ["4", "2", "2", "2", "9", "15", "i == j (2,2): soma 9 &rarr; total 15"]
        ]
      }
    },
    relatedChallenges: [
      { id: 8, title: "Soma das diagonais", reason: "Percorrimento de matriz quadrada e soma dos elementos das diagonais principal e secundária." },
      { id: 6, title: "Remover repetidos", reason: "Preservação de listas sem efeitos colaterais." }
    ],
    miniExercises: [
      {
        id: "m14_1",
        question: "Dada a matriz m = [[10, 20], [30, 40], [50, 60]], qual instrução em Python acessa diretamente o elemento de valor 40?",
        options: [
          "m[1][1]",
          "m[1][0]",
          "m[2][1]",
          "m[0][1]"
        ],
        correct: 0,
        explanation: "Linha 0 é [10, 20], linha 1 é [30, 40]. Na linha 1, o elemento 40 está na coluna de índice 1, logo m[1][1]."
      },
      {
        id: "m14_2",
        question: "Dada a instrução: a = [[1, 2]]; b = a.copy(); b[0][0] = 99. Qual será o valor de a[0][0] após a alteração de b?",
        options: [
          "99, pois a.copy() faz cópia rasa e as listas internas continuam apontando para o mesmo objeto",
          "1, pois a lista foi copiada e está totalmente isolada",
          "None, pois o Python apaga a referência original",
          "Gera um erro de atribuição inválida"
        ],
        correct: 0,
        explanation: "A cópia rasa (shallow copy) duplica apenas o contêiner externo. As listas aninhadas internas continuam sendo o mesmo objeto compartilhado na memória."
      }
    ]
  },
  {
    id: 15,
    aulaNumber: "Aula 15",
    title: "Algoritmos de Busca (Linear e Binária) & Ordenação (Bubble Sort)",
    subtitle: "Busca sequencial, busca binária O(log n), ordenação por bolhas, estabilidade e sorted()",
    slideFile: "LP_Aula15.pdf",
    badge: "Busca & Ordenação",
    summary: "Domine os algoritmos clássicos de busca linear e binária, entenda a técnica de empurrar máximos do Bubble Sort, a análise de complexidade e o uso de sorted() vs list.sort().",
    sections: [
      {
        title: "Algoritmos de Busca: Linear versus Binária",
        icon: "🔍",
        contentHtml: `
          <div class="theory-comparison-grid">
            <div class="theory-box">
              <h4>Busca Linear (Sequencial)</h4>
              <p>Percorre item a item do início ao fim (Slide 27). Funciona em listas não ordenadas. No pior caso, testa todos os $N$ itens ($O(N)$).</p>
            </div>
            <div class="theory-box">
              <h4>Busca Binária (Slides 29 e 30)</h4>
              <p><strong>PRÉ-REQUISITO:</strong> A lista DEVE estar PREVIAMENTE ORDENADA!</p>
              <p>Divide o espaço de busca pela metade a cada passo testando o elemento central: <code>meio = (inicio + fim) // 2</code>. Complexidade espetacular $O(\log N)$.</p>
            </div>
          </div>
        `
      },
      {
        title: "O Algoritmo de Ordenação por Bolhas (Bubble Sort)",
        icon: "🫧",
        contentHtml: `
          <p>O algoritmo Bubble Sort organiza a sequência realizando comparações entre pares adjacentes (Slides 7 a 16):</p>
          <div class="theory-callout">
            <ol>
              <li>Compara <code>lista[j]</code> com <code>lista[j+1]</code>.</li>
              <li>Se <code>lista[j] &gt; lista[j+1]</code>, os elementos trocam de lugar na memória: <code>lista[j], lista[j+1] = lista[j+1], lista[j]</code>.</li>
              <li>A cada passagem completa, o maior elemento remanescente &ldquo;flutua&rdquo; (é empurrado) para a sua posição final à direita!</li>
              <li>O processo se repete até que nenhuma troca seja necessária.</li>
            </ol>
          </div>
        `
      },
      {
        title: "Funções Nativas: sorted() versus list.sort()",
        icon: "📊",
        contentHtml: `
          <div class="theory-comparison-grid">
            <div class="theory-box">
              <h4>Função sorted(seq) (Slide 22)</h4>
              <p>Gera e <strong>retorna uma nova lista</strong> ordenada, deixando a sequência original completamente intocada (sem efeitos colaterais):</p>
              <code>nova = sorted(original)</code>
            </div>
            <div class="theory-box">
              <h4>Método lista.sort() (Slide 17)</h4>
              <p>Ordena a lista <strong>in-place</strong> (no próprio local da memória), modificando o objeto e retornando <code>None</code>:</p>
              <code>lista.sort() # altera lista</code>
            </div>
          </div>
        `
      }
    ],
    traceExplanation: {
      title: "Como rastrear Busca Binária e Bubble Sort no Teste de Mesa?",
      contentHtml: `
        <p>No Teste de Mesa desses algoritmos:</p>
        <ul>
          <li><strong>Busca Binária:</strong> acompanhe a cada linha os ponteiros <code>inicio</code>, <code>fim</code> e <code>meio</code>, e registre se a busca descartou a metade esquerda (<code>inicio = meio + 1</code>) ou direita (<code>fim = meio - 1</code>).</li>
          <li><strong>Bubble Sort:</strong> anote o número da passagem, os índices adjacentes <code>j</code> e <code>j+1</code>, se houve troca e a nova configuração da lista entre colchetes.</li>
        </ul>
      `,
      tableExample: {
        columns: ["Passo", "Linha", "inicio", "fim", "meio", "v[meio]", "Decisão / Ação"],
        rows: [
          ["1", "1", "0", "4", "2", "25", "Buscando 30 em [10, 20, 25, 30, 50]"],
          ["2", "3", "0", "4", "2", "25", "25 &lt; 30 &rarr; descarta esquerda: inicio = 3"],
          ["3", "2", "3", "4", "3", "30", "meio &larr; (3 + 4)//2 = 3: v[3] == 30!"],
          ["4", "4", "3", "4", "3", "30", "Elemento encontrado! Retorna índice 3"]
        ]
      }
    },
    relatedChallenges: [
      { id: 9, title: "Busca binária", reason: "Implementação completa da busca binária em lista ordenada." },
      { id: 10, title: "Ordenação por bolhas", reason: "Implementação passo a passo do algoritmo Bubble Sort com trocas adjacentes." }
    ],
    miniExercises: [
      {
        id: "m15_1",
        question: "Qual é o requisito fundamental indispensável para que o algoritmo de Busca Binária possa ser aplicado com sucesso sobre uma coleção de dados?",
        options: [
          "A sequência de dados deve estar previamente ordenada",
          "A lista deve conter apenas números inteiros positivos",
          "O tamanho da lista deve ser obrigatoriamente uma potência de 2",
          "Não pode haver nenhum elemento repetido na lista"
        ],
        correct: 0,
        explanation: "A busca binária baseia-se em descartar metades comparando com o elemento central. Isso só é matematicamente válido se os elementos estiverem previamente ordenados."
      },
      {
        id: "m15_2",
        question: "No algoritmo Bubble Sort, onde estará posicionado o maior elemento de uma lista de tamanho N após o término da primeira passagem completa de comparações?",
        options: [
          "Na última posição da lista (índice N - 1)",
          "Na primeira posição (índice 0)",
          "No elemento central",
          "A posição final dependerá da paridade da lista"
        ],
        correct: 0,
        explanation: "A cada passagem, os elementos maiores 'flutuam' para a direita. Na primeira passagem completa, o maior elemento de todos é empurrado até a última posição."
      }
    ]
  }
];

if (typeof window !== "undefined") {
  window.theoryTopics = theoryTopics;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { theoryTopics };
}
