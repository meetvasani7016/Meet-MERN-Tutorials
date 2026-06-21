# React Lists & Keys

## In One Line
Loop through arrays to output multiple elements, identifying each with a unique key prop.

## Think Like This
Labeling coat hangers in a cloakroom with ticket numbers so the attendant can grab specific items instantly.

## Example
```jsx
items.map((item) => <li key={item.id}>{item.name}</li>)
```

## Result
Loops through the array to render list items with unique identifiers.

## Remember
Keys must be stable, predictable, and unique! Never use array index numbers as keys if elements can be reordered.
