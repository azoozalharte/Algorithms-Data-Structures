// Solution 1 For reversing string

function revese(str) {
  // with a revese method
  return str.split("").reverse().join("");
}

console.log(revese("Azoozka"));
module.exports = revese;
