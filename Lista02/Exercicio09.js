//Aplicativo para ler salários de homens e mulheres//

const prompt = require('prompt-sync')()

let salarioH = 0
let salarioM = 0

let sexo = parseInt(prompt('Qual o sexo do funcionário? (1 para HOMEM e 2 para MULHER) '))
while(sexo != 1 && sexo != 2){
    console.log('[ERRO] Alternativa inválida! Escolha uma alternativa disponível!')
    sexo = parseInt(prompt('Qual o sexo do funcionário? (1 para HOMEM e 2 para MULHER) '))
}
let salario = parseFloat(prompt('Digite o salário do funcionário: '))

while(sexo == 1 || sexo == 2){
    if(sexo == 1){
        salarioH += salario
        console.log('-----------------------')
        sexo = parseInt(prompt('Qual o sexo do funcionário? (1 para HOMEM e 2 para MULHER e 0 para ENCERRAR) '))
        if(sexo == 0){
            console.log(`O total de salário pago aos homens é R$ ${salarioH.toFixed(2)} e o total de salário pago as mulheres é R$${salarioM.toFixed(2)}`)
        }else{
            salario = parseFloat(prompt('Digite o salário do funcionário: '))
        }
    }else if(sexo == 2){
        salarioM += salario
        console.log('-----------------------')
        sexo = parseInt(prompt('Qual o sexo do funcionário? (1 para HOMEM e 2 para MULHER e 0 para ENCERRAR) '))
        if(sexo == 0){
            console.log(`O total de salário pago aos homens é R$ ${salarioH.toFixed(2)} e o total de salário pago as mulheres é R$${salarioM.toFixed(2)}`)
        }else{
            salario = parseFloat(prompt('Digite o salário do funcionário: '))
        }
    }else{
        console.log('[ERRO] Escolha uma alternativa disponível!')
        console.log('-----------------------')
        sexo = parseInt(prompt('Qual o sexo do funcionário? (1 para HOMEM e 2 para MULHER e 0 para ENCERRAR) '))
        if(sexo == 0){
            console.log(`O total de salário pago aos homens é R$ ${salarioH.toFixed(2)} e o total de salário pago as mulheres é R$${salarioM.toFixed(2)}`)
        }else{
            salario = parseFloat(prompt('Digite o salário do funcionário: '))
        }
        
    }
}
