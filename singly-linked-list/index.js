class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    if (!this.head) {
      this.head = new Node(val);
      this.tail = this.head;
    } else {
      this.tail.next = new Node(val);
      this.tail = this.tail.next;
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
      let nextNode = this.head.next;
      let currentNode = this.head;
      let prevNode = null;
      while (nextNode) {
        prevNode = currentNode;
        currentNode = nextNode;
        nextNode = nextNode.next;
      }
      this.tail = prevNode;
      this.tail.next = null;
      this.length--;
      return this;
    }
  }
  shift() {
    if (!this.head) {
      return undefined;
    } else {
      this.head = this.head.next;
      this.length--;
    }
    return this;
  }
  unshift(val) {
    if (!this.head) {
      this.head = new Node(val);
      this.tail = this.head;
    } else {
      let tempNode = new Node(val);
      tempNode.next = this.head;
      this.head = tempNode;
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
        console.log(currentNode.val);
        return currentNode.val;
      }
      currentNode = currentNode.next;
      counter++;
    }
  }
  set(index, value) {
    if (!this.head) {
      return undefined;
    }
    let currentNode = this.head;
    let counter = 0;
    while (currentNode) {
      if (counter === index) {
        currentNode.val = value;
        return;
      }
      currentNode = currentNode.next;
      counter++;
    }
  }
  insert(index, value) {
    if (!this.head) {
      return undefined;
    }
    let counter = 0;
    let currentNode = this.head;
    let prevNode = this.head;
    while (currentNode) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      counter++;
      if (counter === index) {
        let tempNode = new Node(value);
        prevNode.next = tempNode;
        tempNode.next = currentNode;
        if (index === this.length) {
          this.tail = tempNode;
        }
        this.length++;
      }
    }
  }
  remove(index) {
    if (!this.head) {
      return undefined;
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    if (index === 0) {
      return this.shift();
    }
    let counter = 0;
    let currentNode = this.head;
    let prevNode = this.head;
    while (currentNode) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      counter++;
      if (counter === index) {
        prevNode.next = currentNode.next;
        this.length--;
      }
    }
  }
}

const linkedList = new SLL();
linkedList.push(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);
linkedList.pop();
linkedList.shift();
linkedList.unshift(5);
linkedList.get(0);
linkedList.set(0, 11);
linkedList.set(3, 44);
linkedList.insert(1, 22);
linkedList.insert(2, 33);
linkedList.insert(3, 44);
linkedList.remove(1);
console.log(linkedList);
