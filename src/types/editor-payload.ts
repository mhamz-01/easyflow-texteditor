import { EditorTab } from "@/lib/tabStorage"

export type EditorChangeSource =
  | "editor"        // typing / content change
  | "tab-switch"    // switching tabs
  | "subtab-switch" // switching subtabs
  | "add-tab"
  | "add-subtab"
  | "delete-tab"
  | "delete-subtab"
  | "restore"
  | "storage"
  | "manual"

export interface EditorChangePayload {
  tabs: EditorTab[]
  activeTabId: string
  activeSubTabId: string | null
  source: EditorChangeSource
}
