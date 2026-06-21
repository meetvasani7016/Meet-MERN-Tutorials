# Async Await

## In One Line
Async/Await simplifies writing promise chains, making asynchronous code read like sequential lines.

## Think Like This
Pausing a movie. You press pause (await) to wait for the scene to load, then press play to continue.

## Example
```js
async function load() {
  let data = await fetchPromise;
}
```

## Result
Pauses execution lines inside the async function block until fetchPromise completes.

## Remember
The `await` keyword can only be used inside functions that are marked with the `async` prefix.
