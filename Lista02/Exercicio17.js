//Listagem de dados de pessoas menores de idade//

const prompt = require('prompt-sync')()

let nome = []
let idade = []
let menorDeIdade = []

for(i = 0; i < 9; i++){
    let pergunta1 = prompt('Qual o seu nome? ')
    let pergunta2 = parseInt(prompt('Qual sua idade? '))
    nome.push(pergunta1)
    idade.push(pergunta2)
}

for(i = 0; i < idade.length; i++){
    if(idade[i] < 18){
       menorDeIdade.push(nome[i])
    }
}
console.log(`As pessoas menores de idade são: ${menorDeIdade}`)