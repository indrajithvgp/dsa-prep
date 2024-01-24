class Node {
  constructor(val) {
    this.prev = null;
    this.val = val;
    this.next = null;
  }
}

class BST {
  constructor(val) {
    this.root = null;
  }
  find(val) {
    if (!this.root) return false;
    let tempNode = this.root;
    while (true) {
      if (tempNode.val === val) {
        return tempNode;
      }
      if (val < tempNode.val) {
        tempNode = tempNode.left;
      } else {
        tempNode = tempNode.right;
      }
    }
  }
  insert(val) {
    let newNode = new Node(val);
    if (!this.root) return new Node(val);
    let tempNode = this.root;
    while (true) {
      if (val === tempNode.val) return false;
      if (val < tempNode.val) {
        if (!tempNode.left) {
          tempNode.left = newNode;
          return this;
        }
        tempNode = tempNode.left;
      } else {
        if (!tempNode.right) {
          tempNode.right = newNode;
          return this;
        }
        tempNode = tempNode.right;
      }
    }
  }
}

const bst = new BST(10);
bst.push(11);
console.log(bst);
