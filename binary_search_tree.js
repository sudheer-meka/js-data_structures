class Node {
  constructor(data) {
    this.value = data
    this.left = null
    this.right = null
  }
}

class BinraySearchTree {
  constructor(data) {
    console.log("Coming here")
    this.root = null
  }

  insert(data) {
    var newNode = new Node(data)
    if (this.root === null) {
      this.root = newNode;
      return;
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  inOrder(node) {
    if (node === null) {
      return;
    }
    this.inOrder(node.left)
    console.log(node.value)
    this.inOrder(node.right)
  }
}

var bst = new BinraySearchTree();
bst.insert(8)
bst.insert(10)
bst.insert(2)
bst.insert(20)
bst.insert(4)
bst.insert(6)
console.log(bst)
bst.inOrder(bst.root)
