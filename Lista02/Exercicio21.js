//Função calcular peso ideal//

const prompt = require('prompt-sync')()

let alt = parseInt(prompt('Qual sua altura (em cm): '))
let sexo = prompt('Qual seu sexo (M/F): ').toUpperCase()
while(sexo !== 'M' && sexo !== 'F'){
    console.log('[ERRO] Sexo inválido!')
    sexo = prompt('Qual seu sexo (M/F): ').toUpperCase()
}

function pesoIdeal(alt , sexo){
    if(sexo === 'M'){
        return (72.7 * alt / 100) - 58
    }else{
        return (62.1 * alt / 100) - 44.7
    }

}
let calculoPeso = pesoIdeal(alt , sexo)

console.log(`Seu peso ideal é ${calculoPeso.toFixed(3)}Kg`)