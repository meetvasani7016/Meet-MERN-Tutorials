# React Context API

## In One Line
The Context API shares global state parameters across components without manual prop-drilling.

## Think Like This
Installing a wireless broadcast tower in the neighborhood. Any house (nested component) can tune in and receive data directly.

## Example
```jsx
const UserContext = createContext();
```

## Result
Creates a broadcast provider to feed deep nested components.

## Remember
Context API is ideal for global settings like user login states, visual themes, or language preferences.
