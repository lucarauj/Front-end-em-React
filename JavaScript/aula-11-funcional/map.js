// Array.map()

const numeros = [40, 34, 67, 89, 23, 16];

numeros.map((elemento, index, array) => console.log(elemento, index, array));

// 40 0 [ 40, 34, 67, 89, 23, 16 ]
// 34 1 [ 40, 34, 67, 89, 23, 16 ]
// 67 2 [ 40, 34, 67, 89, 23, 16 ]
// 89 3 [ 40, 34, 67, 89, 23, 16 ]
// 23 4 [ 40, 34, 67, 89, 23, 16 ]
// 16 5 [ 40, 34, 67, 89, 23, 16 ]

console.clear();

// Elevando todos os elementos de um array ao quadrado:

const novoArrayAoQuadrado = numeros.map((elemento) => elemento ** 2);

console.log(novoArrayAoQuadrado);

// [ 1600, 1156, 4489, 7921, 529, 256 ]

console.clear();

// Adicionando uma propriedade em um objeto:

const carrinho = [
    {produto: "arroz", preco: 8.00, quantidade: 10},
    {produto: "leite", preco: 4.00, quantidade: 20},
    {produto: "feijão", preco: 6.00, quantidade: 30}
];

const carrinhoAtualizado = carrinho.map((objeto) => {
    return {
        ...objeto,
        total: objeto.preco * objeto.quantidade
    }
});

console.log(carrinhoAtualizado);

// Desestruturação ou spread (operator)

const pessoa = {
    nome: "Lucas",
    idade: 34
};

const novaPessoa = {
    ...pessoa,
    altura: 1.63
}

console.log(novaPessoa);