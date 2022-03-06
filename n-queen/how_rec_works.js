let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isSafe(index) {
  if (arr[index] == 7) {
    return true;
  }

  return false;
}

function ok(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(i);
    if (isSafe(i) == true) {
      arr[i] = 78;
      ok(arr);
      // backtrack
      // arr[i] = 7;
    }
  }
  return arr;
}

console.log(ok(arr));
