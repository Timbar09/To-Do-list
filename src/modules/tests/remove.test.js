/**
 * @jest-environment jsdom
 */

import { addTask, storeTask, getTasks, removeTask } from '../functions.js';
import Task from '../taskClass.js';

// AddTask tests
describe('Remove tasks', () => {
  test('is task removed from the DOM', () => {
    const newTask = new Task('task');
    const list = [];

    expect(addTask(list, newTask)).toHaveLength(1);
  });

  test('is local storage updated', () => {
    const newTask = new Task('storageTask');
    const list = [];
    addTask(list, newTask);

    storeTask(list);

    expect(getTasks()).toHaveLength(1);
  });
});
