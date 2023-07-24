let t = [
  [[[1, 2], [[1]], [3, 4, 5, 6], [7, 8]], [[9, 10]], [0]],
  [[11]],
  [[12], [20]],
];

function check(arr) {
  arr.map((elem, index) => {
    if (Array.isArray(elem)) {
      check(elem);
    } else {
      handler(arr, index, t);
    }
  });
}

check(t);

function handler(arr, index, arr2) {
  let first = arr.length;
  arr2.map((elem2, index2) => {
    if (Array.isArray(elem2)) {
      handler(arr, index, elem2);
    } else {
      let second = arr2.length;
      if (first < second) {
        let t = arr;
        arr = arr2;
        arr2 = t;
      }
    }
  });
}

console.log(JSON.stringify(t));
