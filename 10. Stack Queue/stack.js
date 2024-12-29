import { SinglyLinkedList } from "../6. Singly-linked-list/main";

class Stack {
  constructor() {
    this.singlyLinkedList = new SinglyLinkedList();
    this.tos = this.singlyLinkedList.tail;
    this.los = this.singlyLinkedList.head;
    this.size = this.singlyLinkedList.length;
  }

  // push
  push(value) {
    this.singlyLinkedList.push(value);
  }

  // pop
  pop() {
    this.singlyLinkedList.pop();
  }
}

const stack = new Stack();
