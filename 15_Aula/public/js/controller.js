import { listarClientes, mostrarError } from "./view.js";

// Lógica da Aplicação
// Estado dos Clientes (Sempre que esse cara mudar, a gente renderiza denovo)
const apiUrl = "https://clienteapi.onrender.com";
let clientesState = [];

// Listagem de Clientes
async function handleListarClientes() {
  // O Fetch faz uma requisição (por padrão um GET)
  // para a URL especificada.
  // Await ele espera a promessa terminar, para continuar o codigo
  const response = await fetch(`${apiUrl}/clientes`)
  const dados = await response.json()
  clientesState = dados
  listarClientes(clientesState)
}

window.addEventListener("DOMContentLoaded", handleListarClientes);

// Cadastro de Clientes
async function cadastrarCliente(cliente) {
  // Cadastrar o Cliente
  const response = await fetch(`${apiUrl}/clientes`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cliente)
  })

  if (!response.ok) {
    throw new Error("Houve um erro ao comunicar com o servidor.")
  }
}

const formCliente = document.getElementById("form-cliente");

async function handleCadastrarCliente(event) {
  event.preventDefault();

  const novoCliente = {
    nome: formCliente.cliente.value.trim(),
    email: formCliente.email.value.trim(),
    endereco: formCliente.endereco.value.trim(),
  } ;

  try {
    if (novoCliente.nome == "") {
      throw new Error("O campo nome é obrigatório.");
    }

    if (novoCliente.email == "") {
      throw new Error("O campo email é obrigatório.");
    }

    if (novoCliente.endereco == "") {
      throw new Error("O campo endereço é obrigatório.");
    }

    await cadastrarCliente(novoCliente)
    mostrarError("");
  } catch (error) {
    mostrarError(error.message);
    return;
  }

  // Listar Clientes
  handleListarClientes()

  // Fecha o modal do bootstrap
  let modal = document.getElementById("modal-cliente");
  modal = bootstrap.Modal.getInstance(modal);
  modal.hide();

  // Limpando o Formulário.
  formCliente.reset()
}

formCliente.addEventListener("submit", handleCadastrarCliente);
