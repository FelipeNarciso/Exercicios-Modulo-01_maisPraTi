//Calculando média ponderada//

const prompt = require('prompt-sync')();

let n1 = parseFloat(prompt('Digite um número: '))
let n2 = parseFloat(prompt('Digite o peso desse número: '))
let d = 0
let p = 0
 while(n1 != 0){
    d = d + n1*n2
    p += n2 
    n1 = parseFloat(prompt('[Digite 0 para cancelar] Digite um número: '))
    if(n1 != 0){
        n2 = parseFloat(prompt('Digite um peso para esse número: '))
    }
 }console.log('A média ponderada dos valores digitados é: ' , d/p) 