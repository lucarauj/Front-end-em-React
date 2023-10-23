const fs = require('fs');
const { type } = require('os');

// Lendo um arquivo JSON

fs.readFile('./aula-13-json/arquivo.json', (erro, dados) => {
    if(erro) {
        console.log('Erro:' + erro);
    } else {
        console.log(String(dados)); //String
        console.log(JSON.parse(dados)); //Objeto 
    }
});

// Convertendo um objeto do JS, em um JSON (String)

//object
const jsonObjeto = { "nome": "Lucas", "idade": 34, "altura": 1.63 };

console.log(jsonObjeto);

//string
const jsonString = JSON.stringify(jsonObjeto);

console.log(jsonString);

