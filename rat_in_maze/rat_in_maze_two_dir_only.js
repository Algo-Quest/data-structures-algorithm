let maze = [
  [1, 1, 1, 1],
  [1, 1, 0, 1],
  [0, 0, 1, 1],
  [1, 1, 1, 1],
];

function go(row, col) {
  let p1, p2;
  if (row == maze.length - 1 && col == maze.length - 1) {
    return 1;
  }
  if (col < maze.length - 1 && maze[row][col + 1] == 1) {
    p1 = go(row, col + 1);
    if (p1) return p1;
  }
  if (row < maze.length - 1 && maze[row + 1][col] == 1) {
    p2 = go(row + 1, col);
    if (p2) return p2;
  }
  return 0;
}

console.log(go(0, 0));
