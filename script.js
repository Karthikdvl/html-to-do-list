document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-button');
    const newTaskInput = document.getElementById('new-task');
    const todoList = document.getElementById('todo-list');

    addButton.addEventListener('click', function () {
        const taskText = newTaskInput.value.trim();

        if (taskText !== '') {
            addTask(taskText);
            newTaskInput.value = '';
        }
    });

    function addTask(text) {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');

        const taskTextDiv = document.createElement('div');
        taskTextDiv.classList.add('task-text');
        taskTextDiv.textContent = text;

        const taskActionsDiv = document.createElement('div');
        taskActionsDiv.classList.add('task-actions');

        const editButton = document.createElement('button');
        editButton.classList.add('edit-task');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', function () {
            // Add your edit task functionality here
            alert('Edit clicked for task: ' + text);
        });

        const removeButton = document.createElement('button');
        removeButton.classList.add('remove-task');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function () {
            // Add your remove task functionality here
            taskDiv.remove();
        });

        taskActionsDiv.appendChild(editButton);
        taskActionsDiv.appendChild(removeButton);

        taskDiv.appendChild(taskTextDiv);
        taskDiv.appendChild(taskActionsDiv);

        todoList.appendChild(taskDiv);
    }
});
