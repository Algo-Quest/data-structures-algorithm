const ORDER = 3;
let nodeRef = [];

class Node {
    constructor() {
        this.keys = [];
        this.child = [];
    }
}

class Btree {
    constructor() {
        this.root = new Node();
    }

    insert(key) {
        nodeRef = [];
        let current = this.root;

        if (current.keys.length == ORDER) {
            let result = splitNode(current.keys);
            let nl = new Node(),
                nr = new Node();
            let leftChild = current.child.slice(
                0,
                Math.floor(current.keys.length / 2) + 1
            ),
                rightChild = current.child.slice(
                    Math.floor(current.keys.length / 2) + 1
                );

            nl.keys = [...result.left];
            nl.child = [...leftChild];
            nr.keys = [...result.right];
            nr.child = [...rightChild];
            current.keys = [...result.mid];
            current.child = [nl, nr];
            this.helper(current, key, true);
        } else {
            this.helper(current, key, false);
        }
    }

    helper(current, key, bool) {
        if (bool) {
            let i = 0;
            while (current.child.length != 0) {
                for (i = 0; i < current.keys.length; i++) {
                    if (key <= current.keys[i]) break;
                }

                nodeRef.push(current);
                current = current.child[i];
                if (current.keys.length == ORDER) {
                    let index = nodeRef.length - 1;
                    let ret = splitNode(current.keys);
                    nodeRef[index].keys.push(...ret.mid);
                    let nl = new Node(),
                        nr = new Node();
                    let leftChild = current.child.slice(
                        0,
                        Math.floor(current.keys.length / 2) + 1
                    ),
                        rightChild = current.child.slice(
                            Math.floor(current.keys.length / 2) + 1
                        );
                    nl.keys = [...ret.left];
                    nl.child = [...leftChild];
                    nr.keys = [...ret.right];
                    nr.child = [...rightChild];
                    nodeRef[index].child.splice(i, 1);
                    nodeRef[index].child = nodeRef[index].child.concat(nl).concat(nr);
                }
            }
            current.keys.push(key);
        } else {
            this.helper(current, key, !bool);
        }
    }
}

let tree = new Btree();

tree.insert(4);
tree.insert(10);
tree.insert(12);
tree.insert(16);
tree.insert(18);
tree.insert(20);
// tree.insert(21);
// tree.insert(22);
// tree.insert(28);
// tree.insert(29);
// tree.insert(30);
// tree.insert(31);
// tree.insert(32);
// tree.insert(35);
// tree.insert(39);
// tree.insert(49);
// tree.insert(33);
// tree.insert(52);
// tree.insert(59);
// tree.insert(61);
// tree.insert(62);
// tree.insert(62);
// tree.insert(64);
// tree.insert(65);
// tree.insert(66);
// tree.insert(69);
// tree.insert(70);
// tree.insert(72);
// tree.insert(73);
// tree.insert(74);
// tree.insert(75);
// tree.insert(76);
// tree.insert(77);

console.log(tree.root.child);
// console.log(tree.root.child[1].child[1].child[1].child);
// console.log(nodeRef);

function splitNode(array) {
    let half = Math.floor(array.length / 2);
    let mid = array.splice(half, 1),
        left = array.slice(0, half),
        right = array.slice(half);
    return { mid, left, right };
}
