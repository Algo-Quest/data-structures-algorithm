class Node {
  constructor(value) {
    this.left = null;
    this.value = value;
    this.right = null;
  }
}

class AVL {
  constructor() {
    this.root = null;
  }

  insert(value) {
    this.root = this.insertNode(this.root, value);
  }

  insertNode(node, value) {
    if (node == null) {
      return new Node(value);
    } else if (value < node.value) {
      node.left = this.insertNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.insertNode(node.right, value);
    } else return node;
    // console.log(node);
    // const bf = this.isBalanced(node);
    // // console.log(bf);
    // if (bf > 1) {
    //   //left side to the root.
    //   if (value < node.left.value) {
    //     //above [value < node.left.value] this is not neccessary condition.
    //     node = this.rotateLL(node);
    //   } else return this.rotateLR(node);
    // }

    // if (bf < -1) {
    //   //right side to the root.
    //   if (value > node.right.value) {
    //     node = this.rotateRR(node);
    //   } else return this.rotateRL(node);
    // }
    return node;
  }

  height(root) {
    if (root == null) return -1;
    let max = Math.max(this.height(root.left), this.height(root.right)) + 1;
    return max;
  }
  isBalanced(root) {
    if (root == null) return true;
    let h = this.height(root.left) - this.height(root.right);
    if (h < 1) return h;
    else if (h > 1) return h;
    // return this.isBalanced(root.left) && this.isBalanced(root.right);
  }

  rotateLL(node) {
    let tmp = node.left;
    node.left = tmp.right;
    tmp.right = node;
    return tmp;
  }

  rotateRR(root) {
    let temp = root.right;
    root.right = temp.left;
    temp.left = root;
    return temp;
  }

  rotateLR(node) {
    node.left = this.rotateRR(node.left);
    return this.rotateLL(node);
  }
  rotateRL(node) {
    node.right = this.rotateLL(node.right);
    return this.rotateRR(node);
  }

  findLowestCommonAncestor(root, value1, value2) {
    function findLowestCommonAncestorHelper(root, value1, value2) {
      if (!root) return;
      if (Math.max(value1, value2) < root.value)
        return findLowestCommonAncestorHelper(root.left, value1, value2);
      if (Math.min(value1, value2) > root.value)
        return findLowestCommonAncestorHelper(root.right, value1, value2);
      return root.value;
    }
    return findLowestCommonAncestorHelper(root, value1, value2);
  }

  //iterative solution;
  LCA(root, value1, value2) {
    let current = root;
    let max = Math.max(value1, value2);
    let min = Math.min(value1, value2);
    while (1) {
      if (current == null) return;
      if (max < current.value) {
        current = current.left;
      }
      if (min > current.value) {
        current = current.right;
      }
      return current.value;
    }
  }

  pathTrace(root, value) {
    let current = root,
      s1 = [];
    while (true) {
      if (current == null) return;
      if (value < current.value) {
        s1.push(current.value);
        current = current.left;
      } else if (value > current.value) {
        s1.push(current.value);
        current = current.right;
      } else {
        //value found;
        s1.push(current.value);
        return s1;
      }
    }
  }

  verticalTraverse(root) {
    let list = {};
    function helper(root, hd) {
      if (root == null) return;
      console.log(hd);

      helper(root.left, hd - 1);
      helper(root.right, hd + 1);

      return root;
    }
    helper(root, 0);
  }
}

let avl = new AVL();

avl.insert(6);
avl.insert(3);
avl.insert(7);
avl.insert(2);
avl.insert(5);
avl.insert(9);
avl.insert(4);
avl.insert(8);
avl.insert(11);
// avl.insert(21);
// avl.insert(7);

// console.log(avl.root);

// console.log(avl.findLowestCommonAncestor(avl.root, 4, 22));
// console.log(avl.LCA(avl.root, 10, 14));
// console.log(avl.pathTrace(avl.root, 14));
avl.verticalTraverse(avl.root);

// console.log(avl.isBalanced(avl.root));

/*
  example :
            20
          /   \
        10     30               //range of balanced form -> {-1 , 0 , 1}
       /      /  \
      8     25   40
     /     /    /   \
    7     21   34    50
                       \
                        60
  */

// var node = {
//   value: 10,
//   left: {
//     value: 8,
//     left: {
//       value: 7,
//     },
//     left: {
//       value: 4,
//     },
//   },
//   right: {
//     value: 5,
//   },
// };

// function bfs(root, value) {
//   let current = root;
//   while (1) {
//     if (current == null) return;
//     if (value < current.value) {
//       current = current.left;
//     }
//     return current.value;
//   }
// }

// console.log(bfs(node, 4));
