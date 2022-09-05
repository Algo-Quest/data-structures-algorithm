class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ v: v2, w: weight });
    this.adjacencyList[v2].push({ v: v1, w: weight });
  }

  dfs(startNode) {
    // console.log(startNode, endNode);
    let visited = {},
      stack = [startNode],
      path = [];
    visited[startNode] = true;
    while (stack.length != 0) {
      let shift = stack.pop();
      path.push(shift);
      this.adjacencyList[shift].forEach((a) => {
        if (!visited[a.v]) {
          visited[a.v] = true;
          stack.push(a.v);
        }
      });
    }

    // console.log(path);
  }

  dijstra(s, e) {
    //
  }
}

let g = new Graph();
let vertex = ["A", "B", "C", "D", "E"].map((x) => g.addVertex(x));

g.addEdge("A", "B", 2);
g.addEdge("A", "C", 4);
g.addEdge("B", "C", 3);
g.addEdge("C", "D", 0);
g.addEdge("A", "E", 1);
g.addEdge("E", "D", 3);
g.addEdge("A", "D", 8);

//
g.dfs("A");
//
g.dijstra("A", "D");
//
console.log(g.adjacencyList);
