//Gerando um vetor de 100 posições e compactando//

let vetor = []
let vetorCompactado = []
let max = 25
let min = -25

for(i = 0; i < 100; i++){
    let num = Math.floor(Math.random() * (max - min) + min)
    vetor[i] = num
    if(num > 0){
        vetorCompactado.push(num)
    }
    
}
console.log("Vetor original: " , vetor)
console.log('------------------')
console.log('Vetor compactado (retirando valores negativos e nulos): ' , vetorCompactado)