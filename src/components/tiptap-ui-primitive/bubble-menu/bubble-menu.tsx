"use client";

import { BubbleMenu } from '@tiptap/react/menus';
import { useCurrentEditor } from "@tiptap/react";
import { Button } from "../../../components/ui/button";
import { Separator } from "../../../components/ui/separator";
import { 
  List, 
  ListOrdered, 
  CheckSquare, 
  Heading1, 
  Heading2, 
  Heading3, 
  Quote, 
  Code 
} from "lucide-react";

export function BubbleMenuInline() {
  const { editor } = useCurrentEditor();

  if (!editor) return null;

  return (
    <BubbleMenu
      editor={editor}
      updateDelay={100}
      shouldShow={({ editor, state }) => {
        const { from, to, empty } = state.selection;
        
        // Don't show if no selection
        if (empty) return false;
        
        // Don't show if editor is not editable
        if (!editor.isEditable) return false;
        
        // ✨ Check if any image node exists in the selection
        let hasImage = false;
        state.doc.nodesBetween(from, to, (node) => {
          if (node.type.name === 'image' || node.type.name === 'Image') {
            hasImage = true;
            return false; // stop traversing
          }
        });
        
        if (hasImage) return false;
        
        return true;
      }}
    >
      <div 
        className="relative flex items-center gap-1 rounded-md border bg-popover p-1 shadow-md z-[15]
                   animate-in fade-in slide-in-from-top-2 duration-200"
      >
        {/* Headings */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive("heading", { level: 1 }) ? "bg-accent" : ""}
        >
          <Heading1 size={15} />
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive("heading", { level: 2 }) ? "bg-accent" : ""}
        >
          <Heading2 size={15} />
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={editor.isActive("heading", { level: 3 }) ? "bg-accent" : ""}
        >
          <Heading3 size={15} />
        </Button>

        <Separator orientation="vertical" className="mx-1" />

        {/* Bullet List */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "bg-accent" : ""}
        >
          <List size={15} />
        </Button>

        {/* Ordered List */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive("orderedList") ? "bg-accent" : ""}
        >
          <ListOrdered size={15} />
        </Button>

        {/* Task List */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleTaskList().run()}
          className={editor.isActive("taskList") ? "bg-accent" : ""}
        >
          <CheckSquare size={15} />
        </Button>

        <Separator orientation="vertical" className="mx-1" />

        {/* Code Block */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive("codeBlock") ? "bg-accent" : ""}
        >
          <Code size={15} />
        </Button>
      </div>
    </BubbleMenu>
  );
}
