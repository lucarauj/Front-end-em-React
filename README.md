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

## Npm x Npx

- npm: 
>*Gerenciador de pacotes para instalar e manter dependências permanentes em projetos.*

<br>

- npx: 
>*Ferramenta para executar comandos de pacotes temporariamente, sem instalar globalmente.*

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

## Documentação JavaScript

- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript

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


```
< a href="https://www.google.com/" target="_blank">Google</a>
```
- target="_blank": abre a página em outra aba

<br>

```
<img src="images/html5.png" alt="logotipo da linguagem HTML5">
```
- alt="logotipo da linguagem HTML5": descrição da imagem

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

- font-size: 
>define o tamanho do texto dentro de um elemento.
- font-weight: 
>controla a espessura ou peso da fonte do texto.
- line-height: 
>controla a altura da linha (espaçamento).
- color: 
>define a cor do texto.
- background-color: 
>define a cor de fundo de um elemento.
- font-family: 
>especifica a família de fontes a ser usada para o texto.
- margin: 
>define o espaço externo ao redor de um elemento.
- padding: 
>define o espaço interno dentro de um elemento.
- border: 
>cria uma borda ao redor de um elemento (largura, estilo e cor).
- border-radius: 
>define o raio das bordas arredondadas de um elemento.
- width: 
>define a largura de um elemento.
- height: 
>define a altura de um elemento.
- displays: block | inline | flex | grid:
- block: 
>elementos empilham verticalmente e ocupam toda a largura disponível.
- inline: 
>elementos ocupam apenas o espaço necessário no fluxo do texto.
- flex: 
>cria um layout flexível em uma direção.
- grid: 
>cria um layout bidimensional organizado em linhas e colunas.
- gap: 
>define o espaçamento entre elementos em um layout flexível ou em uma grade.
- justify-content: 
>alinhamento horizontal (flex-direction: row).
- align-items: 
>alinhamento vertical (flex-direction: row).
- justify-content: 
>alinhamento vertical (flex-direction: column).
- align-items: 
>alinhamento horizontal (flex-direction: column).

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

- Math.round(): 
>arredonda um número para o número inteiro mais próximo.

- Math.floor(): 
>arredonda um número para baixo, obtendo o maior número inteiro menor ou igual ao valor original.

- Math.ceil(): 
>arredonda um número para cima, obtendo o menor número inteiro maior ou igual ao valor original.

- Math.abs(): 
>retorna o valor absoluto de um número (ou seja, torna-o positivo).

- Math.max(): 
>retorna o maior valor entre dois ou mais números fornecidos como argumentos.

- Math.min(): 
>retorna o menor valor entre dois ou mais números fornecidos como argumentos.

- Math.random(): 
>retorna um número decimal aleatório entre 0 (inclusive) e 1 (exclusivo).

- Math.pow(): 
>retorna a base elevada à potência especificada.

- Math.sqrt(): 
>retorna a raiz quadrada de um número.

- Math.PI: 
>constante que representa o valor de π (pi).

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

- Truthy: 
>valores que são tratados como verdadeiros em contextos booleanos (exemplos: números diferentes de zero, strings não vazias, objetos).
- Falsy: 
>valores que são tratados como falsos em contextos booleanos (exemplos: false, 0, null, undefined, NaN, strings vazias).

> Boolean(0) : false
> Boolean(null) : false
> Boolean(NaN) : false
> Boolean("") : false
> Boolean(" ") : true

<br>

## Limpando linhas (anteriores) no console

```
console.clear( );
```

<br>

## Arrays

- push(): 
>*adiciona um ou mais elementos ao final do array.*

- pop(): 
>*remove o último elemento do array e o retorna.*

- shift(): 
>*remove o primeiro elemento do array e o retorna.*

- unshift(): 
>*adiciona um ou mais elementos ao início do array.*

- concat(): 
>*combina dois ou mais arrays para criar um novo array.*

- slice(): 
>*retorna uma cópia de parte do array com base nos índices especificados.*

- splice(): 
>*permite adicionar, remover ou substituir elementos em posições específicas do array.*

