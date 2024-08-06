/*const meuArray = [1,6,76,45]
console.log(meuArray[0])*/

//Objetos
const tarefa = {
    //chave:valor
    nome:'Estudar JS', //item é o conjunto de chave valor.
    descricao:'Revisar manipulacao DOM',
    completo: false
}

//acessando valores
console.log(tarefa)

//criar uma nova chave:
tarefa.dataLimite = '2024-08-08'

console.log(tarefa)

//alterar um valor existente
tarefa.completo = true

console.log(tarefa)
