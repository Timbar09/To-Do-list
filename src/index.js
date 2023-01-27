import './style.css';
import Task from './modules/taskClass.js';
import { checkOutTask, clearAllCompleted } from './modules/taskStatus.js';
import {
  addTask, render, storeTask, removeTask, editTask, getTasks, taskContainer,
} from './modules/functions.js';

const form = document.querySelector('.list__add');
const clearAllBtn = document.querySelector('.list__clear-btn');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const description = document.querySelector('.list__add-input');
  const tasksArr = getTasks();

  const newTask = new Task(tasksArr, description.value);

  description.value = '';
  addTask(tasksArr, newTask);

  storeTask(tasksArr);
  render(tasksArr);
});

// Remove a task
taskContainer.addEventListener('click', (e) => {
  const tasksArr = getTasks();
  if (e.target.parentElement.classList.contains('delete')) {
    const targetInput = e.target.parentElement.previousElementSibling.firstChild;

    const taskIndex = tasksArr.findIndex((task) => task.description === targetInput.value);
    removeTask(tasksArr, taskIndex);

    storeTask(tasksArr);
    render(tasksArr);
  }
  if (e.target.classList.contains('list__task-edit-wrap') || e.target.classList.contains('checkbox')) {
    let targetInput;

   if (e.target.classList.contains('list__task-edit-wrap')) {
    targetInput = e.target.firstChild;
  } else {
    targetInput = e.target.nextElementSibling.firstChild;
  }

    checkOutTask(tasksArr, targetInput); 

    storeTask(tasksArr);
    render(tasksArr);

  }
});

// Edit a task
taskContainer.addEventListener('change', (e) => {
  const tasksArr = getTasks();
  if (e.target.classList.contains('list__task-edit')) {
    const taskIndex = tasksArr.findIndex((task) => task.index.toString() === e.target.closest('.list__task').id);

    editTask(tasksArr, e.target, taskIndex);
    storeTask(tasksArr);
    render(tasksArr);
  }
  
});

// Clear all completed tasks
clearAllBtn.addEventListener('click', () => {
  const tasksArr = getTasks();

  clearAllCompleted(tasksArr, taskContainer);
});

render(getTasks());
