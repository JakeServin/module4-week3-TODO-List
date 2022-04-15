let addButton = document.getElementById('addButton'); // Create add button variable
let inputTask = document.getElementById('inputTask'); // Create input field variable
let pendingTasksWrapper = document.getElementById('pending-tasks-wrapper'); // Create Pending Tasks div variable
let completedTasksWrapper = document.getElementById('completed-tasks-wrapper'); // Create Completed Tasks div variable
let taskCounter = 1; // Task counter gives task elements unique id in order to remove


// Still trying to figure out how to continuously check/uncheck

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
       
// function setPending() {
//     pendingTasksWrapper.removeChild(newTask);
//         icon.setAttribute('src', './images/check-square.svg');
//         removeButton.removeEventListener('click', () => {
//             pendingTasksWrapper.removeChild(newTask);
//         })
//         removeButton.addEventListener('click', () => {
//             completedTasksWrapper.removeChild(newTask);
//         })
//         icon.removeEventListener('click', () => { });
//         icon.addEventListener('click', () => {
//             icon.setAttribute('src', './images/square.svg');
//             completedTasksWrapper.removeChild(newTask);
//             pendingTasksWrapper.appendChild(newTask);
//         })
//         completedTasksWrapper.appendChild(newTask);
// }


// Adds functionality to add task when 'enter' key is pressed
inputTask.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        event.preventDefault();
        addButton.click();
    }
})
            

    


// Create task when 'enter' button is pressed
addButton.addEventListener('click', () => {
    if (inputTask.value.length == 0) {
        alert("Invalid Input");
        return;
    }

    // Create newTask div
    let newTask = document.createElement('div');
    newTask.className = "taskBox align-center";
    newTask.setAttribute('id', `task-${taskCounter}`)

    // Create icon element
    let icon = document.createElement('img');
    icon.setAttribute('src', './images/square.svg');
    icon.setAttribute('type', '');
    icon.setAttribute('height', '32px');
    icon.setAttribute('class', 'bi bi-square col-2');
    // Adds functionality when icon is pressed
    icon.addEventListener('click', () => {
        // Take task off pending list, change icon, change icon behavior when pressed, 
        pendingTasksWrapper.removeChild(newTask);
        icon.setAttribute('src', './images/check-square.svg');
        icon.removeEventListener('click', () => { });
        icon.addEventListener('click', () => {
            // Take task off completed list, change icon, change icon behavior when pressed
            completedTasksWrapper.removeChild(newTask);
            icon.setAttribute('src', './images/square.svg');
            icon.removeEventListener('click', () => { });
            icon.addEventListener('click', () => {
                //Nested to uncheck/recheck
                pendingTasksWrapper.removeChild(newTask);
                icon.setAttribute('src', './images/check-square.svg');
                icon.removeEventListener('click', () => { });
                icon.addEventListener('click', () => {
                    icon.setAttribute('src', './images/square.svg');
                    completedTasksWrapper.removeChild(newTask);
                    pendingTasksWrapper.appendChild(newTask);
                    icon.removeEventListener('click', () => { });
                    
                })
                removeButton.removeEventListener('click', () => {
                    pendingTasksWrapper.removeChild(newTask);
                })
                removeButton.addEventListener('click', () => {
                    completedTasksWrapper.removeChild(newTask);
                })
                completedTasksWrapper.appendChild(newTask);
            })
            pendingTasksWrapper.appendChild(newTask);
        })
        // Changes remove button to remove from correct list
        removeButton.removeEventListener('click', () => {
            pendingTasksWrapper.removeChild(newTask);
        })
        removeButton.addEventListener('click', () => {
            completedTasksWrapper.removeChild(newTask);
        })
        // Removes task from pending tasks list
        completedTasksWrapper.appendChild(newTask);
    })

    // Create div to add task content
    let taskContentDiv = document.createElement('div');
    taskContentDiv.className = "col taskContent";
    taskContentDiv.innerText = `${inputTask.value}`; // Grab content in input field

    // Create remove button div
    let removeButton = document.createElement('a');
    removeButton.setAttribute('class', 'col-3 small');
    removeButton.innerText = "Remove";
    removeButton.addEventListener('click', () => {
        pendingTasksWrapper.removeChild(newTask);
    })
    // Put divs together and then append to Pending Tasks List 
    newTask.appendChild(icon);
    newTask.appendChild(taskContentDiv);
    newTask.appendChild(removeButton);
    pendingTasksWrapper.appendChild(newTask);
    inputTask.value = '';
    taskCounter++; // Clear input field
    })

