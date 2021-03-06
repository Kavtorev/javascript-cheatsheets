const romanObject = {
  1: "I",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1000: "M",
};

const specialCases = {
  I: ["V, X"],
  X: ["L", "C"],
  C: ["D", "M"],
};

console.dir(romanObject);

const hashMap = new Map();

for (let key in romanObject) {
}
