import { node } from "./node.js";
export class linkedList {
  #head;
  #size = 0;
  constructor(array) {
    if (!Array.isArray(array)) {
      this.#head = null;
      this.#size = 0;
    }
  }
  length() {
    return this.#size;
  }
  append(value) {
    let aux = this.#head;
    if (this.#head === null) {
      this.#head = new node(value);
      this.#size++;
    } else {
      while (aux.next != null) {
        aux = aux.next;
      }
      aux.next = new node(value);
      this.#size++;
    }
  }
  prepend(value) {
    let aux = this.#head;
    this.#head = new node(value);
    this.#head.next = aux;
    this.#size++;
  }
  show() {
    let aux = this.#head;
    let string = "";
    while (aux != null) {
      string = string + `( ${aux.value()} )-->`;
      aux = aux.next;
    }
    string = string + `(null)`;
    console.log(string);
  }
  head() {
    return this.#head;
  }
  tail() {
    if (this.#head === null) return null;

    let aux = this.#head;
    while (aux.next != null) {
      aux = aux.next;
    }
    return aux;
  }
  at(index) {
    try {
      if (index < 0 || index > this.#size) throw new RangeError(`OUT OF SCOPE`);
    } catch (err) {
      return err;
    }
    let aux = this.#head;
    if (index === 0) return aux;
    for (let i = 0; i <= index - 1; i++) {
      aux = aux.next;
    }
    return aux;
  }
}
