/**
 * @jest-environment jsdom
 */

describe('Edit task', () => {
    test('is the task edited', () => {
        const newTask = new Task('task');
        const list = [];
    
        expect(addTask(list, newTask)).toHaveLength(1);
    });

  });