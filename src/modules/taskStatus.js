import { storeTask, render } from './functions.js';

export const checkOutTask = (tasks, targetInput) => {
 
  const taskIndex = tasks.findIndex((task) => task.description === targetInput.value);

  tasks[taskIndex].complete = !tasks[taskIndex].complete;

  if (tasks[taskIndex].complete) {
    tasks[taskIndex].checked = 'checked';
  } else {
    tasks[taskIndex].checked = '';
  }

};

export const clearAllCompleted = (tasks) => {
  tasks = tasks.filter((task) => !task.complete);

  tasks.forEach((task, i) => {
    task.index = i + 1;
  });

  storeTask(tasks);
  render(tasks);
};
