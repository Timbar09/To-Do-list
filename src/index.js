import './style.css';
import Task from './modules/taskClass.js';
import { checkOutTask, clearAllCompleted } from './modules/taskStatus.js';
import { addTask, render, removeTask, editTask, getTasks } from './modules/functions.js';

const form = document.querySelector('.list__add');
const taskContainer = document.querySelector('.list__tasks');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const description = document.querySelector('.list__add-input');
  const tasksArr = getTasks();

  const newTask = new Task(tasksArr, description.value);

  description.value = '';
  addTask(tasksArr, newTask, taskContainer);
});

// Remove a task
taskContainer.addEventListener('click', (e) => {
  const tasksArr = getTasks();

  removeTask(tasksArr, e.target, taskContainer);
  checkOutTask(e.target, tasksArr, taskContainer);
});

// Edit a task
taskContainer.addEventListener('change', (e) => {
  const tasksArr = getTasks();

  editTask(tasksArr, e.target, taskContainer);
});

// Clear all completed tasks
const clearAllBtn = document.querySelector('.list__clear-btn');

clearAllBtn.addEventListener('click', () => {
  const tasksArr = getTasks();

  clearAllCompleted(tasksArr, taskContainer);
});

render(getTasks(), taskContainer);
