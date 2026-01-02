"use client";

import { useEffect, useRef, useState } from "react";
import { EditorContent, EditorContext, useEditor } from "@tiptap/react";
import { useEditorBridge } from "../../../contexts/EditorBridge";

// --- Tiptap Core Extensions ---
import { StarterKit } from "@tiptap/starter-kit";
import ImageResize from "tiptap-extension-resize-image";
import Image from "@tiptap/extension-image";
import { TaskItem, TaskList } from "@tiptap/extension-list";
import { TextAlign } from "@tiptap/extension-text-align";
import { Typography } from "@tiptap/extension-typography";
import { Highlight } from "@tiptap/extension-highlight";
import { Subscript } from "@tiptap/extension-subscript";
import { Superscript } from "@tiptap/extension-superscript";
import { Gapcursor, Selection } from "@tiptap/extensions";
import { TextStyleKit } from "@tiptap/extension-text-style";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import { FontFamily, TextStyle } from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import { TableKit } from "@tiptap/extension-table";
import { Dropcursor } from "@tiptap/extensions";
import { FontSizeStepper } from "../../extensions/font-size-stepper";

// --- UI Primitives ---
import { Button } from "../../tiptap-ui-primitive/button/button";
import { Spacer } from "../../tiptap-ui-primitive/spacer/spacer";
import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
} from "../../tiptap-ui-primitive/toolbar/toolbar";
import { BubbleMenuInline } from "../../tiptap-ui-primitive/bubble-menu/bubble-menu";

// --- Tiptap Node ---
import { ImageUploadNode } from "../../tiptap-node/image-upload-node/image-upload-node-extension";
import { HorizontalRule } from "../../tiptap-node/horizontal-rule-node/horizontal-rule-node-extension";
import "../../tiptap-node/blockquote-node/blockquote-node.scss";
import "../../tiptap-node/code-block-node/code-block-node.scss";
import "../../tiptap-node/horizontal-rule-node/horizontal-rule-node.scss";
import "../../tiptap-node/list-node/list-node.scss";
import "../../tiptap-node/image-node/image-node.scss";
import "../../tiptap-node/heading-node/heading-node.scss";

// --- Tiptap UI ---
import { HeadingDropdownMenu } from "../../tiptap-ui/heading-dropdown-menu";
import { ImageUploadButton } from "../../tiptap-ui/image-upload-button";
import { ListDropdownMenu } from "../../tiptap-ui/list-dropdown-menu";
import { BlockquoteButton } from "../../tiptap-ui/blockquote-button";
import { CodeBlockButton } from "../../tiptap-ui/code-block-button";
import {
  ColorHighlightPopover,
  ColorHighlightPopoverContent,
  ColorHighlightPopoverButton,
} from "../../tiptap-ui/color-highlight-popover";
import {
  LinkPopover,
  LinkContent,
  LinkButton,
} from "../../tiptap-ui/link-popover";
import { MarkButton } from "../../tiptap-ui/mark-button";
import { TextAlignButton } from "../../tiptap-ui/text-align-button";
import { UndoRedoButton } from "../../tiptap-ui/undo-redo-button";
import { FontFamilyDropdown } from "../../tiptap-ui/font-family-dropdown/font-family-dropdown";
import { ColorPicker } from "../../tiptap-ui/color-picker/color-picker";
import { TableDropdownMenu } from "../../tiptap-ui/table-dropdown-menu/table-dropdown-menu";
// --- Icons ---
import { ArrowLeftIcon } from "../../tiptap-icons/arrow-left-icon";
import { HighlighterIcon } from "../../tiptap-icons/highlighter-icon";
import { LinkIcon } from "../../tiptap-icons/link-icon";

// --- Hooks ---
import { useIsBreakpoint } from "../../../hooks/use-is-breakpoint";
import { useWindowSize } from "../../../hooks/use-window-size";
import { useCursorVisibility } from "../../../hooks/use-cursor-visibility";

