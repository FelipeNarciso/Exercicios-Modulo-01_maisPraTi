//Sistema de reserva de hotéis//

const prompt = require('prompt-sync')()

let hoteis = [
    {id: 1, nome: 'ACAPULCO' , cidade: 'PORTO ALEGRE' , quartosTotais: 150, quartosDisponiveis: 87, avaliações:[]}
]
let reservas = []
let ocupação = []

paginaInicial()
function paginaInicial(){
    console.log('Bem vindo ao sistema de reserva de hotéis!')
    console.log('Navegue pelas funcionalidades do sistema através das alternativas!')
    console.log('1: Adicionar hotel.')
    console.log('2: Descobrir hotéis na minha cidade')
    console.log('3: Fazer uma reserva')
    console.log('4: Cancelar reserva')
    console.log('5: Listar reservas')
    console.log('6: Fazer check-in/check-out')
    console.log('7: Gerar relatório de ocupação do hotel')
    console.log('0: Encerrar atendimento')
    escolha = parseInt(prompt('Escolha uma alternativa: '))
    testeAlternativa()
}






function testeAlternativa(){
    while(escolha < 0 || escolha > 7 || isNaN(escolha)){
        console.log('[ERRO] Escolha uma alternativa válida!')
        escolha = parseInt(prompt('Escolha uma alternativa: '))
    }
    switch(escolha){
        case 0:
            console.log('Atendimento ENCERRADO. Obrigado por utilizar nossos serviços!');
            break;
        case 1:
            alternativa1();
            break;
        case 2:
            alternativa2();
            break;
        case 3:
            alternativa3();
            break;
        case 4:
            alternativa4();
            break;
        case 5:
            alternativa5();
            break; 
        case 6:
            alternativa6();
            break;
        case 7:
            alternativa7();
            break;
    }

}



function alternativa1() {
    console.log('--------------');
    console.log('Adicionando um novo hotel:');
    let id
    let nome
    do {
        id = parseInt(prompt('Qual o ID desse hotel: '));

        if (isNaN(id)) {
            console.log('[ERRO] ID só pode conter números!');
        } else if (hoteis.some(hotel => hotel.id === id)) {
            console.log('[ERRO] Esse ID já está cadastrado! Tente novamente');
        }
    } while (isNaN(id) || hoteis.some(hotel => hotel.id === id));

    do {
        nome = prompt('Qual o nome desse hotel: ').toUpperCase();

        if (hoteis.some(hotel => hotel.nome === nome)) {
            console.log('[ERRO] Já existe um hotel cadastrado com esse nome! Tente novamente');
        }
    } while (hoteis.some(hotel => hotel.nome === nome));

    let cidade = prompt('Qual a cidade onde se encontra esse hotel: ').toUpperCase();

    let quartosTotais = parseInt(prompt('Qual a quantidade de quartos totais do hotel: '));
    while (isNaN(quartosTotais) || quartosTotais <= 0) {
        if (isNaN(quartosTotais)) {
            console.log('[ERRO] Quantidade de quartos totais só pode conter números!');
        } else if (quartosTotais <= 0) {
            console.log('[ERRO] O hotel precisa ter no mínimo 1 quarto!');
        }
        quartosTotais = parseInt(prompt('Qual a quantidade de quartos totais do hotel: '));
    }

    let quartosDisponiveis = parseInt(prompt('Qual a quantidade de quartos disponíveis nesse hotel: '));
    while (isNaN(quartosDisponiveis) || quartosDisponiveis > quartosTotais || quartosDisponiveis <= 0) {
        if (isNaN(quartosDisponiveis)) {
            console.log('[ERRO] Quantidade de quartos disponíveis só pode conter números!');
        } else if (quartosDisponiveis > quartosTotais) {
            console.log('[ERRO] A quantidade de quartos disponíveis precisa ser menor ou igual que a quantidade total!');
        } else if (quartosDisponiveis <= 0) {
            console.log('[ERRO] Precisa ter pelo menos 1 quarto disponível!');
        }
        quartosDisponiveis = parseInt(prompt('Qual a quantidade de quartos disponíveis nesse hotel: '));
    }
    hoteis.push({ id: id, nome: nome, cidade: cidade, quartosTotais: quartosTotais, quartosDisponiveis: quartosDisponiveis })
    console.log('Hotel adicionado com sucesso!');
    console.log('Voltando para o menu...');
    console.log('----------------');
    paginaInicial();
}



