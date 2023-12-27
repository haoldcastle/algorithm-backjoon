const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split(" ");

const solution = (input) => {
  const isCase1 = input % 4 === 0 && input % 100 !== 0;
  const isCase2 = input % 400 === 0;
  return isCase1 || isCase2 ? 1 : 0;
};

console.log(solution(input));
