"use client";

import { useState } from "react";
import { MoreHorizontal, Plus, FileText } from "lucide-react";
import { motion, AnimatePresence, Variant } from "framer-motion"; // ✨ ADD THIS

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
} from "../../components/ui/sidebar";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../../components/ui/dropdown-menu";

import { ChevronRight } from "lucide-react";

import { Input } from "../../components/ui/input";
import { EditorTab } from "../../components/types/editor-tabs";

interface EditorSidebarProps {
  tabs: EditorTab[];
  activeTabId: string;
  activeSubTabId: string | null;
  canDeleteTab: boolean;
  onAddTab: () => void;
  onAddSubTab: (tabId: string) => void;
  onSelect: (tabId: string, subId?: string) => void;
  onRename: (id: string, title: string) => void;
  onDelete: (id: string) => void;
  onRenameSubTab: (tabId: string, subTabId: string, title: string) => void;
  onDeleteSubTab: (tabId: string, subTabId: string) => void;
}

// ✨ Animation variants
const tabVariants : any = {
  initial: { opacity: 0, x: -20, height: 0 },
  animate: { 
    opacity: 1, 
    x: 0, 
    height: "auto",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0, 
    x: -20, 
    height: 0,
    transition: {
      duration: 0.2,
      ease: "easeIn"
    }
  }
};

