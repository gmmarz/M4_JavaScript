// Model será responsável por armazenamentos dos dados e consumir a API

let clientesState =[];

async function buscarClientes(){
    const response = await fetch (`${apiUrl}/clientes`)

    if (!response.ok){
        throw new Error('Houve um erro ao comunicar com o servidor')
    }

    return await response.json();

}