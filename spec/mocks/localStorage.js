export default class localStorage {
  constructor() {
    this.data = {};
  }
  setItem(key, val) {
    this.data[key] = val;
  }
  getItem(key) {
    return this.data[key];
  }
}