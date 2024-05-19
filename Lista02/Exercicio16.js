//Ordenando os valores de um vetor//

let vetor = []
for (i = 0; i < 20; i++){
    num = (Math.floor(Math.random() * 99))
    vetor.push(num)
}
console.log(vetor)
vetor.sort(function(a , b) {
    return a - b
})
console.log(vetor)