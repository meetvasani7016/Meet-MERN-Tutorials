// Two Pointers Sum Checker O(N)
function hasPairWithSum(sortedArr, target) {
  let left = 0;
  let right = sortedArr.length - 1;
  while (left < right) {
    const sum = sortedArr[left] + sortedArr[right];
    if (sum === target) return true;
    if (sum < target) left++;
    else right--;
  }
  return false;
}
console.log(hasPairWithSum([1, 2, 4, 7], 9)); // true