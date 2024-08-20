//Componentes 

function Icone(icone) {
    let ionIcon = document.createElement('ion-icon')
    //ionIcon.name = icone
    ionIcon.setAttribute('name',icone)
    return ionIcon
}

function LinhaCliente(cliente){
    let linha = document.createElement('tr')
    //let linha = dadosClientes.insertRow()

    let clienteId = linha.insertCell()
    clienteId.textContent = `${cliente.id}.`

    let clienteNome = linha.insertCell()
    clienteNome.textContent = cliente.nome

    let clienteEmail = linha.insertCell()
    clienteEmail.textContent = cliente.email

    let clienteEndereco = linha.insertCell()
    clienteEndereco.textContent = cliente.endereco

    let clienteAcoes = linha.insertCell()
    
    let botaoEditar = document.createElement('button')
    botaoEditar.className = 'btn btn-primary'
    botaoEditar.appendChild(Icone('pencil'))

    let botaoExcluir = document.createElement('button')
    botaoExcluir.className = 'btn btn-danger'
    botaoExcluir.appendChild(Icone('trash'))

    clienteAcoes.appendChild(botaoEditar)
    clienteAcoes.appendChild(botaoExcluir)

    return linha

}


//logica da aplicação
//Estado dos clientes (sempre que esse cara mudar a gente redenriza novamente)
const apiURL = "https://clienteapi.onrender.com"

let clientesState = [

]

//Listagem de clientes
function listarClientes(clientes) {
    const tabelaClientes = document.getElementById('clientes')

    // Limpando Linhas da Tabela (Exceto Cabeçalho)
    let qtdClientes = tabelaClientes.rows.length - 1
    for (let index = qtdClientes; index > 0; index--) {
        tabelaClientes.deleteRow(index)
    }

    // Adicionando linhas na tabela segundo os clientes recebidos como parametro.
    let dadosClientes = tabelaClientes.querySelector('tbody')
    for (let cliente of clientes) {
        let linha = LinhaCliente(cliente)
        dadosClientes.appendChild(linha)
    }
}

function handleListarClientes() {
    // o fetch faz uma requisicao(por padrao GET)
    // para a URL especificada
    fetch(`${apiURL}/clientes`)
        .then(response => response.json())
        .then(dados => {
            clientesState = dados;
            listarClientes(clientesState);
        })

    
}

window.addEventListener("DOMContentLoaded", handleListarClientes)

//Cadastro de clientes

function mostrarError(mensagem){
    const errorDiv = document.getElementById('error-message')
    errorDiv.textContent = mensagem
}

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

    let modal = document.getElementById('modal-cliente');
    modal = bootstrap.Modal.getInstance(modal)
    modal.hide();

}

formCliente.addEventListener('submit', handleCadastrarCliente)
