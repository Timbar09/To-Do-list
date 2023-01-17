import './style.css';

const tasks = [
  {
    description: 'Develop a todo list app',
    completed: false,
    index: 1,
  },
  {
    description: 'Submit before end of day',
    completed: false,
    index: 2,
  },
  {
    description: 'Get some rest',
    completed: false,
    index: 3,
  },
];

const render = () => {
  const listContainer = document.querySelector('.list__tasks');

  tasks.forEach((task) => {
    const todoTask = document.createElement('li');
    todoTask.className = 'list__task';
    todoTask.innerHTML = `
            <input type="checkbox" id="${task.index}" />
            <label for="${task.index}">${task.description}</label>`;

    listContainer.appendChild(todoTask);
  });
};

window.addEventListener('load', render);
