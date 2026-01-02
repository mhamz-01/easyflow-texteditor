import * as react_jsx_runtime from 'react/jsx-runtime';
import { Editor as Editor$1 } from '@tiptap/react';
import * as react from 'react';
import react__default, { RefObject } from 'react';
import { Editor as Editor$2 } from '@tiptap/core';
import * as next_dist_compiled__next_font from 'next/dist/compiled/@next/font';
import { ClassValue } from 'clsx';

interface EditorSubTab$1 {
    id: string;
    title: string;
    content: any | null;
}
interface EditorTab$1 {
    id: string;
    title: string;
    content: any | null;
    subtabs: EditorSubTab$1[];
}

type EditorChangeSource = "editor" | "tab-switch" | "subtab-switch" | "add-tab" | "add-subtab" | "delete-tab" | "delete-subtab" | "restore" | "storage" | "manual";
interface EditorChangePayload {
    tabs: EditorTab$1[];
    activeTabId: string;
    activeSubTabId: string | null;
    source: EditorChangeSource;
}

interface EditorProps {
    onChange?: (payload: EditorChangePayload) => void;
    className?: string;
    style?: React.CSSProperties;
}
declare function Editor({ onChange, className, style }: EditorProps): react_jsx_runtime.JSX.Element;

type UserRef<T> = ((instance: T | null) => void) | React.RefObject<T | null> | null | undefined;
declare const useComposedRef: <T extends HTMLElement>(libRef: React.RefObject<T | null>, userRef: UserRef<T>) => (instance: T | null) => void;

type RectState = Omit<DOMRect, "toJSON">;
interface ElementRectOptions {
    /**
     * The element to track. Can be an Element, ref, or selector string.
     * Defaults to document.body if not provided.
     */
    element?: Element | React.RefObject<Element> | string | null;
    /**
     * Whether to enable rect tracking
     */
    enabled?: boolean;
    /**
     * Throttle delay in milliseconds for rect updates
     */
    throttleMs?: number;
    /**
     * Whether to use ResizeObserver for more accurate tracking
     */
    useResizeObserver?: boolean;
}
/**
 * Custom hook that tracks an element's bounding rectangle and updates on resize, scroll, etc.
 *
 * @param options Configuration options for element rect tracking
 * @returns The current bounding rectangle of the element
 */
declare function useElementRect({ element, enabled, throttleMs, useResizeObserver, }?: ElementRectOptions): RectState;
/**
 * Convenience hook for tracking document.body rect
 */
declare function useBodyRect(options?: Omit<ElementRectOptions, "element">): RectState;
/**
 * Convenience hook for tracking a ref element's rect
 */
declare function useRefRect<T extends Element>(ref: React.RefObject<T>, options?: Omit<ElementRectOptions, "element">): RectState;

interface CursorVisibilityOptions {
    /**
     * The Tiptap editor instance
     */
    editor?: Editor$1 | null;
    /**
     * Reference to the toolbar element that may obscure the cursor
     */
    overlayHeight?: number;
}
/**
 * Custom hook that ensures the cursor remains visible when typing in a Tiptap editor.
 * Automatically scrolls the window when the cursor would be hidden by the toolbar.
 *
 * @param options.editor The Tiptap editor instance
 * @param options.overlayHeight Toolbar height to account for
 * @returns The bounding rect of the body
 */
declare function useCursorVisibility({ editor, overlayHeight, }: CursorVisibilityOptions): RectState;

type BreakpointMode = "min" | "max";
/**
 * Hook to detect whether the current viewport matches a given breakpoint rule.
 * Example:
 *   useIsBreakpoint("max", 768)   // true when width < 768
 *   useIsBreakpoint("min", 1024)  // true when width >= 1024
 */
declare function useIsBreakpoint(mode?: BreakpointMode, breakpoint?: number): boolean;

