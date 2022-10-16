class Node {
  constructor() {
    this.data = [];
    this.child = [];
  }
}

class Btree {
  constructor() {
    this.bool = true;
    this.root = null;
  }

  split(current) {
    let half = Math.floor(current.data.length / 2);
    let mid = [current.data[half]];
    let left = current.data.slice(0, half);
    let right = current.data.slice(half + 1);

    return {
      left,
      mid,
      right,
    };
    // console.log(left, mid, right);
  }

  // this logic runs only first time when bool is true(to make first time root has two child to make btree boiler point)
  divideByChild(current, splitNode) {
    current.data = splitNode.mid;
    let leftNode = new Node();
    let rightNode = new Node();

    leftNode.data.push(...splitNode.left);
    rightNode.data.push(...splitNode.right);
    current.child.push(leftNode, rightNode);
  }

  divideAddinChild(current, index, splitNode) {
    // console.log(index, split);
    let curr = current.child[index];
    current.data.push(...splitNode.mid);

    let leftNode = new Node();
    let rightNode = new Node();

    leftNode.data.push(...splitNode.left);
    rightNode.data.push(...splitNode.right);
    curr.child.push(leftNode, rightNode);

    current.child.splice(index, 1);
    current.child.unshift(...curr.child);
  }

  insert(value) {
    if (!this.root) {
      let newNode = new Node();
      newNode.data.push(value);
      this.root = newNode;
    } else {
      let newNode = new Node();
      let current = this.root;

      let lastChild = this.insertHelper(current, newNode, value);
      let index = lastChild.i;
      let prevTolastNode = lastChild.current;

      let lastNodeChild = prevTolastNode.child[index] || prevTolastNode;

      lastNodeChild.data.push(value);
      //   lastChild.data.push(value);

      // this if condition works only 1 time then it doesn't work it makes child for first time
      // by making one parent and makes two child
      // as we know on dividing anything two portion is formed; ->ex : (left)------|-------(right)
      if (current.data.length >= 3 && this.bool) {
        // console.log("time to break");
        let splitNode = this.split(current);
        let result = this.divideByChild(current, splitNode);
        // console.log(result);
        this.bool = false;
      }
      // this else condition works whenever the only root data.length >= 3
      else if (current.data.length >= 3) {
        let splitNode = this.split(current);
        this.secondTimeMakeTwoChild(current, splitNode);
      }
    }
  }

  // it is the logic to make one parent and two child concept as it works in else (above) code.
  secondTimeMakeTwoChild(current, splitNode) {
    current.data = splitNode.mid;

    let half = current.child.length;
    let mid = Math.floor(half / 2);
    let leftSideAllChild = current.child.slice(0, mid);
    let rightSideAllChild = current.child.slice(mid);

    let leftNode = new Node();
    let rightNode = new Node();

    leftNode.data.push(...splitNode.left);
    rightNode.data.push(...splitNode.right);

    leftNode.child.push(...leftSideAllChild);
    rightNode.child.push(...rightSideAllChild);

    current.child = [];
    current.child.push(leftNode, rightNode);

    return current;
  }

  insertHelper(current, newNode, value) {
    // we look on step ahead to the current iteration node's child & return the one step behind connected node to current iteration of node
    // because we have to pull data from child to parent
    let i;
    if (current.child.length == 0)
      return {
        i: 0,
        current,
      };

    for (i = 0; i < current.data.length; i++) {
      if (value > current.data[i]) {
        break;
      }
    }

    // if (current.child[i].child.length == 0) {
    //   return {
    //     i,
    //     current,
    //   };
    // }

    // *****************************************

    // btree has two concept of breaking its child

    // 1.check curent.data.length.    (data -> parent of child)
    // -> in this one parent and two child will be formed always.
    // 2. check current.child.length
    // -> in this child mid element will be moved upward in child's parent array and left & right child is inserted into
    // childs own array
    // **************************************

    let l = this.insertHelper(current.child[i], newNode, value);

    // these below logocs can be used above but works accurate in below (back tracking way)

    // 1.
    if (current.data.length >= 3) {
      let splitNode = this.split(current);
      this.secondTimeMakeTwoChild(current, splitNode);
    }

    // 2.
    if (current.child[i].data.length >= 3) {
      let splitNode = this.split(current.child[i]);
      this.divideAddinChild(current, i, splitNode);
    }

    return l;
  }
}

let b = new Btree();

b.insert(5);
b.insert(7);
b.insert(8);
b.insert(9);
b.insert(10);
b.insert(11);
b.insert(12);
b.insert(13);
b.insert(14);

console.log(JSON.stringify(b.root));
