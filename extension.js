const { log } = require("console");
const vscode = require("vscode");

const CLOSERS = [")", "]", "}", '"', "'", ">", ";", ","];

function shouldJump(editor, char) {
  const pos = editor.selection.active;
  const doc = editor.document;
  const lang = doc.languageId;
  const nextChar = doc.getText(new vscode.Range(pos, pos.translate(0, 1)));

  const lineText = doc.lineAt(pos.line).text;

  // Solo aplicar lógica especial para lenguajes C-like
  if (["cpp", "java", "javascript"].includes(lang) && char === ";") {
    const forMatch = lineText.match(/for\s*\([^)]*\)/);
    if (forMatch) {
      const open = lineText.indexOf("(");
      const close = lineText.indexOf(")");
      console.log("open", open, "close", close);
      console.log("pos", pos.character);
      
      if (pos.character > open && pos.character <= close) {
        const beforeCursor = lineText.slice(open + 1, pos.character);
        const semicolonsBefore = (beforeCursor.match(/;/g) || []).length;

        if (semicolonsBefore >= 2) return true;
        return false;
      }
    }
  }

  return CLOSERS.includes(nextChar);
}

async function jumpOrInsert(args = {}) {
  const editor = vscode.window.activeTextEditor;
  if (!editor) return;

  const ch = args.char || "";

  const jump = shouldJump(editor, ch);

  if (jump) {
    await vscode.commands.executeCommand("cursorRight");
    const pos = editor.selection.active;
    const lineText = editor.document.lineAt(pos.line).text;
    if (!(["cpp", "java", "javascript"].includes(editor.document.languageId)
        && ch === ";"
        && /for\s*\([^)]*\)/.test(lineText)
        && pos.character < lineText.indexOf(")")
      )) {
      await vscode.commands.executeCommand("cursorRight");
    }
  } else if (ch) {
    await editor.edit((editBuilder) => {
      for (const sel of editor.selections) {
        editBuilder.insert(sel.active, ch);
      }
    });
  }
}

function activate(context) {
  const pairs = [
    ["smart-tabout-fork.semicolon", ";"],
    ["smart-tabout-fork.colon", ":"],
    ["smart-tabout-fork.backtick", "`"],
  ];

  for (const [cmd, ch] of pairs) {
    context.subscriptions.push(
      vscode.commands.registerCommand(cmd, () => jumpOrInsert({ char: ch }))
    );
  }
}

function deactivate() {}

module.exports = { activate, deactivate };
