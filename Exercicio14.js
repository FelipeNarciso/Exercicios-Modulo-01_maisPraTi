//Recebendo números decimais e fazendo a média//

const prompt = require('prompt-sync')();

let n = parseFloat(prompt('Digite um número: '))
let valor = 0
let quantidade = 0
while(n != 0 ){
    valor += n
    quantidade++
    n = parseFloat(prompt('[Digite 0 para encerrar!]Digite um número: '))
}console.log('A média dos valores digitados é' , valor/quantidade)
