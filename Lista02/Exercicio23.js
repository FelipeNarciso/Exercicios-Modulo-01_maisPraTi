//Criando uma matriz de identidade 7//

let matriz = []

for(i = 0; i < 7; i++){
    matriz[i] = []
    for(j = 0; j < 7; j++){
        if(i === j){
            matriz[i][j] = 1
        }else{
            matriz[i][j] = 0
        }
    }
}

for(i = 0; i < matriz.length; i++){
    matriz[i] += ''
}
console.log(matriz)