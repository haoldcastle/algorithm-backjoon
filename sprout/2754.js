const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const [score] = input;

const scoreMap1 = {
  A: 430,
  B: 330,
  C: 230,
  D: 130,
};
const scoreMap2 = ["+", "0", "-"];

const solution = () => {
  if (score === "F") return "0.0";
  const [a, b] = score.split("");
  const idx = scoreMap2.indexOf(b);
  return ((scoreMap1[a] - idx * 30) / 100).toFixed(1);
};

console.log(solution());
