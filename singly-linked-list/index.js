class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
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

  pop() {
    if (this.length === 1 || this.length === 0) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else {
      let currentNode = this.head;
      let prevNode = null;
      while (currentNode.next) {
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
      this.tail = prevNode;
      this.tail.next = null;
      this.length--;
    }
    return this;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }
    this.head = this.head.next;
    this.length--;
    return this;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }
    return this;
  }

  get(index) {
    if (!this.head) {
      return undefined;
    }
    let currentNode = this.head;
    let counter = 0;
    while (currentNode) {
      if (counter === index) {
        return currentNode.val;
      }
      currentNode = currentNode.next;
      counter++;
    }
    return undefined;
  }

  set(index, value) {
    const node = this.getNode(index);
    if (node) {
      node.val = value;
    }
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      return undefined;
    }
    if (index === 0) {
      return this.unshift(value);
    }
    if (index === this.length) {
      return this.push(value);
    }

    const newNode = new Node(value);
    const prevNode = this.getNode(index - 1);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }

    const prevNode = this.getNode(index - 1);
    prevNode.next = prevNode.next.next;
    this.length--;
  }

  reverse() {
    let prevNode = null;
    let currentNode = this.head;
    this.tail = currentNode;

    while (currentNode) {
      const nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }

    this.head = prevNode;
  }

  getNode(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }
}

const linkedList = new SinglyLinkedList();
linkedList.push(1);
linkedList.push(2);
linkedList.push(3);
// Uncomment and run the following methods to test other functionalities
// linkedList.pop();
// linkedList.shift();
// linkedList.unshift(5);
// linkedList.get(0);
// linkedList.set(0, 11);
// linkedList.set(2, 44);
// linkedList.insert(1, 22);
// linkedList.insert(2, 33);
// linkedList.insert(3, 44);
// linkedList.remove(1);
// linkedList.reverse();
console.log(linkedList);
