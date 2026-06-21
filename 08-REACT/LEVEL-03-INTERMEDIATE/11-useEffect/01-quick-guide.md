# React useEffect

## In One Line
The useEffect hook performs side effects (data fetching, subscriptions, timer logs) in functional components.

## Think Like This
An auto-start script in a smart home: 'When I walk in (mount), turn on lights. When temperature updates (dependency change), adjust AC'.

## Example
```jsx
useEffect(() => { console.log('Mounted'); }, []);
```

## Result
Logs 'Mounted' once when the component is rendered on screen.

## Remember
No dependency array runs on *every* render. Empty array `[]` runs *once* on mount. Array with variables `[x]` runs on changes.
