function saudacao(nomeDoEstudante = "Lucas") {
  return `Olá, ${nomeDoEstudante}!`;
}

const frase = saudacao("Marcos");
console.log(frase);

console.clear();

// Funções anônimas

const multiplique = function (a, b) {
  return a * b;
};

console.log(multiplique(2, 5));

console.clear();

// Arrow functions

const subtrair = (a, b) => {
  return a - b;
};

//console.log(subtrair(10, 5));

const somar = (a, b) => a + b;

//console.log(somar(2, 5));

const triplicar = (n) => n * 3;

//console.log(triplicar(3));
