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

// Get the tasks from storage and display them on the user iterface
export const render = () => {
  const tasks = getTasks();

  tasks.forEach((task) => {
    const taskContainer = document.querySelector('.list__tasks');
    const todoTask = document.createElement('li');
    todoTask.className = 'list__task padding-x flex  flex-ai-c';
    todoTask.innerHTML = `
            <input type="checkbox" id="${task.index}" />
            <label class="list__task-label" for="${task.index}">${task.description}</label>    <button class="list__task-move"><i class="fa-solid fa-ellipsis-vertical"></i></button>`;

    taskContainer.appendChild(todoTask);
  });
};

// Add a task to the user interface
export const addTask = (task) => {
  tasksArr.push(task);

  return tasksArr;
};

// Add a task to local storage
export const storeTask = (task) => {
  const tasks = getTasks();
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};
