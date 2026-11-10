# Laboratório Python & Testes de Mesa Interativos

Site local com 10 desafios de programação baseados nos assuntos das aulas em PDF: algoritmos, expressões, condicionais, laços, strings, sequências, matrizes, busca e ordenação.

## Modos de Estudo

1. **💻 Editor & Testes Python**:
   - Escreva e edite sua função em Python.
   - Execute baterias de testes automatizados locais com Pyodide em Web Worker.
   - Dicas e gabarito comentados disponíveis.

2. **📊 Simulação de Teste de Mesa**:
   - Depuração passo a passo com indicação visual da linha em execução (`➔`).
   - Inspetor de variáveis em tempo real com destaque para memória alterada.
   - Controles de reprodução: avançar, retroceder, auto-play com velocidade ajustável e atalhos (<kbd>←</kbd>, <kbd>→</kbd>, <kbd>Espaço</kbd>, <kbd>R</kbd>).
   - Tabela de teste de mesa com exportação em formato Markdown.

3. **🎯 Responder Testes de Mesa (Interativo)**:
   - **Desafio Passo a Passo**: O algoritmo pausa nos momentos decisivos e desafia o estudante a prever o que acontecerá a seguir ("Qual será o novo valor acumulado em total?", "A condição if avalia como True ou False?").
   - **Quiz de Rastreamento**: Perguntas objetivas específicas sobre o comportamento interno e resultados de cada algoritmo, com explicações didáticas instantâneas.
   - **Preenchimento Completo da Tabela**: Tabela de teste de mesa com campos interativos para preenchimento manual, conferência automática de acertos, pontuação e revelação de gabarito.

## Como abrir

O executor Python usa Pyodide no navegador. É necessário ter conexão com a internet na primeira carga e abrir o site por um servidor local (não diretamente pelo arquivo `index.html`).

1. Abra um terminal nesta pasta.
2. Execute `py -m http.server 8000` (ou `python -m http.server 8000`).
3. Acesse `http://localhost:8000`.

Também é possível abrir a pasta no VS Code e iniciar um servidor local com a extensão Live Server.

O código é executado em um Web Worker no navegador. O progresso, os rascunhos e os testes respondidos são guardados no armazenamento local do navegador (`localStorage`); nenhum dado é enviado para servidores externos.