function alternativa2(){
    console.log('------------')
    console.log('Buscar hoteis por cidade:')
    let busca = prompt('Em qual cidade você está procurando hotéis? ').toUpperCase()
    let encontrouHotel = false
    for(chave of hoteis){
        if(chave.cidade === busca){
            console.log(`Encontramos o hotel ${chave.nome} em ${busca}`)
            encontrouHotel = true
        }
    }
            if(!encontrouHotel){
            console.log(`Nenhum hotel encontrado em ${busca}`)
            let escolha = prompt('Deseja realizar uma nova perquisa? (S/N) ').toUpperCase()
                while(escolha !== 'S' && escolha !== 'N'){
                    console.log('[ERRO] Digite apenas "S" para SIM e "N" para NÃO!')
                    escolha = prompt('Deseja realizar uma nova perquisa? (S/N) ').toUpperCase()
                }
                if(escolha === 'S'){
                    alternativa2()
                }else{
                    console.log('Voltando para o menu...')
                    console.log('------------------')
                    paginaInicial()
                }
                return
        }
    let reserva = prompt('Deseja aproveitar e fazer uma reserva em um desses hoteis? (S/N) ').toUpperCase()
    while(reserva !== 'S' && reserva !== 'N'){
        console.log('[ERRO] Digite apenas "S" para SIM e "N" para NÃO!')
        reserva = prompt('Deseja aproveitar e fazer uma reserva em um desses hoteis? (S/N) ').toUpperCase()
    }
    if(reserva === 'S'){
        alternativa3()
    }else{
        console.log('Voltando para o menu...')
        console.log('------------------')
        paginaInicial()
    }
}

function alternativa3(){
    let id = Math.floor(Math.random() * 999)
    for(let i = 0; i < reservas.length; i++){
        if(reservas[i].idReserva === id){
            id = Math.floor(Math.random() * 999)
            break
        }
    }
    console.log('---------------')
    console.log('Fazendo a reserva de um hotel:')
    let nomeCliente = prompt('Qual seu nome: ').toUpperCase()
    while(nomeCliente.length === 0){
        console.log('[ERRO] É necessário adicionar um nome!')
        nomeCliente = prompt('Qual seu nome: ').toUpperCase()
    }
    let nome = prompt('Qual o nome do hotel que deseja se hospedar? ').toUpperCase()
    while(nome.length === 0){
        console.log('[ERRO] É necessário adicionar um nome!')
        nome = prompt('Qual o nome do hotel que deseja se hospedar? ').toUpperCase()
    }
    let hotelEncontrado = false
    let hotel
    for(chave of hoteis){
        if(nome === chave.nome){
            hotelEncontrado = true
            hotel = chave
            break
        }   
    }    
        if(!hotelEncontrado){
            console.log('[ERRO] Não encontramos esse hotel em nosso sistema!')
            console.log('Verifique se está escrito corretamente e tende novamente')
            let pergunta = prompt('Deseja retornar ao menu e ver os hoteis disponível na cidade que deseja? (S/N): ').toUpperCase()
            while(pergunta !== 'S' && pergunta !== 'N'){
                console.log('[ERRO] Digite apenas "S" para SIM e "N" para NÃO!')
                pergunta = prompt('Deseja retornar ao menu e ver os hoteis disponível na cidade que deseja? (S/N): ')
            }
            if(pergunta === 'S'){
                console.log('--------------------')
                paginaInicial()
                return
            }else{
                alternativa3()
                return
            }
        }
        let quartos = parseInt(prompt('Você necessita de quantos quartos? '))
        while(quartos <= 0 || isNaN(quartos)){
            console.log('[ERRO] Você precisa escolher no mínimo 1 quarto!')
            quartos = parseInt(prompt('Você necessita de quantos quartos? '))
        }
        while(hotel.quartosDisponiveis < quartos){
            console.log(`Infelizmente esse hotel só tem ${hotel.quartosDisponiveis} quartos disponíveis :(`)
            let escolha = prompt('Deseja escolher novamente a quantidade de quartos que necessita? (S/N)? ').toUpperCase()
            while(escolha !== 'S' && escolha !== 'N'){
                console.log('[ERRO] Digite apenas "S" para SIM e "N" para NÃO!')
                escolha = prompt('Deseja escolher novamente a quantidade de quartos que necessita? (S/N)? ').toUpperCase()
            }
            if(escolha === 'S'){
                quartos = parseInt(prompt('Você necessita de quantos quartos? '))
            }else{
                console.log('Voltando para o menu...')
                console.log('-------------------------')
                paginaInicial()
                return;
            }

            while(isNaN(quartos)){
                console.log('[ERRO] Quantidades de quartos precisa ser um número!')
                quartos = parseInt(prompt('Você necessita de quantos quartos? '))
            }
            while(quartos < 0){
                console.log('[ERRO] Você precisa escolher no mínomo 1 quarto!')
                quartos = parseInt(prompt('Você necessita de quantos quartos? '))
            }
        }
        hotel.quartosDisponiveis -= quartos
        console.log('Reserva efetuada com sucesso!')
        console.log(`Seu ID é ${id}, guarde esse número se quiser cancelar a reserva ou fazer check-in/check-out!`)
        reservas.push({idReserva: id, idHotel: hotel.id, nomeHotel: hotel.nome, nomeDoCliente: nomeCliente, qtdQuartos: quartos} )
        console.log('Voltando para o menu...')
        console.log('-------------------------')
        paginaInicial()
    
} 

