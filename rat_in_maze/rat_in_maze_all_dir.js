//Backtracking concept

let maze = [
  [1, 0, 0, 1],
  [1, 1, 1, 0],
  [1, 1, 1, 1],
  [1, 1, 0, 1],
];

let visited = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

let maxRow = 4,
  maxCol = 4;

let path = [];

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
    console.log(path);
    return;
  }

  visited[row][col] = 1;

  if (isSafe(row + 1, col)) {
    path.push("D");
    pathExists(row + 1, col);
    path.pop();
  }
  if (isSafe(row, col - 1)) {
    path.push("L");
    pathExists(row, col - 1);
    path.pop();
  }
  if (isSafe(row, col + 1)) {
    path.push("R");
    pathExists(row, col + 1);
    path.pop();
  }
  if (isSafe(row - 1, col)) {
    path.push("U");
    pathExists(row - 1, col);
    path.pop();
  }
  visited[row][col] = 0; //turning point that finds all direction (helping)
}

pathExists(0, 0);

/** if traversed/
 * 
 * [1, 0, 0, 0],
   [1, 0, 0, 0],
   [1, 1, 1, 1 <- we move till here (n - 1) formula],
   [1, 1, 0, 1],

   ;;;;;;

   [1, 0, 0, 0],
   [1, 0, 0, 0],
   [1, 1, 1, 0 <- make it zero to find another possible path]
   [1, 1, 0, 1],

   .
   .
   . (<- means making zero in visited array to find another not traversed path to get possible paths)
   .

   [1, 0, 0, 0],
   [1, 0, 0, 0],
   [1, 1<-, 0<- make it zero again if no 4 direction found, 0 <- make it zero to find another possible path]
   [1, 1, 0, 1],
 */
