# JavaScript Classes

## In One Line
Classes are templates used to construct multiple objects with identical structures and behaviors.

## Think Like This
A cookie cutter template. You define the shape once, and can stamp out hundreds of cookie objects.

## Example
```js
class User {
  constructor(name) { this.name = name; }
}
let user1 = new User('Alice');
```

## Result
Creates a User blueprint class, and instantiates an object user1 with name='Alice'.

## Remember
Classes are blueprints, not objects. You must use the `new` keyword to stamp out an actual object.
