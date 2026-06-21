# Fetch API

## In One Line
The Fetch API makes HTTP network requests to read or send data from web APIs.

## Think Like This
Ordering takeout food over the phone. You call the restaurant (URL) and wait for delivery.

## Example
```html
fetch(url)
  .then(res => res.json())
  .then(data => console.log(data));
```

## Result
Sends an HTTP request to the API, parses the JSON response, and logs the returned data.

## Remember
Fetch returns a promise. You must convert the response to JSON (`res.json()`) before reading it.
