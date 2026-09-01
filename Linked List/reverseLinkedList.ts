// Reverse Linked List

// Given the head of a singly linked list, reverse the list and return the new head.

// For example:

// Input:
// 1 → 2 → 3 → 4 → 5 → null

// Output:
// 5 → 4 → 3 → 2 → 1 → null

// Another example:

// Input:
// 1 → 2 → null

// Output:
// 2 → 1 → null

// If the list is empty:

// Input:
// null

// Output:
// null
// Your task

// Implement:

// reverseList(head)

// and return the new head.

// Goal: O(n) time and O(1) extra space.

//This is new, Linked List and before learning how to reverse it,
//I need to learn how to build one

class Node {
    data: number;
    next: Node | null;

    constructor (data: number) {
      this.data = data;
      this.next = null;
    }
  }


class LinkedList  {
  head: Node | null;

  constructor () {
    this.head = null;
  }

  insertAtBeginning(data: number) {
    const newNode = new Node(data)

    newNode.next = this.head;
    this.head = newNode;
  }

  insertAtEnd(data: number) {
    const newNode = new Node(data)
    let current = this.head;

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    while (current?.next !== null) {
      current = current?.next!;
    }
    current.next = newNode;
  }

  traverse() {
    const result = [];
    let current = this.head;

    while (current?.next !== null) {

      result.push(current);
      current = current?.next!;
      
    }
    return result;
  }


  deleteAtBeginning() {
    let oldHead = this.head;
    this.head = this.head?.next!;
    oldHead = null;
  }

  deleteAtEnd() {
    let current = this.head;
    let prev = this.head;

    while (current?.next !== null) {
      prev = current;
      current = current?.next!;
    }
    prev = null;
    current = null;
  }


  reverse () {
    let current = this.head;
    

    while (current?.next !== null) {
      let next = current?.next;
      let newNext = next?.next;
      newNext = current!;
      current = current?.next!;
    }
    if (current.next === null) {
      this.head = current;
    }
    return console.log(this.head);
  }


}

const list = new LinkedList();

console.log(list.insertAtBeginning(10))
console.log(list.insertAtBeginning(5))
console.log(list.insertAtEnd(20))
console.log(list.insertAtEnd(30))
console.log(list.traverse())
console.log(list.deleteAtBeginning())
console.log(list.reverse())
console.log(list.traverse())