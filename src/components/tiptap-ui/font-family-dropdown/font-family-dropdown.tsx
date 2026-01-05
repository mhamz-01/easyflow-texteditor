"use client";

import { useCurrentEditor } from "@tiptap/react";
import { useState } from "react";
import { FONT_OPTIONS } from "../../../lib/font";
import { ChevronDown } from "lucide-react";

import { Button } from "../../../components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../../../components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../components/ui/popover";

export function FontFamilyDropdown() {
  const { editor } = useCurrentEditor();
  const [open, setOpen] = useState(false);

  if (!editor) return null;

  // Always enabled — current applied or typing font
  const currentFont =
    editor.getAttributes("textStyle").fontFamily || "Font Family";

  /**
   * APPLY FONT LOGIC:
   * - If no text selected → Tiptap applies mark, future typing uses same font
   * - If text selected → only that selection changes
   */
  const applyFont = (family: string) => {
    if (!editor) return;

    // Remove any stored textStyle marks to avoid conflicts
    if (editor.state.storedMarks) {
      const textStyleMark = editor.schema.marks.textStyle;
      if (textStyleMark) {
        editor.view.dispatch(editor.state.tr.removeStoredMark(textStyleMark));
      }
    }

    // Delay applying font to let Tiptap stabilize
    setTimeout(() => {
      const success = editor.chain().focus().setFontFamily(family).run();
      if (!success) {
        console.warn("Font not applied:", family);
      }
    }, 0);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outlineFontFamily"
          className="
            min-w-[90px] h-7 px-2 flex items-center justify-between rounded-sm
            border-[#a3a3a8] text-[#a3a3a8]
            hover:border-[#000] hover:text-[#fff] transition-colors
          "
        >
          {currentFont}
          <ChevronDown className="w-4 h-4" />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        className="w-[300px] p-0"
        align="start"
        onInteractOutside={(e) => {
          const target = e.target as HTMLElement;
          if (target.closest(".cmd-input-wrapper")) {
            e.preventDefault(); // keep search input focus
          }
        }}
      >
        <Command>
          <div className="cmd-input-wrapper">
            <CommandInput placeholder="Search font..." />
          </div>

          <CommandList className="max-h-[220px]">
            <CommandEmpty>No font found.</CommandEmpty>

            <CommandGroup>
              <CommandItem
                key="default"
                onSelect={() => {
                  if (!editor) return;

                  if (editor.state.storedMarks) {
                    const textStyleMark = editor.schema.marks.textStyle;
                    if (textStyleMark) {
                      editor.view.dispatch(
                        editor.state.tr.removeStoredMark(textStyleMark)
                      );
                    }
                  }

                  setTimeout(() => {
                    editor.chain().focus().unsetFontFamily().run();
                    setOpen(false);
                  }, 0);
                }}
                className="font-sans"
              >
                Default
              </CommandItem>

              {FONT_OPTIONS.map(({ label, cssFontFamily }) => (
                <CommandItem
                  key={label}
                  onSelect={() => {
                    applyFont(label);
                    setOpen(false);
                  }}
                  style={{ fontFamily: cssFontFamily}}
                >
                  {label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
