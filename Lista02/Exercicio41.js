//Acessando um objeto e adicionando mais uma propriedade//


let objeto = {
    nome: 'Felipe',
    idade: 20,
}

console.log(objeto)
console.log(`A idade cadastrada nesse objeto é ${objeto.idade}`)

objeto.email = 'teste@gmail.com'

console.log('Foi adicionado a propriedade email ao objeto!')
console.log('Objeto atualizado: ', objeto)