# CSS Media Queries

## In One Line
Media Queries apply different CSS styles depending on the screen size width.

## Think Like This
A smart closet system.

- If screen is narrow (cold weather), dress in layers: stack columns vertically.
- If screen is wide (hot weather), dress light: align columns side-by-side.

## Example
```html
@media (max-width: 600px) {
  .menu {
    display: none;
  }
}
```

## Result
Hides website navigation menus on screens under 600px wide (e.g. mobile phones).

## Remember
Media queries are the absolute foundation of modern responsive web structures.
