# Path Module

## 1. What is it?
The path module provides utilities for working with file and directory paths.

## 2. Why do we use it?
Different operating systems format directory paths differently (Windows uses backslashes `\\`, Linux/Mac uses forward slashes `/`). Path modules parse segments uniformly, preventing path crashes.

## 3. How does it work?
- **Analogy**: A GPS navigation coordinator that formats paths correctly whether you are running on Windows (backslash) or Mac/Linux (forward slash).
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Resolving template templates path strings in express HTML renderers.

## 5. How do we build with it?
```js
path.join('src', 'components', 'button.js');
```

- **Expected Output**: Returns 'src/components/button.js' (or Windows formatted equivalent).
- **Best Practice / Rule**: Always use path.join instead of manual string addition to prevent slash formatting errors.
