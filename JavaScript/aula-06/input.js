const readline = require("readline-sync");

const n1 = parseInt(readline.question("Digite um numero: "));
console.log(n1, typeof n1);

const n2 = readline.question("Digite um numero: ");
console.log(n2, typeof n2);

const n2Number = Number(n2);
console.log(n2Number, typeof n2Number);
