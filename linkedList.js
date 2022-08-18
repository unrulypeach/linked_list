import Node from './node';

/* LinkedList class, which will represent the full list. */
export default class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.tail = null;
  }

  // returns a node
  getParentNodeOf(value) {
    let start = this.head;
    for (let i = 0; i < this.size(); i += 1) {
      if (start.next.value === value) {
        return start;
      }
      start = start.next;
    }
    return null;
  }

  head() {
    return this.head;
  }

  tail() {
    return this.tail;
  }

  size() {
    let curr = this.head;
    let count = 1;
    while (curr.next !== null) {
      count += 1;
      curr = curr.next;
    }
    return count;
  }

  // returns true if val in list, otherwise false.
  contains(val) {
    let start = this.head;
    for (let i = 0; i < this.size(); i += 1) {
      if (start.value === val) return true;
      start = start.next;
    }
    return false;
  }

  // adds to the end
  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    if (this.head.next === null) {
      this.head.next = newNode;
      this.tail = newNode;
      return;
    }

    this.tail.next = newNode;
    this.tail = newNode;
  }

  // adds to the start
  prepend(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
  }

  // removes last element
  pop() {
    const parent = this.getParentNodeOf(this.tail.value);
    parent.next = null;
    this.tail = parent;
  }

  // returns the index or null if not found.
  find(val) {
    let ind = 0;
    let start = this.head;
    while (ind < this.size()) {
      if (start !== this.tail && start.value !== val) {
        start = start.next;
        ind += 1;
      }
      if (start.value === val) return ind;
      if (start.next === null) return null;
    }
    return null;
  }

  // returns the node at the given index
  at(index) {
    let current = this.head;
    for (let i = 1; i <= index; i += 1) {
      current = current.next;
    }
    return current;
  }

  // format should be: ( value ) -> ( value ) -> ( value ) -> null
  toString() {
    let str = '';
    let curr = this.head;
    while (curr.next !== null) {
      str += `(${curr.value}) -> `;
      curr = curr.next;
    }

    return `${str}(${curr.value}) -> null`;
  }
}
