"use client"

import type { ReactNode } from "react"
import { SidebarProvider } from "../../components/ui/sidebar"

interface EditorShellProps {
  children: ReactNode
}

export function EditorShell({ children }: EditorShellProps) {
  return (
    <div
      className="
        relative
        w-full
        h-full
        overflow-hidden
        border
        rounded-md
        bg-background
      "
      data-easyflow-editor
    >
      <SidebarProvider>
        {children}
      </SidebarProvider>
    </div>
  )
}
