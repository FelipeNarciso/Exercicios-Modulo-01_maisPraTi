//Função para transformar as propriedades de um objeto//


let objetoDeEntrada = {
    num1: 2,
    num2: 4,
    num3: 6,
    num4: 8,
    num5: 10,
}

let objetoAlterado = {}
function alterarObjeto(){
    for(chave in objetoDeEntrada){
    objetoAlterado[chave] = objetoDeEntrada[chave] * 2
   }
   return objetoAlterado
}

alterarObjeto()
console.log('Objeto de entrada: ', objetoDeEntrada)
console.log('-----------------')
console.log('Alterando o objeto de entrada (multiplicando seus valores por 2)' , objetoAlterado)