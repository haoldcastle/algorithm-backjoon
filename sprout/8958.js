const fs = require("fs");
const [n, ...input] = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = () => {
  const res = input.map((score) => {
    let n = 0;
    return score.split("").reduce((acc, cur) => {
      n += 1;
      if (cur === "X") n = 0;
      return acc + n;
    }, 0);
  });

  return res.join("\n");
};

console.log(solution());
