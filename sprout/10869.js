const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split(" ");
const [a, b] = input.map(Number);

const solution = (a, b) => {
  const res = `${a + b}
${a - b}
${a * b}
${Math.floor(a / b)}
${a % b}
`;
  return res;
};

console.log(solution(a, b));
