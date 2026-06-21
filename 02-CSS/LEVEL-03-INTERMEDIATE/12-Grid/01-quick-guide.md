# CSS Grid

## In One Line
CSS Grid is a powerful two-dimensional grid layout system of columns and rows.

## Think Like This
Slicing a checkerboard sheet.

You cut columns and rows, and place game pieces into specific grid coordinate boxes.

## Example
```html
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
```

## Result
Splits a container into 3 equal columns separated by 10px gap margins.

## Remember
Grid is best for complex two-dimensional layouts (rows AND columns simultaneously).
