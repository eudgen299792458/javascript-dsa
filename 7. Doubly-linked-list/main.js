class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
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
      this.length++;
      return;
    }
    const oldTail = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    newNode.prev = oldTail;
    this.length++;
    return;
  }

  pop() {
    const nodebeforeTail = this.tail.prev;
    nodebeforeTail.next = null;
    this.tail = nodebeforeTail;
    this.length--;
  }

  shift() {
    if (!this.head) return undefined;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length--;
      return this;
    }

    const nodeAfterHead = this.head.next;
    nodeAfterHead.prev = null;
    this.head = nodeAfterHead;
    this.length--;
  }

  unshift(value) {
    const oldHead = this.head;
    const newNode = new Node(value);
    newNode.next = oldHead;
    this.head = newNode;
    this.length++;
  }

  get(indexOf) {
    if (indexOf < 0) return null;
    if (indexOf > this.length) return null;

    const distanceFromEnd = Math.abs(this.length - indexOf);

    if (indexOf > distanceFromEnd) {
      // do backward
      let nodeAtIndex = this.tail;
      for (let index = this.length - 1; index >= indexOf; index--) {
        nodeAtIndex = nodeAtIndex.prev;
      }
      return nodeAtIndex;
    } else {
      // do forward
      let nodeAtIndex = this.head;
      for (let index = 0; index < indexOf; index++) {
        nodeAtIndex = nodeAtIndex.next;
      }
      return nodeAtIndex;
    }
  }

  set(value, atIndex) {
    if (atIndex >= this.length || atIndex < 0) {
      console.log("Err: index out of range!");
      return;
    }
    const nodeAtIndex = this.get(atIndex);
    nodeAtIndex.value = value;
  }

  insert(value, atIndex) {
    if (atIndex >= this.length) {
      console.log("Err: index out of range!");
      return;
    }
    // at end
    if (atIndex === this.length - 1) {
      this.push(value);
      return;
    }

    // at begin
    if (atIndex === 0) {
      this.unshift(value);
      return;
    }

    const nodeBeforeIndex = this.get(atIndex - 1);
    const nodeAtIndex = this.get(atIndex);
    const newNode = new Node(value);

    nodeBeforeIndex.next = newNode;
    newNode.prev = nodeBeforeIndex;
    newNode.next = nodeAtIndex;
    nodeAtIndex.prev = newNode;
    this.length++;
  }

  remove(index) {
    if (index == 0) {
      this.shift();
      return;
    }
    if (index == this.length - 1) {
      this.pop();
      return;
    }
    const nodeAtIndex = this.get(index);
    const nodeBeforeIndex = this.get(index - 1);
    const nodeAfterIndex = this.get(index + 1);
    nodeBeforeIndex.next = nodeAfterIndex;
    nodeAfterIndex.prev = nodeBeforeIndex;
    this.length--;
    return;
  }

  reverse() {
    const oldhead = this.head;
    this.head = this.tail;
    let currentNode = this.head;
    while (currentNode.next != oldhead) {
      const temp = currentNode.next;
      currentNode.next = currentNode.prev;
      currentNode.prev = temp;
    }
  }

  traverse(direction = "forward") {
    const directionStatus = direction === "forward" ? true : false;
    let currentNode = directionStatus ? this.head : this.tail;
    if (directionStatus) {
      while (currentNode.next) {
        console.log("Node: ", currentNode);
        currentNode = currentNode.next;
      }
    } else {
      while (currentNode.prev) {
        console.log("Node: ", currentNode);
        currentNode = currentNode.prev;
      }
    }
    console.log("Node: ", currentNode);
  }

  display(direction = "forward") {
    console.log("\n-----------------list: ", direction + "------------------");
    this.traverse(direction);
    console.log("----------------------eol------------------------");
  }
}

const dlist = new DoublyLinkedList();

dlist.push(3);

dlist.push(4);
dlist.push(5);
dlist.push(6);

dlist.push(7);
dlist.push(8);
dlist.push(9);

// pop()
// dlist.pop();
// console.log("\nafter pop tail: ", dlist.tail);

// // shift()
// dlist.shift();
// console.log("\nafter shift head:", dlist.head);

// // unshift()
// dlist.unshift(10);
// console.log("\nafter unshift head:", dlist.head);

// get()
// console.log("\n get 2: ", dlist.get(2));

// //.get()
// console.log("\n get 6: ", dlist.get(6));

// insert()
dlist.insert(10, dlist.length - 1);

// set()
dlist.set("set-20", 2);

// remove
dlist.remove(2);

// display
dlist.reverse();
dlist.display();
dlist.head;
dlist.tail;
// dlist.display("backward");
// console.log("length: ", dlist.length);
