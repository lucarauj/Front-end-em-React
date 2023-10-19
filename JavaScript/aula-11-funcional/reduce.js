const numeros = [1, 2, 3, 4, 5];

// numeros.reduce((acumulador, elemento, index, array)
// numeros.reduce((acumulador, elemento, _, array)

const novoArrayUmaForma = numeros.reduce((acumulador, elemento) => acumulador += elemento);

const novoArrayOutraForma = numeros.reduce((acumulador, elemento) => elemento + acumulador, 0);

console.log(novoArrayUmaForma);
console.log(novoArrayOutraForma);

const nome = ["L", "U", "C", "A", "S"];

const meuNomeCerto = nome.reduce((acumulador, letra) => acumulador + letra, ""); //LUCAS
const meuNomeErrado = nome.reduce((acumulador, letra) => letra + acumulador, ""); //SACUL

console.log(meuNomeCerto);
console.log(meuNomeErrado);

// Soma dos pares => const numeros = [1, 2, 3, 4, 5];
const somaDePares = numeros.reduce((acumulador, elemento) => {
    if (elemento % 2 === 0) {
        return acumulador + elemento;
    } else {
        return acumulador;
    }
}, 0);

console.log(somaDePares);

// Somando o total de um carrinho de compras

const carrinho = [
    {produto: "arroz", preco: 8.00, quantidade: 10}, // 80 reais
    {produto: "leite", preco: 4.00, quantidade: 20}, // 80 reais
    {produto: "feijão", preco: 6.00, quantidade: 30} // 180 reais 
];

//[80 + 80 + 180 = 340]
const totalDaCompra = carrinho.reduce((acumulador, item) => {
    return acumulador += item.preco * item.quantidade; 
}, 0);

console.log(totalDaCompra);