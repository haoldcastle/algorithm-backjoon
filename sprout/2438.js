const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim();
const n = +input;

const solution = (n) => {
  let canvas = "";
  for (let i = 1; i <= n; i++) {
    canvas += `${canvas === "" ? "" : "\n"}${"*".repeat(i)}`;
  }
  return canvas;
};

console.log(solution(n));
