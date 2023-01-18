import './style.css';
import Task from './modules/task.js';
import { addTask, render, storeTask } from './modules/functions.js';

window.addEventListener('load', render);

// Adding a task to tasksArr
const form = document.querySelector('.list__add');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const description = document.querySelector('.list__add-input').value;

  const newTask = new Task(description);

  addTask(newTask);
  storeTask(newTask);
});
