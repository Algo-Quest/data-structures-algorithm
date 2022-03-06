// const fs = require("fs");
// const path = require("path");

// let cwd = __dirname + "/dir";
// let array = [];

// function folder(cwd) {
//   let rd = fs.readdirSync(cwd);
//   rd.forEach((x) => {
//     let temp = path.join(cwd, x);
//     let ft = fs.statSync(temp);
//     if (ft.isDirectory()) {
//       array.push(temp);
//       folder(temp);
//     } else {
//       // console.log(temp);
//     }
//   });
// }

// folder(cwd);

let array = [
  "dir\\node_modules\\.bin",
  "dir\\node_modules\\one",
  "dir\\node_modules\\.bin\\jerryOne",
  "dir\\node_modules\\accepts",
  "dir\\node_modules\\array-flatten",
  "dir\\node_modules\\body-parser",
  "dir\\node_modules\\body-parser\\lib",
  "dir\\node_modules\\body-parser\\lib\\types",
  "dir\\node_modules\\bytes",
  "dir\\node_modules\\cookie",
  "dir\\tom",
  "dir\\tom\\one",
  "dir\\tom\\one\\two",
  "dir\\tom\\one\\two\\three",
  "dir\\tom\\one\\two\\three\\four",
  "dir\\tom\\one\\two\\three\\jj",
];

function arrPath(array1, array2) {
  let index = 0;

  for (let i = 0; i <= index; i++) {
    if (array1[i] == array2[i]) {
      if (index < array1.length - 1) index++;
    } else {
      index--;
      break;
    }
  }
  return {
    index,
    pathTillMatched: array2[index],
    pathNotMatched: array2.slice(index + 1),
  };
}

class Node {
  constructor(value) {
    this.left = [];
    this.dir = value;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
    this.cwd;
  }

  pathResolver(pathArray) {
    for (let element of pathArray) {
      this.insert(element.split("\\"));
      //
    }
  }
  insert(pathArray) {
    //Only for first iteration to create any directory;
    if (!this.cwd) {
      this.cwd = pathArray;

      // if (!this.root) {
      for (let x of this.cwd) {
        let node = new Node(x);
        if (!this.root) {
          this.root = node;
        } else {
          let current = this.root;
          while (current.right) {
            current = current.right;
          }
          current.right = node;
        }
      }
      // }
    }
    //main core concept;
    else {
      console.log(arrPath(this.cwd, pathArray));
    }
  }
}

let tree = new Tree();
tree.pathResolver(array);

console.log(tree.root);
// console.log(tree.cwd);