// --- Components ---
import { ThemeToggle } from "../../tiptap-templates/simple/theme-toggle";

// --- Lib ---
import { handleImageUpload, MAX_FILE_SIZE } from "../../../lib/tiptap-utils";

// --- Styles ---
import "../simple/simple-editor.scss";



const MainToolbarContent = ({
  onHighlighterClick,
  onLinkClick,
  isMobile,
}: {
  onHighlighterClick: () => void;
  onLinkClick: () => void;
  isMobile: boolean;
}) => {
  return (
    <>
      <Spacer />
      <FontFamilyDropdown />
      <ColorPicker type="text" />
      <ToolbarGroup>
        <MarkButton type="bold" />
        <MarkButton type="italic" />
        <MarkButton type="strike" />
        <MarkButton type="code" />
        <MarkButton type="underline" />
        <UndoRedoButton action="undo" />
        <UndoRedoButton action="redo" />
      </ToolbarGroup>

      <ToolbarSeparator />

      <ToolbarGroup>
        <TextAlignButton align="left" />
        <TextAlignButton align="center" />
        <TextAlignButton align="right" />
        <TextAlignButton align="justify" />
        {/* <HeadingDropdownMenu levels={[1, 2, 3, 4]} portal={isMobile} />
        <ListDropdownMenu
          types={["bulletList", "orderedList", "taskList"]}
          portal={isMobile}
        />
        <BlockquoteButton />
        <CodeBlockButton /> */}
      </ToolbarGroup>

      <ToolbarSeparator />

      <ToolbarGroup>
        <HeadingDropdownMenu levels={[1, 2, 3, 4]} portal={isMobile} />
        <ListDropdownMenu
          types={["bulletList", "orderedList", "taskList"]}
          portal={isMobile}
        />
        <BlockquoteButton />
        {/* <ColorPicker type="background" /> */}
      </ToolbarGroup>
      <ToolbarGroup>
        <TableDropdownMenu />
        {/* {!isMobile ? (
          <ColorHighlightPopover />
        ) : (
          <ColorHighlightPopoverButton onClick={onHighlighterClick} />
        )}
        {!isMobile ? <LinkPopover /> : <LinkButton onClick={onLinkClick} />} */}
        {/* <MarkButton type="superscript" />
        <MarkButton type="subscript" /> */}
      </ToolbarGroup>

      <ToolbarGroup>
        {/* <TextAlignButton align="left" />
        <TextAlignButton align="center" />
        <TextAlignButton align="right" />
        <TextAlignButton align="justify" /> */}
      </ToolbarGroup>

      <ToolbarSeparator />

      <ToolbarGroup>
        <ImageUploadButton text="Add" />
      </ToolbarGroup>

      <Spacer />

      {isMobile && <ToolbarSeparator />}

      {/* <ToolbarGroup>
        <ThemeToggle />
      </ToolbarGroup> */}
    </>
  );
};

const MobileToolbarContent = ({
  type,
  onBack,
}: {
  type: "highlighter" | "link";
  onBack: () => void;
}) => (
  <>
    <ToolbarGroup>
      <Button data-style="ghost" onClick={onBack}>
        <ArrowLeftIcon className="tiptap-button-icon" />
        {type === "highlighter" ? (
          <HighlighterIcon className="tiptap-button-icon" />
        ) : (
          <LinkIcon className="tiptap-button-icon" />
        )}
      </Button>
    </ToolbarGroup>

    <ToolbarSeparator />

    {type === "highlighter" ? (
      <ColorHighlightPopoverContent />
    ) : (
      <LinkContent />
    )}
  </>
);

