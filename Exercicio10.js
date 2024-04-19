//Ler um número inteiro e mostrá-lo 10 vezes//

const prompt = require('prompt-sync')();

let numero = parseInt(prompt('Digite um número: '));
let contador = 0;

for(contador = 0; contador <= 9; contador++){
    console.log(numero)
} 