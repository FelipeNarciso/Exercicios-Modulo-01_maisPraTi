//Criando uma função que retorna apenas as propriedades que são arrays//

let dados = {
    nome: 'João',
    idade: 16,
    turma: 201,
    notas:[10, 8.5, 9.5, 7, 10],
    verNotas: function(){
        return this.notas
    }
}
console.log('Histórico de notas do aluno:',  dados.verNotas())