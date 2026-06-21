// LinkedList Node creation
class Node {
  constructor(value) { this.value = value; this.next = null; }
}

class LinkedList {
  constructor() { this.head = null; }
  insertAtHead(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode; // O(1)
  }
}

const list = new LinkedList();
list.insertAtHead(20);
list.insertAtHead(10);
console.log(list.head);