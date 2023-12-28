const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const [n, ...stringArr] = input;

const solution = () => {
  const res = [];
  stringArr.forEach((e) => {
    res.push(`${e.charAt(0)}${e.charAt(e.length - 1)}`);
  });
  return res.join("\n");
};

console.log(solution());
