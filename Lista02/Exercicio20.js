//Folha mensal de pagamentos//

let funcionarios = [
    {matricula: 1 , nome:'João' , salarioBruto: 3980},
    {matricula: 2 , nome:'Maria' , salarioBruto: 4643},
    {matricula: 3 , nome:'José' , salarioBruto: 2876},
    {matricula: 4 , nome:'Fernanda' , salarioBruto: 5932},
    {matricula: 5 , nome:'Alfredo' , salarioBruto: 3760},
    {matricula: 6 , nome:'Amanda' , salarioBruto: 5124},
    {matricula: 7 , nome:'Paulo' , salarioBruto: 2956},
]


for(i = 0; i < funcionarios.length; i++){
    let funcionario = funcionarios[i]
    let deduçaoInss = funcionario.salarioBruto * 0.12
    let salarioLiquido = funcionario.salarioBruto - deduçaoInss
    console.log('Matricula: ' + funcionario.matricula)
    console.log('Nome: ' + funcionario.nome)
    console.log('Salario bruto: ' + funcionario.salarioBruto.toFixed(2))
    console.log('Dedução INSS: ' + deduçaoInss.toFixed(2))
    console.log('Salário Liquido: ' + salarioLiquido.toFixed(2))
    console.log('----------------------')
}