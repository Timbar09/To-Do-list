/**
 * @jest-environment jsdom
 */

import { addTask, storeTask, getTasks, removeTask } from '../functions.js';
import Task from '../taskClass.js';

// AddTask tests
describe('Remove tasks', () => {
    test('is task added to DOM', () => {
        const list = [
          {description: "hdfhdo", complete: true, index: 1, checked: "checked"},
          {description: "task1", complete: false, index: 2, checked: ""},
          {description: "task2", complete: false, index: 3, checked: ""},
          {description: "task4 ", complete: false, index: 4, checked: ""},
          {description: "task5", complete: false, index: 5, checked: ""}
         ];
    
        expect(removeTask(list, 2)).toHaveLength(4);
      });
});
