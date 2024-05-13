//Gerando números de 1000 a 1999 que tem resto 5//

const prompt = require('prompt-sync')();

let num = 1000

do{
    if(num % 11 == 5){
        console.log(num)
    }
    num++
}while(num >= 1000 && num <= 1999)

