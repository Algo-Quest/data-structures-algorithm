let graph = {
    A: [
        { v: "B", w: 4 },
        { v: "C", w: 2 },
    ],
    B: [
        { v: "A", w: 4 },
        { v: "E", w: 3 },
    ],
    C: [
        { v: "A", w: 2 },
        { v: "D", w: 2 },
        { v: "F", w: 4 },
    ],
    D: [
        { v: "C", w: 2 },
        { v: "F", w: 1 },
        { v: "E", w: 3 },
    ],
    E: [
        { v: "B", w: 3 },
        { v: "D", w: 3 },
        { v: "F", w: 1 },
    ],
    F: [
        { v: "C", w: 4 },
        { v: "D", w: 1 },
        { v: "E", w: 1 },
    ],
};

// path : A -> E

// A to
let pq = [
    { v: "A", w: 0 },
    { v: "B", w: Infinity },
    { v: "C", w: Infinity },
    { v: "D", w: Infinity },
    { v: "E", w: Infinity },
    { v: "F", w: Infinity },
];

let dist = {
    A: 0,
    B: Infinity,
    C: Infinity,
    D: Infinity,
    E: Infinity,
    F: Infinity,
};
//
let previous = {
    A: null,
    B: null,
    C: null,
    D: null,
    E: null,
    F: null,
};
//
let path = [];

function dikjstra(src, dest) {
    while (pq.length) {
        let smallest = pq.shift();

        if (smallest.v == dest) {
            while (previous[smallest.v]) {
                path.push(smallest.v);
                smallest.v = previous[smallest.v];
            }

            console.log(path.reverse());
            break;
        }

        let neighborArr = graph[smallest.v];

        neighborArr.forEach((elem, index) => {
            let sum = dist[smallest.v] + elem.w;

            if (sum < dist[elem.v]) {
                dist[elem.v] = sum;
                previous[elem.v] = smallest.v;
                pq.push(elem);
                pq.sort((a, b) => a.w - b.w);
            }
        });
    }
}

dikjstra("A", "E");