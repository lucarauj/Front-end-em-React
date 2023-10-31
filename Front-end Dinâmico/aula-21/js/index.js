const buttonTeste = document.querySelector('#teste');

buttonTeste.addEventListener('click', (event) => {
    console.log(event);
    alert('Você clicou no botão!')
});

// **********************************************************

const buttonAumentar = document.querySelector('#aumentar-botao');
const buttonDiminuir = document.querySelector('#diminuir-botao');
const entrada = document.querySelector('#input');

const contadorElemento = document.querySelector('#contador');

buttonAumentar.addEventListener('click', (event) => {
    const valorAtual = Number(contadorElemento.textContent);
    contadorElemento.textContent = valorAtual + 1;
});

buttonDiminuir.addEventListener('click', (event) => {
    const valorAtual = Number(contadorElemento.textContent);
    contadorElemento.textContent = valorAtual - 1;
});

entrada.addEventListener('input', (event) => {
    console.log(entrada.value);
});

// Adicionando estilos inline em um elemento

contadorElemento.style.color = 'yellow';
contadorElemento.style.margin = '5 7rem';
contadorElemento.style.backgroundColor = 'blue';

// Manipulando classes

console.log(buttonDiminuir.classList);

buttonAumentar.classList.add('btn');
buttonAumentar.classList.add('btn');

// Alterando o tema da página

const buttonTema = document.querySelector('#tema');

let temaDark;

// Definindo uma função que será executada ao carregar o conteúdo de uma página

function mudarTema(item, tema) {
    
    const body = document.querySelector(item);

    if(!tema) {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
    } else {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
    }
}

window.onload = () => {
    const ls = localStorage.getItem('tema');
    temaDark = ls === 'true';

    mudarTema('body', temaDark);
}

buttonTema.addEventListener('click', () => {
    
    temaDark = !temaDark;

    localStorage.setItem('tema', temaDark);

    mudarTema('body', temaDark);
});