type Orientation = "horizontal" | "vertical" | "both";
interface MenuNavigationOptions<T> {
    /**
     * The Tiptap editor instance, if using with a Tiptap editor.
     */
    editor?: Editor$1 | null;
    /**
     * Reference to the container element for handling keyboard events.
     */
    containerRef?: React.RefObject<HTMLElement | null>;
    /**
     * Search query that affects the selected item.
     */
    query?: string;
    /**
     * Array of items to navigate through.
     */
    items: T[];
    /**
     * Callback fired when an item is selected.
     */
    onSelect?: (item: T) => void;
    /**
     * Callback fired when the menu should close.
     */
    onClose?: () => void;
    /**
     * The navigation orientation of the menu.
     * @default "vertical"
     */
    orientation?: Orientation;
    /**
     * Whether to automatically select the first item when the menu opens.
     * @default true
     */
    autoSelectFirstItem?: boolean;
}
/**
 * Hook that implements keyboard navigation for dropdown menus and command palettes.
 *
 * Handles arrow keys, tab, home/end, enter for selection, and escape to close.
 * Works with both Tiptap editors and regular DOM elements.
 *
 * @param options - Configuration options for the menu navigation
 * @returns Object containing the selected index and a setter function
 */
declare function useMenuNavigation<T>({ editor, containerRef, query, items, onSelect, onClose, orientation, autoSelectFirstItem, }: MenuNavigationOptions<T>): {
    selectedIndex: number | undefined;
    setSelectedIndex: react.Dispatch<react.SetStateAction<number>>;
};

declare function useIsMobile(): boolean;

type ScrollTarget = RefObject<HTMLElement> | Window | null | undefined;
interface UseScrollingOptions {
    debounce?: number;
    fallbackToDocument?: boolean;
}
declare function useScrolling(target?: ScrollTarget, options?: UseScrollingOptions): boolean;

interface ThrottleSettings {
    leading?: boolean | undefined;
    trailing?: boolean | undefined;
}
/**
 * A hook that returns a throttled callback function.
 *
 * @param fn The function to throttle
 * @param wait The time in ms to wait before calling the function
 * @param dependencies The dependencies to watch for changes
 * @param options The throttle options
 */
declare function useThrottledCallback<T extends (...args: any[]) => any>(fn: T, wait?: number, dependencies?: React.DependencyList, options?: ThrottleSettings): {
    (this: ThisParameterType<T>, ...args: Parameters<T>): ReturnType<T>;
    cancel: () => void;
    flush: () => void;
};

/**
 * Hook that provides access to a Tiptap editor instance.
 *
 * Accepts an optional editor instance directly, or falls back to retrieving
 * the editor from the Tiptap context if available. This allows components
 * to work both when given an editor directly and when used within a Tiptap
 * editor context.
 *
 * @param providedEditor - Optional editor instance to use instead of the context editor
 * @returns The provided editor or the editor from context, whichever is available
 */
declare function useTiptapEditor(providedEditor?: Editor$1 | null): {
    editor: Editor$1 | null;
    editorState?: Editor$1["state"];
    canCommand?: Editor$1["can"];
};

/**
 * Hook that executes a callback when the component unmounts.
 *
 * @param callback Function to be called on component unmount
 */
declare const useUnmount: (callback: (...args: Array<any>) => any) => void;

interface WindowSizeState {
    /**
     * The width of the window's visual viewport in pixels.
     */
    width: number;
    /**
     * The height of the window's visual viewport in pixels.
     */
    height: number;
    /**
     * The distance from the top of the visual viewport to the top of the layout viewport.
     * Particularly useful for handling mobile keyboard appearance.
     */
    offsetTop: number;
    /**
     * The distance from the left of the visual viewport to the left of the layout viewport.
     */
    offsetLeft: number;
    /**
     * The scale factor of the visual viewport.
     * This is useful for scaling elements based on the current zoom level.
     */
    scale: number;
}
/**
 * Hook that tracks the window's visual viewport dimensions, position, and provides
 * a CSS transform for positioning elements.
 *
 * Uses the Visual Viewport API to get accurate measurements, especially important
 * for mobile devices where virtual keyboards can change the visible area.
 * Only updates state when values actually change to optimize performance.
 *
 * @returns An object containing viewport properties and a CSS transform string
 */
declare function useWindowSize(): WindowSizeState;

type EditorBridgeValue = {
    editorContent: Editor$2 | null;
    setEditorContent: (editor: Editor$2 | null) => void;
    debouncedSave: (editor: Editor$2) => void;
};
declare function EditorBridgeProvider({ children, value, }: {
    children: react__default.ReactNode;
    value: EditorBridgeValue;
}): react_jsx_runtime.JSX.Element;
declare function useEditorBridge(): EditorBridgeValue;

