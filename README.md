# joaovicsa.sebraemap.io

Mapa interativo das Unidades do Sebrae Maranhão.

Usando Leaflet, React, HTML, CSS e JavaScript para gerar um mapa interativo com informações a respeito das unidades e funcionalidade de pesquisa baseado no nome da unidade.

Essa solução é utilizada em um widget do Fluig do Sebrae/MA como WireFrame.

## Como Utilizar?

1) No Fluig, Adicionar um Widget de Editor de Conteúdo (Digte)
3) Selecionar Tema Consulta de Unidades
3) Adicionar o Título "Consulta de Unidades"
4) Adicionar como iFrame:
```
<html>
<head>
	<title></title>
</head>
<body>
<p><iframe style="overflow: none;" height="520" src="https://joaovicsa.github.io/joaovicsa.sebraemap.io/" width="100%"></iframe></p>
</body>
</html>

```

## Alteração de Dados do Mapa

Toda e quaisquer alterações de dados do mapa deverão ser realizadas dentro do código-fonte. 