export function SimpleEditor() {
  const { setEditorContent, debouncedSave} = useEditorBridge();
  const isMobile = useIsBreakpoint();
  const { height } = useWindowSize();
  const [mobileView, setMobileView] = useState<"main" | "highlighter" | "link">(
    "main"
  );
  const toolbarRef = useRef<HTMLDivElement>(null);


  const editor = useEditor({
    immediatelyRender: false,
    editorProps: {
      attributes: {
        autocomplete: "off",
        autocorrect: "off",
        autocapitalize: "off",
        "aria-label": "Main content area, start typing to enter text.",
        class: "simple-editor",
      },
    },
    extensions: [
      StarterKit.configure({
        horizontalRule: false,
        link: {
          openOnClick: false,
          enableClickSelection: true,
        },
      }),
      HorizontalRule,
      Document,
      Paragraph,
      Text,
      Gapcursor,
      TextStyle,
      FontSizeStepper.configure({ step: 2, min: 8, defaultSize: 16 }),
      FontFamily.configure({
        types: ["textStyle"],
      }),
      Color.configure({ types: ["textStyle"] }),
      Highlight.configure({ multicolor: true }),
      TableKit.configure({
        table: { resizable: true },
      }),
      TextStyleKit,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      TaskList,
      TaskItem.configure({ nested: true }),
      Highlight.configure({ multicolor: true }),
      Image,
      Dropcursor,
      Typography,
      Superscript,
      Subscript,
      Selection,
      ImageUploadNode.configure({
        accept: "image/*",
        maxSize: MAX_FILE_SIZE,
        limit: 3,
        upload: handleImageUpload,
        onError: (error) => console.error("Upload failed:", error),
      }),
    ],
    content: "",
    onCreate: ({ editor }) => {
      console.log("🟢 Editor created");
      setEditorContent(editor);
    },
    onUpdate: ({ editor }) => {
      console.log("✏️ Editor updated - triggering debounced save");
      debouncedSave(editor);
    },
  });


  useEffect(() => {
    if (editor) {
      console.log("🔧 Setting editor content in context");
      setEditorContent(editor);
    }
  }, [editor, setEditorContent]);


  
  const rect = useCursorVisibility({
    editor,
    overlayHeight: toolbarRef.current?.getBoundingClientRect().height ?? 0,
  });

  
 

  useEffect(() => {
    if (!isMobile && mobileView !== "main") {
      setMobileView("main");
    }
  }, [isMobile, mobileView]);
  useEffect(() => {
    if (editor) {
      editor.commands.focus("start"); // or "end"
    }
  }, [editor]);

  useEffect(() => {
    if (!window?.visualViewport) return;

    const toolbar = document.querySelector(
      ".tiptap-toolbar[data-variant='fixed']"
    ) as HTMLElement | null;

    if (!toolbar) return;

    const updatePosition = () => {
      toolbar.style.top = `${window.visualViewport?.offsetTop}px`;
    };

    window.visualViewport.addEventListener("resize", updatePosition);
    window.visualViewport.addEventListener("scroll", updatePosition);

    updatePosition();

    return () => {
      window.visualViewport?.removeEventListener("resize", updatePosition);
      window.visualViewport?.removeEventListener("scroll", updatePosition);
    };
  }, []);

  return (
    <div className="simple-editor-wrapper">
      <EditorContext.Provider value={{ editor }}>
        <Toolbar
          ref={toolbarRef}
          style={{
            ...(isMobile
              ? {
                  bottom: `calc(100% - ${height - rect.y}px)`,
                }
              : {}),
          }}
        >
          {mobileView === "main" ? (
            <MainToolbarContent
              onHighlighterClick={() => setMobileView("highlighter")}
              onLinkClick={() => setMobileView("link")}
              isMobile={isMobile}
            />
          ) : (
            <MobileToolbarContent
              type={mobileView === "highlighter" ? "highlighter" : "link"}
              onBack={() => setMobileView("main")}
            />
          )}
        </Toolbar>

        <EditorContent
          editor={editor}
          role="presentation"
          autoFocus
          className="simple-editor-content"
        >
          {editor && <BubbleMenuInline />}
        </EditorContent>
      </EditorContext.Provider>
    </div>
  );
}
