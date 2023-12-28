const fs = require("fs");
const [n, input] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const solution = () => {
  const numArr = input.split("").map(Number);
  const res = numArr.reduce((acc, curr) => acc + curr);
  return res;
};

console.log(solution());
