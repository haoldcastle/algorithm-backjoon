const fs = require("fs");
const S = fs.readFileSync("./dev/stdin").toString().trim();

const ckMap = Array.from({ length: 26 }).map(() => -1);

const solution = () => {
  S.split("").forEach((e, i) => {
    const idx = 26 - ("z".charCodeAt() - e.charCodeAt()) - 1;
    if (ckMap[idx] === -1) ckMap[idx] = i;
  });

  return ckMap.join(" ");
};

console.log(solution());
