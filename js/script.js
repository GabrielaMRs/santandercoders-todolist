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

    // validação 
    if(!tarefaInput.value  || !statusSelect.value ){
        alert("Não é possível inserir uma tarefa vazia")
    } else {
        tarefas.push(novaTarefa);
        exibirTarefas();
    }

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
        statusDiv.className = `status-${tarefa.statusTarefa}`
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
        btnEditar.className = "editTask"
        btnEditar.addEventListener('click', () => editarTarefa(tarefa));
        item.appendChild(btnEditar)

        const btnRemover = document.createElement('button');
        btnRemover.className = "removeTask"
        btnRemover.textContent = "Remover";
        btnRemover.addEventListener('click', () => removerTarefa(tarefa));
        item.appendChild(btnRemover)

        listaTarefas.appendChild(item);

    });

    if(listaTarefas.innerHTML === ''){
        document.getElementById('searchTask').style.display = 'none'
    } else {
        document.getElementById('searchTask').style.display = 'block'
    }
    
}

// Função para editar uma Tarefa
function editarTarefa(tarefa){
    document.getElementById('tarefa').value = tarefa.nomeTarefa;
    document.getElementById('statusTarefa').value = tarefa.statusTarefa;

    tarefas.splice(tarefas.indexOf(tarefa), 1);
    
    exibirTarefas();
}

// Função para remover a Tarefa
function removerTarefa(id){
    tarefas.splice(id, 1);

    exibirTarefas();
}

// Função para buscar tarefas
function obterTarefa() {
    const nomeBusca = document.getElementById('buscarTarefa').value.trim().toLowerCase();
    const tarefasBuscadas = tarefas.filter(tarefa => tarefa.nomeTarefa.toLowerCase().includes(nomeBusca));

    const listaTarefas = document.getElementById('listaTarefas');
    listaTarefas.innerHTML = '';

    tarefasBuscadas.forEach(tarefa => {
        const item = document.createElement('li');
        
        //cria a carinha do teletubbie de acordo com o status
        const statusDiv = document.createElement('span');
        statusDiv.className = `status-${tarefa.statusTarefa}`
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
        btnEditar.className = "editTask"
        btnEditar.addEventListener('click', () => editarTarefa(tarefa));
        item.appendChild(btnEditar)

        const btnRemover = document.createElement('button');
        btnRemover.className = "removeTask"
        btnRemover.textContent = "Remover";
        btnRemover.addEventListener('click', () => removerTarefa(tarefa));
        item.appendChild(btnRemover)

        listaTarefas.appendChild(item);
    });
}

exibirTarefas();