let obj = {
  key: [2],
  child: [
    {
      key: [1],
      child: [
        { key: [10], child: [] },
        {
          key: [30],
          child: [
            { key: [18], child: [] },
            { key: [3], child: [] },
          ],
        },
      ],
    },
    {
      key: [33],
      child: [
        { key: [11], child: [] },
        { key: [39], child: [] },
      ],
    },
  ],
};

let current = obj;
let t = true;
while (current.child.length != 0) {
  if (t) {
    console.log(current.key);
    t = false;
  }
  let pop = current.child.pop();
  console.log(pop.key);
  if (pop.child.length > 0) {
    current.child.push(...pop.child);
  }
}
