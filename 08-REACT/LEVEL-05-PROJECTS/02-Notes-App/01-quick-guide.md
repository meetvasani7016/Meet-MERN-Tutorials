# React Notes App

## In One Line
Build a note-taking application containing a text search query filter and a visual note card grid.

## Think Like This
Organizing folders on a desk. You draft text notes, sort them in a grid, and use a magnifier lens to find files containing specific terms.

## Example
```jsx
const filteredNotes = notes.filter(n => n.text.includes(query));
```

## Result
Renders note grid interfaces.

## Remember
Using filter methods allows you to compute filtered lists on the fly during renders without saving duplicate lists in state.
