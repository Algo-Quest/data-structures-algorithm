let t = [6, [1, 2], [[0]], [[1, 2]], 999];

function one(arr, index) {
  if (index >= arr.length) return;

  if (Array.isArray(arr[index])) {
    one(arr[index], 0);
  } else {
    two(index, arr, t, 0);
  }

  one(arr, index + 1);
}

one(t, 0);

function two(index, arr, arr2, index2) {
  if (index2 >= arr2.length) return;

  if (Array.isArray(arr2[index2])) {
    two(index, arr, arr2[index2], 0);
  } else {
    if (arr[index] > arr2[index2]) {
      [arr[index], arr2[index2]] = [arr2[index2], arr[index]];
    }
  }

  two(index, arr, arr2, index2 + 1);
}

console.log(t);
