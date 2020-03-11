var taskList = document.getElementById('task_list')
var taskListDone = document.getElementById('task_list_done')

const removeTask = function(event){
    var check = event.target
    if(check.checked){
        if(confirm('Deseja realmente remover este item das TAREFAS FEITAS?')){
            check.nextSibling.nextSibling.remove()
            check.nextSibling.remove()
            check.remove()
        }else{
            check.checked = 0
        }
    }
}

const changeTask = function(event){
    var check = event.target
    if(check.checked){
        if(confirm('Deseja mover essa tarefa para TAREFAS FEITAS?')){
            taskListDone.innerHTML += "<input type='checkbox' id='check_done'><label for='check_done'>"+check.nextSibling.innerHTML+"</label><br>"
            check.nextSibling.nextSibling.remove()
            check.nextSibling.remove()
            check.remove()
        }else{
            check.checked = 0
        }
    }
    
    var check_done = document.querySelectorAll("input[id='check_done']")

    for(let i=0; i<check_done.length; i++){
        check_done[i].addEventListener('click', removeTask)
    }
}

const saveAssignment = function(){

    const assignment = String(document.getElementById('assignment').value)
    
    taskList.innerHTML += "<input type='checkbox' id='checkbox'><label for='checkbox'> "+assignment+"</label><br>"

    var checkbox = document.querySelectorAll("input[type='checkbox']")

    for(let i=0; i<checkbox.length; i++){
        checkbox[i].addEventListener('click', changeTask)
    }
}

document.getElementById('assignment_button').addEventListener('click', saveAssignment)

