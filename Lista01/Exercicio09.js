//Códiogo de origem de um produto//

const prompt = require('prompt-sync')();

let codigo = parseInt(prompt('Digite o código de origem do porduto: '))


if(codigo == 1){
    console.log('Região Sul')
}else if(codigo == 2){
    console.log('Região Norte')
}else if(codigo == 3){
    console.log('Região Leste')
}else if(codigo == 4){
    console.log('Região Oeste')
}else if(codigo == 5 || codigo == 6){
    console.log('Região Nordeste')
}else if(codigo == 7 || codigo == 8 || codigo == 9){
    console.log('Região Sudeste')
}else if(codigo >= 10 &&  codigo <= 20 ){
    console.log('Região Centro-Oeste')
}else if(codigo >= 25 && codigo <= 50 ){
    console.log('Região Nordeste')
}else(
    console.log('Produto importado')
)


