# 🟢 Node.js Installation

Node.js is a runtime environment that allows you to run JavaScript code outside of a web browser (like on your computer's terminal or backend servers). It comes bundled with **NPM** (Node Package Manager).

## 📥 Installation

1.  Go to the official website: [nodejs.org](https://nodejs.org/).
2.  Download the **LTS (Long Term Support)** version. The LTS version is stable and recommended for most users.
3.  Run the downloaded installer (`.msi` for Windows, `.pkg` for Mac).
4.  Click **Next** through the installation wizard, keeping all default settings selected.

```text
+---------------------------------------------+
| Node.js Setup                               |
|  [x] Install core Node.js runtime           |
|  [x] Install npm (Node Package Manager)     |
|  [x] Add to PATH (highly recommended)       |
+---------------------------------------------+
```

---

## 🔍 Verify Installation

Once installation completes, close any open terminals, open a new terminal, and check the installed versions:

```bash
# Check Node.js version
node -v

# Check npm (Node Package Manager) version
npm -v
```

If these commands output version numbers (e.g. `v20.12.2` and `10.5.0`), congratulations! Node.js is ready to run.

---

## 💡 What is NPM?
NPM (Node Package Manager) is the world's largest registry of reusable code packages. It allows you to download libraries, frameworks, and utility tools directly from your terminal using commands like `npm install`.
