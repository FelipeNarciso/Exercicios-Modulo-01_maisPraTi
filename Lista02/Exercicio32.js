//Lendo uma matriz e dividindo pelo maior elemento// 

let matriz = []

for(i = 0; i < 12; i++){
    matriz[i] = []
    for(j = 0; j < 13; j++){
        matriz[i][j] = parseInt(Math.random() * 10)
    }
}

let matrizModificada = []

for(i = 0; i < 12; i++){
    matrizModificada[i] = []
}

for(i = 0; i < 12; i++){
    let maior = matriz[i][0]
    for(j = 1; j < 13; j++){
        let elemento = matriz[i][j]
        if(elemento > maior){
            maior = elemento
        }
    }
    for(j = 0; j < 13; j++){
        if(maior !== 0){
            let res = matriz[i][j] / maior
            matrizModificada[i][j] = res.toFixed(2)
        }else{
            matrizModificada[i][j] = matriz[i][j]
        }
        
    }
}

console.log(matriz)
console.log('---------------')
console.log(matrizModificada)