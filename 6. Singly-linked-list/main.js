class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  traverse() {
    var current = this.head;
    let head = this.head;
    while (current) {
      current = current.next;
    }
    return { head, tail: current };
  }

  pop() {
    // empty list
    if (!this.head) return undefined;

    // single node list
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length--;
      return this;
    }

    // >2 nodes items
    let currentNode = this.head;
    let newTail = this.head;

    while (currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    return this;
  }

  /**
   * @returns new shifted list
   */
  shift() {
    if (!this.head) return undefined;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length--;
      return this;
    }

    let currentNode = this.head;
    let newHead = this.head;

    while (currentNode.next) {
      newHead = currentNode;
      currentNode = currentNode.next;
    }
    this.length--;
    this.head = currentNode;
    this.head.next = currentNode.next;
    return this;
  }

  /**
   * @param {number} val number
   * @returns new unshifted list
   */
  unshift(val) {
    const oldHead = this.head;
    const newHead = new Node(val);
    this.head = newHead;
    this.head.next = oldHead;
    this.length++;
    return this;
  }

  /**
   * @description this return given nth place node value
   * @param {number} n number
   */
  get(n) {
    let requiredNode = this.head;
    if (n > this.length) return null;
    for (let index = 0; index < n; index++) {
      requiredNode = requiredNode.next;
    }
    return requiredNode;
  }
}

const list = new SinglyLinkedList();

list.push("1");
list.push("2");
list.push("4");

list.traverse();
// console.log(list.pop());
// console.log(list.shift());
// console.log(list.unshift(6));
console.log(list.get(1));
