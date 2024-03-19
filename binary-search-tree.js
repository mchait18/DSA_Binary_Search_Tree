class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (!this.root) {
      this.root = new Node(val)
      return this
    }
    let current = this.root
    while (current) {
      if (current.val > val) {
        if (current.left)
          current = current.left
        else {
          current.left = new Node(val)
          return this
        }
      }
      else {
        if (current.right)
          current = current.right
        else {
          current.right = new Node(val)
          return this
        }
      }
    }

  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    if (!this.root) {
      this.root = new Node(val)
      return this
    }
    function insertVal(val, tree, current) {
      if (current.val > val) {
        if (current.left)
          insertVal(val, tree, current.left)
        else {
          current.left = new Node(val)
          return tree
        }
      }
      else {
        if (current.right)
          insertVal(val, tree, current.right)
        else {
          current.right = new Node(val)
          return tree
        }
      }
    }
    return insertVal(val, this, this.root)
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.val === val) return currentNode;
      if (currentNode.val > val) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    function findVal(currentNode, val) {
      if (currentNode.val === val) {
        return currentNode
      }
      if (currentNode.val > val)
        return currentNode.left ?
          findVal(currentNode.left, val) : undefined
      else
        return currentNode.right ?
          findVal(currentNode.right, val) : undefined
    }
    return findVal(this.root, val)
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let visitedNodes = []

    function traverse(node) {
      visitedNodes.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      return visitedNodes
    }
    return traverse(this.root)
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let visitedNodes = []
    function traverse(node) {
      if (node.left) traverse(node.left);
      visitedNodes.push(node.val);
      if (node.right) traverse(node.right);
      return visitedNodes
    }
    return traverse(this.root)
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let visitedNodes = []
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visitedNodes.push(node.val);
      return visitedNodes
    }
    return traverse(this.root)
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let queue = [this.root];
    let visitedNodes = []
    while (queue.length) {
      let currentNode = queue.shift()
      visitedNodes.push(currentNode.val)
      if (currentNode.left) queue.push(currentNode.left)
      if (currentNode.right) queue.push(currentNode.right);
    }
    return visitedNodes
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }
  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {

  }
}

module.exports = BinarySearchTree;
