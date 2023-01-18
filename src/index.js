import './style.css';
import Task from './modules/taskClass.js';
import { addTask, removeTask, render, storeTask, removeFromStorage, clearForm } from './modules/functions.js';

window.addEventListener('load', render);

// Add a task to the list and storing to local storage
const form = document.querySelector('.list__add');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const description = document.querySelector('.list__add-input').value;

  const newTask = new Task(description);

  addTask(newTask);
  storeTask(newTask);
  clearForm();
});

// Remove a task from list and store it on local storage
const taskContainer = document.querySelector('.list__tasks');

taskContainer.addEventListener('click', (e) => {
  removeTask(e.target);
  removeFromStorage(e.target);
});
