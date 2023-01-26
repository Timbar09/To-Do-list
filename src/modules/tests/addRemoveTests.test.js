/**
 * @jest-environment jsdom
 */

import { addTask, storeTask, getTasks, removeTask } from '../functions.js';
import Task from '../taskClass.js';

// AddTask tests
describe('Add tasks', () => {
  test('is task added to DOM', () => {
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

// RemoveTask tests
describe('Remove tasks', () => {
  test('is task removed from the DOM', () => {
    const list = [
      { description: 'hdfhdo', complete: true, index: 1, checked: 'checked' },
      { description: 'task1', complete: false, index: 2, checked: '' },
      { description: 'task2', complete: false, index: 3, checked: '' },
      { description: 'task4 ', complete: false, index: 4, checked: '' },
      { description: 'task5', complete: false, index: 5, checked: '' },
    ];

  });
});
