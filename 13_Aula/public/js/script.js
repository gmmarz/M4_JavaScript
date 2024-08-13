function criarIcone(nomeIcone) {
    let icone = document.createElement('ion-icon')
    icone.name = nomeIcone
    return icone
}

const clientesState = [
    {
        id: 1,
        nome: 'Marco Aurélio',
        email: 'marco@email.com',
        endereco: 'Pampulha, Belo Horizonte - MG'
    },
    {
        id: 2,
        nome: 'Tainá',
        email: 'ainaprogramadora@outlook.com',
        endereco: 'Padre Eustaquio, Belo Horizonte - MG'
    }
]

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
        let linha = dadosClientes.insertRow()

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
        botaoEditar.appendChild(criarIcone('pencil'))

        let botaoExcluir = document.createElement('button')
        botaoExcluir.className = 'btn btn-danger'
        botaoExcluir.appendChild(criarIcone('trash'))

        clienteAcoes.appendChild(botaoEditar)
        clienteAcoes.appendChild(botaoExcluir)
    }
}

function handleListarClientes() {
    listarClientes(clientesState)
}

window.addEventListener("DOMContentLoaded", handleListarClientes)