- forEach(): 
>*itera sobre cada elemento do array e executa uma função de retorno para cada um.*

- map(): 
>*cria um novo array aplicando uma função a cada elemento do array original.*

- filter(): 
>*cria um novo array com todos os elementos que atendem a uma condição específica.*

- reduce(): 
>*reduz os elementos do array a um único valor aplicando uma função acumuladora.*

- find(): 
>*retorna o primeiro elemento que atende a uma condição específica.*

- indexOf(): 
>*retorna o índice do primeiro elemento igual ao valor especificado.*

- lastIndexOf(): 
>*retorna o índice do último elemento igual ao valor especificado.*

- includes(): 
>*verifica se o array contém um elemento específico e retorna true ou false.*

- some(): 
>*verifica se pelo menos um elemento atende a uma condição específica.*

- every(): 
>*verifica se todos os elementos atendem a uma condição específica.*

- sort(): 
>*ordena os elementos do array de acordo com uma função de comparação ou de forma padrão (converte elementos em strings e compara seus valores).*

- reverse(): 
>*inverte a ordem dos elementos no array.*

- join(): 
>*converte os elementos do array em uma única string, separados por um delimitador especificado.*

- isArray(): 
>*verifica se uma variável é um array e retorna true ou false.*

<br>

## for-of -> percorrendo os elementos

```
for (const elemento of 'array') {
  console.log(elemento);
}
```

<br>

## for-in -> percorrendo os índices 

```
for (const indice in arr) {
  console.log(indice);
}
```

<br>

## Template string || Template literals

```
console.log(`Olá, ${parâmetro}!`);
```

<br>

## Funções

- Exemplo

<br>

>Estrutura:
```
function soma(a, b) {
  return a+b;
}
```

<br>

>Chamada:
```
soma(2, 3);
```

<br>

## Parâmetro padrão em uma função

```
function saudacao(nomeDoEstudante = "Lucas") {
  return `Olá, ${nomeDoEstudante}!`;
}
```

<br>

## Funções anônimas

```
const multiplique = function (a, b) {
  return a * b;
};
```

<br>

## Arrow Functions || Função anônima || Função de seta

```
const subtrair = (a, b) => {
  return a - b;
};
```
```
const somar = (a, b) => a + b;
```
```
const triplicar = n => n * 3;
```

<br>


## Objetos (Object Literal)

<br>

- chave-valor

```
const pessoa = {
  nome: "Lucas",
  idade: 34,
  programador: true,
};
```

<br>

- Adicionando um parâmetro:
```
pessoa.altura = 1.63;
```

<br>

- Excluindo parâmetro:
```
delete pessoa.altura;
```

<br>

- Atribuindo valor de um parâmetro a uma variável:

```
const { nome } = pessoa; 
```

<br>

## Funções de Alta Ordem

- First Class Function (Função de Primeira Classe)

>*Podem ser atribuídas a variáveis.*

>*Podem ser passadas como argumentos para outras funções.*

>*Podem ser retornadas de outras funções.*

>*Podem ser armazenadas em estruturas de dados, como arrays e objetos.*

<br>

- High Order Function (Função de Ordem Superior)

>*Aceitam uma ou mais funções como argumentos.*

>*Podem retornar uma função como resultado.*

>*Permitem abstrair e generalizar operações em funções.*

>*São usadas para criar funções mais flexíveis e reutilizáveis.*

>*Exemplos comuns incluem map, filter, reduce e forEach.*

<br>

## Funções de Alta Ordem - Arrays

- forEach( )
>*executa uma função em cada elemento de um array.*

<br>

- find( )
>*encontra o primeiro elemento que satisfaça uma condição.*

<br>

- findIndex( )
>*encontra o índice do primeiro elemento que atende a uma condição.*

<br>

- every( )
>*verifica se todos os elementos atendem a uma condição.*

<br>

- some( )
>*verifica se pelo menos um elemento atende a uma condição.*

<br>

- map( )
>*cria um novo array [mesmo tamamho] ao aplicar uma função a cada elemento.*

<br>

- filter( )
>*cria um novo array [mesmo tamanho ou menor] com elementos que atendem a uma condição.*

