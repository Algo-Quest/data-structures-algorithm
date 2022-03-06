let chess = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

let visited = [];

function isSafe(chess, row, col) {
  //horizontal
  for (let i = 0; i < chess[row].length; i++) {
    if (chess[row][i] == 1) {
      return false;
    }
  }
  //Vertical
  for (let i = 0; i < chess[row].length; i++) {
    if (chess[i][col] == 1) {
      return false;
    }
  }

  //diagonal down
  for (
    let i = row, j = col;
    i < chess.length && j < chess[row].length;
    i++, j++
  ) {
    if (chess[i][j] == 1) {
      return false;
    }
  }
  for (let i = row, j = col; i < 4 && j >= 0; i++, j--) {
    if (chess[i][j] == 1) {
      return false;
    }
  }
  //diagonal up

  for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
    if (chess[i][j] == 1) {
      return false;
    }
  }
  for (let i = row, j = col; i >= 0 && j < 4; i--, j++) {
    if (chess[i][j] == 1) {
      return false;
    }
  }

  return true;
}

function find(chess, col) {
  //col >= 4 is no. of queen to be placed.
  if (col >= 4) {
    let v = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (chess[i][j] == 1) {
          v = v.concat([j]);
          //v.push(j)
        }
      }
    }
    visited.push(v);
    return true;
  }
  for (let i = 0; i < 4; i++) {
    if (isSafe(chess, i, col) == true) {
      chess[i][col] = 1;
      //this recursive means queens no. increases | c+1
      find(chess, col + 1);
      //while backtracking in this case col also decreases.
      //it also forces when backtracked to c= last increased value
      //c = 0, when fully back tracked then it goes to c + 1 =>  0 + 1 => c = 1;
      //likewise it increases if c = 1, then c = 2, c = 3;
      //if c = 2, then increses upto c = 3; (c = 3 because max column);
      chess[i][col] = 0;
    }
  }
  return false;
}

let r = find(chess, 0);

console.log(chess);
console.log(visited);
