// Solution 2 For reversing string

// with a for loop
function rv(str) {
  let reversed = "";
  for (const char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

console.log(rv("Azoozka"));
module.exports = rv;
