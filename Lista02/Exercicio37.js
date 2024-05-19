//Gabarito de uma prova//

let gabarito = []
let respostaAluno = []

for(i = 0; i < 20; i++){
    gabarito.push(gerarLetraAleatoria())
}

for(i = 0; i < 50; i++){
    respostaAluno[i] = []
    let acertos = 0
    for(j = 0; j < 20; j++){
        respostaAluno[i][j] = gerarLetraAleatoria()
        if(respostaAluno[i][j] === gabarito[j]){
            acertos++
        }
    }
    console.log(`Resposta aluno ${i}:` , respostaAluno[i])
    console.log(`O aluno acertou ${acertos} questões!`)
    if(acertos >= 12){
        console.log('APROVADO!')
    }else{
        console.log('REPROVADO!')
    }
    acertos = 0
    console.log('-----------------------')
}
console.log(`Gabarito da Prova: ` , gabarito)




function gerarLetraAleatoria(){
    let letraAleatoria = Math.floor(Math.random() * 4)
    let letra
    switch(letraAleatoria){
        case 0:
            letra = 'A'
            break
        case 1:
            letra = 'B'
            break
        case 2:
            letra = 'C'
            break
        case 3:
            letra = 'D'
            break
    }
    return letra
}
