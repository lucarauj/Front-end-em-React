interface IPessoa {
    nome: string;
    idade: number;
    altura: number;
    dormir: () => void;
}


class Pessoa implements IPessoa {
    readonly nome: string; // disponível para leitura
    idade: number;
    altura: number;
    private _senha: string; // acessível somente dentro da própria classe | atributo com underline no início

    constructor(nome: string, idade: number, altura: number, senha: string) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this._senha = senha;
    }

    dormir() {
        console.log(this.nome + ' está dormindo...');
    }

    // accessors
    get senha(): string {
        return this._senha;
    }

    set senha(novaSenha: string) {
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
    matricula: string;

    constructor(nome: string, idade: number, altura: number, senha: string, matricula: string) {
        super(nome, idade, altura, senha);
        this.matricula = matricula;
    }
}

// polimorfismo
console.log(pessoa instanceof Pessoa); // true
console.log(pessoa instanceof Professor); // false