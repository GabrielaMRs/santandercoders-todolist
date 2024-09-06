//array para armazenar as tarefas
const tarefas = [];

//Chama o add tarefa ao clicar no botão Adicionar Tarefa
document.getElementById('btn-addTarefa').addEventListener('click', function(event){
    event.preventDefault();
    addTarefa();
})

//Função para adicionar nova tarefa
function addTarefa() {
    const tarefaInput = document.getElementById('tarefa');
    const statusSelect = document.getElementById('statusTarefa');

    novaTarefa = {
        id: tarefas.length + 1, 
        nomeTarefa: tarefaInput.value,
        statusTarefa: statusSelect.value        
    }

    tarefas.push(novaTarefa);
    exibirTarefas();

    tarefaInput.value = '';
    statusSelect.value = '';
}

//função para exibir as tarefas na tela
function exibirTarefas(){
    const listaTarefas = document.getElementById('listaTarefas');
    listaTarefas.innerHTML = '';

    tarefas.forEach(tarefa => {
        const item = document.createElement('li');
        
        //cria a carinha do teletubbie de acordo com o status
        const statusDiv = document.createElement('span');
        /* statusDiv.className = `status-${tarefas.indexOf(tarefa)}` */
        statusDiv.id = `status-tarefa-${tarefas.indexOf(tarefa)}`
        item.appendChild(statusDiv);
        
        //criar o nome da tarefa
        const tarefaNome = document.createElement('span');
        tarefaNome.textContent = `${tarefa.nomeTarefa}`;
        /* tarefaNome.className = `nome-tarefa-${tarefas.indexOf(tarefa)}` */
        tarefaNome.id = `nome-tarefa-${tarefas.indexOf(tarefa)}`
        item.appendChild(tarefaNome);
        
        const btnEditar = document.createElement('button');
        btnEditar.textContent = "Editar";
        btnEditar.addEventListener('click', () => editarTarefa(tarefa));
        item.appendChild(btnEditar)

        const btnRemover = document.createElement('button');
        btnRemover.textContent = "Remover";
        btnRemover.addEventListener('click', () => removerTarefa(tarefa));
        item.appendChild(btnRemover)

        listaTarefas.appendChild(item);

    });
}

// Função para editar uma Tarefa
function editarTarefa(id){
    const tarefaAtual = document.getElementById(`nome-tarefa-${tarefas.indexOf(id)}`);
    console.log(tarefaAtual);

    exibirTarefas();
}

// Função para remover a Tarefa
function removerTarefa(id){
    tarefas.splice(id, 1);

    exibirTarefas();
}

function obterTarefa(id){
    
}

exibirTarefas();