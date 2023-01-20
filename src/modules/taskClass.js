export default class Task {
  constructor(arr, description) {
    this.description = description;
    this.complete = false;
    this.index = arr.length + 1;
    this.checked = '';
  }
}
