// HIGH ORDER FUNCTIONS

// Função que retorna outra função como parâmetro

function welcome(courseName) {
  return (studentName) => {
    console.log(
      `Olá, ${studentName}! Seja bem vindo ao curso de ${courseName}.`
    );
  };
}

const displayWelcomeToReact = welcome("React");

displayWelcomeToReact("Lucas");

// Função que recebe outra função como parâmetro

const somar = (n1, n2) => n1 + n2;
const multiplicar = (n1, n2) => n1 * n2;

// Operação = função
const calculadora = (n1, n2, operacao) => operacao(n1, n2);

const resultado = calculadora(2, 5, multiplicar);

console.log(resultado);

// Novo cálculo: (n1 * n2) + (2 * n1 * n2)

const novoResultado = calculadora(2, 5, (n1, n2) => n1 * n2 + 2 * n1 * n2);

console.log(novoResultado);
