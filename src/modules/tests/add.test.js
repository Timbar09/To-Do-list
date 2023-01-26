/**
 * @jest-environment jsdom
 */

import { taskContainer, addTask } from '../functions.js';
import Task from '../taskClass.js';

test('does the listContainer have 1 list item', () => {
  document.body.innerHTML = '<div>' + '  <ul id="list"><li></li></ul>' + '</div>';

  const tasks = [];
  const newTask = new Task('task');
  const taskList = document.querySelectorAll('#list li');

  expect(addTask(tasks, newTask)).toHaveLength(1);
});
