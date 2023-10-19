// Array.every()

const numeros = [40, 34, 67, 89, 23, 16];

//numeros.every((elemento, index, array) => {
const todosElementosMaiorQueSete = numeros.every((elemento) => elemento > 15);

console.log(todosElementosMaiorQueSete);

// Array.some()

const peloMenosUmElementoMaiorQueQuarenta = numeros.some((elemento) => elemento > 40);

console.log(peloMenosUmElementoMaiorQueQuarenta);