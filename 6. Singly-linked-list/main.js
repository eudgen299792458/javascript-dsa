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
      console.log("Node :- ", current);
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
    const newHead = this.head;

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
  get(indexOf) {
    const check = this.validateIndex(indexOf);
    if (check) {
      return check;
    }
    let requiredNode = this.head;
    for (let index = 0; index < indexOf; index++) {
      requiredNode = requiredNode.next;
    }
    return requiredNode;
  }

  set(value, index) {
    const check = this.validateIndex(index);
    if (check) {
      return check;
    }
    let indexOfNode = this.get(index);
    indexOfNode.value = value;
    return this;
  }

  insert(value, index) {
    const check = this.validateIndex(index);
    if (check) {
      return check;
    }
    const beforeIndexOfNode = this.get(index - 1);
    const indexOfNode = this.get(index);

    const newNode = new Node(value);
    beforeIndexOfNode.next = newNode;
    newNode.next = indexOfNode;
    this.length++;

    return this;
  }

  remove(index) {
    const check = this.validateIndex(index);
    if (check) {
      return check;
    }
    let indexOfNode = this.get(index);
    const beforeIndexOfNode = this.get(index - 1);
    const afterIndexOfNode = this.get(index + 1);

    beforeIndexOfNode.next = afterIndexOfNode;
    indexOfNode = null;
    this.length--;

    return this;
  }

  reverse() {
    let collectNode = [];
    // while()
    return reverseList;
  }

  validateIndex(index) {
    if (this.length == 0) return "Err: cannot set to empty list";
    if (index > this.length) return "Err: index greater than list length";
    if (index < 0) return "Err: index must be ≥ 0";
  }
}

const list = new SinglyLinkedList();

list.push("1");
list.push("2");
list.push("3");
list.push("4");
list.push("5");

// console.log(list.pop());
// console.log(list.shift());
// console.log(list.unshift(6));
// console.log(list.get(1));
// console.log(list.set("AA", 2));
// console.log(list.insert("A", -1));
// console.log(list.remove(1));

// list.traverse();
// console.log(list.reverse());
