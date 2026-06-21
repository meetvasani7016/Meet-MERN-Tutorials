# React Performance Basics

## In One Line
Avoid redundant renders using memoization hooks and conditional locks.

## Think Like This
A calculating accountant. Instead of recalculating math columns from scratch every month, they read last month's final totals from a notepad (memoization) if nothing changed.

## Example
```jsx
const val = useMemo(() => heavyMath(x), [x]);
```

## Result
Locks in calculated values, refiring only when dependency variables change.

## Remember
Do not overuse memoization! Standard renders are fast; only memoize heavy calculations or deep component trees.
