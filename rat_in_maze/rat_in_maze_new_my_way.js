let maze = [
  [1, 0, 0, 1],
  [1, 1, 1, 1],
  [1, 0, 0, 1],
  [1, 0, 0, 1],
];

let visited = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

let maxRow = 4,
  maxCol = 4;

function isSafe(row, col) {
  if (
    row == -1 ||
    col == -1 ||
    row == maxRow ||
    col == maxCol ||
    maze[row][col] == 0 ||
    visited[row][col]
  ) {
    return false;
  }
  return true;
}

function pathExists(row, col) {
  let p1, p2, p3, p4;

  if (
    row == -1 ||
    col == -1 ||
    row == maxRow ||
    col == maxCol ||
    maze[row][col] == 0 ||
    visited[row][col]
  )
    return;

  if (row == maxRow - 1 && col == maxCol - 1) {
    return true;
  }

  visited[row][col] = 1;

  if (isSafe(row + 1, col)) {
    p1 = pathExists(row + 1, col);
    //here if(p1) return p1 means it ensures that the row && col == at last index see return true condition at line no . 46
    //if(p1 == true) which only lie in one condition at line no . 45 and same for all p(n), n = 1,2,3,4;
    if (p1) return p1;
  }
  if (isSafe(row, col - 1)) {
    p2 = pathExists(row, col - 1);
    if (p2) return p2;
  }
  if (isSafe(row, col + 1)) {
    p3 = pathExists(row, col + 1);
    if (p3) return p3;
  }
  if (isSafe(row - 1, col)) {
    p4 = pathExists(row - 1, col);
    if (p4) return p4;
  }
  return false;
}

console.log(pathExists(0, 0));
