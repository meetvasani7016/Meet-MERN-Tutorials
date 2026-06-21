# How to Debug Code

## 1. What is it?
Debugging is a systematic, scientific process of isolating variables to find the cause of a code crash.

## 2. Why do we use it?
To systematically isolate variable state changes, read console stack traces, and diagnose server crashes logically.

## 3. How does it work?
- **Analogy**: An auto mechanic diagnosing engine problems: checking spark plugs, testing fuel line, checking diagnostic codes.
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Troubleshooting codebase compiler errors.

## 5. How do we build with it?
```json
Reading stack traces, adding consoles logs, checking variables, isolating code blocks.
```

- **Expected Output**: Reduces time spent blocked on programming errors.
- **Best Practice / Rule**: Error messages are not insults—they are maps pointing directly to the problem line! Read them carefully.
