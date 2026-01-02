export type TabContent = any | null

export interface EditorSubTab {
  id: string
  title: string
  content: TabContent
}

export interface EditorTab {
  id: string
  title: string
  content: TabContent
  subtabs: EditorSubTab[]
}
