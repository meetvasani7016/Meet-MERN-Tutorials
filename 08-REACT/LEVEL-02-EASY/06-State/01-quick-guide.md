# React State

## In One Line
State is a built-in object used to store component data that triggers re-renders when changed.

## Think Like This
A score board in a stadium game. When someone scores, the board updates (changes state), and the crowd sees the new numbers (re-render).

## Example
```jsx
const [count, setCount] = useState(0);
```

## Result
Initializes a state variable count to 0 and a setter function setCount.

## Remember
Never mutate state variables directly (e.g. count = 5)! Always use the setter function (setCount(5)) to trigger updates.
