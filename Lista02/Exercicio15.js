//Armazenando numeros em um vetor//

const prompt = require('prompt-sync')()

let vetor = []
let pares = []
let posiçao = []
for(i = 0; i < 10; i++){
    numeros = parseInt(prompt('Digite um número para guardar em um vetor: '))
    vetor.push(numeros)
}
for(i = 0; i < vetor.length; i++){
    if(vetor[i] % 2 === 0){
        pares.push(vetor[i])
        posiçao.push(i)
    }
}
if(pares.length > 0){
    console.log(`Dos numeros adicionados ${pares} são pares e estão na posição ${posiçao} respectivamente.`)
}else{
    console.log('Não foram adicionado numeros pares!')
}
