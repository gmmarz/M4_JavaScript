// Caso de uso - Applicando o desconto a uma lista de preços.
const produtos = [
    {
        nome:'Mouse',
        preco:39.90,
        categoria:'ELETRONICO'
    },
    {
        nome:'Teclado Gamer',
        preco:50.90,
        categoria:'ELETRONICO'
    },
    {
        nome:'Sabão em Pó',
        preco:5.90,
        categoria:'LIMPEZA'
    },
    {
        nome:'Arroz',
        preco:4.90,
        categoria:'ALIMENTACAO'
    },
]

console.log(produtos)

const nomesProdutos = produtos.map((produto) => {
    return produto.nome
})

/*outra maneira de utilizar a função map
function applyMap(produto){
    return produto.nome
}
const nomesProdutos = produtos.map(applyMap)
*/

//Em uma arrow funcao se não passar as {} o retorno dela se torna o parametro passado exemplo:
//const nomesProdutos = produtos.map((produto) => produto.nome)

//filter
/*
//Pegando apenas as categoris eletronicos
const eletronicos = produtos.filter((produto)=>produto.categoria == 'ELETRONICO')
console.log(eletronicos)*/

/*Pegando os eletronicos e deste pegando os que tem preço maior que 40
const eletronicos = produtos.filter((produto)=>produto.categoria == 'ELETRONICO')
.filter((produto)=> produto.preco > 40)
console.log(eletronicos)*/

//Pegando os eletronicos e deste pegando os que tem preço maior que 40

const eletronicos = produtos.filter((produto)=>produto.categoria == 'ELETRONICO')
.map((produto)=> {
    produto.preco *=0.9
    return produto
})
console.log(eletronicos)