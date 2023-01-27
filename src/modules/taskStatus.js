import { storeTask, render } from './functions.js';

export const checkOutTask = (tasks, taskIndex) => {
  tasks[taskIndex].complete = !tasks[taskIndex].complete;

  if (tasks[taskIndex].complete) {
    tasks[taskIndex].checked = 'checked';
  } else {
    tasks[taskIndex].checked = '';
  }

  return tasks;
};

export const clearAllCompleted = (tasks) => {
  tasks = tasks.filter((task) => !task.complete);
  console.log(tasks);

  tasks.forEach((task, i) => {
    task.index = i + 1;
  });

  return tasks;
};
