//Pesquisa prefeitura sobre seus habitantes//

const prompt = require('prompt-sync')()


function pesquisaPrefeitura(){
    let salario = 0
    let filhos = 0
    let habitantes = 0
    let continuar = 'S'
    let salarioMaior = 0
    let salario350 = 0

while(continuar === 'S'){
    let salarioHabitante = parseFloat(prompt('Qual o salário do entrevistado? '))
    salario += salarioHabitante
    if(salarioHabitante > salarioMaior){
        salarioMaior = salarioHabitante
    }
    if(salarioHabitante <= 350){
        salario350++
    }
    filhos += parseInt(prompt('Quantos filhos tem o entrevistado? '))
    habitantes++
    continuar = prompt('Deseja adicionar outro habitante (S/N)? ').toUpperCase()
    while(continuar !== 'S' && continuar !== 'N'){
        console.log('[ERRO] Resposta inválida!')
        continuar = prompt('Deseja adicionar outro habitante (S/N)? ').toUpperCase()
    }
    console.log('------------------------')
}
let mediaSalario = salario / habitantes
let mediaFilhos = filhos / habitantes
let percentual350 = (salario350 / habitantes) * 100

console.log(`A média de salário dos habitantes é ${mediaSalario.toFixed(2)}`)
console.log(`A média de filhos dos habitantes é ${mediaFilhos.toFixed(2)}`)
console.log(`O maior salário entre os habitantes é ${salarioMaior.toFixed(2)}`)
console.log(`O percentual de pessoas com salário até R$ 350.00 é ${percentual350.toFixed(2)}%`)
}

pesquisaPrefeitura()
