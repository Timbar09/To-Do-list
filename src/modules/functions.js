export const taskContainer = document.querySelector('.list__tasks');

// Get the tasks from local storage
export const getTasks = () => {
  let tasks;

  if (localStorage.getItem('tasks')) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  } else {
    tasks = [];
  }

  return tasks;
};

// Add a task to local storage
export const storeTask = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const render = (tasks) => {
  taskContainer.innerHTML = '';

  tasks.forEach((task) => {
    const todoTask = document.createElement('li');
    todoTask.className = `list__task padding-l flex  flex-ai-c ${task.checked}`;
    todoTask.id = task.index;

    const checkbox = document.createElement('span');
    checkbox.className = 'checkbox';

    const taskEditWrap = document.createElement('div');
    taskEditWrap.className = 'list__task-edit-wrap';
    taskEditWrap.style.setProperty('--width', `${task.description.length}ch`);

    const taskEdit = document.createElement('input');
    taskEdit.className = 'list__task-edit';
    taskEdit.type = 'text';
    taskEdit.value = task.description;
    taskEdit.maxLength = 40;

    taskEditWrap.appendChild(taskEdit);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete padding';
    deleteBtn.innerHTML = '<i class="fa-regular fa-trash-can"></i>';

    const moveBtn = document.createElement('button');
    moveBtn.className = 'list__task-move btn padding';
    moveBtn.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';

    todoTask.appendChild(checkbox);
    todoTask.appendChild(taskEditWrap);
    todoTask.appendChild(deleteBtn);
    todoTask.appendChild(moveBtn);

    taskContainer.appendChild(todoTask);
  });
};

export const addTask = (tasks, task) => {
  tasks.push(task);

  return tasks;
};

// Remove a task from the user interface list
export const removeTask = (tasks, taskIndex) => {
  tasks.splice(taskIndex, 1);

  tasks.forEach((task, i) => {
    task.index = i + 1;
  });
  return tasks;
};

export const editTask = (tasks, target, taskIndex) => {
  tasks[taskIndex].description = target.value;
  return tasks;
};
