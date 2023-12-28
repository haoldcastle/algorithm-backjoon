const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split(" ");
const [h, m] = input.map(Number);

const solution = () => {
  let hm = h * 60 + m - 45;
  if (hm === 0) return "0 0";
  if (hm < 0) hm = 24 * 60 + hm;
  const hour = Math.floor(hm / 60);
  const min = hm % 60;
  return `${hour} ${min}`;
};

console.log(solution());
