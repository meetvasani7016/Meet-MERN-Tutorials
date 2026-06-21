# JavaScript JSON

## In One Line
JSON (JavaScript Object Notation) is a lightweight text format used to transmit structured data.

## Think Like This
Flattening a built toy model into flat cardboard pieces (stringify) for shipping, and assembly (parse) on arrival.

## Example
```js
let jsonText = JSON.stringify(userObj);
let originalObj = JSON.parse(jsonText);
```

## Result
Converts a JavaScript object to a text string, and then parses it back into an active object.

## Remember
JSON keys must always be enclosed in double quotes (e.g. `{"id": 1}`), and no trailing commas are allowed.
