const fs = require("fs");
const [a, b, c] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const map = Array.from({ length: 10 }).map(() => 0);
const solution = () => {
  const mul = a * b * c;
  mul
    .toString()
    .split("")
    .forEach((n) => {
      map[n] = map[n] + 1;
    });
  return map.join("\n");
};

console.log(solution());
