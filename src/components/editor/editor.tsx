
import type { EditorChangePayload } from "../../types/editor-payload"
import { EditorShell } from "../editor-shell/EditorShell"
import { EditorLayout } from "../editorLayout/editorLayout"
import { SimpleEditor } from "../tiptap-templates/simple/simple-editor"

interface EditorProps {
  onChange?: (payload: EditorChangePayload) => void
  onTabsChange?: (tabs: any[]) => void
  className?: string
  style?: React.CSSProperties
}

export function Editor({ onChange, className, style, onTabsChange }: EditorProps) {
  return (
    <div className={className} style={style}>
      <EditorShell>
        <EditorLayout onChange={onChange} onTabsChange={onTabsChange}>
          <SimpleEditor />
        </EditorLayout>
      </EditorShell>
    </div>
  )
}
