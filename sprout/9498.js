const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim();
const score = +input;

const solution = (score) => {
  if (100 >= score && 90 <= score) return "A";
  else if (89 >= score && 80 <= score) return "B";
  else if (79 >= score && 70 <= score) return "C";
  else if (69 >= score && 60 <= score) return "D";
  else return "F";
};

console.log(solution(score));
