//Lendo dois valores diferentes e escrevendo em ordem crescente//

const prompt = require('prompt-sync')();

let valor1 = prompt('Digite um valor: ');
let valor2 = prompt('Digite um valor diferente: ');
if(valor1 == valor2){
    console.log('Não é possível utilizar dois valores iguais!')
}else if(valor1 < valor2){
    console.log(`${valor1} , ${valor2}`)
}else{
    console.log(`${valor2} , ${valor1}`)
}