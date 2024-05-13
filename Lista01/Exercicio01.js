//Transformar temperatura de graus Celsius em Fahrenheit//


const prompt = require('prompt-sync')();

let tempc = parseInt(prompt('Digite uma temperatura em graus Celsius: '));
let tempf = ((tempc * 1.8) + 32);
console.log(`${tempc}°C equivale a ${tempf}°F`);