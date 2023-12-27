const fs = require("fs");
const [n, arr, x] = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (x, arr) => {
  const res = arr.split(" ").reduce((acc, cur) => {
    return (acc += +cur === +x ? 1 : 0);
  }, 0);

  return res;
};

console.log(solution(x, arr));
