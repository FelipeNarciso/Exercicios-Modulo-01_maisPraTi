//Ler quatro números inteiros e realizar operações//

const prompt = require('prompt-sync')();

let n1 = parseInt(prompt('Digite um número: '));
let n2 = parseInt(prompt('Digite um número: '));
let n3 = parseInt(prompt('Digite um número: '));
let n4 = parseInt(prompt('Digite um número: '));
let res1 = console.log(`${n1} + 25 = ` , n1 + 25);
let res2 = console.log(`${n2} X 3 = ` , n2 * 3);
let res3 = console.log(`${n3} + 12% = ` , (0.12 * n3) + n3);
let res4 = console.log(`A soma de ${n1} + ${n2} + ${n3} é igual a ` , n1 + n2 + n3);