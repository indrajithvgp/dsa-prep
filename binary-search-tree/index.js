class Node {
  constructor(val) {
    this.left = null;
    this.val = val;
    this.right = null;
  }
}

class BST {
  constructor() {
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
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }
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

const bst = new BST();
bst.insert(11);
bst.insert(13);
bst.insert(12);
bst.insert(14);
console.log(bst);
