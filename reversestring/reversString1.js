// Solution 1 For reversing string

function rv(str) {
  // with a revese method
  return str.split("").reverse().join("");
}

console.log(rv("Azoozka"));
module.exports = rv;
