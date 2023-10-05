# Front-end em React

<br>

## HTML (Hypertext Markup Language)

- Hipertexto: pode conter refências (links) navegáveis para outros textos;
- Linguagem de marcação (tags): possui símbolos especiais que indicam metainformações;
- Tags HTML: delimitadas por '<' e '>';

<br>

## CSS (Cascading Style Sheets)

- Linguagem de estilização;
- Utilizada para trazer uma melhor aparência para as páginas web;

<br>

## JavaScript

- Linguagem de programação;
- Utilizada no front-end, back-end e mobile;

<br>

## npm

- Gerenciador de pacotes;

<br>

## HTTP (HyperText Transfer Protocol)

- Protocolo que define como as mensagens devem ser enviadas pelo cliente e pelo servidor em uma Rede IP (Internet Protocol);
- DNS (Domain Name System) - converte nomes de sites em números de IP para que os dispositivos possam se encontrar online;
- Utiliza o protocolo TCP/IP para o transporte das informações entre cliente e servidor;
- O TCP (Transmission Control Protocol) estabelece a conexão entre cliente e servidor, e organiza os dados que serão transmitidos entre eles;
- Métodos HTTP: GET, POST, PUT, DELETE e PATCH;

<br>

## Mensagens HTTP

- Cabeçalho (header)
- Corpo (payload)

<br>

## Códigos de Status

- 1XX: informativo
- 2XX: sucesso
- 3XX: erro do cliente
- 4XX: erro do servidor

<br>

## Documentação HTML

- https://developer.mozilla.org/pt-BR/docs/Web/HTML

<br>

## Documentação Fontes

- https://fonts.google.com/

<br>

## Comentários no HTML

- \<!-- conteúdo -->

<br>

## Principais tags HTML

- Cabeçalho: \<h1>, \<h2>, \<h3>...
- Parágrafo: \<p>
- Quebra linha: \<hr>, \<br>
- Links: \<a href=""></a>
- Imagens: \<img src="" alt="">
- Lista não enumerada: \<ul>\<li>
- Lista enumerada: \<ol>\<li>
- Tags de uso genérico: \<div>, \<span>

<hr>

```
< a href="https://www.google.com/" target="_blank">Google</a>
```
- target="_blank": abre a página em outra aba

<br>

```
<img src="images/html5.png" alt="logotipo da linguagem HTML5">
```
- alt="logotipo da linguagem HTML5": descrição da imagem

<hr>

<br>

## Tags de formatação de texto

- Negrito: \<b>, \<strong>
- Itálico: \<i>, \<em>
- Sublinhado: \<u> [não indicado]
- Riscado: \<s>
- Destacado: \<marl>
- Texto pré-formatado: \<pre>
- Código: \<code>
- Subscrito: \<sub>
- Sobrescrito: \<sup>

<br>

## Tags semânticas do HTML

- Cabeçalho: \<header>
- Conteúdo principal: \<main>
- Rodapé: \<footer>
- Sessões: \<section>
- Conteúdos laterais: \<aside>
- Imagens envolvidas: \<figure>

<br>

## Tabelas

- Cabeçalho: \<table> \<thead> \<tr> \<th>
- Corpo: \<tbody> \<tr> \<td>
- Células mescladas (rowspan | colspan)

<br>

## Formulários

- \<form> - \<input>, \<textarea>, \<select>

<br>

## HTML Layout

- \<link rel="stylesheet" href="style.css">
- Selecionando um "id" no css: #nomeDoId
- Selecionando uma "classe" no css: .nomeDaClasse

<br>

## Principais estilos CSS

