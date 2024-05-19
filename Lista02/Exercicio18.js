//Registro de um funcionário// 

const prompt = require('prompt-sync')()

let funcionario = {}
funcionario.nome = prompt('Escreva o nome do funcionário: ')
funcionario.cargo = prompt('Escreva o cargo desse funcionário: ')
funcionario.salario = parseFloat(prompt('Qual o salário desse funcionário? '))
console.log('-------------------------')
console.log('Dados do funcionário:')
console.log(`Nome: ${funcionario.nome}`)
console.log(`Cargo: ${funcionario.cargo}`)
console.log(`Salário: R$${funcionario.salario.toFixed(2)}`)