# Challenge Task: Recursive Fibonacci with Complexity Analysis

## Objective
Implement recursion branch calls and analyze exponential call stack scaling.

## Challenge Instructions
1. Write a recursive function `fibonacci(n)` that returns the N-th number in the Fibonacci sequence.
   - The sequence starts: `0, 1, 1, 2, 3, 5, 8, 13, 21...` where `F(0)=0`, `F(1)=1`, and `F(N) = F(N-1) + F(N-2)`.
2. Draw or document the recursive call tree showing all function invocations that occur when calling `fibonacci(4)`.
3. Explain why this naive implementation scales exponentially in O(2^N) time, and describe how memoization (caching past calculations) can reduce the complexity to O(N).
