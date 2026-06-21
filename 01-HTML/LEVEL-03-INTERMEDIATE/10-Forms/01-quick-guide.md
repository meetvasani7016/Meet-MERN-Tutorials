# HTML Forms

## In One Line
Forms (<form>) collect user data and submit it to a server.

## Think Like This
Forms are paper application forms on a doctor's office clipboard.

- The clipboard is the <form> container.
- The text descriptions are <label>s.
- The boxes you write inside are <input>s.
- Handing the clipboard back is the Submit button.

## Example
```html
<form action="/save"><input type="text"><button type="submit">Submit</button></form>
```

## Result
Displays input controls with a working submit button.

## Remember
Always bind labels to inputs using matching 'for' and 'id' attributes for accessibility.
