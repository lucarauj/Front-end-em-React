const nomes = ['Arthur', 'Manuel', 'Eduardo'];

const index = nomes.reduce((acumulador, letra) => {
    return acumulador + letra[0];
}, "");

console.log(index);