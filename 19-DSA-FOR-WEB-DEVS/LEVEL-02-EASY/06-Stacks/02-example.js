// Stack LIFO implementation
class Stack {
  constructor() { this.items = []; }
  push(element) { this.items.push(element); } // O(1)
  pop() { return this.items.pop(); } // O(1)
  peek() { return this.items[this.items.length - 1]; }
}

const history = new Stack();
history.push("/home");
history.push("/about");
console.log("Back clicked:", history.pop()); // "/about"