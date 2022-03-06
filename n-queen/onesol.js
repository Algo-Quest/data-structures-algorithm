let chess = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

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

function find(chess, row, col) {
  if (col >= 4) return true;
  for (let i = 0; i < 4; i++) {
    if (isSafe(chess, i, col)) {
      chess[i][col] = 1;
      if (find(chess, row, col + 1) == true) {
        return true;
      }
      chess[i][col] = 0;
    }
  }
  return false;
}

let r = find(chess, 0, 0);

console.log(chess);
