import { tasksArr } from './functions.js';

export default class Task {
  constructor(description) {
    this.description = description;
    this.complete = false;
    this.index = tasksArr.length;
  }
}
