//Gerando um vetor e fazendo operações que o usuário escolher//

const prompt = require('prompt-sync')()

let vetor = []
let continuar = true
let alternativa

for(i = 0; i < 6; i++){
    vetor.push(Math.floor(Math.random() * 101))
}
while(continuar == true){
    console.log('------------------------')
    console.log('0: Encerrar processo.')
    console.log('1: Soma dos elementos.')
    console.log('2: Produto dos elementos.')
    console.log('3: Média dos elementos.')
    console.log('4: Ordene os elementos em ordem crescente.')
    console.log('5: Mostre o vetor.')
    
    alternativa = parseInt(prompt('Escolha uma das alternativas acima para fazer operações com um vetor: '))

    validarPrompt()
    operacoes()

    if(alternativa == 0){
        continuar = false
    }
}




function validarPrompt(){
    while(alternativa < 0 || alternativa > 5 || isNaN(alternativa)){
        console.log('[ERRO] Escolha uma alternativa válida!')
        console.log('------------------------')
        console.log('0: Encerrar processo.')
        console.log('1: Soma dos elementos.')
        console.log('2: Produto dos elementos.')
        console.log('3: Média dos elementos.')
        console.log('4: Ordene os elementos em ordem crescente.')
        console.log('5: Mostre o vetor.')
        alternativa = parseInt(prompt('Escolha uma das alternativas acima para fazer operações com um vetor: '))
    }
    return alternativa
}


function operacoes(){
        if(alternativa == 1){
            let soma = 0
            for(i = 0; i < 6; i++){
                soma += vetor[i]
            }
            console.log(`A soma dos elementos do vetor é ${soma}`)
        }else if(alternativa == 2){
            let produto = 1
            for(i = 0; i < 6; i++){
                produto *= vetor[i]
            }
            console.log(`O produto dos elementos do vetor é ${produto}`)
        }else if(alternativa == 3){
            let media = 0
            let soma = 0
            for(i = 0; i < 6; i++){
                soma += vetor[i]
                media = soma / 6 
            }
            console.log(`A média dos elementos do vetor é ${media.toFixed(2)}`)
        }else if(alternativa == 4){
            vetor.sort()
            console.log('O Vetor foi modificado!')
        }else if(alternativa == 5){
            console.log('Vetor: ' , vetor)
        }
}


