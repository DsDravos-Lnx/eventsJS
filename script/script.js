var arr = []


const saveAssignment = function(){

    const assignment = String(document.getElementById('assignment').value)
    arr.push(assignment)
    alert(assignment)
}

document.getElementById('assignment_button').addEventListener('click', saveAssignment)

