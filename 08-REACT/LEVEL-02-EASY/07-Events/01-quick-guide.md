# React Events

## In One Line
Event handling allows you to run functions in response to user interactions (clicks, inputs, submits).

## Think Like This
Adding trigger sensors onto a screen. When a sensor detects a click, it fires a corresponding alarm function.

## Example
```jsx
<button onClick={handleClick}>Click</button>
```

## Result
Fires the handleClick function when the button is clicked.

## Remember
Pass the function reference (onClick={handleClick}), do not invoke it immediately (onClick={handleClick()}).
