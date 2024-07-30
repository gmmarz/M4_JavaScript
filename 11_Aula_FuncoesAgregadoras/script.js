
//COMPONENTES
//----------------------------------------------------------------------------------------------

//Para facilitar a criação dos itens da lista utilizamos a função para criar o li
//Sempre que a função for criar um elemetro html o nome da função será o nome do elemento começando com a letra Maiúscula
//Chamado de componente
function Tarefa(tarefa) {
  // Construindo LI
  const liTarefa = document.createElement("li");
  // liTarefa.textContent = `${tarefa} - ${descricao} -> `

  const h2Tarefa = document.createElement("h2");
  h2Tarefa.textContent = tarefa.nome;

  const pDescricao = document.createElement("p");
  pDescricao.textContent = tarefa.descricao;

  const divInfo = document.createElement("div");
  divInfo.appendChild(h2Tarefa);
  divInfo.appendChild(pDescricao);

  const checkboxTarefa = document.createElement("input");
  checkboxTarefa.type = "checkbox";
  checkboxTarefa.checked = tarefa.completa;

  liTarefa.appendChild(divInfo);
  liTarefa.appendChild(checkboxTarefa);
  liTarefa.classList.add("tarefa");

  return liTarefa;
}


//LOGICA DA TELA
//----------------------------------------------------------------------------------------------------
let tarefasState = [
    {
        nome:'Estudar AWS',
        descricao:'Realizar curso do mauro tanana',
        completa: false
    },
    {
        nome:'Nginx para deploy',
        descricao:'Na marra',
        completa: false
    }
]

//listar Tarefas
function listarTarefas(tarefas){
    const ulTarefas = document.getElementById("tarefas");

    //limpando para evitar duplicação
    ulTarefas.textContent = ''

    if (tarefas.length == 0){
        ulTarefas.textContent = "Não foram encontrados"
        return
    }

    tarefas.map((tarefa) => {
        const liTarefa = Tarefa(tarefa)
        ulTarefas.appendChild(liTarefa)
    })

}

function handleListarTarefas(){
    //logica para buscar a lista de tarefas de outro lugar.
    listarTarefas(tarefasState);
}

window.addEventListener("load",handleListarTarefas)

//pesquisar tarefas
const inputPesquisar = document.getElementById('pesquisar')
function handlePesquisarTarefas(){
    //console.log(inputPesquisar.value)
    let pesquisa = inputPesquisar.value.toLowerCase()
    let resultado = tarefasState.filter((tarefa)=> tarefa.nome.toLowerCase().includes(pesquisa))
    listarTarefas(resultado)
}

inputPesquisar.addEventListener("input",handlePesquisarTarefas)

//Adicionar Nova tarefa
const formulario = document.getElementById("form-tarefa");

function handleAdicionarTarefa(event) {
  event.preventDefault();

  // Capturando do Formulaŕio
  let novaTarefa = {
    nome:formulario.tarefa.value,
    descricao:formulario.descricao.value,
    completa:false
  };

  tarefasState.push(novaTarefa);
  listarTarefas(tarefasState);

}

formulario.addEventListener("submit", handleAdicionarTarefa);