const subtabVariants : any = {
  initial: { opacity: 0, x: -10, height: 0 },
  animate: { 
    opacity: 1, 
    x: 0, 
    height: "auto",
    transition: {
      duration: 0.25,
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0, 
    x: -10, 
    height: 0,
    transition: {
      duration: 0.15,
      ease: "easeIn"
    }
  }
};

export function AppSidebar({
  tabs,
  activeTabId,
  activeSubTabId,
  canDeleteTab,
  onAddTab,
  onAddSubTab,
  onSelect,
  onRename,
  onDelete,
  onRenameSubTab,
  onDeleteSubTab,
}: EditorSidebarProps) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingSubId, setEditingSubId] = useState<string | null>(null);
  const [tempTitle, setTempTitle] = useState("");
  const [openTabs, setOpenTabs] = useState<Record<string, boolean>>({});

  /* ---------- Rename helpers ---------- */

  const startRenameTab = (id: string, title: string) => {
    setEditingId(id);
    setEditingSubId(null);
    setTempTitle(title);
  };

  const startRenameSubTab = (id: string, title: string) => {
    setEditingSubId(id);
    setEditingId(null);
    setTempTitle(title);
  };

  const commitRenameTab = () => {
    if (!editingId) return;
    onRename(editingId, tempTitle.trim() || "Untitled");
    setEditingId(null);
  };

  const commitRenameSubTab = (tabId: string) => {
    if (!editingSubId || !onRenameSubTab) return;
    onRenameSubTab(tabId, editingSubId, tempTitle.trim() || "Untitled");
    setEditingSubId(null);
  };

  const toggleTabOpen = (tabId: string) => {
    setOpenTabs((prev) => ({
      ...prev,
      [tabId]: !prev[tabId],
    }));
  };

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center justify-between">
            Documents
            <button
              onClick={onAddTab}
              className="rounded p-1 transition-all duration-200 hover:bg-accent hover:scale-110"
              aria-label="Add new document"
            >
              <Plus size={16} />
            </button>
          </SidebarGroupLabel>

          <SidebarMenu>
            {/* ✨ Wrap with AnimatePresence for exit animations */}
            <AnimatePresence mode="popLayout">
              {tabs.map((tab) => {
                const isOpen = openTabs[tab.id];
                const hasSubtabs = tab.subtabs.length > 0;
                const isActiveTab = tab.id === activeTabId && !activeSubTabId;

                return (
                  <motion.div
                    key={tab.id}
                    variants={tabVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    layout // ✨ Smooth layout shifts
                  >
                    <SidebarMenuItem className="list-none">
                      {/* ---------- TAB ROW ---------- */}
                      <div
                        className={`
                          group flex items-center gap-2 rounded-md px-2 py-1.5
                          transition-all duration-200 ease-in-out
                          ${isActiveTab ? "bg-accent" : "hover:bg-accent/50"}
                        `}
                      >
                        {/* DROPDOWN CHEVRON */}
                        {hasSubtabs && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleTabOpen(tab.id);
                            }}
                            className="flex h-5 w-5 items-center justify-center rounded transition-all duration-200 hover:bg-accent/80"
                            aria-label={
                              isOpen ? "Collapse subtabs" : "Expand subtabs"
                            }
                          >
                            <ChevronRight
                              size={14}
                              className={`transition-transform duration-300 ease-in-out ${
                                isOpen ? "rotate-90" : ""
                              }`}
                            />
                          </button>
                        )}

                        {/* DOC ICON */}
                        <FileText
                          size={16}
                          className={`flex-shrink-0 transition-all duration-200 ${
                            hasSubtabs ? "" : "ml-5"
                          } ${
                            isActiveTab
                              ? "opacity-100"
                              : "opacity-60 group-hover:opacity-100"
                          }`}
                        />

                        {/* TAB TITLE / RENAME */}
                        <div className="flex-1 min-w-0">
                          {editingId === tab.id ? (
                            <Input
                              value={tempTitle}
                              autoFocus
                              onChange={(e) => setTempTitle(e.target.value)}
                              onBlur={commitRenameTab}
                              onKeyDown={(e) => {
                                if (e.key === "Enter") commitRenameTab();
                                if (e.key === "Escape") setEditingId(null);
                              }}
                              className="h-7 transition-all duration-200"
                            />
                          ) : (
                            <button
                              className="w-full truncate text-left text-sm transition-colors duration-200"
                              onClick={() => onSelect(tab.id)}
                              onDoubleClick={() =>
                                startRenameTab(tab.id, tab.title)
                              }
                            >
                              {tab.title}
                            </button>
                          )}
                        </div>

                        {/* TAB MENU */}
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <button
                              className="opacity-0 group-hover:opacity-100 rounded p-1 transition-all duration-200 hover:bg-accent/80"
                              aria-label="Tab options"
                            >
                              <MoreHorizontal size={14} />
                            </button>
                          </DropdownMenuTrigger>

                          <DropdownMenuContent align="end" className="w-40">
                            <DropdownMenuItem
                              onClick={() => {
                                onAddSubTab(tab.id);
                                setOpenTabs((prev) => ({
                                  ...prev,
                                  [tab.id]: true,
                                }));
                              }}
                              className="cursor-pointer transition-colors duration-150"
                            >
                              Add subtab
                            </DropdownMenuItem>

                            {canDeleteTab && (
                              <DropdownMenuItem
                                className="text-red-500 cursor-pointer transition-colors duration-150 focus:text-red-600"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onDelete(tab.id);
                                }}
                              >
                                Delete
                              </DropdownMenuItem>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>

                      {/* ---------- SUBTABS ---------- */}
                      {hasSubtabs && (
                        <div
                          className={`
                            grid transition-all duration-300 ease-in-out
                            ${
                              isOpen
                                ? "grid-rows-[1fr] opacity-100"
                                : "grid-rows-[0fr] opacity-0"
                            }
                          `}
                        >
                          <div className="overflow-hidden">
                            <div className="pt-1 space-y-1">
                              {/* ✨ AnimatePresence for subtabs */}
                              <AnimatePresence mode="popLayout">
                                {tab.subtabs.map((st) => {
                                  const isActiveSubTab = st.id === activeSubTabId;

                                  return (
                                    <motion.div
                                      key={st.id}
                                      variants={subtabVariants}
                                      initial="initial"
                                      animate="animate"
                                      exit="exit"
                                      layout
                                      className={`
                                        group ml-9 flex items-center gap-2 rounded-md px-2 py-1.5 text-sm
                                        transition-all duration-200 ease-in-out
                                        ${
                                          isActiveSubTab
                                            ? "bg-accent"
                                            : "hover:bg-accent/50"
                                        }
                                      `}
                                    >
                                      {/* SUBDOC ICON */}
                                      <FileText
                                        size={14}
                                        className={`flex-shrink-0 transition-all duration-200 ${
                                          isActiveSubTab
                                            ? "opacity-100"
                                            : "opacity-50 group-hover:opacity-100"
                                        }`}
                                      />

                                      {/* SUBTAB TITLE / RENAME */}
                                      <div className="flex-1 min-w-0">
                                        {editingSubId === st.id ? (
                                          <Input
                                            value={tempTitle}
                                            autoFocus
                                            onChange={(e) =>
                                              setTempTitle(e.target.value)
                                            }
                                            onBlur={() => commitRenameSubTab(tab.id)}
                                            onKeyDown={(e) => {
                                              if (e.key === "Enter")
                                                commitRenameSubTab(tab.id);
                                              if (e.key === "Escape")
                                                setEditingSubId(null);
                                            }}
                                            className="h-6 transition-all duration-200"
                                          />
                                        ) : (
                                          <button
                                            className="w-full truncate text-left transition-colors duration-200"
                                            onClick={() => onSelect(tab.id, st.id)}
                                            onDoubleClick={() =>
                                              startRenameSubTab(st.id, st.title)
                                            }
                                          >
                                            {st.title}
                                          </button>
                                        )}
                                      </div>

                                      {/* SUBTAB MENU */}
                                      {onDeleteSubTab && (
                                        <DropdownMenu>
                                          <DropdownMenuTrigger asChild>
                                            <button
                                              className="opacity-0 group-hover:opacity-100 rounded p-1 transition-all duration-200 hover:bg-accent/80"
                                              aria-label="Subtab options"
                                            >
                                              <MoreHorizontal size={14} />
                                            </button>
                                          </DropdownMenuTrigger>

                                          <DropdownMenuContent
                                            align="end"
                                            className="w-40"
                                          >
                                            <DropdownMenuItem
                                              className="text-red-500 cursor-pointer transition-colors duration-150 focus:text-red-600"
                                              onClick={() =>
                                                onDeleteSubTab(tab.id, st.id)
                                              }
                                            >
                                              Delete
                                            </DropdownMenuItem>
                                          </DropdownMenuContent>
                                        </DropdownMenu>
                                      )}
                                    </motion.div>
                                  );
                                })}
                              </AnimatePresence>
                            </div>
                          </div>
                        </div>
                      )}
                    </SidebarMenuItem>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
