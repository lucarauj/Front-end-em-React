console.log(document.title);
console.log(document.URL);

// pelo nome da tag

console.log(document.getElementsByTagName('h1'));
console.log(document.getElementsByTagName('p'));

// pelo nome da classe

console.log(document.getElementsByClassName("parágrafo"));

// pelo nome

console.log(document.getElementsByName('email'));

// pelo id

console.log(document.getElementById('js-logo'));
console.log(document.getElementById('email-input'));

// query selector

console.log(document.querySelector('body > img'));
console.log(document.querySelectorAll('p'));

console.clear();

// Acessando/Alterando o conteúdo HTML das tags

console.log(document.querySelector('p.parágrafo').textContent); // ignora as tags
console.log(document.querySelector('p.parágrafo').innerHTML); // pega todo conteúdo

document.querySelector('p.parágrafo').textContent = 'Parágrafo alterado <strong>textContent</strong>';
document.querySelector('p.parágrafo').innerHTML = 'Parágrafo alterado <strong>innerHTML</strong>';

console.log(document.querySelector('p.parágrafo').textContent); // saída na página: Parágrafo alterado <strong>textContent</strong>
console.log(document.querySelector('p.parágrafo').innerHTML) // saída na página: Parágrafo alterado

console.clear();

// Criando elementos na página

const novaTag = document.createElement('li'); // cria uma nova tag
novaTag.textContent = "Segundo item"; // adiciona conteúdo na nova tag

const lista = document.querySelector('ul#lista'); // pega a lista
lista.appendChild(novaTag); // adiciona um item na lista

// *********************************************************************

const outraTag = document.createElement('li'); // cria uma nova tag
outraTag.textContent = "Segundo item"; // adiciona conteúdo na nova tag

const novaLista = document.querySelector('ul#outra-lista');
const elementoExistente = novaLista.querySelectorAll('li')[1];
novaLista.insertBefore(outraTag, elementoExistente);

const outroElementoExistente = novaLista.querySelectorAll('li')[2];
novaLista.removeChild(outroElementoExistente);