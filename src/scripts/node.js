export class node {
  // dataPrivate = 0;
  #data;
  next;
  constructor(data = null) {
    this.#data = data;
    this.next = null;
  }
  value() {
    return this.#data;
  }
}
