//Multiplicando cada linha da matriz pelo elemento da diagonal principal//

let matriz = []

for(i = 0; i < 50; i++){
    matriz[i] = []
    for(j = 0; j < 50; j++){
        matriz[i][j] = (Math.random() * 11).toFixed(2)
    }
}
console.log('Dada a matriz: ', matriz)
let elementoDiagonal = 0

for(i = 0; i < 50; i++){
    for(j = 0; j < 50; j++){
        if(i === j){
            elementoDiagonal = matriz[i][j]
        }
        matriz[i][j] = (matriz[i][j] * elementoDiagonal).toFixed(2)
    }
}

console.log('------------------------')
console.log('Multiplicando cada valor pelo o elemento da diagonal principal daquela linha')
console.log('Matriz modificada: ' , matriz)


