# CSS Animations

## In One Line
CSS Animations run custom movements using repeating timeline rules called keyframes.

## Think Like This
A flipbook notebook animation.

You draw a shape at point A, point B, and point C. The browser flips pages to play continuous motion loops.

## Example
```html
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}
.heart {
  animation: pulse 1s infinite;
}
```

## Result
Causes the element to scale larger and smaller continuously like a heartbeat.

## Remember
Animations play automatically and loop infinitely without needing user mouse hovers.
