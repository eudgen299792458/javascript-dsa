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
    const nodeAfterHead = this.head.next;
    nodeAfterHead.prev = null;
    this.head = nodeAfterHead;
    this.length--;
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

// pop()
dlist.pop();
console.log("\nafter pop tail: ", dlist.tail);

// shift()
dlist.shift();
console.log("\nafter shift head:", dlist.head);

// display
dlist.display();
dlist.display("backward");
console.log("length: ", dlist.length);
