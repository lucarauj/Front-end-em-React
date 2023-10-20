const fs = require('fs');


// Callbacks

console.log("Antes da função");

fs.readFile('aula-12-assincronismo/arquivo.txt', (erro, conteudo) => {
    if(erro) {
        console.log("Erro ao ler o arquivo: ", erro);
    } else {
        console.log(String(conteudo));
    }
});

console.log("Depois da função");