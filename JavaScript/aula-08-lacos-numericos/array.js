const prompt = require("readline-sync");

const pessoa = ["Lucas", 34, 1.63];

console.log(pessoa[1]);

console.log(pessoa.slice(0, 1));

// Percorrendo um Array

const arr = [30, 45, 90, 32];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for-of

for (const elemento of arr) {
  console.log(elemento);
}

// for-in

for (const indice in arr) {
  console.log(indice);
}
