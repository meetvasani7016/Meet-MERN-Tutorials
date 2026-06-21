# Responsive Portfolio Grid

## In One Line
A responsive grid arranges showcase items that stack vertically on mobile.

## Think Like This
Organizing photos on a wall gallery. 3 side-by-side on a wide wall, but stacked in a single row on a narrow column.

## Example
```css
@media (max-width: 600px) { .grid { grid-template-columns: 1fr; } }
```

## Result
Grid columns adjust dynamically from 3 to 1.

## Remember
Using fractional units (fr) lets CSS Grid calculate column widths automatically.
