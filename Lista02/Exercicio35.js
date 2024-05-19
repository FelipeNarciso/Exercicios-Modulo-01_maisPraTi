//Lendo 30 valores e separando em vetores par e ímpar//

let par = []
let impar = []

for(i = 0; i < 30; i++){
    let num = (Math.floor(Math.random() * 11))

    if(num % 2 == 0){
        if(par.length < 5){
            par.push(num)
        }else{
            console.log('O vetor par atingiu 5 posições! Escrevendo o vetor... ' , par)
            console.log('-----------------')
            par.length = 0
            par.push(num)
        }
    }else{
        if(impar.length < 5){
            impar.push(num)
        }else{
            console.log('O vetor ímpar atingiu 5 posições! Escrevendo o vetor... ' , impar)
            console.log('-----------------')
            impar.length = 0
            impar.push(num)
        }
    }
}
if(par.length > 0){
    console.log('Restante de números pares:' , par)
}
if(impar.length > 0){
    console.log('Restante de números ímpares:' , impar)
}
