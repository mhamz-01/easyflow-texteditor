"use client";

import React, { createContext, useContext } from "react";
import type { Editor } from "@tiptap/core";

export type EditorBridgeValue = {
  editorContent: Editor | null;
  setEditorContent: (editor: Editor | null) => void;
  debouncedSave: (editor: Editor) => void;
};

const EditorBridgeContext = createContext<EditorBridgeValue | undefined>(
  undefined
);

export function EditorBridgeProvider({
  children,
  value,
}: {
  children: React.ReactNode;
  value: EditorBridgeValue;
}) {
  return (
    <EditorBridgeContext.Provider value={value}>
      {children}
    </EditorBridgeContext.Provider>
  );
}

export function useEditorBridge() {
  const ctx = useContext(EditorBridgeContext);
  if (!ctx) {
    throw new Error("useEditorBridge must be used within EditorBridgeProvider");
  }
  return ctx;
}
