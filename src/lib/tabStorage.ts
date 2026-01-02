export interface EditorSubTab {
    id: string
    title: string
    content: any | null
  }
  
  export interface EditorTab {
    id: string
    title: string
    content: any | null
    subtabs: EditorSubTab[]
  }
const TABS_KEY = "tiptap-tabs-v1"
const ACTIVE_KEY = "tiptap-active-node"

export function loadTabs(): EditorTab[] {
  const raw = localStorage.getItem(TABS_KEY)
  if (!raw) {
    return [
      {
        id: "1",
        title: "Tab 1",
        content: null,
        subtabs: [],
      },
    ]
  }
  return JSON.parse(raw)
}

export function saveTabs(tabs: EditorTab[]) {
  localStorage.setItem(TABS_KEY, JSON.stringify(tabs))
}

export function loadActiveNode() {
  return localStorage.getItem(ACTIVE_KEY)
}

export function saveActiveNode(id: string) {
  localStorage.setItem(ACTIVE_KEY, id)
}
