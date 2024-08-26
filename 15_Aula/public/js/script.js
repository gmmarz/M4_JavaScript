import { listarClientes,mostrarError } from "./view.js";


//logica da aplicação
//Estado dos clientes (sempre que esse cara mudar a gente redenriza novamente)
const apiURL = "https://clienteapi.onrender.com"

let clientesState = [

]

async function handleListarClientes() {
    // o fetch faz uma requisicao(por padrao GET)
    // para a URL especificada

    
    const response = await fetch(`${apiURL}/clientes`)
    const dados = await response.json()
    clientesState = dados
    listarClientes(clientesState)

    
    /*
    fetch(`${apiURL}/clientes`)
        .then(response => response.json())
        .then(dados => {
            clientesState = dados;
            listarClientes(clientesState);
        })*/

    
}

window.addEventListener("DOMContentLoaded", handleListarClientes)

//Cadastro de clientes

const formCliente = document.getElementById('form-cliente')

function handleCadastrarCliente(event) {
    event.preventDefault()
    
    const novoClient = {
        id: 10,
        nome: formCliente.cliente.value.trim(), //retira apenas os espaços no começo e final
        email: formCliente.email.value,
        endereco: formCliente.endereco.value
    }

    try {
        if (novoClient.nome.trim() == '') {
            throw new Error('O campo nome é obrigatório');
        }
        if (novoClient.email.trim() == '') {
            throw new Error('O campo email é obrigatório');
        }
        if (novoClient.endereco.trim() == '') {
            throw new Error('O campo endereço é obrigatório');
        }

    } catch (error){

        return mostrarError(error.message)
    }

    mostrarError('')
    console.log('Formulário enviado')
    clientesState.push(novoClient)
    listarClientes(clientesState)

    //Fecha o modal do boostrap
    let modal = document.getElementById('modal-cliente');
    modal = bootstrap.Modal.getInstance(modal)
    modal.hide();

    formCliente.reset()

}

formCliente.addEventListener('submit', handleCadastrarCliente)
