# CSS Position

## In One Line
Position determines where an element sits on the webpage coordinate grid.

## Think Like This
Positioning is choosing coordinates.

- Static: default normal flow.
- Fixed: pins an item directly to the viewer's goggles (stays on screen during scrolling).

## Example
```html
.sticky-bar {
  position: fixed;
  top: 0;
  width: 100%;
}
```

## Result
Pins a navbar header to the absolute top of the page screen.

## Remember
Absolute items float relative to the nearest parent container marked position: relative.
