# Challenge Task: Valid Parentheses Bracket Checker

## Objective
Use a Stack to validate bracket nesting sequences in compiler tokens.

## Challenge Instructions
1. Write a function `isValidParentheses(str)` that checks if a string containing bracket characters `'('`, `')'`, `'{'`, `'}'`, `'['`, and `']'` is valid.
2. A bracket sequence is valid if:
   - Open brackets are closed by the same type of brackets.
   - Open brackets are closed in the correct nested order.
   - Example: `"{[()]}"` is valid.
   - Example: `"([)]"` is invalid.
3. Implement this checking logic using the Last-In, First-Out (LIFO) properties of a Stack.
