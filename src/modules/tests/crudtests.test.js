/**
 * @jest-environment jsdom
 */

import { editTask, getTasks, storeTask } from '../functions.js';
import { checkOutTask, clearAllCompleted } from '../taskStatus.js';

// editTask function tests
describe('Edit task', () => {
  test('is the task edited on DOM', () => {
    const list = [
      {
        description: 'task5',
        complete: true,
        index: 0,
        checked: 'checked',
      },
    ];
    const targetObj = {
      value: 'taskfive',
    };

    const changedDescription = editTask(list, targetObj, 0)[0].description;

    expect(changedDescription).toBe('taskfive');
  });

  test('is the task edited on LocalStorage', () => {
    const list = [
      {
        description: 'task5',
        complete: true,
        index: 0,
        checked: 'checked',
      },
    ];
    const targetObj = {
      value: 'taskfive',
    };

    editTask(list, targetObj, 0);
    storeTask(list);
    const storedList = getTasks();
    const changedDescription = storedList[0].description;

    expect(changedDescription).toBe('taskfive');
  });
});

// checkOutTask function tests
describe('update task complete status', () => {
  test('is complete status changed on the DOM', () => {
    const list = [
      {
        description: 'task5',
        complete: false,
        index: 0,
        checked: '',
      },
    ];

    checkOutTask(list, 0);
    const completeStatus = list[0].complete;

    expect(completeStatus).toBe(true);
  });

  test('is complete status changed on localStorage', () => {
    const list = [
      {
        description: 'task5',
        complete: false,
        index: 0,
        checked: '',
      },
    ];

    checkOutTask(list, 0);
    storeTask(list);
    const storedList = getTasks();
    const completeStatus = storedList[0].complete;

    expect(completeStatus).toBe(true);
  });
});

// clearAllTasks function tests
describe('Filtered tasks', () => {
  test('are the cleared tasks removed from the DOM', () => {
    const list = [
      {
        description: 'task1',
        complete: false,
        index: 1,
        checked: '',
      },
      {
        description: 'task3',
        complete: true,
        index: 2,
        checked: 'checked',
      },
      {
        description: 'task5',
        complete: false,
        index: 3,
        checked: '',
      },
    ];

    const remainingTasks = clearAllCompleted(list);

    expect(remainingTasks).toHaveLength(2);
  });

  test('are the cleared tasks removed from local storage', () => {
    const list = [
      {
        description: 'task1',
        complete: false,
        index: 1,
        checked: '',
      },
      {
        description: 'task3',
        complete: true,
        index: 2,
        checked: 'checked',
      },
      {
        description: 'task5',
        complete: false,
        index: 3,
        checked: '',
      },
    ];

    const remainingTasks = clearAllCompleted(list);
    storeTask(remainingTasks);

    expect(getTasks()).toHaveLength(2);
  });
});
