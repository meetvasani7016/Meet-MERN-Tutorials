# Error Handling

## In One Line
Error handling intercepts crash events using try...catch blocks to keep apps running.

## Think Like This
A safety net under a circus trapeze artist. If they slip (trigger a bug), the net catches them safely.

## Example
```js
try {
  runCode();
} catch (err) {
  console.log(err.message);
}
```

## Result
Intercepts reference errors and prints description messages without crashing the runtime process.

## Remember
The finally block runs no matter what—regardless of whether an error occurred or was caught.
