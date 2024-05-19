//Loteria//

let sorteio = []

let apostas = []

for (let i = 0; i < 13; i++) {
    let num = 0
    do {
        num = Math.floor(Math.random() * 101)
    } while (sorteio.includes(num))

    sorteio.push(num)
}
console.log('Números sorteados: ' , sorteio)
console.log('---------------')

let acertos = 0
for(i = 0; i < 100; i++){
    apostas[i] = []
    for(j = 0; j < 13; j++){ 
        let num = 0
        do {
            num = Math.floor(Math.random() * 101)
        } while (apostas[i].includes(num))
        apostas[i][j] = num

        if(sorteio.includes(apostas[i][j])){
            acertos++
        }
    }
    //console.log(`Números da aposta ${i}: `, apostas[i])
    console.log(`A aposta ${i} teve ${acertos} acerto.`)
    if(acertos == 13){
        console.log('Parabéns, tu foi o GANHADOR!')
    }
    console.log('---------------')
    acertos = 0
}
