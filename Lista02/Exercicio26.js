//Calculando a matriz produto//

let matrizA = []
let matrizB = []
let matrizP = []

for(i = 0; i < 3; i++){
    matrizA[i] = []
    for(j = 0; j < 5; j++){
        matrizA[i][j] = parseInt((Math.floor(Math.random() * 10)))
    }
}
for(i = 0; i < 3; i++){
    matrizB[i] = []
    for(j = 0; j < 5; j++){
        matrizB[i][j] = parseInt((Math.floor(Math.random() * 10)))
    }
}
for(i = 0; i < 3; i++){
    matrizP[i] = []
    for(j = 0; j < 5; j++){
        matrizP[i][j] = 0
    }
}
for(i = 0; i < matrizP.length; i++){
    for(j = 0; j < matrizP[i].length; j++){
        matrizP[i][j] += matrizA[i][j] * matrizB[i][j]
    }
}
console.log('Matriz A = ' , matrizA)
console.log('Matriz B = ' , matrizB)
console.log('Matriz Produto = ' , matrizP)