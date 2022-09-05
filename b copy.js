class Graph {
  constructor() {
    this.vertex = {};
  }

  addVertex(vertex) {
    this.vertex[vertex] = [];
  }

  addEdge(v1, v2) {
    if (this.vertex[v1]) this.vertex[v1].push(v2);
    if (this.vertex[v2]) this.vertex[v2].push(v1);
  }

  dfs() {
    let visited = new Array(Object.keys(this.vertex).length).fill(false);
    // can be done in this way still works
    //  let visited = {}
    if (this.cycle(0, visited, -1)) return true;
    return false;
  }

  cycle(u, visited, parent) {
    visited[u] = true;
    for (let i of this.vertex[u]) {
      if (visited[i] && i != parent) return true;
      if (!visited[i] && this.cycle(i, visited, u)) return true;
    }
    return false;
  }
}

let g = new Graph();

g.addVertex(0);
g.addVertex(1);
g.addVertex(2);
g.addVertex(3);
g.addVertex(4);

//

g.addEdge(0, 1);
g.addEdge(1, 2);
g.addEdge(2, 3);
g.addEdge(3, 4);
g.addEdge(4, 1);
// g.addEdge(3, 1);

//

// console.log(g.vertex);

console.log(g.dfs())
// g.dfs()

