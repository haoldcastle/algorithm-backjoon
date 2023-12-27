const fs = require("fs");
const inputs = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const [nm, ...restInputs] = inputs;
const [n, m] = nm.split(" ").map(Number);
const numberMatrix = restInputs.map((e) => e.split(" ").map(Number));
const A = numberMatrix.slice(0, n);
const B = numberMatrix.slice(n);

const solution = () => {
  const res = [];
  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < m; j++) {
      row.push(A[i][j] + B[i][j]);
    }
    res.push(row.join(" "));
  }
  return res.join("\n");
};

console.log(solution(inputs));
