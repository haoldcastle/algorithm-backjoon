const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim();

const ckMap = {};

const solution = () => {
  const str = input.toUpperCase().split("");
  str.forEach((e) => {
    ckMap[e] = ckMap[e] ? ckMap[e] + 1 : 1;
  });
  const max = Math.max(...Object.values(ckMap));
  const maxArr = Object.entries(ckMap).filter(([, v]) => v === max);
  const res = maxArr.length > 1 ? "?" : maxArr[0][0];
  return res;
};

console.log(solution());
