const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split(" ");
const [str] = input;

const solution = () => {
  return str.length;
};

console.log(solution());
