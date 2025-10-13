const vscode = require('vscode');

const CLOSERS = [')', ']', '}', '"', "'", '>', ';', ',', '$'];

function shouldJump(editor) {
    const pos = editor.selection.active;
    const nextChar = editor.document.getText(
        new vscode.Range(pos, pos.translate(0, 1))
    );
    return CLOSERS.includes(nextChar);
}

async function jumpOrInsert(args = {}) {
    const editor = vscode.window.activeTextEditor;
    if (!editor) return;

    const ch = args.char || ''; // 插入字符由快捷键绑定传入
    if (shouldJump(editor)) {
        await vscode.commands.executeCommand('cursorRight');
    } else if (ch) {
        await editor.edit(editBuilder => {
            for (const selection of editor.selections)
                editBuilder.insert(selection.active, ch);
        });
    }
}

function activate(context) {
    context.subscriptions.push(
        vscode.commands.registerCommand('smart-tabout.jumpOrInsert', jumpOrInsert)
    );
}

function deactivate() { }

module.exports = { activate, deactivate };