function alternativa4(){
    console.log('--------------')
    console.log('Cancelando sua reserva:')
    let id = parseInt(prompt('Qual o id da reserva? '))
        while(isNaN(id)){
            console.log('[ERRO] ID é apenas números!')
        }
        for(i = 0; i < reservas.length; i++){
            if(reservas[i].idReserva === id){
                console.log(`Encontramos uma reserva com o ID ${id}`)
                let pergunta = prompt('Tem certeza que deseja cancelar? (S/N): ' ).toUpperCase()
                while(pergunta !== 'S' && pergunta !== 'N'){
                    console.log('[ERRO] Digite apenas "S" para SIM e "N" para NÃO!')
                    pergunta = prompt('Tem certeza que deseja cancelar? (S/N): ' ).toUpperCase()
                }
                if(pergunta === 'S'){
                    console.log(`Reserva ID ${id} cancelada com sucesso!`)
                    let hotelId = reservas[i].idHotel;
                for (let j = 0; j < hoteis.length; j++) {
                    if (hoteis[j].id === hotelId) {
                        hoteis[j].quartosDisponiveis += reservas[i].qtdQuartos;
                        break;
                    }
                }
                    reservas.splice(i , 1)
                    console.log('Voltando para o menu...')
                    console.log('--------------------')
                    paginaInicial()
                    return
                }else{
                    console.log('Retornando para cancelamento...')
                    alternativa4()
                }
                
            }
        }
        console.log('Nenhuma reserva encontrada com esse ID!')
        let escolha = prompt('Deseja ver a lista completa de reservas, para ver o ID? (S/N)? ').toUpperCase()
            while(escolha !== 'S' && escolha !== 'N'){
                console.log('[ERRO] Digite apenas "S" para SIM e "N" para NÃO!')
                escolha = prompt('Deseja ver a lista completa de reservas, para ver o ID? (S/N)? ').toUpperCase()
            }
            if(escolha === 'S'){
                console.log('Abrindo a lista de reservas')
                console.log('-------------------------')
                alternativa5()
                alternativa4()
                return;
            }else{
                console.log('Voltando para o menu...')
                console.log('-------------------------')
                paginaInicial()
            }
}
    
