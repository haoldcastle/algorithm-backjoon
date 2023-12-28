const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split(" ");
const [a, b, c, d, e] = input.map(Number);

const solution = () => {
  const res = (a * a + b * b + c * c + d * d + e * e) % 10;
  return res;
};

console.log(solution());
