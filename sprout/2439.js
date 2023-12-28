const fs = require("fs");
const n = fs.readFileSync("./dev/stdin").toString().trim();

const solution = () => {
  const stars = [];
  for (let i = 1; i <= n; i++) {
    stars.push(`${" ".repeat(n - i)}${"*".repeat(i)}`);
  }
  return stars.join("\n");
};

console.log(solution());
