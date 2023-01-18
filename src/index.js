import './style.css';
import UserInterface from './modules/UserInterface.js';

// const tasks = [
//   {
//     description: 'Develop the todo list structure',
//     completed: false,
//     index: 1,
//   },
//   {
//     description: 'Submit before end of day',
//     completed: false,
//     index: 2,
//   },
//   {
//     description: 'Get some rest',
//     completed: false,
//     index: 3,
//   },
// ];

// const render = () => {
//   const listContainer = document.querySelector('.list__tasks');

//   tasks.forEach((task) => {
//     const todoTask = document.createElement('li');
//     todoTask.className = 'list__task padding-x flex  flex-ai-c';
//     todoTask.innerHTML = `
//             <input type="checkbox" id="${task.index}" />
//             <label class="list__task-label" for="${task.index}">${task.description}</label>    <button class="list__task-move"><i class="fa-solid fa-ellipsis-vertical"></i></button>`;

//     listContainer.appendChild(todoTask);
//   });
// };

// window.addEventListener('load', render);
