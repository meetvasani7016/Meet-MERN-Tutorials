# Digital Clock

## In One Line
A digital clock reads the system time and displays it on screen every second.

## Think Like This
Checking your wrist watch every second and updating the hands on a blackboard.

## Example
```javascript
setInterval(() => {
  let now = new Date();
  console.log(now.toLocaleTimeString());
}, 1000);
```

## Result
Prints the time in terminal every 1 second.

## Remember
`setInterval` triggers a callback function repeatedly at set time intervals.
