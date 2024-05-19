//Multiplicando Matriz pelo Valor//

let matriz = []
let valor = parseInt(Math.floor(Math.random() * 10))
let vetor = []

for(i = 0; i < 6; i++){
    matriz[i] = []
    for(j = 0; j < 6; j++){
        matriz[i][j] = parseInt(Math.floor(Math.random() * 10))
    }
}

for(i = 0; i < matriz.length; i++){
    for(j = 0; j < matriz[i].length; j++){
        vetor.push(matriz[i][j] * valor) 
    }
}
console.log('Matriz = ' , matriz)
console.log(`Valor = ${valor}`)
console.log('A Matriz multiplicada pelo Valor é: ' , vetor)