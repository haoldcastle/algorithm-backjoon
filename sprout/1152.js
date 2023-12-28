const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split(" ");

const solution = () => {
  return input.length === 1 && input[0] === "" ? 0 : input.length;
};

console.log(solution());
