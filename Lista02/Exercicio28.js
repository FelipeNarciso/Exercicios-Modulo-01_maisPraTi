//Somando elementos de uma Matriz acima da diagonal principal e abaixo// 

let matriz = []

for(i = 0; i < 10; i++){
    matriz[i] = []
    for(j = 0; j < 10; j++){
        matriz[i][j] =Math.floor(Math.random() * 10)
    }
}
let somaAcima = 0
let somaAbaixo = 0

for(i = 0; i < 10; i++){
    for(j = 0; j <10; j++){
        if(i < j){
            somaAcima += matriz[i][j]
        }else if(i > j){
            somaAbaixo += matriz[i][j]
        }
    }
}        
console.log('Dada a Matriz = ' , matriz)
console.log(`A soma dos elementos acima da diagonal principal é ${somaAcima}`)
console.log(`A soma dos elementos abaixo da diagonal principal é ${somaAbaixo}`)