- font-size: Define o tamanho do texto dentro de um elemento.
- font-weight: Controla a espessura ou peso da fonte do texto.
- line-height: Controla a altura da linha (espaçamento).
- color: Define a cor do texto.
- background-color: Define a cor de fundo de um elemento.
- font-family: Especifica a família de fontes a ser usada para o texto.
- margin: Define o espaço externo ao redor de um elemento.
- padding: Define o espaço interno dentro de um elemento.
- border: Cria uma borda ao redor de um elemento (largura, estilo e cor).
- border-radius: Define o raio das bordas arredondadas de um elemento.
- width: Define a largura de um elemento.
- height: Define a altura de um elemento.
- displays: block | inline | flex | grid:
- block: Elementos empilham verticalmente e ocupam toda a largura disponível.
- inline: Elementos ocupam apenas o espaço necessário no fluxo do texto.
- flex: Cria um layout flexível em uma direção.
- grid: Cria um layout bidimensional organizado em linhas e colunas.
- gap: Define o espaçamento entre elementos em um layout flexível ou em uma grade.
- justify-content: Alinhamento horizontal (flex-direction: row).
- align-items: Alinhamento vertical (flex-direction: row).
- justify-content: Alinhamento vertical (flex-direction: column).
- align-items: Alinhamento horizontal (flex-direction: column).

<br>

## Página estática com HTML e CSS

<img width="800px" src="https://raw.githubusercontent.com/lucarauj/Front-end-em-React/main/projeto-pagina-estatica/images/P%C3%A1gina%20est%C3%A1tica.png">

<br>

## Executando JS:

- No navegador:

```
tag <body> <script src="index.js"></script> </body>
```

<br>

- No terminal:

```
node .\aula-06\index.js
```

<br>

## Variáveis

- var *[Evite utilizar]*: tem escopo de função, sofre hoisting e pode ser reatribuída.
- let: tem escopo de bloco, sofre hoisting, e pode ser reatribuída.
- const: tem escopo de bloco, sofre hoisting, mas não pode ser reatribuída após a inicialização.

<br>

<hr>

- hoisting: 
>*declarações de variáveis e funções são movidas para o topo de seu escopo durante a fase de compilação, tornando-as disponíveis antes de sua declaração real no código.*
- undefined: 
>*valor primitivo que é atribuído automaticamente a variáveis não inicializadas.*
- NaN: 
>*representa "Not-a-Number" e é um valor especial usado para indicar que uma operação matemática não produz um número válido.*

<br>

## Conferindo o tipo de variável

```
console.log(typeof 'variável');
```

<br>

## Exponenciação

```
let nota = 2 ** 3;
```

<br>

## Biblioteca Math

- Math.round(): Arredonda um número para o número inteiro mais próximo.

- Math.floor(): Arredonda um número para baixo, obtendo o maior número inteiro menor ou igual ao valor original.

- Math.ceil(): Arredonda um número para cima, obtendo o menor número inteiro maior ou igual ao valor original.

- Math.abs(): Retorna o valor absoluto de um número (ou seja, torna-o positivo).

- Math.max(): Retorna o maior valor entre dois ou mais números fornecidos como argumentos.

- Math.min(): Retorna o menor valor entre dois ou mais números fornecidos como argumentos.

- Math.random(): Retorna um número decimal aleatório entre 0 (inclusive) e 1 (exclusivo).

- Math.pow(): Retorna a base elevada à potência especificada.

- Math.sqrt(): Retorna a raiz quadrada de um número.

- Math.PI: Uma constante que representa o valor de π (pi).

<br>

## Entrada de dados

- No navegador:
```
const idade = prompt("Digite um número: ");
```

<br>

- No terminal:
```
npm install readline-sync
```
```
const readline = require("readline-sync");
const n1 = parseInt(readline.question("Digite um numero: "));
console.log(n1, typeof n1);
```

<br>

## Comparadores

- == OU !== : compara os valores, permitindo a coerção de tipos;
- === OU !=== : compara os valores e também exige que os tipos sejam idênticos;

<br>

## Valores em contextos booleanos

- Truthy: Valores que são tratados como verdadeiros em contextos booleanos (exemplos: números diferentes de zero, strings não vazias, objetos).
- Falsy: Valores que são tratados como falsos em contextos booleanos (exemplos: false, 0, null, undefined, NaN, strings vazias).

<br>

## 










<br>

# 👨🏼‍🎓 Aluno

Lucas Araujo

<a href="https://www.linkedin.com/in/lucarauj"><img alt="lucarauj | LinkdeIN" width="40px" src="https://user-images.githubusercontent.com/43545812/144035037-0f415fc7-9f96-4517-a370-ccc6e78a714b.png" /></a>

