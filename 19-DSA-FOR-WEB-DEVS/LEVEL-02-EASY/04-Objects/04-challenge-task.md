# Challenge Task: First Unique Character Index

## Objective
Utilize JavaScript Objects as rapid key-value lookup structures to track character occurrences.

## Challenge Instructions
1. Write a function `firstUniqChar(str)` that takes a string of text and returns the index of the first character that does not repeat.
2. If all characters repeat, return `-1`.
   - Example: `firstUniqChar("leetcode")` returns `0` (index of 'l').
   - Example: `firstUniqChar("loveleetcode")` returns `2` (index of 'v').
3. Implement the solution using a JavaScript Object map to store character occurrence counts in a first pass, then iterate through the string to find the index of the first character with a count of 1.
