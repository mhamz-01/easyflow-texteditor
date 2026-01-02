"use client"

import { useState } from "react"
import { useCurrentEditor } from "@tiptap/react"
import { FiTable } from "react-icons/fi"

// shadcn UI
import { Button } from "../../../components/ui/button"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "../../../components/ui/popover"
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandInput,
  CommandList,
} from "../../../components/ui/command"

export function TableDropdownMenu() {
  const { editor } = useCurrentEditor()
  const [open, setOpen] = useState(false)

  if (!editor) return null

  const handleAction = (action: string) => {
    switch (action) {
      case "insert":
        editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()
        break
      case "addColBefore":
        editor.chain().focus().addColumnBefore().run()
        break
      case "addColAfter":
        editor.chain().focus().addColumnAfter().run()
        break
      case "delCol":
        editor.chain().focus().deleteColumn().run()
        break
      case "addRowBefore":
        editor.chain().focus().addRowBefore().run()
        break
      case "addRowAfter":
        editor.chain().focus().addRowAfter().run()
        break
      case "delRow":
        editor.chain().focus().deleteRow().run()
        break
      case "merge":
        editor.chain().focus().mergeCells().run()
        break
      case "split":
        editor.chain().focus().splitCell().run()
        break
      case "deleteTable":
        editor.chain().focus().deleteTable().run()
        break
      default:
        break
    }

    setOpen(false) // close dropdown after click
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="tableButton" size="sm">
        <FiTable size={16} color="#a3a3a8" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-[220px] p-0" align="start">
        <Command>
          <CommandInput placeholder="Search table actions..." />
          <CommandList className="max-h-[260px]">
            <CommandGroup>

              <CommandItem onSelect={() => handleAction("insert")}>
                Insert Table
              </CommandItem>

              <CommandItem onSelect={() => handleAction("addColBefore")}>
                Add Column Before
              </CommandItem>
              <CommandItem onSelect={() => handleAction("addColAfter")}>
                Add Column After
              </CommandItem>
              <CommandItem onSelect={() => handleAction("delCol")}>
                Delete Column
              </CommandItem>

              <CommandItem onSelect={() => handleAction("addRowBefore")}>
                Add Row Before
              </CommandItem>
              <CommandItem onSelect={() => handleAction("addRowAfter")}>
                Add Row After
              </CommandItem>
              <CommandItem onSelect={() => handleAction("delRow")}>
                Delete Row
              </CommandItem>

              <CommandItem onSelect={() => handleAction("merge")}>
                Merge Cells
              </CommandItem>
              <CommandItem onSelect={() => handleAction("split")}>
                Split Cells
              </CommandItem>

              <CommandItem onSelect={() => handleAction("deleteTable")}>
                Delete Table
              </CommandItem>

            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
