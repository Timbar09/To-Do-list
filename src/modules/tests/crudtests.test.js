/**
 * @jest-environment jsdom
 */
import { editTask, getTasks, storeTask } from '../functions.js';

describe('Edit task', () => {
    test('is the task edited on DOM', () => {
        const list = [
            {
              description: 'task5', complete: true, index: 0, checked: 'checked',
            }
          ];
        const targetObj = {
            value: 'taskfive'
        }

      const changedDescription = editTask(list, targetObj, 0)[0].description;
    
        expect(changedDescription).toBe('taskfive');
    });
    test('is the task edited on LocalStorage', () => {
        const list = [
            {
              description: 'task5', complete: true, index: 0, checked: 'checked',
            }
          ];
        const targetObj = {
            value: 'taskfive'
        }
      editTask(list, targetObj, 0)
      storeTask(list)
      const storedList = getTasks()
      const changedDescription = storedList[0].description;
    
        expect(changedDescription).toBe('taskfive');
    });
  });

  describe('update task complete status', () => {

   test('is complete status changed', () => {
    
   })

  })