"use strict";
class Pessoa {
    constructor(nome, idade, altura, senha) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this._senha = senha;
    }
    dormir() {
        console.log(this.nome + ' está dormindo...');
    }
    // accessors
    get senha() {
        return this._senha;
    }
    set senha(novaSenha) {
        this._senha = novaSenha;
    }
}
const pessoa = new Pessoa('Lucas', 34, 1.64, '123abc');
console.log(pessoa);
pessoa.dormir();
console.log(pessoa.senha);
pessoa.senha = '321cba';
console.log(pessoa.senha);
// herança
class Professor extends Pessoa {
    constructor(nome, idade, altura, senha, matricula) {
        super(nome, idade, altura, senha);
        this.matricula = matricula;
    }
}
// polimorfismo
console.log(pessoa instanceof Pessoa); // true
console.log(pessoa instanceof Professor); // false
