const fs = require("fs");
const [nx, arr] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const [n, x] = nx.split(" ");

const solution = (x, arr) => {
  const res = arr.split(" ").reduce((acc, cur) => {
    return acc + `${+x > +cur ? (acc === "" ? "" : " ") + cur : ""}`;
  }, "");

  return res;
};

console.log(solution(x, arr));
