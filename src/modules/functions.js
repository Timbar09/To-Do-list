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

export const addTask = (tasks, task) => {
  tasks.push(task);
};

export const tasksArr = getTasks();
export const taskContainer = document.querySelector('.list__tasks');

export const render = (tasks) => {
  taskContainer.innerHTML = '';

  tasks = getTasks();

  tasks.forEach((task) => {
    const todoTask = document.createElement('li');
    todoTask.className = 'list__task padding-x flex  flex-ai-c';
    todoTask.id = task.index;

    const checkbox = document.createElement('input');
    checkbox.className = 'checkbox';
    checkbox.type = 'checkbox';

    const taskEditWrap = document.createElement('div');
    taskEditWrap.className = 'list__task-edit-wrap';
    taskEditWrap.style.setProperty('--width', `${task.description.length}ch`);

    const taskEdit = document.createElement('input');
    taskEdit.className = 'list__task-edit';
    taskEdit.type = 'text';
    taskEdit.size = task.description.length;
    taskEdit.value = task.description;

    taskEditWrap.appendChild(taskEdit);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete';
    deleteBtn.innerHTML = `<i class="fa-regular fa-trash-can"></i>`;

    const moveBtn = document.createElement('button');
    moveBtn.className = 'list__task-move';
    moveBtn.innerHTML = `<i class="fa-solid fa-ellipsis-vertical"></i>`;

    todoTask.appendChild(checkbox);
    todoTask.appendChild(taskEditWrap);
    todoTask.appendChild(deleteBtn);
    todoTask.appendChild(moveBtn);

    taskContainer.appendChild(todoTask);
  });
};

// Remove a task from the user interface list
export const removeTask = (target, tasks) => {
  if (target.parentElement.classList.contains('delete')) {
    const targetInput = target.parentElement.previousElementSibling.firstChild;

    const taskIndex = tasks.findIndex((task) => task.description === targetInput.value);

    tasks.splice(taskIndex, 1);

    tasks.forEach((task, i) => (task.index = i));

    storeTask(tasks);
    render(tasks);
  }
};

export const checkTask = (target, tasks) => {
  if (target.classList.contains('checkbox')) {
    const targetInput = target.nextElementSibling.firstChild;

    const taskIndex = tasks.findIndex((task) => task.description === targetInput.value);

    tasks[taskIndex].complete = !tasks[taskIndex].complete;

    storeTask(tasks);
    render(tasks);
  }
};