function alternativa5(){
    if(reservas.length === 0){
        console.log('Não existe nenhuma reserva registrada!')
        console.log('Voltando para o menu...')
        console.log('-------------------------')
        paginaInicial()
    }else{
        console.log('Lista das reservas: ')
        console.log(reservas)
        console.log('-------------------------')
        paginaInicial()
    }
}

function alternativa6(){
    console.log('----------------')
    console.log('Fazendo check-in/ check-out:')
    console.log('1: Fazer check-in')
    console.log('2: Fazer check-out')
    let escolha = parseInt(prompt('O que você deseja? '))
    while(isNaN(escolha)){
        console.log('[ERRO] Digite um número!')
        escolha = parseInt(prompt('O que você deseja? '))
    }

    while(escolha < 1 || escolha > 2){
        console.log('[ERRO] Digite 1 ou 2!')
        escolha = parseInt(prompt('O que você deseja? '))
    }

    if(escolha === 1){
        let id = parseInt(prompt('Qual o seu ID de reserva? (Foi mostrado após efetivar seu pedido): '))
        while(isNaN(id)){
            console.log('[ERRO] Digite um número!')
            id = parseInt(prompt('Qual o seu ID de reserva? (Foi mostrado após efetivar seu pedido): '))
        }
        let idEncontrado = false

        while(!idEncontrado){
            for(chave of reservas){
                if(id === chave.idReserva){
                    idEncontrado = true
                    console.log(`Achamos uma reserva com esse ID no nome de ${chave.nomeDoCliente}`)
                    let escolha = prompt('Deseja fazer o check-in? (S/N) ').toUpperCase()
                        while(escolha !== 'S' && escolha !== 'N'){
                            console.log('[ERRO] Digite apenas "S" para SIM e "N" para NÃO!')
                            escolha = prompt('Deseja fazer o check-in? (S/N) ').toUpperCase()
                        }
                        if(escolha === 'S'){
                            ocupação.push({idCheckin: chave.idReserva, idHotel: chave.idHotel, nomeHotel: chave.nomeHotel , cliente: chave.nomeDoCliente, qtdQuartos: chave.qtdQuartos})
                           reservas.splice(reservas.indexOf(chave) , 1)
                           console.log('Check-in realizado com sucesso!')
                           console.log('Voltando para o menu...')
                           console.log('-------------')
                           paginaInicial()
                           return
                        }else{
                            console.log('Retornando para check-in...')
                            alternativa6()
                        }
                    break
                }
            }

            if(!idEncontrado){
                console.log('[ERRO] Não encontramos nenhuma reserva com esse ID!')
                let pergunta = prompt('Deseja ver a lista de reservas? (S/N) ').toUpperCase()
                    while(pergunta !== 'S' && pergunta !== 'N'){
                        console.log('[ERRO] Digite apenas "S" para SIM e "N" para NÃO!')
                        pergunta = prompt('Deseja ver a lista de reservas? (S/N) ').toUpperCase()
                    }
                    if(pergunta === 'S'){
                        console.log('Abrindo lista de reservas...')
                        console.log('--------------------')
                        console.log(reservas)
                        console.log('Retornando para check-in...')
                        alternativa6()
                    }else{
                        console.log('Voltando para o menu...')
                        console.log('---------------')
                        paginaInicial()
                        return
                    }
            }
        }

    }
    if(escolha === 2){
        console.log('------------')
        console.log('Fazendo check-out')
        let id = parseInt(prompt('Qual o seu ID? '))
        while(isNaN(id)){
            console.log('[ERRO] Você precisa digitar um número!')
        }
        let idEncontradoCheckin = false
        let chave
        for(key of ocupação){
            if(id === key.idCheckin){ 
                idEncontradoCheckin = true
                chave = key
                console.log(`Hospedagem no nome de ${chave.cliente}`)
                let escolha = prompt('Deseja fazer o check-out?(S/N) ').toUpperCase()
                    while(escolha !== 'S' && escolha !== 'N'){
                        console.log('[ERRO] Digite apenas "S" para SIM e "N" para NÃO!')
                        escolha = prompt('Deseja fazer o check-out?(S/N) ').toUpperCase()
                    }
                    if(escolha === 'S'){
                        console.log('Check-out realizado com sucesso!')
                        ocupação.splice(ocupação.indexOf(chave) , 1)
                        let hotelId = chave.idHotel
                       for(i = 0; i < hoteis.length; i++){
                            if(hoteis[i].id === hotelId){
                                hoteis[i].quartosDisponiveis += chave.qtdQuartos
                            }
                            let pergunta = prompt('Gostaria de aproveitar e fazer uma avaliação do hotel?(S/N) ').toUpperCase()
                            while(pergunta !== 'S' && pergunta !== 'N'){
                                console.log('[ERRO] Digite apenas "S" para SIM e "N" para NÃO!')
                                pergunta = prompt('Deseja fazer o check-out?(S/N) ').toUpperCase()
                            }
                            if(pergunta === 'S'){
                                console.log('De 1 a 5 (Sendo 1 para péssimo e 5 para ótimo)')
                                let nota = parseInt(prompt('Qual a sua avaliação sobre o hotel que se hospedou? '))
                                while(isNaN(nota) || nota.length === 0){
                                    console.log('[ERRO] Você precisa digitar um número!')
                                    nota = parseInt(prompt('Qual a sua avaliação sobre o hotel que se hospedou? '))
                                }
                                while(nota > 5 || nota < 1){
                                    console.log('[ERRO] Você precisa digitar um número entre 1 e 5!')
                                    nota = parseInt(prompt('Qual a sua avaliação sobre o hotel que se hospedou? '))
                                }
                                hoteis[i].avaliações.push(nota)
                                console.log('Avaliação realizada com sucesso! Muito obrigado.')
                                console.log('Voltando para o menu...')
                                console.log('---------------')
                                paginaInicial()
                                return
                            }else{
                                console.log('OK, voltando para o menu...')
                                console.log('---------------')
                                paginaInicial()
                            }
                            break
                        }
                    }else{
                        console.log('Voltando para o menu...')
                        console.log('---------------')
                        paginaInicial()
                        return
                    }
                }
            }
            while(!idEncontradoCheckin){
                console.log('[ERRO] Não encontramos nenhum check-in realizado com esse ID! Tente novamente')
                alternativa6()
                return
            }
    }
}

