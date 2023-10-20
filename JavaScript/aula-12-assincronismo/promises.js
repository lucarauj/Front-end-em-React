const fs = require('fs');

function lerArquivoPromise() {
    return new Promise((resolve, reject) => {
        fs.readFile('aula-12-assincronismo/arquivo.txt', (erro, conteudo) => {
            if(erro) {
                reject("Erro ao ler o arquivo");
            } else {
                resolve(String(conteudo));
            }
        })
    });
}

lerArquivoPromise()
.then((retornoDoResolveDaPromise) => {
    console.log(retornoDoResolveDaPromise);
}).catch((erro) => {
    console.log(erro);
}).finally(() => {
    console.log('Chegou aqui...');
});