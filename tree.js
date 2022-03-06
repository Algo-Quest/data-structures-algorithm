// class Node {
//   constructor(value) {
//     this.left = null;
//     this.value = {
//       index: null,
//       value: value,
//     };
//     this.right = null;
//   }
// }

// class Tree {
//   constructor() {
//     this.root = null;
//     this.index = 0;
//   }

//   insertHelper(current, value, node, index) {
//     if (current) {
//       if (value < current.value.value) {
//         if (current.left) {
//           this.insertHelper(current.left, value, node, index);
//         } else {
//           node.value.index = index;
//           current.left = node;
//         }
//       } else if (value > current.value.value) {
//         if (current.right) {
//           this.insertHelper(current.right, value, node, index);
//         } else {
//           node.value.index = index;
//           current.right = node;
//         }
//       } else {
//         //FOR BST ONLY
//         if (current.value === value) return undefined;
//       }
//     }
//     return current;
//   }
//   insert(value) {
//     let node = new Node(value);
//     if (!this.root) {
//       node.value.index = this.index++;
//       this.root = node;
//       return;
//     }
//     let current = this.root;
//     this.insertHelper(current, value, node, this.index++);
//     return this.root;
//   }

//   BFS(current = this.root) {
//     console.log(current.value);
//     if (current.left) this.BFS(current.left);
//     if (current.right) this.BFS(current.right);

//     return current;
//   }
// }

// // let tree = new Tree();

// module.exports = { tree: new Tree() };

// // console.log(tree.root);

class Node {
  constructor(value) {
    this.left = [];
    this.dir = value;
    this.right = {};
  }
}

class Tree {
  constructor() {
    this.dirTracer = null;
    this.root = null;
    this.count = 0;
  }

  insertHelper(current, obj, node, path) {
    if (current) {
      if (obj.type == "file") {
        this.dirTracer.left.push(obj.name);
      } else {
        if (obj.type == "folder") {
          if (!path) {
            current.right[obj.name] = node;
            this.dirTracer = current.right[obj.name];
            return;
          }
          let pathArray = path.split("/");
          if (!pathArray.includes("..")) {
            let mk = pathArray.filter((x) => x != "" && x != ".");
            for (let i = 0; i < mk.length; i++) {
              current = current.right[mk[i]];
            }
            //Restricting same folder name!
            if (!Object.keys(current.right).includes(obj.name)) {
              current.right[obj.name] = node;
              this.dirTracer = current.right[obj.name];
            } else return console.log("folder already exists!");

            // current.right[mk].right = node;
            // current = current.right;
            return;
          }
        }
      }
    }
    return (this.count = 0);
  }

  insert(obj, path) {
    let node = new Node(obj);
    if (!this.root && obj.type == "folder") {
      this.root = node;
      this.dirTracer = this.root;
      return;
    } else {
      let current = this.root;
      this.insertHelper(current, obj, node, path);
    }
  }
}

module.exports = { tree: new Tree() };

let tree = new Tree();
// tree.insert({
//   type: "file",
//   name: "some.txt",
// });

tree.insert({
  type: "folder",
  name: "fruit",
});

tree.insert({
  type: "folder",
  name: "sweet fruit",
});

tree.insert({
  type: "folder",
  name: "sour fruit",
});

tree.insert(
  {
    type: "folder",
    name: "m",
  },
  "./sour fruit"
);

// // tree.insert(
// //   {
// //     type: "folder",
// //     name: "citrus",
// //   },
// //   "./sour fruit"
// // );

// tree.insert({
//   type: "file",
//   name: "any.txt",
// });

// tree.insert({
//   type: "file",
//   name: "xyz.txt",
// });
tree.insert({
  type: "file",
  name: "some.txt",
});

tree.insert(
  {
    type: "folder",
    name: "citrus",
  },
  "./sour fruit"
);

console.log(tree.root.right["sour fruit"].right);
// console.log(tree.dirTracer);

/**
         *       dir
         *      /    \
[apple.txt]<- file   folder -> {
                                 file,
                                folder
                                }
         */
