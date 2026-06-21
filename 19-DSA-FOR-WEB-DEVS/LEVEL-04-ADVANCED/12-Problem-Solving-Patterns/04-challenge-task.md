# Challenge Task: Longest Substring Without Repeating Characters

## Objective
Apply the Sliding Window pattern to process dynamic array subsegments in linear time.

## Challenge Instructions
1. Write a function `longestUniqueSubstring(str)` that takes a string of text and returns the length of the longest substring that contains no repeating characters.
   - Example: `longestUniqueSubstring("abcabcbb")` returns `3` (length of "abc").
   - Example: `longestUniqueSubstring("bbbbb")` returns `1` (length of "b").
2. Implement your solution in linear **O(N) time** using a sliding window pointer range and a character index map.
