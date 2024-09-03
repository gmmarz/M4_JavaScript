// Ex01. Concluam a função para criar o card, Adicionem 3 produtos a lista (o array), e façam uma função que lista todos os produtos do array (criando um card para cada produto)

// Ex02. Implementem a função "handleListarProdutos" que irá consumir a API da FakeStore e listar os produtos em tela

// Ex03. Implementem a funcionalidade de listar produtos pela categoria ("handleListarProdutosPelaCategoria"), que irá ser chamada quando o usuário mudar a categoria, depois consumir a API para buscar os produtos somente daquela categoria.

let produtosState = [];

// Função que vai receber o produto e criar uma tag HTML
function Produto(produto) {
  /*
    produto = {
        id: int,
        title: string,
        price: number,
        image: string
    }
    */

  // 1. Criar uma div com o document.createElement
  const divProduto = document.createElement("div");
  divProduto.classList.add("produto");

  // 2. Criar a imagem e atribuir a chave "image" ao atributo "src"
  const imgProduto = document.createElement("img");
  imgProduto.setAttribute("src", produto.image);

  // 3. Criar um h2 para colocar como conteudo a chave "title"
  const tituloProduto = document.createElement("h2");
  tituloProduto.textContent = produto.title;

  // 4. Criar um paragrafo para colocar como conteudo a chave "price"
  const paragrafoPreco = document.createElement("p");
  // Formatar para uma moeda
  paragrafoPreco.textContent = produto.price.toLocaleString('pt-BR', {
    style: "currency",
    currency: "BRL",
  });

  // 5. Envolver o h2 e o paragrafo em uma div com a classe "content" utilizando o appendChild
  const divContent = document.createElement("div");
  divContent.classList.add("content");

  divContent.appendChild(tituloProduto);
  divContent.appendChild(paragrafoPreco);

  // 6. Criar o botão e colocar como texto "Ver Mais"
  const divFooter = document.createElement("div");
  divFooter.classList.add("footer");

  const botaoVerMais = document.createElement("button");
  botaoVerMais.textContent = "Ver Mais";

  divFooter.appendChild(botaoVerMais)

  // Ao final, adicione todos os elementos no card, na sua respectiva ordem
  divProduto.appendChild(imgProduto);
  divProduto.appendChild(divContent);
  divProduto.appendChild(divFooter);

  return divProduto;
}

// Função que lista os produtos
function listarProdutos(produtos) {
  // Capturar o main com o document.getElementById
  const produtosList = document.getElementById("produtos");
  produtosList.innerHTML = ''

  // Para cada produto da lista (utilizando um for), vocês vão criar um produto com a função "Produto" e utilizar o appendChild para adicionar no main
  for (let produto of produtos) {
    const cardProduto = Produto(produto)
    produtosList.appendChild(cardProduto)
  }
}

// Função que é chamada ao carregar a tela
async function handleListarProdutos() {
    // 1. Consumir nossa API (https://fakestoreapi.com/products)
    // const response = await fetch(apiUrl)
    // ...
    let produtos
    try {
        const response = await fetch('https://fakestoreapi.com/products')

        if(!response.ok){
            throw new Error("Listar produtos erro: Solicatação realizada, mas com um status de erro.")
        }

        produtos = await response.json()
        
    }catch(error){
        console.error(error.message)
        produtos = []
        
    }

    // 2. Listar os Produtos (chamando a função)
    listarProdutos(produtos)

}

window.addEventListener("DOMContentLoaded", handleListarProdutos)

// Função para buscar dados das categorias
async function buscarCategorias() {
    try {
        // Consumindo a API no endpoint que trás as categorias
        const response = await fetch('https://fakestoreapi.com/products/categories')

        if (!response.ok) {
            throw new Error("Solicitação foi realizada, mas com um status de erro.")
        }

        // Converter os dados para JSON
        const categorias = await response.json()
        return categorias
    } catch (error) {
        console.error(error.message)
        return []
    }
}

// Buscando Select de categoria.
const selectCategoria = document.getElementById('categoria')

// Função para carregar as categorias na tela
async function handleCarregarCategorias() {
    // Busca as categorias do backend
    const categorias = await buscarCategorias()

    const labelCategoria = {
        "electronics": "Eletrônico",
        "jewelery": "Joias",
        "men's clothing": "Roupas Masculinas",
        "women's clothing": "Roupas Femininas"
    }

    // Para cada categoria, crie uma opção e adicione-a no select
    for (let categoria of categorias) {
        const categoriaOption = document.createElement('option') 
        categoriaOption.value = categoria
        categoriaOption.textContent = labelCategoria[categoria]

        selectCategoria.appendChild(categoriaOption)
    }
}

async function handleListarProdutosPelaCategoria() {
    // 1. Buscar Valor do Select (Select.value)

    // 2. Consumir API para buscar pela categoria (https://fakestoreapi.com/products/category/{categoria})

    // 3. Listar os Produtos (chamando a função)
} 

window.addEventListener("DOMContentLoaded", handleCarregarCategorias)
selectCategoria.addEventListener("change", handleListarProdutosPelaCategoria)
