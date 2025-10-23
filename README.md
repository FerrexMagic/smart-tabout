# Smart TabOut Fork


[![Visual Studio Marketplace](https://img.shields.io/badge/VS%20Code-Extension-blue?logo=visualstudiocode)](https://marketplace.visualstudio.com/)
[![Version](https://img.shields.io/badge/version-0.0.1-brightgreen)](https://github.com/FerrexMagic/smart-tabout)
[![License](https://img.shields.io/badge/license-MIT-lightgrey)](LICENSE)

**Smart TabOut Fork** is a lightweight Visual Studio Code extension that lets you **jump out of brackets, quotes, and other closing characters** — then automatically insert a semicolon (or any character you define).

A faster, smarter way to finish your lines of code.

This is a fork of [smart-tabout](https://github.com/aaron20100919/smart-tabout) by **aaron20100919**, with improved handling for semicolon insertion and modern keybinding logic.

---

## ✨ Features

- 🚀 **Smart jump** – Move the cursor past a closing character instead of typing over it.
- 🧠 **Auto insert** – Inserts `;`, `:`, or any key when not in front of a closing character.
- 🌍 **Language-aware** – Works automatically for languages like C++, Java, JavaScript, TypeScript, Python, and JSON.
- ⚡ **Lightweight and dependency-free** – Simple, fast, and minimal.

---

## ⚙️ How It Works

When you press a configured key (e.g., `;`), the extension checks the **next character**:

1. If the next character is one of:
   ```
   ) ] } " ' > ; , $
   ```
   → the cursor jumps **after** it and inserts `;`.

2. Otherwise, it just inserts the key as normal.

---

## 🧠 Example

| Before | Key Pressed | After |
|--------|--------------|--------|
| `myFunc()`◀️ | `;` | `myFunc();` |
| `console.log("text"◀️)` | `;` | `console.log("text");` |
| `array[0]◀️` | `;` | `array[0];` |

*(◀️ indicates the cursor position before pressing the key)*

---

## 🔑 Default Keybindings

```json
{
  "key": ";",
  "command": "smart-tabout-fork.jumpOrInsert",
  "args": { "char": ";" },
  "when": "editorTextFocus && editorLangId == 'cpp' || editorLangId == 'java' || editorLangId == 'javascript' || editorLangId == 'typescript'"
},
{
  "key": ":",
  "command": "smart-tabout-fork.jumpOrInsert",
  "args": { "char": ":" },
  "when": "editorTextFocus && editorLangId == 'py' || editorLangId == 'json'"
}
```

You can customize or add more bindings in your **VS Code keybindings.json**.

---

## 🧩 Installation

### From Source
1. Clone this repository:
   ```bash
   git clone https://github.com/FerrexMagic/smart-tabout.git
   cd smart-tabout
   ```
2. Open the folder in **VS Code**.
3. Press `F5` to start the extension in a new **Extension Development Host** window.

### From VS Code Marketplace
*(Coming soon — will be available once published to the Marketplace)*

---

## 📁 Project Structure

```
smart-tabout-fork/
├── extension.js          # Main extension logic
├── package.json          # VS Code extension configuration
└── README.md             # This file
```

---

## 🧑‍💻 Development

Main logic excerpt from `extension.js`:

```js
const CLOSERS = [")", "]", "}", '"', "'", ">", ";", ",", "$"];
```

Command:
```js
smart-tabout-fork.jumpOrInsert
```

This checks if the cursor is in front of a closing character, jumps over it, and inserts the specified character.

---

## 📜 License

This project is licensed under the **MIT License**.  
Original work by [aaron20100919/smart-tabout](https://github.com/aaron20100919/smart-tabout).  
Fork maintained by [FerrexMagic](https://github.com/FerrexMagic).

---

> ⚡ _Smart TabOut Fork — Jump smarter, type faster._
