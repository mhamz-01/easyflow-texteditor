// src/lib/editorStorage.ts
import { EditorTab } from "../components/types/editor-tabs";
export type TabContent = any;



const STORAGE_KEY = "tiptap-tabs-v1";
const ACTIVE_TAB_KEY = "tiptap-active-tab";


export function loadTabs(): EditorTab[] {
  if (typeof window === "undefined") return [];

  try {
    const raw = localStorage.getItem("tiptap-tabs-v1");
    if (!raw) return [];

    const parsed = JSON.parse(raw);

    // runtime safety
    if (!Array.isArray(parsed)) return [];

    return parsed as EditorTab[];
  } catch {
    return [];
  }
}

export function saveTabs(tabs: EditorTab[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tabs));
}

export function loadActiveTab(): string {
  if (typeof window === "undefined") return "1";
  return localStorage.getItem(ACTIVE_TAB_KEY) ?? "1";
}

export function saveActiveTab(id: string) {
  if (typeof window === "undefined") return;
  localStorage.setItem(ACTIVE_TAB_KEY, id);
}

