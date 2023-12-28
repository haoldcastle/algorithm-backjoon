const fs = require("fs");
const [n, ...input] = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = () => {
  const res = [];
  input.forEach((e) => {
    const [r, str] = e.split(" ");
    const rStr = str
      .split("")
      .map((e) => e.repeat(r))
      .join("");

    res.push(rStr);
  });

  return res.join("\n");
};

console.log(solution());
