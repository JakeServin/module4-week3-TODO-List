
// Variables
let addButton = document.getElementById('addButton'); // Create add button variable
let inputTask = document.getElementById('inputTask'); // Create input field variable
let pendingTasksWrapper = document.getElementById('pending-tasks-wrapper'); // Create Pending Tasks div variable
let completedTasksWrapper = document.getElementById('completed-tasks-wrapper'); // Create Completed Tasks div variable
let taskCounter = 1; // Task counter gives task elements unique id in order to remove

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
    // Create flag to detect state
    let completedFlag = false;
    // Create newTask div
    let newTask = document.createElement('div');
    newTask.className = "taskBox align-center";
    newTask.setAttribute('id', `task-${taskCounter}`)

    // Create remove button div
    let removeButton = document.createElement('a');
    removeButton.setAttribute('class', 'col-3 small');
    removeButton.innerText = "Remove";
    removeButton.addEventListener('click', () => {
        pendingTasksWrapper.removeChild(newTask);
    });
    

    // Create icon element
    let icon = document.createElement('img');
    icon.setAttribute('src', './images/square.svg');
    icon.setAttribute('type', '');
    icon.setAttribute('height', '32px');
    icon.setAttribute('class', 'bi bi-square col-2');
    // Adds functionality when icon is pressed
    icon.addEventListener('click', () => { 
        if (completedFlag == false) {
            pendingTasksWrapper.removeChild(newTask);
            completedTasksWrapper.appendChild(newTask);
            icon.setAttribute('src', './images/check-square.svg');
            completedFlag = true;
            removeButton.removeEventListener('click', () => { });
            removeButton.addEventListener('click', () => { completedTasksWrapper.removeChild(newTask) });
            
        } else {
            completedTasksWrapper.removeChild(newTask);
            pendingTasksWrapper.appendChild(newTask);
            icon.setAttribute('src', './images/square.svg');
            completedFlag = false;
            removeButton.removeEventListener('click', () => { });
            removeButton.addEventListener('click', () => {
                pendingTasksWrapper.removeChild(newTask);
            });
        }
    });
    
    // Create div to add task content
    let taskContentDiv = document.createElement('div');
    taskContentDiv.className = "col taskContent";
    taskContentDiv.innerText = `${inputTask.value}`; // Grab content in input field

    
    // Put divs together and then append to Pending Tasks List 
    newTask.appendChild(icon);
    newTask.appendChild(taskContentDiv);
    newTask.appendChild(removeButton);
    pendingTasksWrapper.appendChild(newTask);
    inputTask.value = '';
    taskCounter++; // Clear input field
})
    

