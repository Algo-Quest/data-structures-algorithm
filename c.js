let graph = {
    A: [
        { v: "B", w: 18 },
        { v: "G", w: 16 },
        { v: "E", w: 8 },
        { v: "D", w: 0 },
    ],
    B: [
        { v: "A", w: 18 },
        { v: "C", w: 7 },
    ],
    C: [
        { v: "B", w: 7 },
        { v: "D", w: 12 },
    ],
    D: [
        { v: "C", w: 12 },
        { v: "A", w: 0 },
        { v: "E", w: 0 },
    ],
    E: [
        { v: "F", w: 0 },
        { v: "A", w: 8 },
        { v: "D", w: 0 },
    ],
    F: [
        { v: "G", w: 0 },
        { v: "E", w: 0 },
    ],
    G: [
        { v: "F", w: 0 },
        { v: "A", w: 16 },
    ],
};

// path : A -> G

// priority queue
// starting node to distance to all nodes
// first A = 0 because start from A
// this should be build in such a way that the starting node to itself = 0
// then all other nodes to starting node = Infinity
// basically sort it (dynamic construction)
let pq = [
    { v: "A", w: 0 },
    { v: "B", w: Infinity },
    { v: "C", w: Infinity },
    { v: "D", w: Infinity },
    { v: "E", w: Infinity },
    { v: "F", w: Infinity },
];

//
let visited = [];
let stack = [];
//

function dikjstra(src, dest) {
    visited.push(src);
    while (pq.length) {
        let smallest = pq.shift();

        if (smallest.v == dest) {
            console.log(visited);
            break;
        }

        let neighborArr = graph[smallest.v];
        neighborArr.forEach((elem, index) => {
            stack.push(elem);
        });

        // choose shortest path b/w all child nodes
        stack.sort((a, b) => a.w - b.w);

        let newShortPath = stack.shift();

        if (!visited.find((el) => el == newShortPath.v)) {
            pq.push(newShortPath);
            pq.sort((a, b) => a.w - b.w);
            visited.push(newShortPath.v);

            // when select the shortest node to traverse then make stack empty
            stack = [];
        }
    }
}

dikjstra("A", "G");