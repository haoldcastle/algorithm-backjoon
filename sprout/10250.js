const fs = require("fs");
const [n, ...lines] = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = () => {
  const res = lines.map((line) => {
    const [h, w, n] = line.split(" ");
    const floor = n % h === 0 ? h : n % h;
    const ho = Math.ceil(n / h);
    return `${floor}${ho < 10 ? "0" : ""}${ho}`;
  });

  return res.join("\n");
};

console.log(solution());
