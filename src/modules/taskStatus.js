import { storeTask, render } from './functions.js';

export const checkOutTask = (target, tasks) => {
  if (target.classList.contains('list__task') || target.classList.contains('checkbox')) {
    let targetInput;

    if (target.classList.contains('list__task')) {
      targetInput = target.firstChild.nextElementSibling.firstChild;
    } else {
      targetInput = target.nextElementSibling.firstChild;
    }

    const taskIndex = tasks.findIndex((task) => task.description === targetInput.value);

    tasks[taskIndex].complete = !tasks[taskIndex].complete;

    if (tasks[taskIndex].complete) {
      tasks[taskIndex].checked = 'checked';
    } else {
      tasks[taskIndex].checked = '';
    }

    storeTask(tasks);
    render(tasks);
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
