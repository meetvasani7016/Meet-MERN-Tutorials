# Web Storage

## In One Line
Web Storage stores key-value text data directly inside the user's web browser.

## Think Like This
Browser locker rooms: localStorage keeps items persistent; sessionStorage clears lockers on tab close.

## Example
```html
localStorage.setItem('theme', 'dark');
let theme = localStorage.getItem('theme');
```

## Result
Saves a theme preference persistently in the browser memory, and retrieves it.

## Remember
Web storage only stores strings! Use JSON.stringify() to save arrays or objects.
