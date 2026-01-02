"use client"

import type { EditorChangePayload } from "../../types/editor-payload"
import { EditorShell } from "../editor-shell/EditorShell"
import { EditorLayout } from "../editorLayout/editorLayout"
import { SimpleEditor } from "../tiptap-templates/simple/simple-editor"

interface EditorProps {
  onChange?: (payload: EditorChangePayload) => void
  className?: string
  style?: React.CSSProperties
}

export function Editor({ onChange, className, style }: EditorProps) {
  return (
    <div className={className} style={style}>
      <EditorShell>
        <EditorLayout onChange={onChange}>
          <SimpleEditor />
        </EditorLayout>
      </EditorShell>
    </div>
  )
}
