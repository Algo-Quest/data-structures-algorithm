let arr = [[[[1, 2, [88, [101]]]]], [3, 4, [[9]]]];

arr.map((elem, index) => {
  let stack = [elem];

  while (stack.length) {
    let p = stack.shift();
    if (Array.isArray(p)) {
      stack.push(...p);
    } else {
      console.log(p);
    }
  }
});
