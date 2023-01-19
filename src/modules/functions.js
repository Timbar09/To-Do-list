export const tasksArr = [{ description: ' tsak', complete: false, index: 1 }];

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

// Clear input field
export const clearForm = () => {
  document.querySelector('.list__add-input').value = '';
};

// Add a task to the user interface list
export const addTask = (task) => {
  const taskContainer = document.querySelector('.list__tasks');
  const todoTask = document.createElement('li');
  todoTask.className = 'list__task padding-x flex  flex-ai-c';

  const checkbox = document.createElement('input');
  checkbox.className = 'checkbox';
  checkbox.id = task.index;
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
};

// Get the tasks from storage and display them on the user iterface
export const render = () => {
  const tasks = getTasks();

  tasks.forEach((task) => {
    addTask(task);
  });
};

// Remove a task from the user interface list
export const removeTask = (target) => {
  if (target.parentElement.classList.contains('delete')) {
    target.parentElement.parentElement.remove();
  }
};

// Add a task to local storage
export const storeTask = (task) => {
  const tasks = getTasks();
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Add a task to local storage
export const removeFromStorage = (el) => {
  if (el.parentElement.classList.contains('delete')) {
    const tasks = getTasks();
    const taskId = el.parentElement.parentElement.firstElementChild.id;
    const targetIndex = tasks.findIndex((task) => task.index == taskId);
    tasks.splice(targetIndex, 1);

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
};
