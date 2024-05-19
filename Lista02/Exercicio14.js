//Vetor para armazenar nomes//

const prompt = require('prompt-sync')() 

let vetor = []

for(i = 0; i < 7; i++){
    let nomes = prompt('Escreva um nome para armazenar em um vetor: ')
    vetor.push(nomes)
}
console.log(`A lista dos nomes adicionados no vetor, em ordem inversa, são ${vetor.reverse()}`)