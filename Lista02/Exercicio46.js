//Função total de vendas de um vendedor//

let vendas = [
    {valorVenda: 1569.56, vendedor: 'Gabriel'},
    {valorVenda: 765.64, vendedor: 'Ana'},
    {valorVenda: 265.99, vendedor: 'Gabriel'},
    {valorVenda: 154.76, vendedor: 'João'},
    {valorVenda: 563.87, vendedor: 'Ana'},
    {valorVenda: 87.12, vendedor: 'Gabriel'},
]

function totalVendasVendedor(){
    let totalVendas = {}
    vendas.forEach(function(vendas){
        let vendedor = vendas.vendedor
        let valor = vendas.valorVenda
        if(!totalVendas[vendedor]){
            totalVendas[vendedor] = 0
        }
        totalVendas[vendas.vendedor] += valor
        
    })
    return totalVendas
}
totalVendasVendedor()
console.log('O total de vendas de cada vendedor foi: ' , totalVendasVendedor())