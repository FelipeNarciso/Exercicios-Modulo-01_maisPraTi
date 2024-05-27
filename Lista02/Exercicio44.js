//Função para contar quantas propriedades do tipo string tem em um objeto//

let objeto = {
    id: 6297,
    nome: 'Maria',
    idade: 36,
    profissao: 'Professora',
    time: 'Grêmio'
}
let numStrings = 0
function contarStrings(){
    for(prop in objeto){
        if(typeof objeto[prop] === 'string'){
            numStrings++
        }
    }
}
contarStrings()
console.log('Dado o objeto:', objeto)
console.log('-------------')
console.log(`O número de propriedades do tipo string são ${numStrings}`)