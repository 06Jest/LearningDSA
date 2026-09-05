// Min Stack

// Design a stack that supports the following operations in O(1) time:

// push(x) - Add an integer x to the top of the stack.
// pop() - Remove the element on top of the stack.
// top() - Return the element on top of the stack.
// getMin() - Return the minimum element currently in the stack.
// Example
// Operations:
// push(5)
// push(3)
// push(7)
// getMin()
// pop()
// getMin()
// pop()
// getMin()

// Output:
// 3
// 3
// 5
// Constraints
// -2³¹ <= x <= 2³¹ - 1
// pop, top, and getMin will only be called when the stack is non-empty.
// Each operation must run in O(1) time.

class Stack {
  stack: number[];
  minStack: number[];

  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push (val: number) {
    if (!this.minStack.length) {
      this.minStack.push(val)
    }
    if (val < this.minStack[this.minStack.length -1]!) {
      this.minStack.push(val)
    }
    this.stack.push(val);
  }

  get () {
    return this.stack;
  }

  pop () {
    if (this.stack[this.stack.length - 1]! 
      === this.minStack[this.minStack.length - 1]!
    ) {
      this.minStack.pop();
    }
    this.stack.pop();
    
  }

  getMin () {
    return this.minStack[this.minStack.length - 1]
  }
}

const stack = new Stack();
stack.push(5);
stack.push(3);
stack.push(7);
stack.push(2);
stack.pop();
console.log(stack.get());
console.log(stack.getMin());

//i nailed this one out!