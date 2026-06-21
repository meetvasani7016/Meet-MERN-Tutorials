# JavaScript Events

## In One Line
Events are actions (like clicks or keystrokes) that trigger JavaScript logic.

## Think Like This
Setting up a tripwire. When a visitor triggers it (clicks button), it sounds an alarm (runs function).

## Example
```html
btn.addEventListener('click', (e) => {
  console.log('Clicked');
});
```

## Result
Listens for page button clicks and logs 'Clicked' when they happen.

## Remember
Always call e.preventDefault() in submit listeners to stop form submissions from reloading your page.
