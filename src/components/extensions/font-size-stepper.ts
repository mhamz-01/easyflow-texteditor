// extensions/font-size-stepper.ts
import { Extension } from "@tiptap/core";

function parsePx(value?: string | null): number | null {
  if (!value) return null;
  const m = /(-?\d+\.?\d*)px/.exec(String(value));
  if (!m) return null;
  const n = parseFloat(m[1]);
  return Number.isFinite(n) ? Math.round(n) : null;
}

function getFontSizeFromResolvedPos(editor: any): number | null {
  const { $from } = editor.state.selection;
  // Check marks at the resolved position
  const marks = $from.marks();
  for (const m of marks) {
    if (m.type && m.type.name === "textStyle" && m.attrs && m.attrs.fontSize) {
      const parsed = parsePx(m.attrs.fontSize);
      if (parsed !== null) return parsed;
    }
  }

  // As a last resort, check node attrs (rare)
  const node = editor.state.doc.nodeAt($from.pos);
  if (node && node.attrs && node.attrs.style) {
    const style = node.attrs.style;
    const m = /font-size\s*:\s*([^;]+)/i.exec(style);
    if (m && m[1]) {
      const parsed = parsePx(m[1].trim());
      if (parsed !== null) return parsed;
    }
  }

  return null;
}

export const FontSizeStepper = Extension.create({
  name: "fontSizeStepper",

  // configuration option to control step & min size
  addOptions() {
    return {
      step: 2,
      min: 8,
      defaultSize: 16,
    };
  },

  addCommands() {
    return {
      increaseFontSize:
        () =>
        ({ commands, editor }) => {
          if (!editor) return false;

          // 1) prefer active textStyle attribute
          const attrs = editor.getAttributes("textStyle") || {};
          let currentPx = parsePx(attrs.fontSize ?? null);

          // 2) fallback to marks/node at selection
          if (currentPx === null) {
            currentPx = getFontSizeFromResolvedPos(editor);
          }

          // 3) final fallback to sensible default (not tiny 8px)
          if (currentPx === null) {
            currentPx = this.options.defaultSize;
          }

          const newSize = currentPx + this.options.step;
          return commands.setFontSize(`${newSize}px`);
        },

      decreaseFontSize:
        () =>
        ({ commands, editor }) => {
          if (!editor) return false;

          const attrs = editor.getAttributes("textStyle") || {};
          let currentPx = parsePx(attrs.fontSize ?? null);

          if (currentPx === null) {
            currentPx = getFontSizeFromResolvedPos(editor);
          }

        
          if (currentPx === null) {
            currentPx = this.options.defaultSize;
          }

          const newSize = Math.max(this.options.min, currentPx! - this.options.step);
          return commands.setFontSize(`${newSize}px`);
          
        },
    };
  },

  addKeyboardShortcuts() {
    return {
      // Increase: Mod + Shift + .  => '>' (Shift + .) — Mod maps to Ctrl/Cmd
      "Mod-Shift-.": () => this.editor.commands.increaseFontSize(),
      // Decrease: Mod + Shift + ,  => '<' (Shift + ,)
      "Mod-Shift-,": () => this.editor.commands.decreaseFontSize(),
      // Optional extra bindings for explicit Ctrl (if you want):
      // "Ctrl-Shift-.": () => this.editor.commands.increaseFontSize(),
      // "Ctrl-Shift-,": () => this.editor.commands.decreaseFontSize(),
    };
  },
});
