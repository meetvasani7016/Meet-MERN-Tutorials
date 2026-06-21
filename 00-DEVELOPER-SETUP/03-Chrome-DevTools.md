# 🔍 Chrome Developer Tools (DevTools)

Chrome Developer Tools (DevTools) is a suite of web developer tools built directly into the Google Chrome browser. It lets you inspect, debug, and test your web pages in real-time.

## 🛠️ How to Open DevTools

Open Google Chrome, navigate to any webpage, and use one of these methods:
*   **Right-Click Inspect**: Right-click on any element on the page and select **Inspect**.
*   **Keyboard Shortcut**: Press `F12` (or `Ctrl+Shift+I` on Windows/Linux, `Cmd+Option+I` on Mac).

## 🧱 The Elements Panel

The **Elements** panel shows the HTML structure of the page on the left, and the CSS styles on the right.

```text
+-----------------------------------------------------------------+
| ELEMENTS  CONSOLE  SOURCES  NETWORK                             |
+-----------------------------------+-----------------------------+
| <body>                            | Styles                      |
|   <h1>Welcome</h1>                | h1 {                        |
|   <p class="intro">Text</p>       |   color: blue; <-- Click to |
| </body>                           | }                  change!  |
+-----------------------------------+-----------------------------+
```

*   **Edit HTML Live**: Double-click any text inside a tag in the Elements panel, change it, and press Enter. The webpage changes instantly (temporary until refresh).
*   **Edit CSS Live**: Select an element, then click on the Styles tab on the right. You can check/uncheck checkboxes to toggle properties or add new styles live to see how they look!

## 💬 The Console Panel

The **Console** panel is where you see JavaScript errors, warnings, and custom log messages.

*   **View Log Outputs**: If you write `console.log("Hello from JS")` in your script, it prints here.
*   **Interactive JavaScript Playground**: You can type JavaScript commands directly into the console prompt (e.g., type `2 + 2` and press Enter) and see the results instantly!
