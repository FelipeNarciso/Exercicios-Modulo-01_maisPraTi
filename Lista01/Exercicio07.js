//Calculando o valor da compra de maças//

const prompt = require('prompt-sync')();

let maças = parseInt(prompt('Digite a quantidade de maçãs compradas: '));
let preço1 = maças * 0.30;
let preço2 = maças * 0.25;


if(maças >= 12){
    console.log(`A compra de ${maças} maçãs custa R$${preço2}`)
}else{
    console.log(`A compra de ${maças} maçãs custa R$${preço1}`)
}
