//Vetor de 15 posições com aSequência de Fibbonacci//

let vetor = []

let n1 = 0
let n2 = 1
let sf = n1 + n2
for(i = 0; i < 15; i++){
   vetor.push(sf)
   sf = n1 + n2
   n1 = n2
   n2 = sf
}
console.log(vetor)