declare const GRADIENT_ROWS_70: string[];

type TabContent$1 = any | null;
interface EditorSubTab {
    id: string;
    title: string;
    content: TabContent$1;
}
interface EditorTab {
    id: string;
    title: string;
    content: TabContent$1;
    subtabs: EditorSubTab[];
}

type TabContent = any;
declare function loadTabs(): EditorTab[];
declare function saveTabs(tabs: EditorTab[]): void;
declare function loadActiveTab(): string;
declare function saveActiveTab(id: string): void;

declare const inter: next_dist_compiled__next_font.NextFont;
declare const roboto: next_dist_compiled__next_font.NextFont;
declare const opensans: next_dist_compiled__next_font.NextFont;
declare const poppins: next_dist_compiled__next_font.NextFont;
declare const montserrat: next_dist_compiled__next_font.NextFont;
declare const lato: next_dist_compiled__next_font.NextFont;
declare const oswald: next_dist_compiled__next_font.NextFont;
declare const raleway: next_dist_compiled__next_font.NextFont;
declare const merriweather: next_dist_compiled__next_font.NextFont;
declare const playfair: next_dist_compiled__next_font.NextFont;
declare const ubuntu: next_dist_compiled__next_font.NextFont;
declare const ptsans: next_dist_compiled__next_font.NextFont;
declare const barlow: next_dist_compiled__next_font.NextFont;
declare const fira: next_dist_compiled__next_font.NextFont;
declare const nunito: next_dist_compiled__next_font.NextFont;
declare const cabin: next_dist_compiled__next_font.NextFont;
declare const bebas: next_dist_compiled__next_font.NextFont;
declare const sourceserif: next_dist_compiled__next_font.NextFont;
declare const librebask: next_dist_compiled__next_font.NextFont;
declare const rubik: next_dist_compiled__next_font.NextFont;
declare const inconsolata: next_dist_compiled__next_font.NextFont;
declare const worksans: next_dist_compiled__next_font.NextFont;
declare const mulish: next_dist_compiled__next_font.NextFont;
declare const quicksand: next_dist_compiled__next_font.NextFont;
declare const kanit: next_dist_compiled__next_font.NextFont;
declare const teko: next_dist_compiled__next_font.NextFont;
declare const josefin: next_dist_compiled__next_font.NextFont;
declare const philosopher: next_dist_compiled__next_font.NextFont;
declare const dancing: next_dist_compiled__next_font.NextFont;
declare const notoserif: next_dist_compiled__next_font.NextFont;
declare const manrope: next_dist_compiled__next_font.NextFont;
declare const spacegrotesk: next_dist_compiled__next_font.NextFont;
declare const FONT_OPTIONS: {
    label: string;
    font: next_dist_compiled__next_font.NextFont;
}[];

declare function fileToBase64(file: File): Promise<string>;
declare function saveImageBase64(key: string, base64: string): void;
declare function loadImageBase64(key: string): string | null;

declare function cn(...inputs: ClassValue[]): string;

export { type CursorVisibilityOptions, Editor, EditorBridgeProvider, type EditorBridgeValue, type EditorChangePayload, type EditorChangeSource, type ElementRectOptions, FONT_OPTIONS, GRADIENT_ROWS_70, type RectState, type TabContent, type WindowSizeState, barlow, bebas, cabin, cn, dancing, fileToBase64, fira, inconsolata, inter, josefin, kanit, lato, librebask, loadActiveTab, loadImageBase64, loadTabs, manrope, merriweather, montserrat, mulish, notoserif, nunito, opensans, oswald, philosopher, playfair, poppins, ptsans, quicksand, raleway, roboto, rubik, saveActiveTab, saveImageBase64, saveTabs, sourceserif, spacegrotesk, teko, ubuntu, useBodyRect, useComposedRef, useCursorVisibility, useEditorBridge, useElementRect, useIsBreakpoint, useIsMobile, useMenuNavigation, useRefRect, useScrolling, useThrottledCallback, useTiptapEditor, useUnmount, useWindowSize, worksans };
