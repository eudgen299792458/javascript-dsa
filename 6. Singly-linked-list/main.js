class Node{
	constructor(val){
		this.value = val
		this.next = null
	}
}

class SinglyLinkedList{
	
	constructor(){
		this.head = null
		this.tail = null
		this.length = 0
	}

	push(value){
		const newNode = new Node(value);
		if(!this.head){
			this.head = newNode
			this.tail = this.head
		}else{
			this.tail.next = newNode;
			this.tail = newNode
		}
		this.length++;
		return this
	}
}

const list = new SinglyLinkedList()

list.push("1")
list.push("2")
list.push("4")
console.log(list)
