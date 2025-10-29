# joaovicsa.sebraemap.io

## Mapa Interativo das Unidades do Sebrae Maranhão

Este projeto é uma página estática criada com HTML, CSS, JavaScript e Leaflet, projetada para exibir um mapa interativo com informações sobre as unidades do Sebrae Maranhão.
A aplicação é hospedada via GitHub Pages e utilizada como widget no Fluig (via iframe de conteúdo externo).

## Visão Geral

O mapa exibe as unidades do Sebrae/MA com marcadores interativos, permitindo a pesquisa por nome da unidade.
Desenvolvido para uso interno, o widget facilita a consulta rápida e visual das localizações das unidades diretamente dentro do Fluig.

## Tecnologias Utilizadas

- HTML5 – estrutura da página

- CSS3 – estilização e responsividade

- JavaScript (ES6+) – lógica de interação e busca

- Leaflet.js – renderização do mapa e marcadores interativos

- GitHub Pages – hospedagem estática do projeto

- Playwright – testes automatizados de interface

- GitHub Actions – integração e deploy automáticos

## Estrutura do Projeto

📦 sebraemap

├── 📄 index.html # Página principal (contém todo o código)

├── 📄 README.md # Este arquivo

├── 📄 .gitignore # Arquivos e pastas ignorados pelo Git

└── 📁 tests/ # Testes automatizados (Playwright)

Todo o código está contido em index.html, incluindo HTML, CSS e JavaScript.

## Como Utilizar no Fluig

1. No Fluig, adicione um Widget de Editor de Conteúdo.

2. Selecione o tema Consulta de Unidades.

3. Adicione o título:

4. Consulta de Unidades

5. Insira o seguinte código no conteúdo HTML do widget:

```
<html>
<head>
  <title></title>
</head>
<body>
  <p>
    <iframe
      style="overflow: none;"
      height="520"
      width="100%"
      src="https://joaovicsa.github.io/joaovicsa.sebraemap.io/"
    ></iframe>
  </p>
</body>
</html>
```

URL do widget:
https://joaovicsa.github.io/joaovicsa.sebraemap.io/

## Alteração de Dados do Mapa

Qualquer modificação nos dados (como novas unidades, coordenadas ou descrições) deve ser feita diretamente no código-fonte dentro do arquivo index.html.

## Testes Automatizados (Playwright + GitHub Actions)

Mesmo sendo uma página estática, este projeto utiliza Playwright para garantir que o mapa e seus elementos essenciais sejam renderizados corretamente.
Os testes são executados automaticamente em um servidor local durante o workflow do GitHub Actions.

📁 Estrutura de Testes

📁 tests/

└── map.spec.ts # Teste básico de carregamento e renderização do mapa

## Executando Testes Localmente

1. Instalar dependências
   npm install

2. Executar os testes
   npx playwright test

## Integração Contínua

Os testes são executados automaticamente a cada push no repositório, garantindo estabilidade e qualidade contínua.

## Deploy Automático com GitHub Pages

O deploy é feito automaticamente via GitHub Actions sempre que há commit na branch main.

Assim, qualquer alteração feita e enviada para a branch main dispara automaticamente os testes e a publicação no GitHub Pages.

.gitignore

O projeto ignora arquivos temporários e pastas de dependências:

node_modules/
test-results/
playwright-report/
.gitignore
.env # Arquivos de ambiente

### Autor

João Sá

- GitHub: https://github.com/joaovicsa
- Linkedin: https://www.linkedin.com/in/joaovicsaa/
- E-mail: joao.vsaa90@gmail.com

### Licença

Este projeto é de uso interno do Sebrae Maranhão.
Distribuição ou reprodução não autorizada é proibida.
