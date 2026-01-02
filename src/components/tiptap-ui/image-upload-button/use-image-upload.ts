"use client"

import { useCallback, useEffect, useState } from "react"
import { useHotkeys } from "react-hotkeys-hook"
import { type Editor } from "@tiptap/react"

// --- Hooks ---
import { useTiptapEditor } from "../../../hooks/use-tiptap-editor"
import { useIsBreakpoint } from "../../../hooks/use-is-breakpoint"

// --- Lib ---
import { isExtensionAvailable } from "../../../lib/tiptap-utils"

// --- Icons ---
import { ImagePlusIcon } from "../../../components/tiptap-icons/image-plus-icon"

export const IMAGE_UPLOAD_SHORTCUT_KEY = "mod+shift+i"

/**
 * Configuration for the image upload functionality
 */
export interface UseImageUploadConfig {
  /**
   * The Tiptap editor instance.
   */
  editor?: Editor | null
  /**
   * Whether the button should hide when insertion is not available.
   * @default false
   */
  hideWhenUnavailable?: boolean
  /**
   * Callback function called after a successful image insertion.
   */
  onInserted?: () => void
}

/**
 * Checks if image can be inserted in the current editor state
 */
export function canInsertImage(editor: Editor | null): boolean {
  if (!editor || !editor.isEditable) return false
  if (!isExtensionAvailable(editor, "imageUpload")) return false

  return editor.can().insertContent({ type: "imageUpload" })
}

/**
 * Checks if image is currently active
 */
export function isImageActive(editor: Editor | null): boolean {
  if (!editor || !editor.isEditable) return false
  return editor.isActive("imageUpload")
}

/**
 * Inserts an image in the editor
 */
export async function insertImage(editor: Editor | null): Promise<boolean> {
  if (!editor || !editor.isEditable) return false
  if (!canInsertImage(editor)) return false

  try {
    // 1) pick file
    const input = document.createElement("input")
    input.type = "file"
    input.accept = "image/*"

    return new Promise((resolve) => {
      input.onchange = async () => {
        const file = input.files?.[0]
        if (!file) return resolve(false)

        // 2) convert to base64
        const reader = new FileReader()
        reader.onload = () => {
          const base64 = reader.result as string

          // 3) store in localStorage
          const images = JSON.parse(localStorage.getItem("tiptap-images") || "[]")
          images.push(base64)
          localStorage.setItem("tiptap-images", JSON.stringify(images))

          // 4) insert into editor
          editor
            .chain()
            .focus()
            .insertContent({
              type: "image",
              attrs: { src: base64 },
            })
            .run()

          resolve(true)
        }
        reader.onerror = () => resolve(false)
        reader.readAsDataURL(file)
      }
      input.click()
    })
  } catch {
    return false
  }
}


/**
 * Determines if the image button should be shown
 */
export function shouldShowButton(props: {
  editor: Editor | null
  hideWhenUnavailable: boolean
}): boolean {
  const { editor, hideWhenUnavailable } = props

  if (!editor || !editor.isEditable) return false
  if (!isExtensionAvailable(editor, "imageUpload")) return false

  if (hideWhenUnavailable && !editor.isActive("code")) {
    return canInsertImage(editor)
  }

  return true
}

/**
 * Custom hook that provides image functionality for Tiptap editor
 *
 * @example
 * ```tsx
 * // Simple usage - no params needed
 * function MySimpleImageButton() {
 *   const { isVisible, handleImage } = useImage()
 *
 *   if (!isVisible) return null
 *
 *   return <button onClick={handleImage}>Add Image</button>
 * }
 *
 * // Advanced usage with configuration
 * function MyAdvancedImageButton() {
 *   const { isVisible, handleImage, label, isActive } = useImage({
 *     editor: myEditor,
 *     hideWhenUnavailable: true,
 *     onInserted: () => console.log('Image inserted!')
 *   })
 *
 *   if (!isVisible) return null
 *
 *   return (
 *     <MyButton
 *       onClick={handleImage}
 *       aria-pressed={isActive}
 *       aria-label={label}
 *     >
 *       Add Image
 *     </MyButton>
 *   )
 * }
 * ```
 */
export function useImageUpload(config?: UseImageUploadConfig) {
  const {
    editor: providedEditor,
    hideWhenUnavailable = false,
    onInserted,
  } = config || {}

  const { editor } = useTiptapEditor(providedEditor)
  const isMobile = useIsBreakpoint()
  const [isVisible, setIsVisible] = useState<boolean>(true)
  const canInsert = canInsertImage(editor)
  const isActive = isImageActive(editor)

  useEffect(() => {
    if (!editor) return

    const handleSelectionUpdate = () => {
      setIsVisible(shouldShowButton({ editor, hideWhenUnavailable }))
    }

    handleSelectionUpdate()

    editor.on("selectionUpdate", handleSelectionUpdate)

    return () => {
      editor.off("selectionUpdate", handleSelectionUpdate)
    }
  }, [editor, hideWhenUnavailable])

  const handleImage = useCallback(async () => {
    if (!editor) return false

    const success = insertImage(editor)
    if (await success) {
      onInserted?.()
    }
    return success
  }, [editor, onInserted])

  useHotkeys(
    IMAGE_UPLOAD_SHORTCUT_KEY,
    (event) => {
      event.preventDefault()
      handleImage()
    },
    {
      enabled: isVisible && canInsert,
      enableOnContentEditable: !isMobile,
      enableOnFormTags: true,
    }
  )

  return {
    isVisible,
    isActive,
    handleImage,
    canInsert,
    label: "Add image",
    shortcutKeys: IMAGE_UPLOAD_SHORTCUT_KEY,
    Icon: ImagePlusIcon,
  }
}
