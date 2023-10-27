"use strict";
// inferência de tipo
let numero = 20;
let nome = "Lucas";
let correto = false;
const nomeDoUsuario = prompt('Qual o seu nome? ');
console.log(nomeDoUsuario === null || nomeDoUsuario === void 0 ? void 0 : nomeDoUsuario.toLowerCase());
// tipagem de arrays ou Array<number> 
const numeros1 = [1, 2, 3, 4, 5];
const idades = [1, 2, 3, 4, 5]; // (versão mais antiga)
// inferência de tipo
const numeros2 = [1, 2, 3, 4, 5];
// tipagem variada de arrays 
const misto1 = ['Lucas', 65, 1.64]; // tipagem não indicada
const misto2 = ['Lucas', 65, 1.64]; // tipagem não indicada
// inferência de tipo
const misto3 = ['Lucas', 65, 1.64];
// tipagem de uma função
function escolhaUmNumero(numero1, numero2) {
    if (numero1 > numero2) {
        console.log(numero1);
    }
    else {
        console.log(numero2);
    }
}
// ***************************************
const minhasIdades = [];
minhasIdades.push(17);
minhasIdades.push(64);
minhasIdades.push(22);
minhasIdades.push(16);
const menorIdade = minhasIdades.filter((numero) => numero < 18);
console.log(menorIdade);
// tipagem TUPLES
const pessoa = ['Lucas', 23];
// tipagem OBJETOS
const cidadaoComTipagem = { nome: 'Lucas', idade: 23 };
const cidadaoComTipagemAutomatica = { nome: 'Lucas', idade: 23 };
const cidadaoInterface = { nome: 'Lucas', idade: 23 };
const cidadaoType = { nome: 'Lucas', idade: 23 };
// Critério em uma função
function escolheUmNumero(numero1, numero2, criterio) {
    switch (criterio) {
        case 'menor':
            return numero1 < numero2 ? console.log('Número 1 menor que número 2') : console.log('Número 2 menor que número 1');
        case 'maior':
            return numero1 > numero2 ? console.log('Número 1 maior que número 2') : console.log('Número 2 maior que número 1');
        default:
            return console.log('Não foi definido nenhum critério de comparação!');
    }
}
const numeroEncontrado1 = escolheUmNumero(10, 20, 'maior');
const numeroEncontrado2 = escolheUmNumero(10, 20, 'menor');
const numeroEncontrado3 = escolheUmNumero(10, 20);
// tipagem do retorno de uma função
function escolheNumero(numero1, numero2) {
    if (numero1 > numero2) {
        console.log(numero1);
    }
    else {
        console.log(numero2);
    }
}
const pessoas = {
    "39329218144": {
        nome: 'Lucas',
        idade: 28
    },
};
