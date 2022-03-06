let array = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42,
];

function bs(arr, key) {
  let start = 0;
  let end = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    let mid = Math.floor((start + end) / 2);
    if (key < arr[mid]) {
      end = mid - 1;
      console.log("left");
    } else if (key > arr[mid]) {
      start = mid + 1;
      console.log("right");
    } else {
      console.log("found key : " + arr[mid]);
      return;
    }
  }
  console.log("not found");
}

bs(array, 42);
