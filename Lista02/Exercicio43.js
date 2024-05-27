//Desenvolvendo função que crie um novo objeto combinando as propriedades de outros dois//

let objeto1 = {
    nome: 'Maria',
    idade: 36,
    time: 'Inter'
}

let objeto2 = {
    profissao: 'Professora',
    time: 'Grêmio'
}

function combinandoObjetos(){
    let objetoCombinado = {...objeto1, ...objeto2}
    return objetoCombinado
}

console.log('Objeto 1:', objeto1)
console.log('Objeto 2:' , objeto2)
console.log('---------------')
console.log('Objeto combinado: ' , combinandoObjetos())