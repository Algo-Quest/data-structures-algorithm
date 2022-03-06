let SIZE = 4;
function calculate_valid(valid, pos) {
  let val = 1,
    q,
    c;
  for (q = 1; q < SIZE; q++) {
    // This is just an optimization
    for (c = 0; c < q; c++) {
      val =
        val &&
        pos[c] != pos[q] &&
        pos[c] + (q - c) != pos[q] &&
        pos[c] != pos[q] + (q - c);
    }

    valid[q] = val;
  }
} // end of calculate_valid

function print_all(p) {
  for (let q = 0; q < SIZE; q++) {
    console.log(p[q]);
  }
  console.log("\n");
}

let pos,
  valid,
  q,
  solutions = 0,
  iterations = 0;

(pos = [0, 0, 0, 0]), (valid = [1, 1, 1, 1]);
for (q = 0; q < SIZE; ++q) {
  pos[q] = 0;
  valid[q] = 1;
}

while (1) {
  iterations++;

  calculate_valid(valid, pos);
  if (valid[SIZE - 1] == 1) {
    solutions++;
    print_all(pos);
  }

  for (q = SIZE - 1; q >= 0; q--) {
    let val = q == 0 || valid[q - 1] == 1;
    if (val && pos[q] < SIZE - 1) {
      pos[q]++;
      break;
    }
    pos[q] = 0;
  }

  if (q < 0) {
    break;
  }
}
console.log("%d iterations.\n", iterations);
console.log("%d solutions.\n", solutions);
