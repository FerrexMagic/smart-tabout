# Smart TabOut Fork

Smart TabOut Fork is a Visual Studio Code extension that allows you to jump out of brackets, quotes, and other paired characters intelligently. It also handles special cases such as semicolons in `for` loops across languages like C++, Java, and JavaScript.

## ✨ Features

- Automatically jumps over closing characters like `)`, `]`, `"`, `'`, `>`, `;`, and `,`.
- Smart handling of semicolons inside `for (...)` loops.
- Custom keybindings for `;`, `:`, and `` ` ``.
- Supports languages like C++, Java, JavaScript, Python, and JSON.
- Easily place characters after parentheses or quotes without manually moving the cursor.

## 🛠 How It Works

When you press a configured key (for example, `;`), the extension checks:
- If the next character is a closing symbol, the cursor jumps past it instead of inserting the character.
- If inside a `for` loop statement and conditions are met, it prevents jumping to avoid breaking code logic.
- Otherwise, it inserts the character as expected.

### Supported Closers:
```
) ] " ' > ; ,
```

## 📦 Installation

1. Download or clone this repository:
   ```bash
   git clone https://github.com/FerrexMagic/smart-tabout
   ```
2. Open the folder in Visual Studio Code.
3. Run the extension:
   - Press `F5` to launch a new VS Code window with the extension enabled.

## ⌨ Default Keybindings

| Key | Command                        | Languages                     |
|-----|----------------------------------|-------------------------------|
| `;` | smart-tabout-fork.semicolon     | C++, Java, JavaScript        |
| `:` | smart-tabout-fork.colon         | Python, JSON                 |
| `` ` `` | smart-tabout-fork.backtick | All languages                |

You can customize these in your `keybindings.json`.

## ⚙ Commands

| Command Name                    | Description                       |
|----------------------------------|-----------------------------------|
| smart-tabout-fork.semicolon     | Smart handling of `;`             |
| smart-tabout-fork.colon         | Smart handling of `:`             |
| smart-tabout-fork.backtick      | Smart handling of `` ` ``         |

## 📁 Project Structure

```
smart-tabout-fork/
├── extension.js   # Core logic of the extension
├── package.json   # Extension metadata and configuration
```

## 🤝 Credits

- Original repository by **aaron20100919**  
- Forked and improved by **FerrexMagic**

## 📃 License

This project is licensed under the MIT License.

---

Enjoy coding smarter and faster! 🧠🚀
