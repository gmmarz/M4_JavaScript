//Componentes 
//Contem toda lógica de criação de elementos html

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


//Funções de tela

//Listagem de clientes
export function listarClientes(clientes) {
    const tabelaClientes = document.getElementById('clientes')

    // Limpando Linhas da Tabela (Exceto Cabeçalho)
    let dadosClientes = tabelaClientes.querySelector('tbody')
    dadosClientes.textContent = ''

    /*
    let qtdClientes = tabelaClientes.rows.length - 1
    for (let index = qtdClientes; index > 0; index--) {
        tabelaClientes.deleteRow(index)
    }*/

    // Adicionando linhas na tabela segundo os clientes recebidos como parametro.
    //let dadosClientes = tabelaClientes.querySelector('tbody')
    for (let cliente of clientes) {
        let linha = LinhaCliente(cliente)
        dadosClientes.appendChild(linha)
    }
}


export function mostrarError(mensagem){
    const errorDiv = document.getElementById('error-message')
    errorDiv.textContent = mensagem
}