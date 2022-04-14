let addButton = document.getElementById('addButton'); // Create add button variable
let inputTask = document.getElementById('inputTask'); // Create input field variable
let pendingTasksWrapper = document.getElementById('pending-tasks-wrapper');
let completedTasksWrapper = document.getElementById('completed-tasks-wrapper');
let taskCounter = 1;
let completed = false;
let icon = document.createElement('img');
let newTask = document.createElement('div');
let taskContentDiv = document.createElement('div');
let removeButton = document.createElement('div');

function createPendingTask() {
    icon.addEventListener('click', () => {
        pendingTasksWrapper.removeChild(newTask);
        icon.setAttribute('src', './images/check-square.svg');
        removeButton.removeEventListener('click', () => { })
        removeButton.addEventListener('click', () => {
            completedTasksWrapper.removeChild(newTask);
        })
        icon.removeEventListener('click', () => { });
        icon.addEventListener('click', () => {
            createCompletedTask();
        })
    })
    pendingTasksWrapper.appendChild(newTask);
}

function createCompletedTask() {
    icon.addEventListener('click', () => {
        pendingTasksWrapper.removeChild(newTask);
        icon.setAttribute('src', './images/check-square.svg');
        removeButton.removeEventListener('click', () => {})
        removeButton.addEventListener('click', () => {
            completedTasksWrapper.removeChild(newTask);
        })
        icon.removeEventListener('click', () => { });
        icon.addEventListener('click', () => {
            createPendingTask();
        })
    })
    newTask.appendChild(icon);
    pendingTasksWrapper.appendChild(newTask);
}

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

    // let newTask = document.createElement('div');
    newTask.className = "taskBox align-center";
    newTask.setAttribute('id', `task-${taskCounter}`)

    

    // let taskContentDiv = document.createElement('div');
    taskContentDiv.className = "col taskContent";
    taskContentDiv.innerText = `${inputTask.value}`;

    // let removeButton = document.createElement('div');
    removeButton.setAttribute('type', 'button');
    removeButton.setAttribute('id', `task-${taskCounter}`);
    removeButton.setAttribute('class', 'col-3 small');
    removeButton.innerText = "Remove";
    removeButton.addEventListener('click', () => {
        pendingTasksWrapper.removeChild(newTask);
    })

    
    icon.setAttribute('src', './images/square.svg');
    icon.setAttribute('type', 'button');
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
    newTask.appendChild(icon);
    newTask.appendChild(taskContentDiv);
    newTask.appendChild(removeButton);
    pendingTasksWrapper.appendChild(newTask);
    

    inputTask.value = '';
    taskCounter++; // Clear input field
    })

