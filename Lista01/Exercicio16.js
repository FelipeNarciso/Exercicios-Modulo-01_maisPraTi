//50 primeiros números primos maiores que 100//


let num = 100;
let qtd = 0;

while (qtd < 50) {
    let divisor = 2
    let primo = true
    
    while (divisor < num) {
        if (num % divisor === 0) {
            primo = false
            //break;
        }
        divisor++
    }
    if (primo == true) {
        console.log(num);
        qtd++;
    }
    num++;
}