// Character Frequency Counter O(N)
function charCount(str) {
  const map = {};
  for (let char of str.toLowerCase()) {
    if (/[a-z]/.test(char)) {
      map[char] = (map[char] || 0) + 1; // O(1) lookup & set
    }
  }
  return map;
}
console.log(charCount("Hello JavaScript!"));