//Percentual de votos brancos, nulos e válidos.//


const prompt = require('prompt-sync')();

let eleitores = parseInt(prompt('Qual o número total de eleitores? '));
let votosb = parseInt(prompt('Qual a qualtidade de votos em branco? '));
let votosn = parseInt(prompt('Qual a quantidade de votos nulos? '));
let votosv = parseInt(prompt('Qual a quantidade de votos válidos? '));
let resvb = ((votosb / eleitores) * 100);
let resvn = ((votosn / eleitores) * 100);
let resvv = ((votosv / eleitores) * 100);

console.log(`${resvb}% dos eleitores votaram em branco`);
console.log(`${resvn}% dos eleitores anularam seus votos`);
console.log(`${resvv}% dos eleitores tivarem votos válidos`);
