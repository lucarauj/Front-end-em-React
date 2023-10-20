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

async function leituraDeDados() {

    try{
        console.log('Executado antes da promise\n');
        const retornoDaPromessa = await lerArquivoPromise();
        console.log(retornoDaPromessa + '\n');
        console.log('Executado depois da promise');
    } catch(err) {
        console.log(err);
    } finally {
        console.log('Chegou aqui...');
    };
};

leituraDeDados();

