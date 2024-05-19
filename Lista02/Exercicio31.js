//Elementos iguais a A em uma matriz//


let a = parseInt(Math.random()* 10)
let matriz = []

for(i = 0; i < 30; i++){
    matriz[i] = []
    for(j = 0; j < 30; j++){
        matriz[i][j] = parseInt(Math.random() * 10)
    }
}

let valoresIguaisA = 0

let elementosDiferentes = []

for(i = 0; i < 30; i++){
    elementosDiferentes[i] = []
    for(j = 0; j < 30; j++){
        if(matriz[i][j] === a){
            valoresIguaisA++
        }else{
            elementosDiferentes[i].push(matriz[i][j])
        }
    }
}

console.log('Matriz principal: ' , matriz)
console.log(`Numero aleatório: ${a}`)
console.log(`Quantidade de valores iguais a ${a}: ${valoresIguaisA}`)
console.log(`Matriz dos números diferentes de ${a}: `, elementosDiferentes)