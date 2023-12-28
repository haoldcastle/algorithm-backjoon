const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const numbers = input.map(Number);

const ckMap = {};
const solution = () => {
  numbers.forEach((e) => {
    const n = e % 42;
    ckMap[n] = true;
  });

  return Object.keys(ckMap).length;
};

console.log(solution());
