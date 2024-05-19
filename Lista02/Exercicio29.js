//Calculando somas de uma Matriz(5,5)//

let matriz = []

for(i = 0; i < 5; i++){
    matriz[i] = []
    for(j = 0; j < 5; j++){
        matriz[i][j] = Math.floor(Math.random() * 10)
    }
}

let somaLinha4 = 0
let somaColuna2 = 0
let somaDiagonalPrincipal = 0
let somaTotal = 0


for(i = 0; i < 5; i++){
    for(j = 0; j < 5; j++){
        if(i == 3){
            somaLinha4 += matriz[i][j]
        }else if(j == 1){
            somaColuna2 += matriz[i][j]
        }else if(i == j){
            somaDiagonalPrincipal += matriz[i][j]
        }
        somaTotal += matriz[i][j]
    }
}

console.log('Dada a Matriz: ' , matriz)
console.log(`A soma da linha 4 da matriz é ${somaLinha4}`)
console.log(`A soma da coluna 2 da matriz é ${somaColuna2}`)
console.log(`A soma da diagonal principal da matriz é ${somaDiagonalPrincipal}`)
console.log(`A soma totalda matriz é ${somaTotal}`)