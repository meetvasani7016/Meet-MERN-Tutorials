# React Props

## In One Line
Props (properties) are custom parameters passed down from parent components to child components.

## Think Like This
Passing values into a function parameter list. The parent calls the child function, sending variables along.

## Example
```jsx
<UserCard name="Alice" />
```

## Result
Renders the card displaying the dynamic name 'Alice'.

## Remember
Props are read-only! A child component must never modify the props it receives.
