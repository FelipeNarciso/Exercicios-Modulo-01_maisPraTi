//Lendo matriz 15X20 e somando cada coluna

let matriz = []
let soma = []

for(i = 0; i < 15; i++){
    matriz[i] = []
    for(j = 0; j < 20; j++){
        matriz[i][j] = parseFloat((Math.random() * 10).toFixed(1))
    }
}
for(j = 0; j < 20; j++){
    soma[j] = 0
}
let linhas = matriz.length
let colunas = matriz[0].length

for (i = 0; i < linhas; i++) {
    for (j = 0; j < colunas; j++) {
        soma[j] += matriz[i][j];
    }
}
console.log(matriz)
for(i = 0; i < 20; i++){
    console.log(`A soma da coluna ${i + 1} é ${soma[i].toFixed(1)}`)
}
