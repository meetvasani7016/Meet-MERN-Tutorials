# Lifting State Up

## In One Line
Share state between components by moving it to their closest common ancestor.

## Think Like This
Two siblings needing to share a toy. Instead of each claiming it, they put it in their parent's cabinet (ancestor state) to share.

## Example
```jsx
Pass state variable and state-setting callback functions down as props.
```

## Result
Synchronizes sibling inputs and lists instantly.

## Remember
Lifting state up keeps components unified, making data flow predictable.
