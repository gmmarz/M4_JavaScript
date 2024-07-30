
const frutas = ["banana","maça","uva","laranja","pera"]

//funções agregadoras
//.map(), .filter(), .reduce()

//callback -> função agregadora -> executar esta função no array
let novasFrutas = frutas.map((fruta)=> {
    //console.log(fruta)
    return fruta + " (Novo)"
})

console.log(frutas)
console.log(novasFrutas)

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