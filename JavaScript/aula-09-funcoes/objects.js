const pessoa = {
  nome: "Lucas",
  idade: 34,
  programador: true,
  saudacao: () => {
    console.log("Olá, Dev!");
  },
};

console.log(pessoa);

console.log(pessoa.nome);
console.log(pessoa["nome"]);

pessoa.altura = 1.63;

console.log(pessoa);

delete pessoa.altura;

console.log(pessoa);

console.clear();

pessoa.saudacao();

const anoDeNascimento = 1990;
const peso = 65;

const dev = {
  anoDeNascimento,
  peso,
};

console.log(dev);

console.clear();

//const nome = pessoa.nome;
const { nome } = pessoa;

console.log(nome);
console.log(pessoa);
