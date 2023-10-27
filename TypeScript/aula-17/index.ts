// inferência de tipo
let numero = 20;

let nome: string = "Lucas";

let correto: boolean = false;

const nomeDoUsuario = prompt('Qual o seu nome? ');

console.log(nomeDoUsuario?.toLowerCase());

// tipagem de arrays ou Array<number> 
const numeros1: number[] = [1, 2, 3, 4, 5];
const idades: Array<number> = [1, 2, 3, 4,5]; // (versão mais antiga)

// inferência de tipo
const numeros2 = [1, 2, 3, 4,5];

// tipagem variada de arrays 
const misto1: (string | number)[] = ['Lucas', 65, 1.64]; // tipagem não indicada
const misto2: (any)[] = ['Lucas', 65, 1.64]; // tipagem não indicada

// inferência de tipo
const misto3 = ['Lucas', 65, 1.64];

// tipagem de uma função
function escolhaUmNumero(numero1: number, numero2: number) {
    if(numero1 > numero2) {
        console.log(numero1);
    } else {
        console.log(numero2)
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
const pessoa: [string, number] = ['Lucas', 23];

// tipagem OBJETOS
const cidadaoComTipagem: (Object) = {nome:'Lucas', idade: 23};
const cidadaoComTipagemAutomatica = {nome:'Lucas', idade: 23};

// INTERFACE
interface PessoaInterface {
    nome?: string, // ? antes do : indica que o parâmetro é opcional
    idade: number
}

const cidadaoInterface: PessoaInterface = {nome:'Lucas', idade: 23};

// TYPE
type PessoaType = {
    nome: string,
    idade: number
}

const cidadaoType: PessoaType = {nome:'Lucas', idade: 23};

// type aliases
type Criterio = 'maior' | 'menor';

// Critério em uma função
function escolheUmNumero(numero1: number, numero2: number, criterio?: Criterio) {
    switch(criterio) {
        case 'menor': 
            return numero1 < numero2 ? console.log('Número 1 menor que número 2') : console.log('Número 2 menor que número 1');
        case 'maior': 
            return numero1 > numero2 ? console.log('Número 1 maior que número 2') : console.log('Número 2 maior que número 1');
        default:
            return console.log('Não foi definido nenhum critério de comparação!')
    }
}

const numeroEncontrado1 = escolheUmNumero(10, 20, 'maior');
const numeroEncontrado2 = escolheUmNumero(10, 20, 'menor');
const numeroEncontrado3 = escolheUmNumero(10, 20);

// tipagem do retorno de uma função
function escolheNumero(numero1: number, numero2: number): void {
    if(numero1 > numero2) {
        console.log(numero1);
    } else {
        console.log(numero2)
    }
}

// ***************************************

type PessoaPartial = Partial<PessoaType>; // propriedades de um tipo opcional
type PessoaRequired = Required<PessoaType>; // propriedades de um tipo obrigatórias, inclusive os opcionais
type PessoaPick = Pick<PessoaType, 'nome' | 'idade'>; // seleciona um subconjunto de propriedades de um tipo 
type PessoaOmit = Omit<PessoaType, 'idade'>; // omite propriedades de um tipo 
type PessoaExclude = Exclude<PessoaType, 'idade'>; // exclui propriedades de um tipo 
type PessoaRecord = Record<string, PessoaType>; // cria tipos que representam objetos com chaves específicas e tipos de valores

const pessoas: PessoaRecord = {
    "39329218144": {
        nome: 'Lucas',
        idade: 28
    },
}