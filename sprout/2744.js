const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split(" ");
const [str] = input;

const solution = () => {
  const strSplit = str.split("");
  const reverse = strSplit.map((e) =>
    e.charCodeAt() <= "Z".charCodeAt() ? e.toLowerCase() : e.toUpperCase()
  );
  return reverse.join("");
};

console.log(solution());
