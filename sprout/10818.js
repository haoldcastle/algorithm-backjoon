const fs = require("fs");
const [n, input] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const solution = () => {
  const numArr = input.split(" ").map(Number);
  return `${Math.min(...numArr)} ${Math.max(...numArr)}`;
};

console.log(solution());
