//Verificando se os lados formam um triângulo e indicando o seu tipo//

const prompt = require('prompt-sync')();

let a = parseInt(prompt('Digite um valor: '));
let b = parseInt(prompt('Digite um valor: '));
let c = parseInt(prompt('Digite um valor: '));
if(a < b + c && b < a + c && c < a + b){
    if(a == b && b == c){
        //Trângulo equilátero//
        console.log('Os dados fornecidos formam um triângulo equilátero!')
    }else if(a != b && b != c && a != c){
        //Triângulo escaleno//
        console.log('Os dados fornecidos formam um triângulo escaleno!')
    } else if(a == b || a == c || b == c){
        //Triângulo isóceles//
        console.log('Os dados fornecidos formam um triângulo isóceles!')
    }else{
        console.log('Os dados fornecidos nãio formam um triângulo!')
    }
}else{
    console.log('Os dados fornecidos não formam um triângulo!')
}
        

     
    




