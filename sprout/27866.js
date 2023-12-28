const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const [S, i] = input;

const solution = () => {
  return S.charAt(i - 1);
};

console.log(solution());
