//Gerando cinco tabuadas//

const prompt = require('prompt-sync')();

let contador = 1

for(contador = 1; contador <= 5; contador++){
    let n = prompt('Digite um número: ')
    let c = 1
    for(c = 1; c <= 10; c++){
        console.log(`${n} X ${c} = `, n * c)
    }
}