let t = [
  [
    [0, 3, 4],
    [1, 2, 3, 4, [-1]],
  ],
  [[0, 0, 1]],
  [0, 1],
];

function one(arr) {
  arr.map((elem, index) => {
    if (Array.isArray(elem)) {
      one(elem);
    } else {
      handler(index, arr, t);
    }
  });
}

one(t);

function handler(index, arr, t) {
  t.map((elem2, index2) => {
    if (Array.isArray(elem2)) {
      handler(index, arr, elem2);
    } else {
      if (arr[index] < t[index2]) {
        [arr[index], t[index2]] = [t[index2], arr[index]];
      }
    }
  });
}

console.log(t);

