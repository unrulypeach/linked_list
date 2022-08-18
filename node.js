/* Node class, containing a value fn and a link to the nextNode, set both as null by default. */
export default class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}
