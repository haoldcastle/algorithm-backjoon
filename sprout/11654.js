const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split(" ");
const [char] = input;
const solution = () => {
  return char.charCodeAt();
};

console.log(solution());
