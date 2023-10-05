const prompt = require("readline-sync");

const idade = Number(prompt.question("Qual a sua idade? "));

if (idade >= 18) {
  console.log("É maior de idade!");
} else {
  console.log("É menor de idade!");
}

const media = 3;

if (media >= 6) {
  console.log("Aprovado!");
} else if (media > 3) {
  console.log("Recuperação!");
} else {
  console.log("Reprovado!");
}

const permissoes = "aluno";

switch (permissoes) {
  case "aluno":
    console.log("Você só pode acessar as aulas da plataforma");
    break;
  case "professor":
    console.log("Você pode inserir material didático para os alunos");
    break;
  case "adm":
    console.log("Você pode gerenciar as permissões da plataforma");
    break;
  default:
    console.log("Você não possui nenhum acesso na plataforma");
}

const ternario = true;
ternario ? console.log("Olá, Aluno!") : console.log("Você não é aluno");

const mensagem = ternario ? "Olá, Aluno!" : "Você não é aluno";
console.log(mensagem);
