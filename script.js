// Select elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to add a task
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const listItem = document.createElement('li');

        const taskSpan = document.createElement('span');
        taskSpan.classList.add('task-text');
        taskSpan.textContent = taskText;

        const switchContainer = document.createElement('div');
        switchContainer.classList.add('switch-container');

        const switchInput = document.createElement('input');
        switchInput.type = 'checkbox';
        switchInput.classList.add('toggle-complete');

        const switchSlider = document.createElement('span');
        switchSlider.classList.add('slider');

        switchInput.addEventListener('change', () => {
            if (switchInput.checked) {
                listItem.classList.add('completed');
            } else {
                listItem.classList.remove('completed');
            }
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';

        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });

        switchContainer.appendChild(switchInput);
        switchContainer.appendChild(switchSlider);

        listItem.appendChild(taskSpan);
        listItem.appendChild(switchContainer);
        listItem.appendChild(deleteBtn);

        taskList.appendChild(listItem);

        taskInput.value = '';
    }
});

// Handle "Enter" key for adding tasks
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTaskBtn.click();
    }
});