<br>

- reduce( )
>*reduz um array a um único valor aplicando uma função de acumulação.*

<br>

## Assincronismo

<br>

- Callbacks [função ou chamada de retorno]
>*funções que são passadas como argumentos para outras funções.*

>*são amplamente usados para lidar com operações assíncronas.*

>*permitem que o código continue executando enquanto aguarda a conclusão de uma operação assíncrona.*

<br>

- Promises [promessas]

>*Pending (Pendente): a operação ainda não foi concluída.*

>*Fulfilled (Cumprida): a operação assíncrona é bem-sucedida.*

>*Rejected (Rejeitada): a operação assíncrona falha [retorna um erro].*

>*Chaining (Encadeamento): podem ser encadeadas usando then() permitindo a execução de operações assíncronas em uma sequência específica.*

<hr>

>*são objetos usados para representar valores que podem estar disponíveis agora, no futuro ou nunca.*

>*são uma abordagem mais estruturada para lidar com operações assíncronas em comparação com callbacks.*

>*têm estados (pendente, resolvida ou rejeitada) e permitem que você encadeie operações assíncronas de forma mais legível.*

<br>

- Promises utilizando async/await

>*o async é usado para declarar funções assíncronas.*

>*o await é usado para esperar que uma Promise seja resolvida.*

<br>

## JSON

<br>

- JavaScript Object Notation.
- formatação leve de troca de dados.
- arquivo de configuração.
- coleção de pares chave-valor.

<br>

- Convertendo um arquivo .JSON para String ou Objeto

```
const fs = require('fs');

fs.readFile('./aula-13-json/arquivo.json', (erro, dados) => {
    if(erro) {
        console.log('Erro:' + erro);
    } else {
        console.log(String(dados)); //String
        console.log(JSON.parse(dados)); //Objeto 
    }
});
```

<br>

- Convertendo um Objeto js em uma String

```
const jsonObjeto = { "nome": "Lucas", "idade": 34, "altura": 1.63 };

const jsonString = JSON.stringify(jsonObjeto);
```

<br>

## APIs

<br>

- Interface de Programação de Aplicações
- Protocolos: RPC, SOAP, GraphQL e REST 

<br>

## Restrições para uma API REST (Representational State Transfer)

<br>

- Arquitetura Cliente-Servidor: 

>*A API deve seguir um modelo cliente-servidor, onde o cliente e o servidor são entidades separadas e independentes.*

- Estado (Stateless): 

>*Cada solicitação do cliente para o servidor deve conter todas as informações necessárias para compreender e processar a solicitação. O servidor não deve manter informações sobre o estado da sessão do cliente entre solicitações.*

- Interface Uniforme: 

>*A API deve ter uma interface uniforme com recursos identificados por URLs e um conjunto predefinido de operações, como GET, POST, PUT e DELETE.*

- Sistema em Camadas: 

>*A arquitetura pode ser composta por camadas interligadas, onde cada camada tem uma função específica. Isso permite escalabilidade e flexibilidade na implementação.*

- Mensagem em formato de representação: 

>*Os dados trocados entre o cliente e o servidor devem ser representados em um formato comum, como XML ou JSON, para que o cliente possa compreendê-los.*

- Uso de HATEOAS: 

>*O servidor deve fornecer links hipermídia nas respostas para permitir que o cliente navegue pela API de forma dinâmica, descobrindo novos recursos e ações.*

<br>

## Fetch API

<br> 

- interface JS para fazer requisições de rede em aplicativos da web.
- permite fazer requisições HTTP, como GET, POST, PUT, DELETE.
- A função fetch é assíncrona e pode retornar um erro, por isso, precisamos fazer um tratamento de erros (try/catch || then/catch).

<br>

## TypeScript


<br>

# 👨🏼‍🎓 Aluno

Lucas Araujo

<a href="https://www.linkedin.com/in/lucarauj"><img alt="lucarauj | LinkdeIN" width="40px" src="https://user-images.githubusercontent.com/43545812/144035037-0f415fc7-9f96-4517-a370-ccc6e78a714b.png" /></a>