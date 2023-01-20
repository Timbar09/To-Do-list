import './style.css';
import Task from './modules/taskClass';
import { addTask, render, storeTask, removeTask, tasksArr, taskContainer, checkTask } from './modules/functions.js';

// Add a task to the list and storing to local storage
const form = document.querySelector('.list__add');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const description = document.querySelector('.list__add-input');

  const newTask = new Task(tasksArr, description.value);

  description.value = '';
  addTask(tasksArr, newTask);
  storeTask(tasksArr);
  render(tasksArr);
});

// Remove a task from list and store it on local storage
taskContainer.addEventListener('click', (e) => {
  removeTask(e.target, tasksArr);
  checkTask(e.target, tasksArr);
});

render(tasksArr);
