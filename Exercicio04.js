//Cálculo da média semestral e considerar se foi aprovado//


const prompt = require('prompt-sync')();

let nota1 = parseFloat(prompt('Digite a nota da primeira prova: '));
let nota2 = parseFloat(prompt('Digite a nota da segunda prova: '));
let media = ((nota1 + nota2) / 2);
if(media >= 6.0){
    console.log('PARABÉNS! Você foi aprovado')
}