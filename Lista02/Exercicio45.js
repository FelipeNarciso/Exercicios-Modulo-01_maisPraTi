//Criando um array, onde cada string é uma chave, sendo o valor o numeros de vezes que o nome aparece//

let frutas = [
    "Maçã",
    "Banana",
    "Laranja",
    "Bergamota",
    "Abacaxi",
    "Banana",
    "Bergamota",
    "Laranja",
    "Bergamota"
]
let vezesString = {}
function contarStrings(){
    frutas.forEach(function(frutas){
        if(vezesString[frutas]){
            vezesString[frutas]++
        }else{
            vezesString[frutas] = 1
        }
    })
}
contarStrings()
console.log('Dado o vetor:' , frutas)
console.log('----------------')
console.log('Objeto com a quantidade de vezes que a string aparece no array:' , vezesString)


