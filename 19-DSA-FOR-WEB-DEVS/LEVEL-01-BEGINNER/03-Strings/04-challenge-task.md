# Challenge Task: Valid Anagram Checker

## Objective
Implement character occurrence checks to determine if two text strings are anagrams.

## Challenge Instructions
1. Write a function `isAnagram(strA, strB)` that returns `true` if string B is an anagram of string A (contains the exact same characters in a different order), and `false` otherwise.
   - Example: `isAnagram("silent", "listen")` returns `true`.
   - Example: `isAnagram("hello", "billion")` returns `false`.
2. Ensure your function ignores spacing, punctuation, and capitalization (e.g. "A gentleman" and "elegant man" should return `true`).
3. Optimize your solution to run in linear Time Complexity **O(N)** using a character frequency count object instead of a slow sorting approach.
