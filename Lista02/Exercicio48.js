//Otimizando o estoque de duas lojas em um único objeto//

let inventarioLojaA = {
    camiseta: 50,
    calça: 30,
    tenis: 40,
    casaco: 20,
    meia: 100,
}

let inventarioLojaB = {
    camiseta: 20,
    sapato: 10,
    bolsa: 40,
    meia: 70,
    gravata: 25,
}

function estoqueTotal(){
   let estoque = {}
   for(chave in inventarioLojaA){
    estoque[chave] = inventarioLojaA[chave]
   }
   for(chave in inventarioLojaB){
    if(estoque[chave]){
        estoque[chave] += inventarioLojaB[chave]
    }else{
        estoque[chave] = inventarioLojaB[chave]
    }
   }
   return estoque
}


console.log('O estoque total das duas lojas é: ' , estoqueTotal())