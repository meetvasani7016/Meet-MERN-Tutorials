# CSS Selectors

## In One Line
Selectors point to specific HTML tags so CSS can style them.

## Think Like This
Selectors are like addressing labels on letters.

- Element selector targets *all* buttons (e.g. `button`).
- Class selector targets a *group* (e.g. `.btn` targets `class="btn"`).
- ID selector targets a *single unique item* (e.g. `#main` targets `id="main"`).

## Example
```html
.blue-text {
  color: blue;
}
```

## Result
Applies blue color to any element containing `class="blue-text"`.

## Remember
Classes (.) can be used on multiple elements. IDs (#) must be unique and used only once per page.
