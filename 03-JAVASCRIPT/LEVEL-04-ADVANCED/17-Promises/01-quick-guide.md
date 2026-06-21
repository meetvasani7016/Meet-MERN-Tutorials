# JavaScript Promises

## In One Line
A Promise is an object representing a future result of an asynchronous operation.

## Think Like This
A food pager buzzer. You place an order, get a pager (Promise) in state pending. It buzzes (resolved) when ready.

## Example
```js
const delay = new Promise((resolve) => resolve('Done'));
```

## Result
Constructs a resolved promise containing the value 'Done'.

## Remember
Use .then() to handle successful resolutions. Use .catch() to intercept failure rejections.
