# JavaScript Modules

## In One Line
Modules split code into separate reusable files using export and import statements.

## Think Like This
Organizing tools into separate labeled drawers instead of tossing everything in one big messy toolbox.

## Example
```js
export const pi = 3.14;
import { pi } from './math.js';
```

## Result
Exports a constant from one module file and imports it in another module file.

## Remember
Modules automatically run in strict mode, and you must include type='module' inside your HTML script tags.
