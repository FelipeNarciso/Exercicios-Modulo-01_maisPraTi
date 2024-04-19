//Par, ímpar ou nulo//

const prompt = require('prompt-sync')();

let valor = parseInt(prompt('Digite um número: '))


while(valor > 0){
    if(valor % 2 == 0){
        console.log('Par!')
    }else{
        console.log('Ímpar')
    }
    valor = parseInt(prompt('Digite um número: '))
}
console.log('FIM!')





