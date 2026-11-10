// Base de Dados DB_FINANC_II e 10 Desafios Interativos de MySQL
// Convertido e configurado a partir de mysql/DB_MySQL_FINANC.sql

const mysqlSchema = [
  {
    name: "CLIENTE",
    description: "Cadastro de clientes pessoa física do banco com score e segmentação",
    rowsCount: 160,
    columns: [
      { name: "ID_CLIENTE", type: "INT", pk: true, desc: "Identificador único do cliente" },
      { name: "NOME", type: "VARCHAR(120)", pk: false, desc: "Nome completo do cliente" },
      { name: "EMAIL", type: "VARCHAR(160)", pk: false, desc: "E-mail de contato" },
      { name: "CPF", type: "VARCHAR(14)", pk: false, desc: "CPF formatado (ou NULL)" },
      { name: "SEGMENTO", type: "VARCHAR(20)", pk: false, desc: "Segmento: 'varejo', 'vip' ou 'prime'" },
      { name: "SCORE_CREDITO", type: "INT", pk: false, desc: "Pontuação de crédito (0 a 1000)" },
      { name: "DATA_CADASTRO", type: "DATE", pk: false, desc: "Data de registro no banco" }
    ]
  },
  {
    name: "AGENCIA",
    description: "Agências bancárias distribuídas por municípios e estados",
    rowsCount: 15,
    columns: [
      { name: "ID_AGENCIA", type: "INT", pk: true, desc: "Identificador da agência" },
      { name: "NOME", type: "VARCHAR(80)", pk: false, desc: "Nome da agência" },
      { name: "CIDADE", type: "VARCHAR(80)", pk: false, desc: "Cidade da agência" },
      { name: "UF", type: "CHAR(2)", pk: false, desc: "Estado (UF)" }
    ]
  },
  {
    name: "CONTA",
    description: "Contas bancárias atreladas a clientes e agências com saldos correntes",
    rowsCount: 320,
    columns: [
      { name: "ID_CONTA", type: "INT", pk: true, desc: "Número único da conta" },
      { name: "ID_CLIENTE", type: "INT", fk: "CLIENTE.ID_CLIENTE", desc: "Cliente titular" },
      { name: "ID_AGENCIA", type: "INT", fk: "AGENCIA.ID_AGENCIA", desc: "Agência de vínculo" },
      { name: "TIPO_CONTA", type: "VARCHAR(20)", pk: false, desc: "'CORRENTE', 'POUPANCA', 'SALARIO', 'INVESTIMENTO'" },
      { name: "DATA_ABERTURA", type: "DATE", pk: false, desc: "Data de abertura" },
      { name: "SALDO", type: "DECIMAL(14,2)", pk: false, desc: "Saldo atual em conta" },
      { name: "STATUS", type: "VARCHAR(20)", pk: false, desc: "'ATIVA', 'BLOQUEADA', 'ENCERRADA'" }
    ]
  },
  {
    name: "KYC_CLIENTE",
    description: "Know Your Customer (Conheça seu Cliente) e perfil de risco e conformidade",
    rowsCount: 160,
    columns: [
      { name: "ID_CLIENTE", type: "INT", pk: true, fk: "CLIENTE.ID_CLIENTE", desc: "Cliente auditado" },
      { name: "NIVEL", type: "VARCHAR(16)", pk: false, desc: "'BASICO' ou 'COMPLETO'" },
      { name: "RISCO", type: "VARCHAR(16)", pk: false, desc: "'BAIXO', 'MEDIO' ou 'ALTO'" },
      { name: "PEP", type: "TINYINT(1)", pk: false, desc: "Pessoa Exposta Politicamente (1 = Sim, 0 = Não)" },
      { name: "DATA_ATUALIZACAO", type: "DATE", pk: false, desc: "Última atualização cadastral" }
    ]
  },
  {
    name: "CARTAO",
    description: "Contratos de cartões de crédito dos clientes",
    rowsCount: 220,
    columns: [
      { name: "ID_CARTAO", type: "INT", pk: true, desc: "Identificador do cartão" },
      { name: "ID_CLIENTE", type: "INT", fk: "CLIENTE.ID_CLIENTE", desc: "Titular do cartão" },
      { name: "BANDEIRA", type: "VARCHAR(20)", pk: false, desc: "Bandeira (Visa, Mastercard, etc.)" },
      { name: "LIMITE", type: "DECIMAL(14,2)", pk: false, desc: "Limite de crédito total" },
      { name: "FECHAMENTO_DIA", type: "INT", pk: false, desc: "Dia do mês de fechamento da fatura" },
      { name: "VENCIMENTO_DIA", type: "INT", pk: false, desc: "Dia do mês de vencimento da fatura" },
      { name: "STATUS", type: "VARCHAR(20)", pk: false, desc: "'ATIVO', 'BLOQUEADO', 'CANCELADO'" }
    ]
  },
  {
    name: "EMPRESTIMO",
    description: "Contratos de empréstimos e financiamentos",
    rowsCount: 120,
    columns: [
      { name: "ID_EMPRESTIMO", type: "INT", pk: true, desc: "Identificador do contrato" },
      { name: "ID_CLIENTE", type: "INT", fk: "CLIENTE.ID_CLIENTE", desc: "Cliente contratante" },
      { name: "TIPO", type: "VARCHAR(20)", pk: false, desc: "Tipo ('PESSOAL', 'CONSIGNADO', 'IMOBILIARIO')" },
      { name: "VALOR_CONTRATADO", type: "DECIMAL(14,2)", pk: false, desc: "Valor total emprestado" },
      { name: "SALDO_DEVEDOR", type: "DECIMAL(14,2)", pk: false, desc: "Saldo devedor remanescente" },
      { name: "DATA_CONTRATACAO", type: "DATE", pk: false, desc: "Data de contratação" },
      { name: "STATUS", type: "VARCHAR(20)", pk: false, desc: "'ATIVO', 'LIQUIDADO', 'ATRASO'" }
    ]
  },
  {
    name: "PARCELA_EMPRESTIMO",
    description: "Parcelas dos empréstimos com datas e status de quitação",
    rowsCount: 3225,
    columns: [
      { name: "ID_PARCELA", type: "INT", pk: true, desc: "Identificador da parcela" },
      { name: "ID_EMPRESTIMO", type: "INT", fk: "EMPRESTIMO.ID_EMPRESTIMO", desc: "Empréstimo correspondente" },
      { name: "NUMERO", type: "INT", pk: false, desc: "Número da parcela (1, 2, ...)" },
      { name: "VALOR", type: "DECIMAL(14,2)", pk: false, desc: "Valor original da parcela" },
      { name: "VALOR_PAGO", type: "DECIMAL(14,2)", pk: false, desc: "Valor efetivamente pago" },
      { name: "DATA_VENCIMENTO", type: "DATE", pk: false, desc: "Vencimento da parcela" },
      { name: "DATA_PAGAMENTO", type: "DATE", pk: false, desc: "Data do pagamento (ou NULL)" },
      { name: "STATUS", type: "VARCHAR(20)", pk: false, desc: "'ABERTA', 'PAGA', 'ATRASADA'" }
    ]
  },
  {
    name: "TRANSACAO",
    description: "Movimentações financeiras entre contas (PIX, TED, depósitos, saques)",
    rowsCount: 5000,
    columns: [
      { name: "ID_TRANSACAO", type: "BIGINT", pk: true, desc: "Identificador da transação" },
      { name: "ID_CONTA_ORIGEM", type: "INT", fk: "CONTA.ID_CONTA", desc: "Conta debitada (origem)" },
      { name: "ID_CONTA_DESTINO", type: "INT", fk: "CONTA.ID_CONTA", desc: "Conta creditada (destino)" },
      { name: "TIPO", type: "VARCHAR(20)", pk: false, desc: "'PIX', 'TED', 'DEPOSITO', 'SAQUE', 'PAGAMENTO', 'TARIFA', 'JUROS'" },
      { name: "VALOR", type: "DECIMAL(14,2)", pk: false, desc: "Valor da transação" },
      { name: "DATA_TRANSACAO", type: "DATETIME", pk: false, desc: "Data e hora do evento" },
      { name: "DESCRICAO", type: "VARCHAR(255)", pk: false, desc: "Texto descritivo" }
    ]
  },
  {
    name: "COMPRA_CARTAO",
    description: "Faturas e compras realizadas com cartões de crédito",
    rowsCount: 6000,
    columns: [
      { name: "ID_COMPRA", type: "BIGINT", pk: true, desc: "Identificador da compra" },
      { name: "ID_CARTAO", type: "INT", fk: "CARTAO.ID_CARTAO", desc: "Cartão utilizado" },
      { name: "ESTABELECIMENTO", type: "VARCHAR(20)", pk: false, desc: "Estabelecimento comercial" },
      { name: "CATEGORIA", type: "VARCHAR(20)", pk: false, desc: "Categoria do gasto" },
      { name: "VALOR", type: "DECIMAL(14,2)", pk: false, desc: "Valor da compra" },
      { name: "PARCELAS", type: "DECIMAL(14,2)", pk: false, desc: "Quantidade de parcelas" },
      { name: "STATUS", type: "VARCHAR(20)", pk: false, desc: "'LANÇADA', 'FATURADA', 'PAGA', 'ESTORNADA'" },
      { name: "DATA_COMPRA", type: "DATE", pk: false, desc: "Data da transação no cartão" }
    ]
  }
];

