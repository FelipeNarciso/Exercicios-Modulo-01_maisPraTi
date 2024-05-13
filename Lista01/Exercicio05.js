//Acrescentando o aviso [Reprovado] se a média for menor que 6.0//

const prompt = require('prompt-sync')();

let nota1 = parseFloat(prompt('Digite a nota da primeira prova: '));
let nota2 = parseFloat(prompt('Digite a nota da segunda prova: '));
let media = ((nota1 + nota2) / 2);
if(media >= 6.0){
    console.log('PARABÉNS! Você foi aprovado!')
}else{
    console.log('Você foi REPROVADO! Estude mais!')
}