// Array.forEach()

const numeros = [2, 5, 13, 23, 55];

numeros.forEach((n) => console.log(n));

console.clear();

numeros.forEach((n, index) => console.log(index, n));

console.clear();

numeros.forEach((n, index, arrayCompleto) => console.log(index, n, arrayCompleto));

console.clear();

// Array.find

const verificador = numeros.find((n) => {
  return n === 55;
});

console.log(verificador);

console.clear();

const pessoas = [
  {
    nome: "Lucas",
    idade: 34,
    profissao: "Programador Back-end"
  },
  {
    nome: "Marcos",
    idade: 28,
    profissao: "Programador Front-end"
  }
]

const resultadoPesquisa = pessoas.find((pessoa) => {
  return pessoa.nome === "Lucas";
});

console.log(resultadoPesquisa);