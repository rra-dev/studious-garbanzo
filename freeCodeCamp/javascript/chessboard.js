// my solution
let b = "";
let x = 8; // width
let y = 8; // height

for (i = 0; i < y; i++) {
  for (j = 0; j < x; j++) {
    if ((i + j) % 2 == 0) {
      b += " ";
    } else {
      b += "#";
    }
  }
  b += "\n";
}
console.log(b);

// book solution - similar enough
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);