class Node {
  constructor(val) {
    this.prev = null;
    this.val = val;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }
    this.tail = newNode;
    this.length++;
  }

  pop() {
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      if (this.tail) {
        this.tail.next = null;
      } else {
        this.head = null;
      }
      this.length--;
    }
  }
  shift() {
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.length--;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.length) {
      this.push(val);
    } else {
      let tempNode = this.head;
      tempNode.pre = newNode;
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    if (index <= this.length / 2) {
      let current = this.head;
      let counter = 0;
      while (current) {
        if (counter === index) {
          return current;
        }
        current = current.next;
        counter++;
      }
    } else {
      let current = this.tail;
      let counter = this.length - 1;
      while (current) {
        if (counter === index) {
          return current;
        }
        current = current.prev;
        counter--;
      }
    }
  }
  set(index, value) {
    if (index < 0 || index >= this.length) return false;
    const currentNode = this.get(index);
    currentNode.val = value;
  }
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.unshift(value);
    if (index === this.length - 1) return this.push(value);
    const newNode = new Node(value);
    const prevNode = this.get(index - 1);
    const nextNode = prevNode.next;

    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;
    this.length++;
    return this;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const currentNode = this.get(index);
    const prevNode = currentNode.prev;
    const nextNode = currentNode.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    this.length--;
    return this;
  }
}

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(1);
doublyLinkedList.push(2);
doublyLinkedList.push(3);
doublyLinkedList.push(4);

// doublyLinkedList.pop();
// doublyLinkedList.shift();
// doublyLinkedList.get(2)
console.log(doublyLinkedList);
