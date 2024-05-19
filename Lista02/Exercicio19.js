//Lendo 5 horarios e convertendo//

const prompt = require('prompt-sync')()

let horarios = []

for(i = 1; i < 6; i++){
    console.log(`Escolhendo o ${i}° horário!`)
   
    let hora = parseInt(prompt('Digite a hora: '))
    while(hora < 0 || hora > 23 || isNaN(hora)){
        console.log('[ERRO] Digite uma hora válida!')
        hora = parseInt(prompt('Digite a hora: '))
    }

    let minutos = parseInt(prompt('Digite os minutos: '))
    while(minutos < 0 || minutos > 59 || isNaN(minutos)){
        console.log('[ERRO] Digite um minuto válido!')
        minutos = parseInt(prompt('Digite os minutos: '))
    }

    let segundos = parseInt(prompt('Digite os segundos: '))
    while(segundos < 0 || segundos > 59 || isNaN(segundos)){
        console.log('[ERRO] Digite um segundo válido!')
        segundos = parseInt(prompt('Digite os segundos: '))
    }

    horarios.push(`${hora}:${minutos}:${segundos}`)        
    console.log('----------------------')
}
console.log(`Os horários escolhidos foram: ${horarios}`)







