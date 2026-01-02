"use client";

import { useState, useEffect } from "react";
import { useCurrentEditor } from "@tiptap/react";
import { HexColorPicker } from "react-colorful";
import { Button } from "../../../components/ui/button";
import { GRADIENT_ROWS_70 } from "../../../lib/colors";
import { debounce } from "lodash";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "../../../components/ui/popover";
import { Label } from "../../../components/ui/label";
import React from "react";

export function ColorPicker({ type = "text" }) {
  const { editor } = useCurrentEditor();

  const [open, setOpen] = useState(false);
  const [color, setColor] = useState("#000000"); // committed color applied to editor
  const [showCustom, setShowCustom] = useState(false);

  // temp color inside the custom picker (only committed on OK)
  const [tempHex, setTempHex] = useState("#000000");

  const [canApply, setCanApply] = useState(false);

  // ---- Sync editor color ----
  useEffect(() => {
    const current =
      type === "text"
        ? editor?.getAttributes("textStyle").color || "#000000"
        : editor?.getAttributes("highlight")?.color || "#FFFF00";

    setColor(current);
    setTempHex(current);
  }, [editor, type]);

  // ---- Selection validation ----
  useEffect(() => {
    const check = () => {
      try {
        setCanApply(!editor?.state.selection.empty);
      } catch {
        setCanApply(false);
      }
    };

    check();
    editor?.on("selectionUpdate", check);
    editor?.on("transaction", check);

    return () => {
      editor?.off("selectionUpdate", check);
      editor?.off("transaction", check);
    };
  }, [editor]);

  // ---- Apply color to Tiptap (committed) ----
  const applyColor = React.useCallback(
    (value: string) => {
      if (!editor) return;

      // try to remove any stored textStyle mark to avoid stale state (safety)
      if (editor.state.storedMarks) {
        const textStyleMark = editor.schema.marks.textStyle;
        if (textStyleMark) {
          editor.view.dispatch(editor.state.tr.removeStoredMark(textStyleMark));
        }
      }

      // apply color
      setTimeout(() => {
        editor.chain().focus().setColor(value).run();
        setColor(value);
      }, 0);
    },
    [editor]
  );

  // small debounce for input typing (doesn't apply to editor; only local use)
  const debouncedSetTemp = React.useMemo(
    () => debounce((v: string) => setTempHex(v), 50),
    []
  );

  if (!editor) return null;

  return (
    <Popover open={open} onOpenChange={(v) => setOpen(v)}>
      <PopoverTrigger asChild>
        <Button
          variant="outlineFontFamily"
          className="flex items-center h-7 rounded-sm px-2 border-[#a3a3a8] text-[#a3a3a8] hover:text-white"
        >
          Color
          <span
            className="w-3 h-3 ml-2 rounded-sm border border-black/20"
            style={{ backgroundColor: color }}
          />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        className="w-[260px] p-3"
        align="start"
        onClick={(e) => e.stopPropagation()}
      >
        <Label className="text-xs mb-2">
          {type === "text" ? "Text Color" : "Highlight Color"}
        </Label>

        {/* ========== COLOR PALETTE ========== */}
        {!showCustom && (
          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-7 gap-1">
              {GRADIENT_ROWS_70.map((c) => (
                <div
                  key={c}
                  onClick={() => {
                    applyColor(c);
                    setOpen(false); // keep previous behavior for presets
                  }}
                  className="w-5 h-5 rounded-lg cursor-pointer border border-black/10  hover:scale-105 transition"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>

            <Button
              size="sm"
              variant="outline"
              onClick={() => {
                // open custom picker; ensure tempHex reflects committed color
                setTempHex(color);
                setShowCustom(true);
              }}
            >
              Custom
            </Button>
          </div>
        )}

        {/* ========== CUSTOM HEX PICKER ========== */}
        {showCustom && (
          // stop mouse/pointer events from bubbling so popover doesn't treat them as outside clicks
          <div
            className="flex flex-col gap-3"
            onMouseDown={(e) => e.stopPropagation()}
            onMouseUp={(e) => e.stopPropagation()}
            onPointerDown={(e) => e.stopPropagation()}
            onPointerUp={(e) => e.stopPropagation()}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Only update tempHex on change — do NOT apply to editor yet */}
            <HexColorPicker
              color={tempHex}
              onChange={(v) => {
                // immediate local update (no editor apply)
                setTempHex(v);
              }}
              // ensure internal clicks don't bubble out
              onMouseDown={(e: any) => e.stopPropagation()}
              onMouseUp={(e: any) => e.stopPropagation()}
            />

            <div className="flex gap-2 items-center">
              <input
                value={tempHex}
                onChange={(e) => {
                  // accept typed hex locally; debounce assignment for UX
                  debouncedSetTemp(e.target.value);
                  setTempHex(e.target.value);
                }}
                className="w-full px-2 py-1 border rounded text-sm"
              />

              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  // discard changes and go back to palette (do not apply)
                  setTempHex(color);
                  setShowCustom(false);
                }}
              >
                Back
              </Button>
            </div>

            <div className="flex justify-end mt-2">
              <Button
                size="sm"
                onClick={() => {
                  applyColor(tempHex);
                  setShowCustom(false);
                  setOpen(false);
                
                  // 🔥 FIX: restore editor focus & selection after popover closes
                  setTimeout(() => {
                    editor?.commands.focus();
                  }, 200);
                }}
                
                
              >
                OK
              </Button>
            </div>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}