const sqlChallenges = [
  {
    id: 1,
    title: "Clientes do Segmento VIP",
    difficulty: "Fácil",
    topic: "Projeção, Filtro WHERE e Ordenação",
    tables: ["CLIENTE"],
    prompt: "Escreva uma consulta SQL para selecionar o <code>NOME</code>, <code>EMAIL</code> e <code>SCORE_CREDITO</code> de todos os clientes pertencentes ao segmento <code>'vip'</code>. Ordene o resultado pelo <code>SCORE_CREDITO</code> de forma decrescente (do maior score para o menor).",
    hint: "Utilize a cláusula WHERE SEGMENTO = 'vip' e ORDER BY SCORE_CREDITO DESC.",
    starterQuery: "SELECT NOME, EMAIL, SCORE_CREDITO\nFROM CLIENTE\n-- Filtre o segmento VIP e ordene pelo score decrescente.",
    solutionQuery: "SELECT NOME, EMAIL, SCORE_CREDITO\nFROM CLIENTE\nWHERE SEGMENTO = 'vip'\nORDER BY SCORE_CREDITO DESC;",
    expectedColumns: ["NOME", "EMAIL", "SCORE_CREDITO"],
    explanation: "Filtra apenas clientes cujo campo SEGMENTO seja 'vip' e ordena pelo SCORE_CREDITO em ordem decrescente (DESC)."
  },
  {
    id: 2,
    title: "Agências do Estado de São Paulo",
    difficulty: "Fácil",
    topic: "Filtro com Strings e Ordenação Ascendente",
    tables: ["AGENCIA"],
    prompt: "Liste o <code>ID_AGENCIA</code>, <code>NOME</code> e <code>CIDADE</code> de todas as agências bancárias localizadas no estado de São Paulo (<code>UF = 'SP'</code>). Ordene o resultado em ordem alfabética crescente pela <code>CIDADE</code>.",
    hint: "Use WHERE UF = 'SP' e ORDER BY CIDADE ASC.",
    starterQuery: "SELECT ID_AGENCIA, NOME, CIDADE\nFROM AGENCIA\n-- Complete o filtro e a ordenação aqui\n;",
    solutionQuery: "SELECT ID_AGENCIA, NOME, CIDADE\nFROM AGENCIA\nWHERE UF = 'SP'\nORDER BY CIDADE ASC;",
    expectedColumns: ["ID_AGENCIA", "NOME", "CIDADE"],
    explanation: "Filtra as agências da UF 'SP' e ordena alfabeticamente pela CIDADE."
  },
  {
    id: 3,
    title: "Contas Ativas com Saldo Elevado",
    difficulty: "Fácil",
    topic: "Operadores Lógicos (AND) e Filtro Numérico",
    tables: ["CONTA"],
    prompt: "Obtenha o <code>ID_CONTA</code>, <code>TIPO_CONTA</code> e <code>SALDO</code> de todas as contas com status ativo (<code>STATUS = 'ATIVA'</code>) e que possuam saldo estritamente maior que 10.000 reais (<code>SALDO > 10000</code>). Ordene as contas pelo <code>SALDO</code> do maior para o menor.",
    hint: "Combine as duas condições no WHERE com o operador AND.",
    starterQuery: "SELECT ID_CONTA, TIPO_CONTA, SALDO\nFROM CONTA\nWHERE STATUS = 'ATIVA'\n-- Acrescente o filtro de saldo e a ordenacao solicitada.",
    solutionQuery: "SELECT ID_CONTA, TIPO_CONTA, SALDO\nFROM CONTA\nWHERE STATUS = 'ATIVA' AND SALDO > 10000\nORDER BY SALDO DESC;",
    expectedColumns: ["ID_CONTA", "TIPO_CONTA", "SALDO"],
    explanation: "Garante que apenas contas abertas e com alta liquidez financeira sejam listadas, ordenadas pelo valor do saldo."
  },
  {
    id: 4,
    title: "Estatísticas dos Limites de Cartão",
    difficulty: "Fácil",
    topic: "Funções Agregadas (COUNT, AVG, MAX) e Arredondamento",
    tables: ["CARTAO"],
    prompt: "Calcule métricas gerais sobre os cartões ativos: a quantidade total de cartões ativos com o alias <code>TOTAL_CARTOES</code>, a média de limite arredondada para duas casas decimais com o alias <code>MEDIA_LIMITE</code>, e o maior limite concedido com o alias <code>MAIOR_LIMITE</code>. Considere apenas cartões com <code>STATUS = 'ATIVO'</code>.",
    hint: "Use COUNT(*), ROUND(AVG(LIMITE), 2) e MAX(LIMITE) com WHERE STATUS = 'ATIVO'.",
    starterQuery: "SELECT \n  COUNT(*) AS TOTAL_CARTOES,\n  ROUND(AVG(LIMITE), 2) AS MEDIA_LIMITE,\n  MAX(LIMITE) AS MAIOR_LIMITE\nFROM CARTAO\n-- Considere somente os cartoes ativos.",
    solutionQuery: "SELECT \n  COUNT(*) AS TOTAL_CARTOES,\n  ROUND(AVG(LIMITE), 2) AS MEDIA_LIMITE,\n  MAX(LIMITE) AS MAIOR_LIMITE\nFROM CARTAO\nWHERE STATUS = 'ATIVO';",
    expectedColumns: ["TOTAL_CARTOES", "MEDIA_LIMITE", "MAIOR_LIMITE"],
    explanation: "Calcula agregações globais da carteira ativa de cartões de crédito."
  },
  {
    id: 5,
    title: "Saldo Total e Quantidade de Contas por Agência",
    difficulty: "Médio",
    topic: "Junção INNER JOIN e Agrupamento GROUP BY",
    tables: ["AGENCIA", "CONTA"],
    prompt: "Para cada agência bancária, exiba o nome da agência como <code>NOME_AGENCIA</code>, a quantidade total de contas cadastradas como <code>QTD_CONTAS</code> e a soma de todos os saldos dessas contas arredondada para 2 casas como <code>SALDO_TOTAL</code>. Ordene o resultado pelo <code>SALDO_TOTAL</code> em ordem decrescente.",
    hint: "Junte AGENCIA e CONTA pelo ID_AGENCIA, agrupe por A.ID_AGENCIA, A.NOME e use COUNT(C.ID_CONTA) e ROUND(SUM(C.SALDO), 2).",
    starterQuery: "SELECT A.NOME AS NOME_AGENCIA\nFROM AGENCIA A\n-- Junte com CONTA e calcule a quantidade de contas e o saldo total por agencia.",
    solutionQuery: "SELECT \n  A.NOME AS NOME_AGENCIA,\n  COUNT(C.ID_CONTA) AS QTD_CONTAS,\n  ROUND(SUM(C.SALDO), 2) AS SALDO_TOTAL\nFROM AGENCIA A\nINNER JOIN CONTA C ON A.ID_AGENCIA = C.ID_AGENCIA\nGROUP BY A.ID_AGENCIA, A.NOME\nORDER BY SALDO_TOTAL DESC;",
    expectedColumns: ["NOME_AGENCIA", "QTD_CONTAS", "SALDO_TOTAL"],
    explanation: "Realiza a junção entre agência e contas para totalizar a custódia financeira de cada unidade bancária."
  },
  {
    id: 6,
    title: "Transações por Tipo com Volume Expressivo",
    difficulty: "Médio",
    topic: "GROUP BY com Filtro de Agrupamento HAVING",
    tables: ["TRANSACAO"],
    prompt: "Agrupe as transações bancárias pelo seu <code>TIPO</code> (ex: PIX, TED, DEPOSITO, etc.). Exiba o <code>TIPO</code>, a contagem de transações como <code>QTD_TRANSACOES</code> e a soma do valor total movimentado arredondada para 2 casas como <code>VALOR_TOTAL</code>. Filtre para exibir apenas os tipos que possuam <strong>mais de 500 transações</strong> registradas e ordene pelo <code>VALOR_TOTAL</code> decrescente.",
    hint: "Para filtrar o resultado após a agregação, use HAVING COUNT(*) > 500.",
    starterQuery: "SELECT \n  TIPO,\n  COUNT(*) AS QTD_TRANSACOES,\n  ROUND(SUM(VALOR), 2) AS VALOR_TOTAL\nFROM TRANSACAO\nGROUP BY TIPO\n-- Filtre grupos com mais de 500 transacoes e ordene pelo valor total.",
    solutionQuery: "SELECT \n  TIPO,\n  COUNT(*) AS QTD_TRANSACOES,\n  ROUND(SUM(VALOR), 2) AS VALOR_TOTAL\nFROM TRANSACAO\nGROUP BY TIPO\nHAVING COUNT(*) > 500\nORDER BY VALOR_TOTAL DESC;",
    expectedColumns: ["TIPO", "QTD_TRANSACOES", "VALOR_TOTAL"],
    explanation: "Demonstra o uso da cláusula HAVING para aplicar restrições sobre agregações grupais."
  },
  {
    id: 7,
    title: "Gastos no Cartão por Categoria",
    difficulty: "Médio",
    topic: "Agrupamento com Filtro Prévio de Status",
    tables: ["COMPRA_CARTAO"],
    prompt: "Descubra quais categorias geram mais faturamento em compras de cartão. Liste a <code>CATEGORIA</code>, a quantidade de compras como <code>QTD_COMPRAS</code> e o total gasto arredondado para duas casas decimais como <code>TOTAL_GASTO</code>. Desconsidere compras canceladas/estornadas (<code>STATUS != 'ESTORNADA'</code>) e ordene o resultado pelo <code>TOTAL_GASTO</code> decrescente.",
    hint: "Aplique WHERE STATUS != 'ESTORNADA' antes de GROUP BY CATEGORIA.",
    starterQuery: "SELECT \n  CATEGORIA,\n  COUNT(*) AS QTD_COMPRAS,\n  ROUND(SUM(VALOR), 2) AS TOTAL_GASTO\nFROM COMPRA_CARTAO\n-- Exclua estornos, agrupe por categoria e ordene pelos gastos.",
    solutionQuery: "SELECT \n  CATEGORIA,\n  COUNT(*) AS QTD_COMPRAS,\n  ROUND(SUM(VALOR), 2) AS TOTAL_GASTO\nFROM COMPRA_CARTAO\nWHERE STATUS != 'ESTORNADA'\nGROUP BY CATEGORIA\nORDER BY TOTAL_GASTO DESC;",
    expectedColumns: ["CATEGORIA", "QTD_COMPRAS", "TOTAL_GASTO"],
    explanation: "Filtra compras válidas e resume os gastos por segmento de consumo."
  },
  {
    id: 8,
    title: "Clientes com Empréstimos Ativos Expressivos",
    difficulty: "Médio",
    topic: "INNER JOIN com Múltiplas Condições de Negócio",
    tables: ["CLIENTE", "EMPRESTIMO"],
    prompt: "Identifique clientes que possuem contratos de empréstimo ativos de alto valor. Selecione o nome do cliente como <code>NOME_CLIENTE</code>, seu <code>SEGMENTO</code>, o <code>TIPO_EMPRESTIMO</code> (alias de E.TIPO), o <code>VALOR_CONTRATADO</code> e o <code>SALDO_DEVEDOR</code>. Filtre apenas empréstimos com <code>STATUS = 'ATIVO'</code> e saldo devedor maior que 20.000 reais (<code>SALDO_DEVEDOR > 20000</code>). Ordene pelo <code>SALDO_DEVEDOR</code> decrescente.",
    hint: "Faça INNER JOIN entre CLIENTE C e EMPRESTIMO E usando ID_CLIENTE.",
    starterQuery: "SELECT C.NOME AS NOME_CLIENTE, C.SEGMENTO\nFROM CLIENTE C\n-- Junte os emprestimos, filtre status e saldo, e ordene os resultados.",
    solutionQuery: "SELECT \n  C.NOME AS NOME_CLIENTE,\n  C.SEGMENTO,\n  E.TIPO AS TIPO_EMPRESTIMO,\n  E.VALOR_CONTRATADO,\n  E.SALDO_DEVEDOR\nFROM CLIENTE C\nINNER JOIN EMPRESTIMO E ON C.ID_CLIENTE = E.ID_CLIENTE\nWHERE E.STATUS = 'ATIVO' AND E.SALDO_DEVEDOR > 20000\nORDER BY E.SALDO_DEVEDOR DESC;",
    expectedColumns: ["NOME_CLIENTE", "SEGMENTO", "TIPO_EMPRESTIMO", "VALOR_CONTRATADO", "SALDO_DEVEDOR"],
    explanation: "Cruza os dados de crédito do tomador com os contratos para controle de exposição ao risco."
  },
  {
    id: 9,
    title: "Auditoria KYC: Clientes de Alto Risco ou PEP com Saldo e Cartões",
    difficulty: "Difícil",
    topic: "Subconsultas Correlacionadas, KYC e Análise de Conformidade",
    tables: ["CLIENTE", "KYC_CLIENTE", "CONTA", "CARTAO"],
    prompt: "A equipe de compliance necessita auditar clientes com perfil de risco elevado (<code>RISCO = 'ALTO'</code>) ou enquadrados como Pessoa Exposta Politicamente (<code>PEP = 1</code>). Para cada cliente elegível, exiba: <code>NOME_CLIENTE</code>, seu <code>SEGMENTO</code>, o nível de <code>RISCO</code>, o somatório dos saldos de suas contas arredondado para 2 casas como <code>SALDO_TOTAL_CONTAS</code>, e o limite somado de seus cartões arredondado como <code>LIMITE_TOTAL_CARTOES</code>. Exiba apenas clientes que possuam saldo total de contas positivo (> 0) e ordene pelo <code>LIMITE_TOTAL_CARTOES</code> decrescente.",
    hint: "Use subconsultas correlacionadas para somar saldo de contas e limites de cartões sem duplicar linhas por produto.",
    starterQuery: "SELECT C.NOME AS NOME_CLIENTE, C.SEGMENTO\nFROM CLIENTE C\n-- Junte com KYC_CLIENTE e calcule saldo e limites com subconsultas correlacionadas.",
    solutionQuery: "SELECT \n  C.NOME AS NOME_CLIENTE,\n  C.SEGMENTO,\n  K.RISCO,\n  (SELECT ROUND(SUM(SALDO), 2) FROM CONTA WHERE ID_CLIENTE = C.ID_CLIENTE) AS SALDO_TOTAL_CONTAS,\n  (SELECT ROUND(SUM(LIMITE), 2) FROM CARTAO WHERE ID_CLIENTE = C.ID_CLIENTE) AS LIMITE_TOTAL_CARTOES\nFROM CLIENTE C\nINNER JOIN KYC_CLIENTE K ON C.ID_CLIENTE = K.ID_CLIENTE\nWHERE (K.RISCO = 'ALTO' OR K.PEP = 1)\n  AND (SELECT SUM(SALDO) FROM CONTA WHERE ID_CLIENTE = C.ID_CLIENTE) > 0\nORDER BY LIMITE_TOTAL_CARTOES DESC;",
    expectedColumns: ["NOME_CLIENTE", "SEGMENTO", "RISCO", "SALDO_TOTAL_CONTAS", "LIMITE_TOTAL_CARTOES"],
    explanation: "Subconsultas escalares independentes garantem precisão ao correlacionar duas entidades um-para-muitos (Contas e Cartões) sem criar um produto cartesiano duplicador."
  },
  {
    id: 10,
    title: "Inadimplência Crítica: Top 10 Clientes com Múltiplas Parcelas Atrasadas",
    difficulty: "Difícil",
    topic: "Junção Tripla, Agrupamento e Top N Inadimplentes",
    tables: ["CLIENTE", "EMPRESTIMO", "PARCELA_EMPRESTIMO"],
    prompt: "Elabore um relatório de cobrança crítica identificando os clientes com maior volume financeiro em atraso. Selecione o nome do cliente como <code>NOME_CLIENTE</code>, seu <code>EMAIL</code>, a quantidade de parcelas vencidas como <code>QTD_PARCELAS_ATRASADAS</code> e o valor total acumulado em atraso arredondado para 2 casas decimais como <code>VALOR_TOTAL_ATRASADO</code>. Filtre apenas parcelas com <code>P.STATUS = 'ATRASADA'</code>, restrinja para clientes com <strong>pelo menos 2 parcelas em atraso</strong> (<code>HAVING COUNT >= 2</code>), ordene do maior <code>VALOR_TOTAL_ATRASADO</code> para o menor e limite a listagem aos <strong>10 maiores devedores</strong> (<code>LIMIT 10</code>).",
    hint: "Faça JOIN entre CLIENTE, EMPRESTIMO e PARCELA_EMPRESTIMO. Agrupe por C.ID_CLIENTE, C.NOME, C.EMAIL, aplique HAVING e LIMIT 10.",
    starterQuery: "SELECT C.NOME AS NOME_CLIENTE, C.EMAIL\nFROM CLIENTE C\n-- Junte emprestimos e parcelas e resuma os clientes com parcelas atrasadas.",
    solutionQuery: "SELECT \n  C.NOME AS NOME_CLIENTE,\n  C.EMAIL,\n  COUNT(P.ID_PARCELA) AS QTD_PARCELAS_ATRASADAS,\n  ROUND(SUM(P.VALOR), 2) AS VALOR_TOTAL_ATRASADO\nFROM CLIENTE C\nINNER JOIN EMPRESTIMO E ON C.ID_CLIENTE = E.ID_CLIENTE\nINNER JOIN PARCELA_EMPRESTIMO P ON E.ID_EMPRESTIMO = P.ID_EMPRESTIMO\nWHERE P.STATUS = 'ATRASADA'\nGROUP BY C.ID_CLIENTE, C.NOME, C.EMAIL\nHAVING COUNT(P.ID_PARCELA) >= 2\nORDER BY VALOR_TOTAL_ATRASADO DESC\nLIMIT 10;",
    expectedColumns: ["NOME_CLIENTE", "EMAIL", "QTD_PARCELAS_ATRASADAS", "VALOR_TOTAL_ATRASADO"],
    explanation: "Cruza três níveis da hierarquia relacional para rastrear devedores com reincidência de atrasos no portfólio de crédito."
  }
];

if (typeof window !== "undefined") {
  window.mysqlSchema = mysqlSchema;
  window.sqlChallenges = sqlChallenges;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { mysqlSchema, sqlChallenges };
}
