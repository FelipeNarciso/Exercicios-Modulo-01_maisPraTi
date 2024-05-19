//Loto

let sorteio = []

let apostas = []

for (let i = 0; i < 5; i++) {
    let num = 0
    do {
        num = Math.floor(Math.random() * 25)
    } while (sorteio.includes(num))

    sorteio.push(num)
}
console.log('Números sorteados: ' , sorteio)
console.log('---------------')

let acertos = 0
for(i = 0; i < 50; i++){
    apostas[i] = []
    for(j = 0; j < 5; j++){ 
        let num = 0
        do {
            num = Math.floor(Math.random() * 25)
        } while (apostas[i].includes(num))
        apostas[i][j] = num

        if(sorteio.includes(apostas[i][j])){
            acertos++
        }
    }
    console.log(`Números da aposta ${i}: `, apostas[i])
    console.log(`A aposta ${i} teve ${acertos} acerto.`)
    if(acertos == 5){
        console.log('GANHADOR!')
    }
    console.log('---------------')
    acertos = 0
}