function alternativa7(){
    console.log('------------')
    console.log('Gerando relatório de ocupação do hotel')
    let nome = prompt('Qual o nome do hotel que deseja ver o relatório? ').toUpperCase()
    while(nome.length === 0){
        console.log('[ERRO] Escreva um nome!')
        nome = prompt('Qual o nome do hotel que deseja ver o relatório? ').toUpperCase()
    }
    let hotelEncontrado = false
    for(i = 0; i < hoteis.length; i++){
        if(hoteis[i].nome === nome){
            console.log(`Ocupação do hotel ${nome}`)
            let ocupado = false
            for(j = 0; j < ocupação.length; j++){
                if(ocupação[j].nomeHotel === nome){
                    console.log(ocupação)
                    ocupado = true
                    console.log('Voltando para o menu...')
                    console.log('---------------')
                    paginaInicial()
                    break
                }
            }
            if(!ocupado){
                console.log('No momento não existe nenhum check-in realizado nesse hotel!')
                console.log('Voltando para o menu...')
                console.log('---------------')
                paginaInicial()
            }
            hotelEncontrado = true
            break
        }
    }    
        if(!hotelEncontrado){
            console.log('Hotel não encontrado!')
            let pergunta = prompt('Deseja tentar novamente?(S/N)? ').toUpperCase()
            while(pergunta !== 'S' && pergunta !== 'N'){
                console.log('[ERRO] Digite apenas "S" para SIM e "N" para NÃO!')
                pergunta = prompt('Deseja tentar novamente?(S/N)? ').toUpperCase()
            }
            if(pergunta === 'S'){
                alternativa7()
                return
            }else{
                console.log('Voltando para o menu...')
                console.log('---------------')
                paginaInicial()
                return
            }
        }
    
}