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
  todoTask.innerHTML = `
            <input type="checkbox" id="${task.index}" />
            <label class="list__task-label" for="${task.index}">${task.description}</label><button class="list__task-move"><button class="delete"><i class="fa-regular fa-trash-can"></i></button><i class="fa-solid fa-ellipsis-vertical"></i></button>`;

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
  const tasks = getTasks();
  const taskId = el.parentElement.parentElement.firstElementChild.id;
  const targetIndex = tasks.findIndex((task) => task.index == taskId);
  tasks.splice(targetIndex, 1);

  localStorage.setItem('tasks', JSON.stringify(tasks));
};
