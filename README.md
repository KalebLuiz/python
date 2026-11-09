# Laboratório Python

Site local com 10 desafios de programação baseados nos assuntos das aulas em PDF: algoritmos, expressões, condicionais, laços, strings, sequências, matrizes, busca e ordenação.

## Como abrir

O executor Python usa Pyodide no navegador. É necessário ter conexão com a internet na primeira carga e abrir o site por um servidor local (não diretamente pelo arquivo `index.html`).

1. Abra um terminal nesta pasta.
2. Execute `py -m http.server 8000`.
3. Acesse `http://localhost:8000`.

Também é possível abrir a pasta no VS Code e iniciar um servidor local com a extensão Live Server.

O código é executado em um Web Worker no navegador. O progresso e os rascunhos são guardados no armazenamento local do navegador; o código não é enviado para um servidor.
