# 🐙 Git Installation & Configuration

Git is the industry-standard version control system that tracks the history of your project files. It is the core tool that powers remote code sharing and collaboration.

## 📥 Installation

### 💻 Windows
1.  Go to [git-scm.com](https://git-scm.com/).
2.  Download the **Windows Installer**.
3.  Run the setup program. Click **Next** to accept defaults.
4.  **Important Default Options**:
    *   Ensure **"Git Bash Here"** is checked.
    *   Select **"Use Git from the command line and also from 3rd-party software"** (recommended).
    *   Select **"Checkout Windows-style, commit Unix-style line endings"**.

### 🍎 macOS
1.  Open your Terminal application (Finder -> Applications -> Utilities -> Terminal).
2.  Type `git --version` and press Enter.
3.  If Git is not installed, a popup window will ask if you want to install Xcode Command Line Tools. Click **Install**.
4.  Alternatively, install it via Homebrew: `brew install git`.

### 🐧 Linux
Open your terminal and run the package manager command:
*   **Debian/Ubuntu**: `sudo apt install git`
*   **Fedora/RedHat**: `sudo dnf install git`

---

## 🔍 Verify Installation

Open a terminal (or Git Bash on Windows) and run:
```bash
git --version
```
This should print something like `git version 2.45.0` (any version starting with 2.x is perfect).

---

## 👤 Set Your Developer Identity

Git records who makes changes to files. You must set your username and email address. Run these commands in your terminal:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Verify your settings:
```bash
git config --list
```
