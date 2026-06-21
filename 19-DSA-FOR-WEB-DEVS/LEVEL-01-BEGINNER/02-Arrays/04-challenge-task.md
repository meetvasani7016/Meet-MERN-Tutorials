# Challenge Task: Array Rotation (In-Place)

## Objective
Manipulate array element positions based on index offsets.

## Challenge Instructions
1. Write a function `rotateArray(arr, k)` that rotates an array of N elements to the right by K steps.
   - For example, if the input array is `[1, 2, 3, 4, 5]` and K is 2, the function should modify the array to become `[4, 5, 1, 2, 3]`.
2. Do not use built-in array methods like `splice()`, `unshift()`, or `concat()` for the rotation. Instead, manipulate indices directly.
3. Handle cases where the rotation factor K is larger than the size of the array (hint: use the modulo operator).
4. Verify your solution returns the correctly mutated array.
