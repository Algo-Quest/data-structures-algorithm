let obj = {
  fileName: "A",
  filePath: "B",
  protoText: "C",
  ast: {
    google: {
      data: "G",
    },
    some: {
      candi: {
        entitlement: {
          data: "E",
        },
        PageInfo: {
          value: "Info",
        },
        UserAuth: {
          data: "U",
        },
        Platform: {
          value: "P",
        },
      },
    },
  },
};

let result = [];

function check(obj, searchingKey) {
  let keys = Object.keys(obj);
  keys.map((elem) => {
    if (typeof obj[elem] == "object") {
      pushIntoArr(obj, elem, searchingKey);
      check(obj[elem], searchingKey);
    } else {
      pushIntoArr(obj, elem, searchingKey);
    }
  });
}

check(obj, "value");

function pushIntoArr(obj, elem, searchingKey) {
  if (searchingKey == elem) {
    result.push({
      [elem]: obj[elem],
    });
  }
}

console.log(JSON.stringify(result));
