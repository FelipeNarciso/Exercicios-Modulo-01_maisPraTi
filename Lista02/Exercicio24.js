//Criando matriz 6X8 e adicionando em um vetor a quantidade numeros negativos em cada linha//

let matriz = []
let vetorC = []
for(i = 0; i < 6; i++){
    matriz[i] = []
    for(j = 0; j < 8; j++){
        matriz[i][j] = Math.floor(Math.random() * 20) - 10
        
    }
}
for(i = 0; i < matriz.length; i++){
    let numerosNegativos = 0
    for(j = 0; j < matriz[i].length; j++){
        if(matriz[i][j] < 0){
            numerosNegativos++
        }
    }
    vetorC.push(numerosNegativos)
}

for(i = 0; i < matriz.length; i++){
    matriz[i] += ''
}
console.log(matriz)
console.log('-------------')
console.log(vetorC)