const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [x, y] = input.map(Number);

const solution = (x, y) => {
  if (x > 0) {
    return y > 0 ? "1" : "4";
  } else {
    return y > 0 ? "2" : "3";
  }
};

console.log(solution(x, y));
