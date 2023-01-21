import './style.css';
import Task from './modules/taskClass.js';
import { checkOutTask, clearAllCompleted } from './modules/taskStatus.js';
import { 
  addTask, 
  render, 
  removeTask, 
  taskContainer, 
  editTask, 
  getTasks 
} from './modules/functions.js';

let tasksArr = getTasks();

// Add a task
const form = document.querySelector('.list__add');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const description = document.querySelector('.list__add-input');

  const newTask = new Task(tasksArr, description.value);

  description.value = '';
  addTask(tasksArr, newTask);
});

// Remove a task
taskContainer.addEventListener('click', (e) => {
  removeTask(tasksArr, e.target);
  checkOutTask(e.target, tasksArr);
});

// Edit a task
taskContainer.addEventListener('change', (e) => {
  editTask(tasksArr, e.target);
});

// Clear all completed tasks
const clearAllBtn = document.querySelector('.list__clear-btn');

clearAllBtn.addEventListener('click', () => {
  clearAllCompleted(tasksArr);
});

render(tasksArr);
