function splitForkey(node) {
  let half = Math.floor(node.keys.length / 2),
    left = node.keys.slice(0, half),
    mid = [node.keys[half]],
    right = node.keys.slice(half + 1);

  return {
    left,
    mid,
    right,
  };
}

function splitForChild({ child } = node) {
  let half = Math.floor(child.length / 2),
    left = child.slice(0, half),
    right = child.slice(half);

  return { left, right };
}

class Node {
  constructor(value) {
    this.keys = [];
    this.child = [];
    this.push(value);
  }

  push(value) {
    if (value) this.keys.push(value);
  }
}

class Btree {
  bool = true;
  constructor() {
    this.root = null;
  }

  insert(value) {
    let current = this.root;

    if (!this.root) {
      let newNode = new Node(value);
      return (this.root = newNode);
    }

    let result = this.insertHelper(current, value);

    result.keys.push(value);

    if (current.keys.length >= 3 && this.bool == true) {
      let leftNode = new Node(),
        rightNode = new Node(),
        result = splitForkey(current);
      leftNode.keys = leftNode.keys.concat(result.left);
      rightNode.keys = rightNode.keys.concat(result.right);
      current.keys = result.mid;
      current.child.push(leftNode, rightNode);
      this.bool = false;
    }

    // console.log(result);
  }

  insertHelper(node, value) {
    let i;

    for (i = 0; i < node.keys.length; i++) {
      if (value < node.keys[i]) {
        break;
      }
    }

    if (node.child.length == 0) return node;

    let result = this.insertHelper(node.child[i], value);

    if (node.child[i].keys.length >= 3) {
      let t = splitForkey(node.child[i]);
      //   node.child.splice(i, 1);
      node.keys.push(...t.mid);
      let leftNode = new Node(),
        rightNode = new Node();
      leftNode.keys = leftNode.keys.concat(t.left);
      rightNode.keys = rightNode.keys.concat(t.right);
      node.child.push(leftNode, rightNode);
      node.child.splice(i, 1);
      node.child[i].keys.push(value);
    }

    //

    if (node.child.length > 3) {
      let { left, right } = splitForChild(node);
      let r = splitForkey(node);
      node.keys = r.mid;

      let leftNode = new Node(),
        rightNode = new Node();

      leftNode.keys = r.left;
      leftNode.child.push(...left);
      rightNode.keys = r.right;
      rightNode.child.push(...right);

      node.child = [leftNode, rightNode];
    }

    return result;
  }
}

let btree = new Btree();

btree.insert(30);
btree.insert(31);
btree.insert(32);
btree.insert(33);
btree.insert(34);
btree.insert(35);
btree.insert(36);
btree.insert(37);
btree.insert(38);
btree.insert(39);
btree.insert(40);
btree.insert(41);
btree.insert(42);
btree.insert(43);
btree.insert(44);
btree.insert(45);
// btree.insert(46);

let fs = require("fs");

console.log(btree.root.child[0].child);

fs.writeFile("./btree.json", JSON.stringify(btree), (err) => {
  if (err) throw err;
  console.log("file write done");
});
