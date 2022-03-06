let str = "abc";

let array = str.split("");

function check(start, len) {
  if (start == len) {
    console.log(array.join(""));
  }
  for (let i = start; i < array.length; i++) {
    [array[i], array[start]] = [array[start], array[i]];
    check(start + 1, len);
    [array[i], array[start]] = [array[start], array[i]];
  }
}

check(0, array.length - 1);
