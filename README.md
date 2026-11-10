# Laboratório de Programação

Site interativo de estudos com exercícios de Python, testes de mesa, teoria e 10 desafios SQL baseados no banco financeiro `DB_FINANC_II`.

## Executar o site

Abra esta pasta no VS Code e inicie o Live Server, ou execute `py -m http.server 8000` no terminal e acesse `http://localhost:8000`. Não abra `index.html` diretamente: o editor Python e o carregamento do banco precisam de um servidor local.

É necessária conexão com a internet para carregar Pyodide e SQL.js na primeira visita. As consultas SQL rodam no navegador sobre `mysql_financ.db`; nenhuma conexão com servidor MySQL é necessária. Cada consulta usa uma cópia temporária do banco. Rascunhos e progresso ficam no armazenamento local do navegador.

## Desafios MySQL

Selecione **MySQL Interativo** na barra superior ou **MySQL** na lista lateral. Os desafios estão organizados por dificuldade: 4 fáceis, 4 médios e 2 difíceis. Use **Executar SQL Livre** para explorar os dados e **Validar Desafio** para conferir sua resposta. O dicionário interativo mostra as 10 tabelas, colunas e relacionamentos.

O banco `DB_FINANC_II` contém 9 tabelas relacionais: clientes, agências, contas, dados KYC, cartões, empréstimos, parcelas, transações e compras com cartão. O dump de origem está em `mysql/DB_MySQL_FINANC.sql`.
