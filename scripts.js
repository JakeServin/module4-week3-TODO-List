let addButton = document.getElementById('addButton'); // Create add button variable
let inputTask = document.getElementById('inputTask'); // Create input field variable
let pendingTasksWrapper = document.getElementById('pending-tasks-wrapper');
let completedTasksWrapper = document.getElementById('completed-tasks-wrapper');
let taskCounter = 1;
let completed = false;


// function setCheck() {
//     if (completed == false) {
//         icon.removeEventListener('click', () => { });
//         icon.addEventListener('click', () => {
//             pendingTasksWrapper.removeChild(newTask);
//             icon.setAttribute('src', './images/check-square.svg');
//             removeButton.removeEventListener('click', () => { })
//             removeButton.addEventListener('click', () => {
//                 completedTasksWrapper.removeChild(newTask);
//             }
//             )
//             completedTasksWrapper.appendChild(newTask);
//             completed = true;
//             setCheck();
//         }
//         )
//     }
//     else {
//         icon.removeEventListener('click', () => { });
//         icon.addEventListener('click', () => {
//             icon.setAttribute('src', './images/square.svg');
//             removeButton.removeEventListener('click', () => { })
//             removeButton.addEventListener('click', () => {
//                 pendingTasksWrapper.removeChild(newTask);
//             })
//             completedTasksWrapper.removeChild(newTask);
//             pendingTasksWrapper.appendChild(newTask);
//         })
//         completed = false;
//         setCheck();
//     }
            
            

    



addButton.addEventListener('click', () => {
    if (inputTask.value.length == 0) {
        alert("Invalid Input");
        return;
    }

    let newTask = document.createElement('div');
    newTask.className = "taskBox align-center";
    newTask.setAttribute('id', `task-${taskCounter}`)

    let icon = document.createElement('img');
    icon.setAttribute('src', './images/square.svg');
    icon.setAttribute('type', '');
    icon.setAttribute('height', '32px');
    icon.setAttribute('class', 'bi bi-square col-2');
    icon.addEventListener('click', () => {
        pendingTasksWrapper.removeChild(newTask);
        icon.setAttribute('src', './images/check-square.svg');
        removeButton.removeEventListener('click', () => {
            pendingTasksWrapper.removeChild(newTask);
        })
        removeButton.addEventListener('click', () => {
            completedTasksWrapper.removeChild(newTask);
        })
        icon.removeEventListener('click', () => { });
        icon.addEventListener('click', () => {
            icon.setAttribute('src', './images/square.svg');
            completedTasksWrapper.removeChild(newTask);
            pendingTasksWrapper.appendChild(newTask);
        })
        completedTasksWrapper.appendChild(newTask);
    })

    let taskContentDiv = document.createElement('div');
    taskContentDiv.className = "col taskContent";
    taskContentDiv.innerText = `${inputTask.value}`;

    let removeButton = document.createElement('a');
    removeButton.setAttribute('id', `task-${taskCounter}`);
    removeButton.setAttribute('class', 'col-3 small');
    removeButton.innerText = "Remove";
    removeButton.addEventListener('click', () => {
        pendingTasksWrapper.removeChild(newTask);
    })
    newTask.appendChild(icon);
    newTask.appendChild(taskContentDiv);
    newTask.appendChild(removeButton);
    pendingTasksWrapper.appendChild(newTask);
    inputTask.value = '';
    taskCounter++; // Clear input field
    })

