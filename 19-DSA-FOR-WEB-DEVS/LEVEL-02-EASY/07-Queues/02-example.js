// Queue FIFO implementation
class Queue {
  constructor() { this.items = {}; this.front = 0; this.rear = 0; }
  enqueue(item) { this.items[this.rear] = item; this.rear++; } // O(1)
  dequeue() {
    if (this.front === this.rear) return null;
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item; // O(1)
  }
}

const printer = new Queue();
printer.enqueue("Doc1.pdf");
printer.enqueue("Doc2.pdf");
console.log("Printing:", printer.dequeue()); // "Doc1.pdf"