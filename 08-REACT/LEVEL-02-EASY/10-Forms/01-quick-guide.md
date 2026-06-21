# React Forms

## In One Line
Forms manage input values by storing them in React state (Controlled Components).

## Think Like This
A secretary typing notes. Every keystroke is immediately logged on the clipboard (state), keeping inputs synchronized.

## Example
```jsx
<input value={text} onChange={(e) => setText(e.target.value)} />
```

## Result
Input box values are controlled entirely by state variables.

## Remember
In controlled forms, the React state is the 'single source of truth' for input box fields.
