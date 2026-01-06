"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Editor: () => Editor,
  EditorBridgeProvider: () => EditorBridgeProvider,
  FONT_OPTIONS: () => FONT_OPTIONS,
  GRADIENT_ROWS_70: () => GRADIENT_ROWS_70,
  cn: () => cn,
  fileToBase64: () => fileToBase64,
  loadActiveTab: () => loadActiveTab,
  loadImageBase64: () => loadImageBase64,
  loadTabs: () => loadTabs,
  saveActiveTab: () => saveActiveTab,
  saveImageBase64: () => saveImageBase64,
  saveTabs: () => saveTabs,
  useBodyRect: () => useBodyRect,
  useComposedRef: () => useComposedRef,
  useCursorVisibility: () => useCursorVisibility,
  useEditorBridge: () => useEditorBridge,
  useElementRect: () => useElementRect,
  useIsBreakpoint: () => useIsBreakpoint,
  useIsMobile: () => useIsMobile,
  useMenuNavigation: () => useMenuNavigation,
  useRefRect: () => useRefRect,
  useScrolling: () => useScrolling,
  useThrottledCallback: () => useThrottledCallback,
  useTiptapEditor: () => useTiptapEditor,
  useUnmount: () => useUnmount,
  useWindowSize: () => useWindowSize
});
module.exports = __toCommonJS(index_exports);

// src/components/ui/sidebar.tsx
var React2 = __toESM(require("react"));
var import_react_slot2 = require("@radix-ui/react-slot");
var import_class_variance_authority2 = require("class-variance-authority");
var import_lucide_react2 = require("lucide-react");

// src/hooks/use-mobile.ts
var React = __toESM(require("react"));
var MOBILE_BREAKPOINT = 768;
function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(void 0);
  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return !!isMobile;
}

// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/ui/button.tsx
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority = require("class-variance-authority");
var import_jsx_runtime = require("react/jsx-runtime");
var buttonVariants = (0, import_class_variance_authority.cva)(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outlineFontFamily: "border rounded-sm text-left bg-transparent   shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-transparent dark:border-[#a3a3a8] dark:hover:bg-input/50",
        outline: "border bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-transparent dark:border-input dark:hover:bg-input/50",
        tableButton: "bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-transparent dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-7 px-4 py-2 has-[>svg]:px-3",
        colorbuttonsize: " px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? import_react_slot.Slot : "button";
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}

// src/components/ui/input.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}

// src/components/ui/separator.tsx
var SeparatorPrimitive = __toESM(require("@radix-ui/react-separator"));
var import_jsx_runtime3 = require("react/jsx-runtime");
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    SeparatorPrimitive.Root,
    {
      "data-slot": "separator",
      decorative,
      orientation,
      className: cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      ),
      ...props
    }
  );
}

// src/components/ui/sheet.tsx
var SheetPrimitive = __toESM(require("@radix-ui/react-dialog"));
var import_lucide_react = require("lucide-react");
var import_jsx_runtime4 = require("react/jsx-runtime");
function Sheet({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(SheetPrimitive.Root, { "data-slot": "sheet", ...props });
}
function SheetPortal({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(SheetPrimitive.Portal, { "data-slot": "sheet-portal", ...props });
}
function SheetOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    SheetPrimitive.Overlay,
    {
      "data-slot": "sheet-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function SheetContent({
  className,
  children,
  side = "right",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(SheetPortal, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(SheetOverlay, {}),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
      SheetPrimitive.Content,
      {
        "data-slot": "sheet-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          className
        ),
        ...props,
        children: [
          children,
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(SheetPrimitive.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_lucide_react.XIcon, { className: "size-4" }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function SheetHeader({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    "div",
    {
      "data-slot": "sheet-header",
      className: cn("flex flex-col gap-1.5 p-4", className),
      ...props
    }
  );
}
function SheetTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    SheetPrimitive.Title,
    {
      "data-slot": "sheet-title",
      className: cn("text-foreground font-semibold", className),
      ...props
    }
  );
}
function SheetDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    SheetPrimitive.Description,
    {
      "data-slot": "sheet-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}

// src/components/ui/tooltip.tsx
var TooltipPrimitive = __toESM(require("@radix-ui/react-tooltip"));
var import_jsx_runtime5 = require("react/jsx-runtime");
function TooltipProvider({
  delayDuration = 0,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    TooltipPrimitive.Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration,
      ...props
    }
  );
}

// src/components/ui/sidebar.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var SIDEBAR_COOKIE_NAME = "sidebar_state";
var SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
var SIDEBAR_WIDTH = "16rem";
var SIDEBAR_WIDTH_MOBILE = "18rem";
var SIDEBAR_WIDTH_ICON = "3rem";
var SidebarContext = React2.createContext(null);
function useSidebar() {
  const context = React2.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
}
function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}) {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = React2.useState(false);
  const [_open, _setOpen] = React2.useState(defaultOpen);
  const open = openProp ?? _open;
  const setOpen = React2.useCallback(
    (value) => {
      const openState = typeof value === "function" ? value(open) : value;
      if (setOpenProp) {
        setOpenProp(openState);
      } else {
        _setOpen(openState);
      }
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    },
    [setOpenProp, open]
  );
  const toggleSidebar = React2.useCallback(() => {
    return isMobile ? setOpenMobile((open2) => !open2) : setOpen((open2) => !open2);
  }, [isMobile, setOpen, setOpenMobile]);
  const state = open ? "expanded" : "collapsed";
  const contextValue = React2.useMemo(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(SidebarContext.Provider, { value: contextValue, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(TooltipProvider, { delayDuration: 0, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": SIDEBAR_WIDTH,
        "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
        ...style
      },
      className: cn(
        "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
        className
      ),
      ...props,
      children
    }
  ) }) });
}
function Sidebar({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  ...props
}) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
  if (collapsible === "none") {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "div",
      {
        "data-slot": "sidebar",
        className: cn(
          "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
          className
        ),
        ...props,
        children
      }
    );
  }
  if (isMobile) {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Sheet, { open: openMobile, onOpenChange: setOpenMobile, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
      SheetContent,
      {
        "data-sidebar": "sidebar",
        "data-slot": "sidebar",
        "data-mobile": "true",
        className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
        style: {
          "--sidebar-width": SIDEBAR_WIDTH_MOBILE
        },
        side,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(SheetHeader, { className: "sr-only", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(SheetTitle, { children: "Sidebar" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(SheetDescription, { children: "Displays the mobile sidebar." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "flex h-full w-full flex-col", children })
        ]
      }
    ) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
    "div",
    {
      className: "group peer text-sidebar-foreground hidden md:block",
      "data-state": state,
      "data-collapsible": state === "collapsed" ? collapsible : "",
      "data-variant": variant,
      "data-side": side,
      "data-slot": "sidebar",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "div",
          {
            "data-slot": "sidebar-gap",
            className: cn(
              "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
              "group-data-[collapsible=offcanvas]:w-0",
              "group-data-[side=right]:rotate-180",
              variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
            )
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "div",
          {
            "data-slot": "sidebar-container",
            className: cn(
              "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
              side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
              // Adjust the padding for floating and inset variants.
              variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
              className
            ),
            ...props,
            children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
              "div",
              {
                "data-sidebar": "sidebar",
                "data-slot": "sidebar-inner",
                className: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm",
                children
              }
            )
          }
        )
      ]
    }
  );
}
function SidebarTrigger({
  className,
  onClick,
  ...props
}) {
  const { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
    Button,
    {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      className: cn("size-7", className),
      onClick: (event) => {
        onClick?.(event);
        toggleSidebar();
      },
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react2.PanelLeftIcon, {}),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
}
function SidebarInset({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "main",
    {
      "data-slot": "sidebar-inset",
      className: cn(
        "bg-background relative flex w-full flex-1 flex-col",
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        className
      ),
      ...props
    }
  );
}
function SidebarContent({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "div",
    {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      className: cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className
      ),
      ...props
    }
  );
}
function SidebarGroup({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "div",
    {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      className: cn("relative flex w-full min-w-0 flex-col p-2", className),
      ...props
    }
  );
}
function SidebarGroupLabel({
  className,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? import_react_slot2.Slot : "div";
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    Comp,
    {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      className: cn(
        "text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className
      ),
      ...props
    }
  );
}
function SidebarMenu({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "ul",
    {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      className: cn("flex w-full min-w-0 flex-col gap-1", className),
      ...props
    }
  );
}
function SidebarMenuItem({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "li",
    {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      className: cn("group/menu-item relative", className),
      ...props
    }
  );
}
var sidebarMenuButtonVariants = (0, import_class_variance_authority2.cva)(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

// src/components/editor-shell/EditorShell.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
function EditorShell({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "div",
    {
      className: "\r\n        relative\r\n        w-full\r\n        h-full\r\n        overflow-hidden\r\n        border\r\n        rounded-md\r\n        bg-background\r\n      ",
      "data-easyflow-editor": true,
      children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(SidebarProvider, { children })
    }
  );
}

// src/components/editorLayout/editorLayout.tsx
var import_react3 = require("react");

// src/components/sidebar/EditorSidebar.tsx
var import_react = require("react");
var import_lucide_react4 = require("lucide-react");
var import_framer_motion = require("framer-motion");

// src/components/ui/dropdown-menu.tsx
var DropdownMenuPrimitive = __toESM(require("@radix-ui/react-dropdown-menu"));
var import_lucide_react3 = require("lucide-react");
var import_jsx_runtime8 = require("react/jsx-runtime");
function DropdownMenu({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(DropdownMenuPrimitive.Root, { "data-slot": "dropdown-menu", ...props });
}
function DropdownMenuTrigger({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    DropdownMenuPrimitive.Trigger,
    {
      "data-slot": "dropdown-menu-trigger",
      ...props
    }
  );
}
function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    DropdownMenuPrimitive.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        className
      ),
      ...props
    }
  ) });
}
function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    DropdownMenuPrimitive.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}

// src/components/sidebar/EditorSidebar.tsx
var import_lucide_react5 = require("lucide-react");
var import_jsx_runtime9 = require("react/jsx-runtime");
var tabVariants = {
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
var subtabVariants = {
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
function AppSidebar({
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
  onDeleteSubTab
}) {
  const [editingId, setEditingId] = (0, import_react.useState)(null);
  const [editingSubId, setEditingSubId] = (0, import_react.useState)(null);
  const [tempTitle, setTempTitle] = (0, import_react.useState)("");
  const [openTabs, setOpenTabs] = (0, import_react.useState)({});
  const startRenameTab = (id, title) => {
    setEditingId(id);
    setEditingSubId(null);
    setTempTitle(title);
  };
  const startRenameSubTab = (id, title) => {
    setEditingSubId(id);
    setEditingId(null);
    setTempTitle(title);
  };
  const commitRenameTab = () => {
    if (!editingId) return;
    onRename(editingId, tempTitle.trim() || "Untitled");
    setEditingId(null);
  };
  const commitRenameSubTab = (tabId) => {
    if (!editingSubId || !onRenameSubTab) return;
    onRenameSubTab(tabId, editingSubId, tempTitle.trim() || "Untitled");
    setEditingSubId(null);
  };
  const toggleTabOpen = (tabId) => {
    setOpenTabs((prev) => ({
      ...prev,
      [tabId]: !prev[tabId]
    }));
  };
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Sidebar, { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SidebarContent, { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(SidebarGroup, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(SidebarGroupLabel, { className: "flex items-center justify-between", children: [
      "Documents",
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        "button",
        {
          onClick: onAddTab,
          className: "rounded p-1 transition-all duration-200 hover:bg-accent hover:scale-110",
          "aria-label": "Add new document",
          children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react4.Plus, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SidebarMenu, { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_framer_motion.AnimatePresence, { mode: "popLayout", children: tabs.map((tab) => {
      const isOpen = openTabs[tab.id];
      const hasSubtabs = tab.subtabs.length > 0;
      const isActiveTab = tab.id === activeTabId && !activeSubTabId;
      return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        import_framer_motion.motion.div,
        {
          variants: tabVariants,
          initial: "initial",
          animate: "animate",
          exit: "exit",
          layout: true,
          children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(SidebarMenuItem, { className: "list-none", children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
              "div",
              {
                className: `
                          group flex items-center gap-2 rounded-md px-2 py-1.5
                          transition-all duration-200 ease-in-out
                          ${isActiveTab ? "bg-accent" : "hover:bg-accent/50"}
                        `,
                children: [
                  hasSubtabs && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                    "button",
                    {
                      onClick: (e) => {
                        e.stopPropagation();
                        toggleTabOpen(tab.id);
                      },
                      className: "flex h-5 w-5 items-center justify-center rounded transition-all duration-200 hover:bg-accent/80",
                      "aria-label": isOpen ? "Collapse subtabs" : "Expand subtabs",
                      children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                        import_lucide_react5.ChevronRight,
                        {
                          size: 14,
                          className: `transition-transform duration-300 ease-in-out ${isOpen ? "rotate-90" : ""}`
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                    import_lucide_react4.FileText,
                    {
                      size: 16,
                      className: `flex-shrink-0 transition-all duration-200 ${hasSubtabs ? "" : "ml-5"} ${isActiveTab ? "opacity-100" : "opacity-60 group-hover:opacity-100"}`
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "flex-1 min-w-0", children: editingId === tab.id ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                    Input,
                    {
                      value: tempTitle,
                      autoFocus: true,
                      onChange: (e) => setTempTitle(e.target.value),
                      onBlur: commitRenameTab,
                      onKeyDown: (e) => {
                        if (e.key === "Enter") commitRenameTab();
                        if (e.key === "Escape") setEditingId(null);
                      },
                      className: "h-7 transition-all duration-200"
                    }
                  ) : /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                    "button",
                    {
                      className: "w-full truncate text-left text-sm transition-colors duration-200",
                      onClick: () => onSelect(tab.id),
                      onDoubleClick: () => startRenameTab(tab.id, tab.title),
                      children: tab.title
                    }
                  ) }),
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(DropdownMenu, { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                      "button",
                      {
                        className: "opacity-0 group-hover:opacity-100 rounded p-1 transition-all duration-200 hover:bg-accent/80",
                        "aria-label": "Tab options",
                        children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react4.MoreHorizontal, { size: 14 })
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(DropdownMenuContent, { align: "end", className: "w-40", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                        DropdownMenuItem,
                        {
                          onClick: () => {
                            onAddSubTab(tab.id);
                            setOpenTabs((prev) => ({
                              ...prev,
                              [tab.id]: true
                            }));
                          },
                          className: "cursor-pointer transition-colors duration-150",
                          children: "Add subtab"
                        }
                      ),
                      canDeleteTab && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                        DropdownMenuItem,
                        {
                          className: "text-red-500 cursor-pointer transition-colors duration-150 focus:text-red-600",
                          onClick: (e) => {
                            e.stopPropagation();
                            onDelete(tab.id);
                          },
                          children: "Delete"
                        }
                      )
                    ] })
                  ] })
                ]
              }
            ),
            hasSubtabs && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
              "div",
              {
                className: `
                            grid transition-all duration-300 ease-in-out
                            ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
                          `,
                children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "pt-1 space-y-1", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_framer_motion.AnimatePresence, { mode: "popLayout", children: tab.subtabs.map((st) => {
                  const isActiveSubTab = st.id === activeSubTabId;
                  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
                    import_framer_motion.motion.div,
                    {
                      variants: subtabVariants,
                      initial: "initial",
                      animate: "animate",
                      exit: "exit",
                      layout: true,
                      className: `
                                        group ml-9 flex items-center gap-2 rounded-md px-2 py-1.5 text-sm
                                        transition-all duration-200 ease-in-out
                                        ${isActiveSubTab ? "bg-accent" : "hover:bg-accent/50"}
                                      `,
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                          import_lucide_react4.FileText,
                          {
                            size: 14,
                            className: `flex-shrink-0 transition-all duration-200 ${isActiveSubTab ? "opacity-100" : "opacity-50 group-hover:opacity-100"}`
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "flex-1 min-w-0", children: editingSubId === st.id ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                          Input,
                          {
                            value: tempTitle,
                            autoFocus: true,
                            onChange: (e) => setTempTitle(e.target.value),
                            onBlur: () => commitRenameSubTab(tab.id),
                            onKeyDown: (e) => {
                              if (e.key === "Enter")
                                commitRenameSubTab(tab.id);
                              if (e.key === "Escape")
                                setEditingSubId(null);
                            },
                            className: "h-6 transition-all duration-200"
                          }
                        ) : /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                          "button",
                          {
                            className: "w-full truncate text-left transition-colors duration-200",
                            onClick: () => onSelect(tab.id, st.id),
                            onDoubleClick: () => startRenameSubTab(st.id, st.title),
                            children: st.title
                          }
                        ) }),
                        onDeleteSubTab && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(DropdownMenu, { children: [
                          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                            "button",
                            {
                              className: "opacity-0 group-hover:opacity-100 rounded p-1 transition-all duration-200 hover:bg-accent/80",
                              "aria-label": "Subtab options",
                              children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react4.MoreHorizontal, { size: 14 })
                            }
                          ) }),
                          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                            DropdownMenuContent,
                            {
                              align: "end",
                              className: "w-40",
                              children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                                DropdownMenuItem,
                                {
                                  className: "text-red-500 cursor-pointer transition-colors duration-150 focus:text-red-600",
                                  onClick: () => onDeleteSubTab(tab.id, st.id),
                                  children: "Delete"
                                }
                              )
                            }
                          )
                        ] })
                      ]
                    },
                    st.id
                  );
                }) }) }) })
              }
            )
          ] })
        },
        tab.id
      );
    }) }) })
  ] }) }) });
}

// src/contexts/EditorBridge.tsx
var import_react2 = require("react");
var import_jsx_runtime10 = require("react/jsx-runtime");
var EditorBridgeContext = (0, import_react2.createContext)(
  void 0
);
function EditorBridgeProvider({
  children,
  value
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(EditorBridgeContext.Provider, { value, children });
}
function useEditorBridge() {
  const ctx = (0, import_react2.useContext)(EditorBridgeContext);
  if (!ctx) {
    throw new Error("useEditorBridge must be used within EditorBridgeProvider");
  }
  return ctx;
}

// src/lib/editorStorage.ts
var STORAGE_KEY = "tiptap-tabs-v1";
var ACTIVE_TAB_KEY = "tiptap-active-tab";
function loadTabs() {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem("tiptap-tabs-v1");
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}
function saveTabs(tabs) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tabs));
}
function loadActiveTab() {
  if (typeof window === "undefined") return "1";
  return localStorage.getItem(ACTIVE_TAB_KEY) ?? "1";
}
function saveActiveTab(id) {
  if (typeof window === "undefined") return;
  localStorage.setItem(ACTIVE_TAB_KEY, id);
}

// src/components/editorLayout/editorLayout.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
function EditorLayout({ children, onChange }) {
  const [editor, setEditor] = (0, import_react3.useState)(null);
  const [tabs, setTabs] = (0, import_react3.useState)([]);
  const [activeTabId, setActiveTabId] = (0, import_react3.useState)("");
  const [activeSubTabId, setActiveSubTabId] = (0, import_react3.useState)(null);
  const debouncedSaveRef = (0, import_react3.useRef)(null);
  const lastRestoredRef = (0, import_react3.useRef)(null);
  const isRestoringRef = (0, import_react3.useRef)(false);
  const onChangeDebounceRef = (0, import_react3.useRef)(null);
  const emitChangeDebounced = (0, import_react3.useCallback)(
    (payload) => {
      if (!onChange) return;
      if (onChangeDebounceRef.current) {
        clearTimeout(onChangeDebounceRef.current);
      }
      onChangeDebounceRef.current = setTimeout(() => {
        onChange(payload);
      }, 100);
    },
    [onChange]
  );
  const emitChange = (0, import_react3.useCallback)(
    (source) => {
      if (!onChange) return;
      emitChangeDebounced({
        tabs,
        activeTabId,
        activeSubTabId,
        source
      });
    },
    [emitChangeDebounced, tabs, activeTabId, activeSubTabId]
  );
  (0, import_react3.useEffect)(() => {
    const initialTabs = loadTabs();
    if (initialTabs.length === 0) {
      setTabs([{ id: "1", title: "Tab 1", content: null, subtabs: [] }]);
      setActiveTabId("1");
    } else {
      setTabs(initialTabs);
      setActiveTabId(initialTabs[0].id);
    }
  }, []);
  (0, import_react3.useEffect)(() => {
    saveTabs(tabs);
  }, [tabs]);
  const saveCurrentContent = (0, import_react3.useCallback)(() => {
    if (!editor) return tabs;
    const json = editor.getJSON();
    const updatedTabs = tabs.map((tab) => {
      if (tab.id !== activeTabId) return tab;
      if (activeSubTabId) {
        return {
          ...tab,
          subtabs: tab.subtabs.map(
            (st) => st.id === activeSubTabId ? { ...st, content: json } : st
          )
        };
      }
      return { ...tab, content: json };
    });
    return updatedTabs;
  }, [editor, tabs, activeTabId, activeSubTabId]);
  const saveFromEditor = (0, import_react3.useCallback)(
    (editorInstance, source = "editor") => {
      const json = editorInstance.getJSON();
      setTabs((prev) => {
        const updatedTabs = prev.map((tab) => {
          if (tab.id !== activeTabId) return tab;
          if (activeSubTabId) {
            return {
              ...tab,
              subtabs: tab.subtabs.map(
                (st) => st.id === activeSubTabId ? { ...st, content: json } : st
              )
            };
          }
          return { ...tab, content: json };
        });
        if (source === "editor") {
          emitChangeDebounced({
            tabs: updatedTabs,
            activeTabId,
            activeSubTabId,
            source
          });
        }
        return updatedTabs;
      });
    },
    [activeTabId, activeSubTabId, emitChangeDebounced]
  );
  const debouncedSave = (0, import_react3.useCallback)(
    (editorInstance) => {
      if (debouncedSaveRef.current) {
        clearTimeout(debouncedSaveRef.current);
      }
      debouncedSaveRef.current = setTimeout(() => {
        saveFromEditor(editorInstance, "editor");
      }, 800);
    },
    [saveFromEditor]
  );
  const addTab = () => {
    if (debouncedSaveRef.current) {
      clearTimeout(debouncedSaveRef.current);
      debouncedSaveRef.current = null;
    }
    const updatedTabs = saveCurrentContent();
    const id = Date.now().toString();
    const newTabs = [
      ...updatedTabs,
      { id, title: `Tab ${updatedTabs.length + 1}`, content: null, subtabs: [] }
    ];
    setTabs(newTabs);
    setActiveTabId(id);
    setActiveSubTabId(null);
    setTimeout(() => {
      editor?.commands.clearContent();
    }, 0);
    emitChangeDebounced({
      tabs: newTabs,
      activeTabId: id,
      activeSubTabId: null,
      source: "add-tab"
    });
  };
  const addSubTab = (tabId) => {
    if (debouncedSaveRef.current) {
      clearTimeout(debouncedSaveRef.current);
      debouncedSaveRef.current = null;
    }
    const updatedTabs = saveCurrentContent();
    const subId = Date.now().toString();
    const newTabs = updatedTabs.map(
      (tab) => tab.id === tabId ? {
        ...tab,
        subtabs: [
          ...tab.subtabs,
          { id: subId, title: "New Subtab", content: null }
        ]
      } : tab
    );
    setTabs(newTabs);
    setActiveTabId(tabId);
    setActiveSubTabId(subId);
    setTimeout(() => {
      editor?.commands.clearContent();
    }, 0);
    emitChangeDebounced({
      tabs: newTabs,
      activeTabId: tabId,
      activeSubTabId: subId,
      source: "add-subtab"
    });
  };
  const selectNode = (tabId, subId) => {
    if (debouncedSaveRef.current) {
      clearTimeout(debouncedSaveRef.current);
      debouncedSaveRef.current = null;
    }
    const updatedTabs = saveCurrentContent();
    setTabs(updatedTabs);
    setActiveTabId(tabId);
    setActiveSubTabId(subId ?? null);
    emitChangeDebounced({
      tabs: updatedTabs,
      activeTabId: tabId,
      activeSubTabId: subId ?? null,
      source: "tab-switch"
    });
  };
  const renameTab = (id, title) => {
    setTabs((prev) => prev.map((t) => t.id === id ? { ...t, title } : t));
  };
  const deleteSubTab = (tabId, subTabId) => {
    console.log("\u{1F5D1}\uFE0F Deleting subtab:", subTabId);
    setTabs(
      (prev) => prev.map((tab) => {
        if (tab.id !== tabId) return tab;
        const remainingSubTabs = tab.subtabs.filter((st) => st.id !== subTabId);
        if (subTabId === activeSubTabId) {
          setActiveSubTabId(null);
          setTimeout(() => {
            editor?.commands.clearContent();
          }, 0);
        }
        return {
          ...tab,
          subtabs: remainingSubTabs
        };
      })
    );
    emitChange("delete-subtab");
  };
  const renameSubTab = (tabId, subTabId, title) => {
    setTabs(
      (prev) => prev.map(
        (tab) => tab.id === tabId ? {
          ...tab,
          subtabs: tab.subtabs.map(
            (st) => st.id === subTabId ? { ...st, title } : st
          )
        } : tab
      )
    );
  };
  const deleteTab = (id) => {
    console.log("\u{1F5D1}\uFE0F Deleting tab:", id);
    if (debouncedSaveRef.current) {
      clearTimeout(debouncedSaveRef.current);
      debouncedSaveRef.current = null;
    }
    const updatedTabs = id === activeTabId ? tabs : saveCurrentContent();
    setTabs((prev) => {
      const remaining = (id === activeTabId ? prev : updatedTabs).filter((t) => t.id !== id);
      if (id === activeTabId) {
        const next = remaining[0];
        setActiveTabId(next?.id ?? "");
        setActiveSubTabId(null);
        if (!next) {
          setTimeout(() => {
            editor?.commands.clearContent();
          }, 0);
        }
      }
      return remaining;
    });
    emitChange("delete-tab");
  };
  (0, import_react3.useEffect)(() => {
    if (!editor) return;
    const key = { tabId: activeTabId, subTabId: activeSubTabId };
    if (lastRestoredRef.current && lastRestoredRef.current.tabId === key.tabId && lastRestoredRef.current.subTabId === key.subTabId) {
      return;
    }
    if (isRestoringRef.current) return;
    isRestoringRef.current = true;
    const tab = tabs.find((t) => t.id === activeTabId);
    const node = activeSubTabId ? tab?.subtabs.find((st) => st.id === activeSubTabId) : tab;
    if (node?.content) {
      editor.commands.setContent(node.content);
    } else {
      editor.commands.clearContent();
    }
    lastRestoredRef.current = key;
    isRestoringRef.current = false;
  }, [editor, tabs, activeTabId, activeSubTabId]);
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(EditorBridgeProvider, { value: {
    editorContent: editor,
    setEditorContent: setEditor,
    debouncedSave
  }, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(SidebarProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex h-screen w-full min-h-0", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      AppSidebar,
      {
        tabs,
        activeTabId,
        activeSubTabId,
        canDeleteTab: tabs.length > 1,
        onAddTab: addTab,
        onAddSubTab: addSubTab,
        onSelect: selectNode,
        onRename: renameTab,
        onDelete: deleteTab,
        onRenameSubTab: renameSubTab,
        onDeleteSubTab: deleteSubTab
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(SidebarInset, { className: "flex flex-col flex-1 min-h-0", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("header", { className: "h-12 flex-shrink-0 border-b", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(SidebarTrigger, {}) }),
      children
    ] })
  ] }) }) });
}

// src/components/tiptap-templates/simple/simple-editor.tsx
var import_react92 = require("react");
var import_react93 = require("@tiptap/react");
var import_starter_kit = require("@tiptap/starter-kit");
var import_extension_image = __toESM(require("@tiptap/extension-image"));
var import_extension_list = require("@tiptap/extension-list");
var import_extension_text_align = require("@tiptap/extension-text-align");
var import_extension_typography = require("@tiptap/extension-typography");
var import_extension_highlight = require("@tiptap/extension-highlight");
var import_extension_subscript = require("@tiptap/extension-subscript");
var import_extension_superscript = require("@tiptap/extension-superscript");
var import_extensions = require("@tiptap/extensions");
var import_extension_text_style = require("@tiptap/extension-text-style");

// ../node_modules/@tiptap/extension-document/dist/index.js
var import_core = require("@tiptap/core");
var Document = import_core.Node.create({
  name: "doc",
  topNode: true,
  content: "block+",
  renderMarkdown: (node, h) => {
    if (!node.content) {
      return "";
    }
    return h.renderChildren(node.content, "\n\n");
  }
});
var index_default = Document;

// ../node_modules/@tiptap/extension-paragraph/dist/index.js
var import_core2 = require("@tiptap/core");
var Paragraph = import_core2.Node.create({
  name: "paragraph",
  priority: 1e3,
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  content: "inline*",
  parseHTML() {
    return [{ tag: "p" }];
  },
  renderHTML({ HTMLAttributes }) {
    return ["p", (0, import_core2.mergeAttributes)(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  parseMarkdown: (token, helpers) => {
    const tokens = token.tokens || [];
    if (tokens.length === 1 && tokens[0].type === "image") {
      return helpers.parseChildren([tokens[0]]);
    }
    return helpers.createNode(
      "paragraph",
      void 0,
      // no attributes for paragraph
      helpers.parseInline(tokens)
    );
  },
  renderMarkdown: (node, h) => {
    if (!node || !Array.isArray(node.content)) {
      return "";
    }
    return h.renderChildren(node.content);
  },
  addCommands() {
    return {
      setParagraph: () => ({ commands }) => {
        return commands.setNode(this.name);
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-0": () => this.editor.commands.setParagraph()
    };
  }
});
var index_default2 = Paragraph;

// ../node_modules/@tiptap/extension-text/dist/index.js
var import_core3 = require("@tiptap/core");
var Text = import_core3.Node.create({
  name: "text",
  group: "inline",
  parseMarkdown: (token) => {
    return {
      type: "text",
      text: token.text || ""
    };
  },
  renderMarkdown: (node) => node.text || ""
});
var index_default3 = Text;

// src/components/tiptap-templates/simple/simple-editor.tsx
var import_extension_text_style2 = require("@tiptap/extension-text-style");
var import_extension_color = __toESM(require("@tiptap/extension-color"));
var import_extension_table = require("@tiptap/extension-table");
var import_extensions2 = require("@tiptap/extensions");

// src/components/extensions/font-size-stepper.ts
var import_core4 = require("@tiptap/core");
function parsePx(value) {
  if (!value) return null;
  const m = /(-?\d+\.?\d*)px/.exec(String(value));
  if (!m) return null;
  const n = parseFloat(m[1]);
  return Number.isFinite(n) ? Math.round(n) : null;
}
function getFontSizeFromResolvedPos(editor) {
  const { $from } = editor.state.selection;
  const marks = $from.marks();
  for (const m of marks) {
    if (m.type && m.type.name === "textStyle" && m.attrs && m.attrs.fontSize) {
      const parsed = parsePx(m.attrs.fontSize);
      if (parsed !== null) return parsed;
    }
  }
  const node = editor.state.doc.nodeAt($from.pos);
  if (node && node.attrs && node.attrs.style) {
    const style = node.attrs.style;
    const m = /font-size\s*:\s*([^;]+)/i.exec(style);
    if (m && m[1]) {
      const parsed = parsePx(m[1].trim());
      if (parsed !== null) return parsed;
    }
  }
  return null;
}
var FontSizeStepper = import_core4.Extension.create({
  name: "fontSizeStepper",
  // configuration option to control step & min size
  addOptions() {
    return {
      step: 2,
      min: 8,
      defaultSize: 16
    };
  },
  addCommands() {
    return {
      increaseFontSize: () => ({ commands, editor }) => {
        if (!editor) return false;
        const attrs = editor.getAttributes("textStyle") || {};
        let currentPx = parsePx(attrs.fontSize ?? null);
        if (currentPx === null) {
          currentPx = getFontSizeFromResolvedPos(editor);
        }
        if (currentPx === null) {
          currentPx = this.options.defaultSize;
        }
        const newSize = currentPx + this.options.step;
        return commands.setFontSize(`${newSize}px`);
      },
      decreaseFontSize: () => ({ commands, editor }) => {
        if (!editor) return false;
        const attrs = editor.getAttributes("textStyle") || {};
        let currentPx = parsePx(attrs.fontSize ?? null);
        if (currentPx === null) {
          currentPx = getFontSizeFromResolvedPos(editor);
        }
        if (currentPx === null) {
          currentPx = this.options.defaultSize;
        }
        const newSize = Math.max(this.options.min, currentPx - this.options.step);
        return commands.setFontSize(`${newSize}px`);
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      // Increase: Mod + Shift + .  => '>' (Shift + .) — Mod maps to Ctrl/Cmd
      "Mod-Shift-.": () => this.editor.commands.increaseFontSize(),
      // Decrease: Mod + Shift + ,  => '<' (Shift + ,)
      "Mod-Shift-,": () => this.editor.commands.decreaseFontSize()
      // Optional extra bindings for explicit Ctrl (if you want):
      // "Ctrl-Shift-.": () => this.editor.commands.increaseFontSize(),
      // "Ctrl-Shift-,": () => this.editor.commands.decreaseFontSize(),
    };
  }
});

// src/components/tiptap-ui-primitive/button/button.tsx
var import_react6 = require("react");

// src/components/tiptap-ui-primitive/tooltip/tooltip.tsx
var import_react4 = require("react");
var import_react5 = require("@floating-ui/react");
var import_jsx_runtime12 = require("react/jsx-runtime");
function useTooltip({
  initialOpen = false,
  placement = "top",
  open: controlledOpen,
  onOpenChange: setControlledOpen,
  delay = 600,
  closeDelay = 0
} = {}) {
  const [uncontrolledOpen, setUncontrolledOpen] = (0, import_react4.useState)(initialOpen);
  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = setControlledOpen ?? setUncontrolledOpen;
  const data = (0, import_react5.useFloating)({
    placement,
    open,
    onOpenChange: setOpen,
    whileElementsMounted: import_react5.autoUpdate,
    middleware: [
      (0, import_react5.offset)(4),
      (0, import_react5.flip)({
        crossAxis: placement.includes("-"),
        fallbackAxisSideDirection: "start",
        padding: 4
      }),
      (0, import_react5.shift)({ padding: 4 })
    ]
  });
  const context = data.context;
  const hover = (0, import_react5.useHover)(context, {
    mouseOnly: true,
    move: false,
    restMs: delay,
    enabled: controlledOpen == null,
    delay: {
      close: closeDelay
    }
  });
  const focus = (0, import_react5.useFocus)(context, {
    enabled: controlledOpen == null
  });
  const dismiss = (0, import_react5.useDismiss)(context);
  const role = (0, import_react5.useRole)(context, { role: "tooltip" });
  const interactions = (0, import_react5.useInteractions)([hover, focus, dismiss, role]);
  return (0, import_react4.useMemo)(
    () => ({
      open,
      setOpen,
      ...interactions,
      ...data
    }),
    [open, setOpen, interactions, data]
  );
}
var TooltipContext = (0, import_react4.createContext)(null);
function useTooltipContext() {
  const context = (0, import_react4.useContext)(TooltipContext);
  if (context == null) {
    throw new Error("Tooltip components must be wrapped in <TooltipProvider />");
  }
  return context;
}
function Tooltip2({ children, ...props }) {
  const tooltip = useTooltip(props);
  if (!props.useDelayGroup) {
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(TooltipContext.Provider, { value: tooltip, children });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    import_react5.FloatingDelayGroup,
    {
      delay: { open: props.delay ?? 0, close: props.closeDelay ?? 0 },
      timeoutMs: props.timeout,
      children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(TooltipContext.Provider, { value: tooltip, children })
    }
  );
}
var TooltipTrigger2 = (0, import_react4.forwardRef)(
  function TooltipTrigger3({ children, asChild = false, ...props }, propRef) {
    const context = useTooltipContext();
    const childrenRef = (0, import_react4.isValidElement)(children) ? parseInt(import_react4.version, 10) >= 19 ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      children.props.ref
    ) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      children.ref
    ) : void 0;
    const ref = (0, import_react5.useMergeRefs)([context.refs.setReference, propRef, childrenRef]);
    if (asChild && (0, import_react4.isValidElement)(children)) {
      const dataAttributes = {
        "data-tooltip-state": context.open ? "open" : "closed"
      };
      return (0, import_react4.cloneElement)(
        children,
        context.getReferenceProps({
          ref,
          ...props,
          ...typeof children.props === "object" ? children.props : {},
          ...dataAttributes
        })
      );
    }
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      "button",
      {
        ref,
        "data-tooltip-state": context.open ? "open" : "closed",
        ...context.getReferenceProps(props),
        children
      }
    );
  }
);
var TooltipContent2 = (0, import_react4.forwardRef)(
  function TooltipContent3({ style, children, portal = true, portalProps = {}, ...props }, propRef) {
    const context = useTooltipContext();
    const ref = (0, import_react5.useMergeRefs)([context.refs.setFloating, propRef]);
    if (!context.open) return null;
    const content = /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      "div",
      {
        ref,
        style: {
          ...context.floatingStyles,
          ...style
        },
        ...context.getFloatingProps(props),
        className: "tiptap-tooltip",
        children
      }
    );
    if (portal) {
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react5.FloatingPortal, { ...portalProps, children: content });
    }
    return content;
  }
);
Tooltip2.displayName = "Tooltip";
TooltipTrigger2.displayName = "TooltipTrigger";
TooltipContent2.displayName = "TooltipContent";

// src/lib/tiptap-utils.ts
var import_state = require("@tiptap/pm/state");
var import_core5 = require("@tiptap/core");
var MAX_FILE_SIZE = 5 * 1024 * 1024;
var MAC_SYMBOLS = {
  mod: "\u2318",
  command: "\u2318",
  meta: "\u2318",
  ctrl: "\u2303",
  control: "\u2303",
  alt: "\u2325",
  option: "\u2325",
  shift: "\u21E7",
  backspace: "Del",
  delete: "\u2326",
  enter: "\u23CE",
  escape: "\u238B",
  capslock: "\u21EA"
};
function cn2(...classes) {
  return classes.filter(Boolean).join(" ");
}
function isMac() {
  return typeof navigator !== "undefined" && navigator.platform.toLowerCase().includes("mac");
}
var formatShortcutKey = (key, isMac2, capitalize = true) => {
  if (isMac2) {
    const lowerKey = key.toLowerCase();
    return MAC_SYMBOLS[lowerKey] || (capitalize ? key.toUpperCase() : key);
  }
  return capitalize ? key.charAt(0).toUpperCase() + key.slice(1) : key;
};
var parseShortcutKeys = (props) => {
  const { shortcutKeys, delimiter = "+", capitalize = true } = props;
  if (!shortcutKeys) return [];
  return shortcutKeys.split(delimiter).map((key) => key.trim()).map((key) => formatShortcutKey(key, isMac(), capitalize));
};
var isMarkInSchema = (markName, editor) => {
  if (!editor?.schema) return false;
  return editor.schema.spec.marks.get(markName) !== void 0;
};
var isNodeInSchema = (nodeName, editor) => {
  if (!editor?.schema) return false;
  return editor.schema.spec.nodes.get(nodeName) !== void 0;
};
function focusNextNode(editor) {
  const { state, view } = editor;
  const { doc, selection } = state;
  const nextSel = import_state.Selection.findFrom(selection.$to, 1, true);
  if (nextSel) {
    view.dispatch(state.tr.setSelection(nextSel).scrollIntoView());
    return true;
  }
  const paragraphType = state.schema.nodes.paragraph;
  if (!paragraphType) {
    console.warn("No paragraph node type found in schema.");
    return false;
  }
  const end = doc.content.size;
  const para = paragraphType.create();
  let tr = state.tr.insert(end, para);
  const $inside = tr.doc.resolve(end + 1);
  tr = tr.setSelection(import_state.TextSelection.near($inside)).scrollIntoView();
  view.dispatch(tr);
  return true;
}
function isValidPosition(pos) {
  return typeof pos === "number" && pos >= 0;
}
function isExtensionAvailable(editor, extensionNames) {
  if (!editor) return false;
  const names = Array.isArray(extensionNames) ? extensionNames : [extensionNames];
  const found = names.some(
    (name) => editor.extensionManager.extensions.some((ext) => ext.name === name)
  );
  if (!found) {
    console.warn(
      `None of the extensions [${names.join(", ")}] were found in the editor schema. Ensure they are included in the editor configuration.`
    );
  }
  return found;
}
function findNodeAtPosition(editor, position) {
  try {
    const node = editor.state.doc.nodeAt(position);
    if (!node) {
      console.warn(`No node found at position ${position}`);
      return null;
    }
    return node;
  } catch (error) {
    console.error(`Error getting node at position ${position}:`, error);
    return null;
  }
}
function findNodePosition(props) {
  const { editor, node, nodePos } = props;
  if (!editor || !editor.state?.doc) return null;
  const hasValidNode = node !== void 0 && node !== null;
  const hasValidPos = isValidPosition(nodePos);
  if (!hasValidNode && !hasValidPos) {
    return null;
  }
  if (hasValidNode) {
    let foundPos = -1;
    let foundNode = null;
    editor.state.doc.descendants((currentNode, pos) => {
      if (currentNode === node) {
        foundPos = pos;
        foundNode = currentNode;
        return false;
      }
      return true;
    });
    if (foundPos !== -1 && foundNode !== null) {
      return { pos: foundPos, node: foundNode };
    }
  }
  if (hasValidPos) {
    const nodeAtPos = findNodeAtPosition(editor, nodePos);
    if (nodeAtPos) {
      return { pos: nodePos, node: nodeAtPos };
    }
  }
  return null;
}
function isNodeTypeSelected(editor, nodeTypeNames = [], checkAncestorNodes = false) {
  if (!editor || !editor.state.selection) return false;
  const { selection } = editor.state;
  if (selection.empty) return false;
  if (selection instanceof import_state.NodeSelection) {
    const selectedNode = selection.node;
    return selectedNode ? nodeTypeNames.includes(selectedNode.type.name) : false;
  }
  if (checkAncestorNodes) {
    const { $from } = selection;
    for (let depth = $from.depth; depth > 0; depth--) {
      const ancestorNode = $from.node(depth);
      if (nodeTypeNames.includes(ancestorNode.type.name)) {
        return true;
      }
    }
  }
  return false;
}
function selectionWithinConvertibleTypes(editor, types = []) {
  if (!editor || types.length === 0) return false;
  const { state } = editor;
  const { selection } = state;
  const allowed = new Set(types);
  if (selection instanceof import_state.NodeSelection) {
    const nodeType = selection.node?.type?.name;
    return !!nodeType && allowed.has(nodeType);
  }
  if (selection instanceof import_state.TextSelection || selection instanceof import_state.AllSelection) {
    let valid = true;
    state.doc.nodesBetween(selection.from, selection.to, (node) => {
      if (node.isTextblock && !allowed.has(node.type.name)) {
        valid = false;
        return false;
      }
      return valid;
    });
    return valid;
  }
  return false;
}
var handleImageUpload = async (file, onProgress, abortSignal) => {
  if (!file) {
    throw new Error("No file provided");
  }
  if (file.size > MAX_FILE_SIZE) {
    throw new Error(
      `File size exceeds maximum allowed (${MAX_FILE_SIZE / (1024 * 1024)}MB)`
    );
  }
  for (let progress = 0; progress <= 100; progress += 10) {
    if (abortSignal?.aborted) {
      throw new Error("Upload cancelled");
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
    onProgress?.({ progress });
  }
  return "/images/tiptap-ui-placeholder-image.jpg";
};
var ATTR_WHITESPACE = (
  // eslint-disable-next-line no-control-regex
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
);
function isAllowedUri(uri, protocols) {
  const allowedProtocols = [
    "http",
    "https",
    "ftp",
    "ftps",
    "mailto",
    "tel",
    "callto",
    "sms",
    "cid",
    "xmpp"
  ];
  if (protocols) {
    protocols.forEach((protocol) => {
      const nextProtocol = typeof protocol === "string" ? protocol : protocol.scheme;
      if (nextProtocol) {
        allowedProtocols.push(nextProtocol);
      }
    });
  }
  return !uri || uri.replace(ATTR_WHITESPACE, "").match(
    new RegExp(
      // eslint-disable-next-line no-useless-escape
      `^(?:(?:${allowedProtocols.join("|")}):|[^a-z]|[a-z0-9+.-]+(?:[^a-z+.-:]|$))`,
      "i"
    )
  );
}
function sanitizeUrl(inputUrl, baseUrl, protocols) {
  try {
    const url = new URL(inputUrl, baseUrl);
    if (isAllowedUri(url.href, protocols)) {
      return url.href;
    }
  } catch {
  }
  return "#";
}
var FONT_SIZES = [
  "8px",
  "10px",
  "12px",
  "14px",
  "16px",
  "18px",
  "20px",
  "24px",
  "28px",
  "32px",
  "36px",
  "40px",
  "48px",
  "56px",
  "64px"
];
var FontSizeExtension = import_core5.Extension.create({
  name: "fontSize",
  addOptions() {
    return {
      types: ["textStyle"]
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontSize: {
            default: null,
            parseHTML: (element) => element.style.fontSize || element.getAttribute("data-font-size"),
            renderHTML: (attributes) => {
              if (!attributes.fontSize) {
                return {};
              }
              return {
                style: `font-size: ${attributes.fontSize}`
              };
            }
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setFontSize: (fontSize) => ({ commands }) => {
        return commands.setMark("textStyle", { fontSize });
      },
      increaseFontSize: () => ({ editor }) => {
        const currentSize = editor.getAttributes("textStyle").fontSize;
        const currentIndex = FONT_SIZES.indexOf(currentSize || "16px");
        const nextIndex = Math.min(currentIndex + 1, FONT_SIZES.length - 1);
        const nextSize = FONT_SIZES[nextIndex];
        return editor.chain().focus().setFontSize(nextSize).run();
      },
      decreaseFontSize: () => ({ editor }) => {
        const currentSize = editor.getAttributes("textStyle").fontSize;
        const currentIndex = FONT_SIZES.indexOf(currentSize || "16px");
        const nextIndex = Math.max(currentIndex - 1, 0);
        const nextSize = FONT_SIZES[nextIndex];
        return editor.chain().focus().setFontSize(nextSize).run();
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      "mod+shift+>": () => this.editor.commands.increaseFontSize(),
      "mod+shift+<": () => this.editor.commands.decreaseFontSize()
    };
  }
});

// src/components/tiptap-ui-primitive/button/button.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
var ShortcutDisplay = ({
  shortcuts
}) => {
  if (shortcuts.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { children: shortcuts.map((key, index) => /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_react6.Fragment, { children: [
    index > 0 && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("kbd", { children: "+" }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("kbd", { children: key })
  ] }, index)) });
};
var Button2 = (0, import_react6.forwardRef)(
  ({
    className,
    children,
    tooltip,
    showTooltip = true,
    shortcutKeys,
    "aria-label": ariaLabel,
    ...props
  }, ref) => {
    const shortcuts = (0, import_react6.useMemo)(
      () => parseShortcutKeys({ shortcutKeys }),
      [shortcutKeys]
    );
    if (!tooltip || !showTooltip) {
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        "button",
        {
          className: cn2("tiptap-button", className),
          ref,
          "aria-label": ariaLabel,
          ...props,
          children
        }
      );
    }
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(Tooltip2, { delay: 200, children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        TooltipTrigger2,
        {
          className: cn2("tiptap-button", className),
          ref,
          "aria-label": ariaLabel,
          ...props,
          children
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(TooltipContent2, { children: [
        tooltip,
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(ShortcutDisplay, { shortcuts })
      ] })
    ] });
  }
);
Button2.displayName = "Button";
var ButtonGroup = (0, import_react6.forwardRef)(({ className, children, orientation = "vertical", ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    "div",
    {
      ref,
      className: cn2("tiptap-button-group", className),
      "data-orientation": orientation,
      role: "group",
      ...props,
      children
    }
  );
});
ButtonGroup.displayName = "ButtonGroup";

// src/components/tiptap-ui-primitive/spacer/spacer.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
function Spacer({
  orientation = "horizontal",
  size,
  style = {},
  ...props
}) {
  const computedStyle = {
    ...style,
    ...orientation === "horizontal" && !size && { flex: 1 },
    ...size && {
      width: orientation === "vertical" ? "1px" : size,
      height: orientation === "horizontal" ? "1px" : size
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { ...props, style: computedStyle });
}

// src/components/tiptap-ui-primitive/toolbar/toolbar.tsx
var import_react10 = require("react");

// src/components/tiptap-ui-primitive/separator/separator.tsx
var import_react7 = require("react");
var import_jsx_runtime15 = require("react/jsx-runtime");
var Separator3 = (0, import_react7.forwardRef)(
  ({ decorative, orientation = "vertical", className, ...divProps }, ref) => {
    const ariaOrientation = orientation === "vertical" ? orientation : void 0;
    const semanticProps = decorative ? { role: "none" } : { "aria-orientation": ariaOrientation, role: "separator" };
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      "div",
      {
        className: cn2("tiptap-separator", className),
        "data-orientation": orientation,
        ...semanticProps,
        ...divProps,
        ref
      }
    );
  }
);
Separator3.displayName = "Separator";

// src/hooks/use-menu-navigation.ts
var import_react8 = require("react");
function useMenuNavigation({
  editor,
  containerRef,
  query,
  items,
  onSelect,
  onClose,
  orientation = "vertical",
  autoSelectFirstItem = true
}) {
  const [selectedIndex, setSelectedIndex] = (0, import_react8.useState)(
    autoSelectFirstItem ? 0 : -1
  );
  (0, import_react8.useEffect)(() => {
    const handleKeyboardNavigation = (event) => {
      if (!items.length) return false;
      const moveNext = () => setSelectedIndex((currentIndex) => {
        if (currentIndex === -1) return 0;
        return (currentIndex + 1) % items.length;
      });
      const movePrev = () => setSelectedIndex((currentIndex) => {
        if (currentIndex === -1) return items.length - 1;
        return (currentIndex - 1 + items.length) % items.length;
      });
      switch (event.key) {
        case "ArrowUp": {
          if (orientation === "horizontal") return false;
          event.preventDefault();
          movePrev();
          return true;
        }
        case "ArrowDown": {
          if (orientation === "horizontal") return false;
          event.preventDefault();
          moveNext();
          return true;
        }
        case "ArrowLeft": {
          if (orientation === "vertical") return false;
          event.preventDefault();
          movePrev();
          return true;
        }
        case "ArrowRight": {
          if (orientation === "vertical") return false;
          event.preventDefault();
          moveNext();
          return true;
        }
        case "Tab": {
          event.preventDefault();
          if (event.shiftKey) {
            movePrev();
          } else {
            moveNext();
          }
          return true;
        }
        case "Home": {
          event.preventDefault();
          setSelectedIndex(0);
          return true;
        }
        case "End": {
          event.preventDefault();
          setSelectedIndex(items.length - 1);
          return true;
        }
        case "Enter": {
          if (event.isComposing) return false;
          event.preventDefault();
          if (selectedIndex !== -1 && items[selectedIndex]) {
            onSelect?.(items[selectedIndex]);
          }
          return true;
        }
        case "Escape": {
          event.preventDefault();
          onClose?.();
          return true;
        }
        default:
          return false;
      }
    };
    let targetElement = null;
    if (editor) {
      targetElement = editor.view.dom;
    } else if (containerRef?.current) {
      targetElement = containerRef.current;
    }
    if (targetElement) {
      targetElement.addEventListener("keydown", handleKeyboardNavigation, true);
      return () => {
        targetElement?.removeEventListener(
          "keydown",
          handleKeyboardNavigation,
          true
        );
      };
    }
    return void 0;
  }, [
    editor,
    containerRef,
    items,
    selectedIndex,
    onSelect,
    onClose,
    orientation
  ]);
  (0, import_react8.useEffect)(() => {
    if (query) {
      setSelectedIndex(autoSelectFirstItem ? 0 : -1);
    }
  }, [query, autoSelectFirstItem]);
  return {
    selectedIndex: items.length ? selectedIndex : void 0,
    setSelectedIndex
  };
}

// src/hooks/use-composed-ref.ts
var import_react9 = require("react");
var updateRef = (ref, value) => {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref && typeof ref === "object" && "current" in ref) {
    ;
    ref.current = value;
  }
};
var useComposedRef = (libRef, userRef) => {
  const prevUserRef = (0, import_react9.useRef)(null);
  return (0, import_react9.useCallback)(
    (instance) => {
      if (libRef && "current" in libRef) {
        ;
        libRef.current = instance;
      }
      if (prevUserRef.current) {
        updateRef(prevUserRef.current, null);
      }
      prevUserRef.current = userRef;
      if (userRef) {
        updateRef(userRef, instance);
      }
    },
    [libRef, userRef]
  );
};

// src/components/tiptap-ui-primitive/toolbar/toolbar.tsx
var import_jsx_runtime16 = require("react/jsx-runtime");
var useToolbarNavigation = (toolbarRef) => {
  const [items, setItems] = (0, import_react10.useState)([]);
  const collectItems = (0, import_react10.useCallback)(() => {
    if (!toolbarRef.current) return [];
    return Array.from(
      toolbarRef.current.querySelectorAll(
        'button:not([disabled]), [role="button"]:not([disabled]), [tabindex="0"]:not([disabled])'
      )
    );
  }, [toolbarRef]);
  (0, import_react10.useEffect)(() => {
    const toolbar = toolbarRef.current;
    if (!toolbar) return;
    const updateItems = () => setItems(collectItems());
    updateItems();
    const observer = new MutationObserver(updateItems);
    observer.observe(toolbar, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [collectItems, toolbarRef]);
  const { selectedIndex } = useMenuNavigation({
    containerRef: toolbarRef,
    items,
    orientation: "horizontal",
    onSelect: (el) => el.click(),
    autoSelectFirstItem: false
  });
  (0, import_react10.useEffect)(() => {
    const toolbar = toolbarRef.current;
    if (!toolbar) return;
    const handleFocus = (e) => {
      const target = e.target;
      if (toolbar.contains(target))
        target.setAttribute("data-focus-visible", "true");
    };
    const handleBlur = (e) => {
      const target = e.target;
      if (toolbar.contains(target)) target.removeAttribute("data-focus-visible");
    };
    toolbar.addEventListener("focus", handleFocus, true);
    toolbar.addEventListener("blur", handleBlur, true);
    return () => {
      toolbar.removeEventListener("focus", handleFocus, true);
      toolbar.removeEventListener("blur", handleBlur, true);
    };
  }, [toolbarRef]);
  (0, import_react10.useEffect)(() => {
    if (selectedIndex !== void 0 && items[selectedIndex]) {
      items[selectedIndex].focus();
    }
  }, [selectedIndex, items]);
};
var Toolbar = (0, import_react10.forwardRef)(
  ({ children, className, variant = "fixed", ...props }, ref) => {
    const toolbarRef = (0, import_react10.useRef)(null);
    const composedRef = useComposedRef(toolbarRef, ref);
    useToolbarNavigation(toolbarRef);
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
      "div",
      {
        ref: composedRef,
        role: "toolbar",
        "aria-label": "toolbar",
        "data-variant": variant,
        className: cn2("tiptap-toolbar", className),
        ...props,
        children
      }
    );
  }
);
Toolbar.displayName = "Toolbar";
var ToolbarGroup = (0, import_react10.forwardRef)(
  ({ children, className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    "div",
    {
      ref,
      role: "group",
      className: cn2("tiptap-toolbar-group", className),
      ...props,
      children
    }
  )
);
ToolbarGroup.displayName = "ToolbarGroup";
var ToolbarSeparator = (0, import_react10.forwardRef)(
  ({ ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Separator3, { ref, orientation: "vertical", decorative: true, ...props })
);
ToolbarSeparator.displayName = "ToolbarSeparator";

// src/components/tiptap-ui-primitive/bubble-menu/bubble-menu.tsx
var import_menus = require("@tiptap/react/menus");
var import_react11 = require("@tiptap/react");
var import_lucide_react6 = require("lucide-react");
var import_jsx_runtime17 = require("react/jsx-runtime");
function BubbleMenuInline() {
  const { editor } = (0, import_react11.useCurrentEditor)();
  if (!editor) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    import_menus.BubbleMenu,
    {
      editor,
      updateDelay: 100,
      shouldShow: ({ editor: editor2, state }) => {
        const { from, to, empty } = state.selection;
        if (empty) return false;
        if (!editor2.isEditable) return false;
        let hasImage = false;
        state.doc.nodesBetween(from, to, (node) => {
          if (node.type.name === "image" || node.type.name === "Image") {
            hasImage = true;
            return false;
          }
        });
        if (hasImage) return false;
        return true;
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
        "div",
        {
          className: "relative flex items-center gap-1 rounded-md border bg-popover p-1 shadow-md z-[15]\r\n                   animate-in fade-in slide-in-from-top-2 duration-200",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
              Button,
              {
                variant: "ghost",
                size: "sm",
                onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
                className: editor.isActive("heading", { level: 1 }) ? "bg-accent" : "",
                children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_lucide_react6.Heading1, { size: 15 })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
              Button,
              {
                variant: "ghost",
                size: "sm",
                onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
                className: editor.isActive("heading", { level: 2 }) ? "bg-accent" : "",
                children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_lucide_react6.Heading2, { size: 15 })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
              Button,
              {
                variant: "ghost",
                size: "sm",
                onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
                className: editor.isActive("heading", { level: 3 }) ? "bg-accent" : "",
                children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_lucide_react6.Heading3, { size: 15 })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Separator, { orientation: "vertical", className: "mx-1" }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
              Button,
              {
                variant: "ghost",
                size: "sm",
                onClick: () => editor.chain().focus().toggleBulletList().run(),
                className: editor.isActive("bulletList") ? "bg-accent" : "",
                children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_lucide_react6.List, { size: 15 })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
              Button,
              {
                variant: "ghost",
                size: "sm",
                onClick: () => editor.chain().focus().toggleOrderedList().run(),
                className: editor.isActive("orderedList") ? "bg-accent" : "",
                children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_lucide_react6.ListOrdered, { size: 15 })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
              Button,
              {
                variant: "ghost",
                size: "sm",
                onClick: () => editor.chain().focus().toggleTaskList().run(),
                className: editor.isActive("taskList") ? "bg-accent" : "",
                children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_lucide_react6.CheckSquare, { size: 15 })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Separator, { orientation: "vertical", className: "mx-1" }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
              Button,
              {
                variant: "ghost",
                size: "sm",
                onClick: () => editor.chain().focus().toggleCodeBlock().run(),
                className: editor.isActive("codeBlock") ? "bg-accent" : "",
                children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_lucide_react6.Code, { size: 15 })
              }
            )
          ]
        }
      )
    }
  );
}

// src/components/tiptap-node/image-upload-node/image-upload-node-extension.ts
var import_react15 = require("@tiptap/react");
var import_react16 = require("@tiptap/react");

// src/components/tiptap-node/image-upload-node/image-upload-node.tsx
var import_react13 = require("react");
var import_react14 = require("@tiptap/react");

// src/components/tiptap-icons/close-icon.tsx
var import_react12 = require("react");
var import_jsx_runtime18 = require("react/jsx-runtime");
var CloseIcon = (0, import_react12.memo)(({ className, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    "svg",
    {
      width: "24",
      height: "24",
      className,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
        "path",
        {
          d: "M18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L12 10.5858L6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L10.5858 12L5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L12 13.4142L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L13.4142 12L18.7071 6.70711Z",
          fill: "currentColor"
        }
      )
    }
  );
});
CloseIcon.displayName = "CloseIcon";

// src/components/tiptap-node/image-upload-node/image-upload-node.tsx
var import_jsx_runtime19 = require("react/jsx-runtime");
function useFileUpload(options) {
  const [fileItems, setFileItems] = (0, import_react13.useState)([]);
  const uploadFile = async (file) => {
    if (file.size > options.maxSize) {
      const error = new Error(
        `File size exceeds maximum allowed (${options.maxSize / 1024 / 1024}MB)`
      );
      options.onError?.(error);
      return null;
    }
    const abortController = new AbortController();
    const fileId = crypto.randomUUID();
    const newFileItem = {
      id: fileId,
      file,
      progress: 0,
      status: "uploading",
      abortController
    };
    setFileItems((prev) => [...prev, newFileItem]);
    try {
      if (!options.upload) {
        throw new Error("Upload function is not defined");
      }
      const url = await options.upload(
        file,
        (event) => {
          setFileItems(
            (prev) => prev.map(
              (item) => item.id === fileId ? { ...item, progress: event.progress } : item
            )
          );
        },
        abortController.signal
      );
      if (!url) throw new Error("Upload failed: No URL returned");
      if (!abortController.signal.aborted) {
        setFileItems(
          (prev) => prev.map(
            (item) => item.id === fileId ? { ...item, status: "success", url, progress: 100 } : item
          )
        );
        options.onSuccess?.(url);
        return url;
      }
      return null;
    } catch (error) {
      if (!abortController.signal.aborted) {
        setFileItems(
          (prev) => prev.map(
            (item) => item.id === fileId ? { ...item, status: "error", progress: 0 } : item
          )
        );
        options.onError?.(
          error instanceof Error ? error : new Error("Upload failed")
        );
      }
      return null;
    }
  };
  const uploadFiles = async (files) => {
    if (!files || files.length === 0) {
      options.onError?.(new Error("No files to upload"));
      return [];
    }
    if (options.limit && files.length > options.limit) {
      options.onError?.(
        new Error(
          `Maximum ${options.limit} file${options.limit === 1 ? "" : "s"} allowed`
        )
      );
      return [];
    }
    const uploadPromises = files.map((file) => uploadFile(file));
    const results = await Promise.all(uploadPromises);
    return results.filter((url) => url !== null);
  };
  const removeFileItem = (fileId) => {
    setFileItems((prev) => {
      const fileToRemove = prev.find((item) => item.id === fileId);
      if (fileToRemove?.abortController) {
        fileToRemove.abortController.abort();
      }
      if (fileToRemove?.url) {
        URL.revokeObjectURL(fileToRemove.url);
      }
      return prev.filter((item) => item.id !== fileId);
    });
  };
  const clearAllFiles = () => {
    fileItems.forEach((item) => {
      if (item.abortController) {
        item.abortController.abort();
      }
      if (item.url) {
        URL.revokeObjectURL(item.url);
      }
    });
    setFileItems([]);
  };
  return {
    fileItems,
    uploadFiles,
    removeFileItem,
    clearAllFiles
  };
}
var CloudUploadIcon = () => /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
  "svg",
  {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    className: "tiptap-image-upload-icon",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
        "path",
        {
          d: "M11.1953 4.41771C10.3478 4.08499 9.43578 3.94949 8.5282 4.02147C7.62062 4.09345 6.74133 4.37102 5.95691 4.83316C5.1725 5.2953 4.50354 5.92989 4.00071 6.68886C3.49788 7.44783 3.17436 8.31128 3.05465 9.2138C2.93495 10.1163 3.0222 11.0343 3.3098 11.8981C3.5974 12.7619 4.07781 13.5489 4.71463 14.1995C5.10094 14.5942 5.09414 15.2274 4.69945 15.6137C4.30476 16 3.67163 15.9932 3.28532 15.5985C2.43622 14.731 1.79568 13.6816 1.41221 12.5299C1.02875 11.3781 0.91241 10.1542 1.07201 8.95084C1.23162 7.74748 1.66298 6.59621 2.33343 5.58425C3.00387 4.57229 3.89581 3.72617 4.9417 3.10998C5.98758 2.4938 7.15998 2.1237 8.37008 2.02773C9.58018 1.93176 10.7963 2.11243 11.9262 2.55605C13.0561 2.99968 14.0703 3.69462 14.8919 4.58825C15.5423 5.29573 16.0585 6.11304 16.4177 7.00002H17.4999C18.6799 6.99991 19.8288 7.37933 20.7766 8.08222C21.7245 8.78515 22.4212 9.7743 22.7637 10.9036C23.1062 12.0328 23.0765 13.2423 22.6788 14.3534C22.2812 15.4644 21.5367 16.4181 20.5554 17.0736C20.0962 17.3803 19.4752 17.2567 19.1684 16.7975C18.8617 16.3382 18.9853 15.7172 19.4445 15.4105C20.069 14.9934 20.5427 14.3865 20.7958 13.6794C21.0488 12.9724 21.0678 12.2027 20.8498 11.4841C20.6318 10.7655 20.1885 10.136 19.5853 9.6887C18.9821 9.24138 18.251 8.99993 17.5001 9.00002H15.71C15.2679 9.00002 14.8783 8.70973 14.7518 8.28611C14.4913 7.41374 14.0357 6.61208 13.4195 5.94186C12.8034 5.27164 12.0427 4.75043 11.1953 4.41771Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
        "path",
        {
          d: "M11 14.4142V21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21V14.4142L15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L12.7078 11.2936C12.7054 11.2912 12.703 11.2888 12.7005 11.2864C12.5208 11.1099 12.2746 11.0008 12.003 11L12 11L11.997 11C11.8625 11.0004 11.7343 11.0273 11.6172 11.0759C11.502 11.1236 11.3938 11.1937 11.2995 11.2864C11.297 11.2888 11.2946 11.2912 11.2922 11.2936L7.29289 15.2929C6.90237 15.6834 6.90237 16.3166 7.29289 16.7071C7.68342 17.0976 8.31658 17.0976 8.70711 16.7071L11 14.4142Z",
          fill: "currentColor"
        }
      )
    ]
  }
);
var FileIcon = () => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
  "svg",
  {
    width: "43",
    height: "57",
    viewBox: "0 0 43 57",
    fill: "currentColor",
    className: "tiptap-image-upload-dropzone-rect-primary",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
      "path",
      {
        d: "M0.75 10.75C0.75 5.64137 4.89137 1.5 10 1.5H32.3431C33.2051 1.5 34.0317 1.84241 34.6412 2.4519L40.2981 8.10876C40.9076 8.71825 41.25 9.5449 41.25 10.4069V46.75C41.25 51.8586 37.1086 56 32 56H10C4.89137 56 0.75 51.8586 0.75 46.75V10.75Z",
        fill: "currentColor",
        fillOpacity: "0.11",
        stroke: "currentColor",
        strokeWidth: "1.5"
      }
    )
  }
);
var FileCornerIcon = () => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
  "svg",
  {
    width: "10",
    height: "10",
    className: "tiptap-image-upload-dropzone-rect-secondary",
    viewBox: "0 0 10 10",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
      "path",
      {
        d: "M0 0.75H0.343146C1.40401 0.75 2.42143 1.17143 3.17157 1.92157L8.82843 7.57843C9.57857 8.32857 10 9.34599 10 10.4069V10.75H4C1.79086 10.75 0 8.95914 0 6.75V0.75Z",
        fill: "currentColor"
      }
    )
  }
);
var ImageUploadDragArea = ({
  onFile,
  children
}) => {
  const [isDragOver, setIsDragOver] = (0, import_react13.useState)(false);
  const [isDragActive, setIsDragActive] = (0, import_react13.useState)(false);
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(true);
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsDragActive(false);
      setIsDragOver(false);
    }
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
    setIsDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      onFile(files);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    "div",
    {
      className: `tiptap-image-upload-drag-area ${isDragActive ? "drag-active" : ""} ${isDragOver ? "drag-over" : ""}`,
      onDragEnter: handleDragEnter,
      onDragLeave: handleDragLeave,
      onDragOver: handleDragOver,
      onDrop: handleDrop,
      children
    }
  );
};
var ImageUploadPreview = ({
  fileItem,
  onRemove
}) => {
  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
  };
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "tiptap-image-upload-preview", children: [
    fileItem.status === "uploading" && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
      "div",
      {
        className: "tiptap-image-upload-progress",
        style: { width: `${fileItem.progress}%` }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "tiptap-image-upload-preview-content", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "tiptap-image-upload-file-info", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "tiptap-image-upload-file-icon", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(CloudUploadIcon, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "tiptap-image-upload-details", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "tiptap-image-upload-text", children: fileItem.file.name }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "tiptap-image-upload-subtext", children: formatFileSize(fileItem.file.size) })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "tiptap-image-upload-actions", children: [
        fileItem.status === "uploading" && /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("span", { className: "tiptap-image-upload-progress-text", children: [
          fileItem.progress,
          "%"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
          Button2,
          {
            type: "button",
            "data-style": "ghost",
            onClick: (e) => {
              e.stopPropagation();
              onRemove();
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(CloseIcon, { className: "tiptap-button-icon" })
          }
        )
      ] })
    ] })
  ] });
};
var DropZoneContent = ({
  maxSize,
  limit
}) => /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "tiptap-image-upload-dropzone", children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(FileIcon, {}),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(FileCornerIcon, {}),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "tiptap-image-upload-icon-container", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(CloudUploadIcon, {}) })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "tiptap-image-upload-content", children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("span", { className: "tiptap-image-upload-text", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("em", { children: "Click to upload" }),
      " or drag and drop"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("span", { className: "tiptap-image-upload-subtext", children: [
      "Maximum ",
      limit,
      " file",
      limit === 1 ? "" : "s",
      ", ",
      maxSize / 1024 / 1024,
      "MB each."
    ] })
  ] })
] });
var ImageUploadNode = (props) => {
  const { accept, limit, maxSize } = props.node.attrs;
  const inputRef = (0, import_react13.useRef)(null);
  const extension = props.extension;
  const uploadOptions = {
    maxSize,
    limit,
    accept,
    upload: extension.options.upload,
    onSuccess: extension.options.onSuccess,
    onError: extension.options.onError
  };
  const { fileItems, uploadFiles, removeFileItem, clearAllFiles } = useFileUpload(uploadOptions);
  const handleUpload = async (files) => {
    const urls = await uploadFiles(files);
    if (urls.length > 0) {
      const pos = props.getPos();
      if (isValidPosition(pos)) {
        const imageNodes = urls.map((url, index) => {
          const filename = files[index]?.name.replace(/\.[^/.]+$/, "") || "unknown";
          return {
            type: extension.options.type,
            attrs: {
              ...extension.options,
              src: url,
              alt: filename,
              title: filename
            }
          };
        });
        props.editor.chain().focus().deleteRange({ from: pos, to: pos + props.node.nodeSize }).insertContentAt(pos, imageNodes).run();
        focusNextNode(props.editor);
      }
    }
  };
  const handleChange = (e) => {
    const files = e.target.files;
    if (!files || files.length === 0) {
      extension.options.onError?.(new Error("No file selected"));
      return;
    }
    handleUpload(Array.from(files));
  };
  const handleClick = () => {
    if (inputRef.current && fileItems.length === 0) {
      inputRef.current.value = "";
      inputRef.current.click();
    }
  };
  const hasFiles = fileItems.length > 0;
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
    import_react14.NodeViewWrapper,
    {
      className: "tiptap-image-upload",
      tabIndex: 0,
      onClick: handleClick,
      children: [
        !hasFiles && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(ImageUploadDragArea, { onFile: handleUpload, children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(DropZoneContent, { maxSize, limit }) }),
        hasFiles && /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "tiptap-image-upload-previews", children: [
          fileItems.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "tiptap-image-upload-header", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("span", { children: [
              "Uploading ",
              fileItems.length,
              " files"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
              Button2,
              {
                type: "button",
                "data-style": "ghost",
                onClick: (e) => {
                  e.stopPropagation();
                  clearAllFiles();
                },
                children: "Clear All"
              }
            )
          ] }),
          fileItems.map((fileItem) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
            ImageUploadPreview,
            {
              fileItem,
              onRemove: () => removeFileItem(fileItem.id)
            },
            fileItem.id
          ))
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
          "input",
          {
            ref: inputRef,
            name: "file",
            accept,
            type: "file",
            multiple: limit > 1,
            onChange: handleChange,
            onClick: (e) => e.stopPropagation()
          }
        )
      ]
    }
  );
};

// src/components/tiptap-node/image-upload-node/image-upload-node-extension.ts
var ImageUploadNode2 = import_react15.Node.create({
  name: "imageUpload",
  group: "block",
  draggable: true,
  selectable: true,
  atom: true,
  addOptions() {
    return {
      type: "image",
      accept: "image/*",
      limit: 1,
      maxSize: 0,
      upload: void 0,
      onError: void 0,
      onSuccess: void 0,
      HTMLAttributes: {}
    };
  },
  addAttributes() {
    return {
      accept: {
        default: this.options.accept
      },
      limit: {
        default: this.options.limit
      },
      maxSize: {
        default: this.options.maxSize
      }
    };
  },
  parseHTML() {
    return [{ tag: 'div[data-type="image-upload"]' }];
  },
  renderHTML({ HTMLAttributes }) {
    return [
      "div",
      (0, import_react15.mergeAttributes)({ "data-type": "image-upload" }, HTMLAttributes)
    ];
  },
  addNodeView() {
    return (0, import_react16.ReactNodeViewRenderer)(ImageUploadNode);
  },
  addCommands() {
    return {
      setImageUploadNode: (options) => ({ commands }) => {
        return commands.insertContent({
          type: this.name,
          attrs: options
        });
      }
    };
  },
  /**
   * Adds Enter key handler to trigger the upload component when it's selected.
   */
  addKeyboardShortcuts() {
    return {
      Enter: ({ editor }) => {
        const { selection } = editor.state;
        const { nodeAfter } = selection.$from;
        if (nodeAfter && nodeAfter.type.name === "imageUpload" && editor.isActive("imageUpload")) {
          const nodeEl = editor.view.nodeDOM(selection.$from.pos);
          if (nodeEl && nodeEl instanceof HTMLElement) {
            const firstChild = nodeEl.firstChild;
            if (firstChild && firstChild instanceof HTMLElement) {
              firstChild.click();
              return true;
            }
          }
        }
        return false;
      }
    };
  }
});

// src/components/tiptap-node/horizontal-rule-node/horizontal-rule-node-extension.ts
var import_react17 = require("@tiptap/react");
var import_extension_horizontal_rule = __toESM(require("@tiptap/extension-horizontal-rule"));
var HorizontalRule = import_extension_horizontal_rule.default.extend({
  renderHTML() {
    return [
      "div",
      (0, import_react17.mergeAttributes)(this.options.HTMLAttributes, { "data-type": this.name }),
      ["hr"]
    ];
  }
});

// src/components/tiptap-ui/heading-dropdown-menu/heading-dropdown-menu.tsx
var import_react32 = require("react");

// src/components/tiptap-icons/chevron-down-icon.tsx
var import_react18 = require("react");
var import_jsx_runtime20 = require("react/jsx-runtime");
var ChevronDownIcon = (0, import_react18.memo)(({ className, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
    "svg",
    {
      width: "24",
      height: "24",
      className,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z",
          fill: "currentColor"
        }
      )
    }
  );
});
ChevronDownIcon.displayName = "ChevronDownIcon";

// src/hooks/use-tiptap-editor.ts
var import_react19 = require("@tiptap/react");
var import_react20 = require("react");
function useTiptapEditor(providedEditor) {
  const { editor: coreEditor } = (0, import_react19.useCurrentEditor)();
  const mainEditor = (0, import_react20.useMemo)(
    () => providedEditor || coreEditor,
    [providedEditor, coreEditor]
  );
  const editorState = (0, import_react19.useEditorState)({
    editor: mainEditor,
    selector(context) {
      if (!context.editor) {
        return {
          editor: null,
          editorState: void 0,
          canCommand: void 0
        };
      }
      return {
        editor: context.editor,
        editorState: context.editor.state,
        canCommand: context.editor.can
      };
    }
  });
  return editorState || { editor: null };
}

// src/components/tiptap-ui/heading-button/heading-button.tsx
var import_react22 = require("react");

// src/components/tiptap-ui-primitive/badge/badge.tsx
var import_react21 = require("react");
var import_jsx_runtime21 = require("react/jsx-runtime");
var Badge = (0, import_react21.forwardRef)(
  ({
    variant,
    size = "default",
    appearance = "default",
    trimText = false,
    className,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
      "div",
      {
        ref,
        className: `tiptap-badge ${className || ""}`,
        "data-style": variant,
        "data-size": size,
        "data-appearance": appearance,
        "data-text-trim": trimText ? "on" : "off",
        ...props,
        children
      }
    );
  }
);
Badge.displayName = "Badge";

// src/components/tiptap-ui/heading-button/heading-button.tsx
var import_jsx_runtime22 = require("react/jsx-runtime");
function HeadingShortcutBadge({
  level,
  shortcutKeys = HEADING_SHORTCUT_KEYS[level]
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Badge, { children: parseShortcutKeys({ shortcutKeys }) });
}
var HeadingButton = (0, import_react22.forwardRef)(
  ({
    editor: providedEditor,
    level,
    text,
    hideWhenUnavailable = false,
    onToggled,
    showShortcut = true,
    onClick,
    children,
    ...buttonProps
  }, ref) => {
    const { editor } = useTiptapEditor(providedEditor);
    const {
      isVisible,
      canToggle: canToggle2,
      isActive,
      handleToggle,
      label,
      Icon,
      shortcutKeys
    } = useHeading({
      editor,
      level,
      hideWhenUnavailable,
      onToggled
    });
    const handleClick = (0, import_react22.useCallback)(
      (event) => {
        onClick?.(event);
        if (event.defaultPrevented) return;
        handleToggle();
      },
      [handleToggle, onClick]
    );
    if (!isVisible) {
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
      Button2,
      {
        type: "button",
        "data-style": "ghost",
        "data-active-state": isActive ? "on" : "off",
        role: "button",
        tabIndex: -1,
        disabled: !canToggle2,
        "data-disabled": !canToggle2,
        "aria-label": label,
        "aria-pressed": isActive,
        tooltip: `${label}${shortcutKeys ? ` (${String(parseShortcutKeys({ shortcutKeys })).replace(/Mod/i, "Ctrl").replace(/,/g, " + ")})` : ""}`,
        onClick: handleClick,
        ...buttonProps,
        ref,
        children: children ?? /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(import_jsx_runtime22.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Icon, { className: "tiptap-button-icon" }),
          text && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "tiptap-button-text", children: text }),
          showShortcut && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(HeadingShortcutBadge, { level, shortcutKeys })
        ] })
      }
    );
  }
);
HeadingButton.displayName = "HeadingButton";

// src/components/tiptap-ui/heading-button/use-heading.ts
var import_react29 = require("react");
var import_state2 = require("@tiptap/pm/state");

// src/components/tiptap-icons/heading-one-icon.tsx
var import_react23 = require("react");
var import_jsx_runtime23 = require("react/jsx-runtime");
var HeadingOneIcon = (0, import_react23.memo)(({ className, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(
    "svg",
    {
      width: "24",
      height: "24",
      className,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
          "path",
          {
            d: "M5 6C5 5.44772 4.55228 5 4 5C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19C4.55228 19 5 18.5523 5 18V13H11V18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18V6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6V11H5V6Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
          "path",
          {
            d: "M21.0001 10C21.0001 9.63121 20.7971 9.29235 20.472 9.11833C20.1468 8.94431 19.7523 8.96338 19.4454 9.16795L16.4454 11.168C15.9859 11.4743 15.8617 12.0952 16.1681 12.5547C16.4744 13.0142 17.0953 13.1384 17.5548 12.8321L19.0001 11.8685V18C19.0001 18.5523 19.4478 19 20.0001 19C20.5524 19 21.0001 18.5523 21.0001 18V10Z",
            fill: "currentColor"
          }
        )
      ]
    }
  );
});
HeadingOneIcon.displayName = "HeadingOneIcon";

// src/components/tiptap-icons/heading-two-icon.tsx
var import_react24 = require("react");
var import_jsx_runtime24 = require("react/jsx-runtime");
var HeadingTwoIcon = (0, import_react24.memo)(({ className, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
    "svg",
    {
      width: "24",
      height: "24",
      className,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
          "path",
          {
            d: "M5 6C5 5.44772 4.55228 5 4 5C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19C4.55228 19 5 18.5523 5 18V13H11V18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18V6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6V11H5V6Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
          "path",
          {
            d: "M22.0001 12C22.0001 10.7611 21.1663 9.79297 20.0663 9.42632C18.9547 9.05578 17.6171 9.28724 16.4001 10.2C15.9582 10.5314 15.8687 11.1582 16.2001 11.6C16.5314 12.0418 17.1582 12.1314 17.6001 11.8C18.383 11.2128 19.0455 11.1942 19.4338 11.3237C19.8339 11.457 20.0001 11.7389 20.0001 12C20.0001 12.4839 19.8554 12.7379 19.6537 12.9481C19.4275 13.1837 19.1378 13.363 18.7055 13.6307C18.6313 13.6767 18.553 13.7252 18.4701 13.777C17.9572 14.0975 17.3128 14.5261 16.8163 15.2087C16.3007 15.9177 16.0001 16.8183 16.0001 18C16.0001 18.5523 16.4478 19 17.0001 19H21.0001C21.5523 19 22.0001 18.5523 22.0001 18C22.0001 17.4477 21.5523 17 21.0001 17H18.131C18.21 16.742 18.3176 16.5448 18.4338 16.385C18.6873 16.0364 19.0429 15.7775 19.5301 15.473C19.5898 15.4357 19.6536 15.3966 19.7205 15.3556C20.139 15.0992 20.6783 14.7687 21.0964 14.3332C21.6447 13.7621 22.0001 13.0161 22.0001 12Z",
            fill: "currentColor"
          }
        )
      ]
    }
  );
});
HeadingTwoIcon.displayName = "HeadingTwoIcon";

// src/components/tiptap-icons/heading-three-icon.tsx
var import_react25 = require("react");
var import_jsx_runtime25 = require("react/jsx-runtime");
var HeadingThreeIcon = (0, import_react25.memo)(({ className, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
    "svg",
    {
      width: "24",
      height: "24",
      className,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
          "path",
          {
            d: "M4 5C4.55228 5 5 5.44772 5 6V11H11V6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6V18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18V13H5V18C5 18.5523 4.55228 19 4 19C3.44772 19 3 18.5523 3 18V6C3 5.44772 3.44772 5 4 5Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M19.4608 11.2169C19.1135 11.0531 18.5876 11.0204 18.0069 11.3619C17.5309 11.642 16.918 11.4831 16.638 11.007C16.358 10.531 16.5169 9.91809 16.9929 9.63807C18.1123 8.97962 19.3364 8.94691 20.314 9.40808C21.2839 9.86558 21.9999 10.818 21.9999 12C21.9999 12.7957 21.6838 13.5587 21.1212 14.1213C20.5586 14.6839 19.7956 15 18.9999 15C18.4476 15 17.9999 14.5523 17.9999 14C17.9999 13.4477 18.4476 13 18.9999 13C19.2651 13 19.5195 12.8947 19.707 12.7071C19.8946 12.5196 19.9999 12.2652 19.9999 12C19.9999 11.6821 19.8159 11.3844 19.4608 11.2169Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M18.0001 14C18.0001 13.4477 18.4478 13 19.0001 13C19.7957 13 20.5588 13.3161 21.1214 13.8787C21.684 14.4413 22.0001 15.2043 22.0001 16C22.0001 17.2853 21.2767 18.3971 20.1604 18.8994C19.0257 19.41 17.642 19.2315 16.4001 18.3C15.9582 17.9686 15.8687 17.3418 16.2001 16.9C16.5314 16.4582 17.1582 16.3686 17.6001 16.7C18.3581 17.2685 18.9744 17.24 19.3397 17.0756C19.7234 16.9029 20.0001 16.5147 20.0001 16C20.0001 15.7348 19.8947 15.4804 19.7072 15.2929C19.5196 15.1054 19.2653 15 19.0001 15C18.4478 15 18.0001 14.5523 18.0001 14Z",
            fill: "currentColor"
          }
        )
      ]
    }
  );
});
HeadingThreeIcon.displayName = "HeadingThreeIcon";

// src/components/tiptap-icons/heading-four-icon.tsx
var import_react26 = require("react");
var import_jsx_runtime26 = require("react/jsx-runtime");
var HeadingFourIcon = (0, import_react26.memo)(({ className, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
    "svg",
    {
      width: "24",
      height: "24",
      className,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
          "path",
          {
            d: "M4 5C4.55228 5 5 5.44772 5 6V11H11V6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6V18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18V13H5V18C5 18.5523 4.55228 19 4 19C3.44772 19 3 18.5523 3 18V6C3 5.44772 3.44772 5 4 5Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
          "path",
          {
            d: "M17 9C17.5523 9 18 9.44772 18 10V13H20V10C20 9.44772 20.4477 9 21 9C21.5523 9 22 9.44772 22 10V18C22 18.5523 21.5523 19 21 19C20.4477 19 20 18.5523 20 18V15H17C16.4477 15 16 14.5523 16 14V10C16 9.44772 16.4477 9 17 9Z",
            fill: "currentColor"
          }
        )
      ]
    }
  );
});
HeadingFourIcon.displayName = "HeadingFourIcon";

// src/components/tiptap-icons/heading-five-icon.tsx
var import_react27 = require("react");
var import_jsx_runtime27 = require("react/jsx-runtime");
var HeadingFiveIcon = (0, import_react27.memo)(({ className, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
    "svg",
    {
      width: "24",
      height: "24",
      className,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
          "path",
          {
            d: "M5 6C5 5.44772 4.55228 5 4 5C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19C4.55228 19 5 18.5523 5 18V13H11V18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18V6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6V11H5V6Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
          "path",
          {
            d: "M16 10C16 9.44772 16.4477 9 17 9H21C21.5523 9 22 9.44772 22 10C22 10.5523 21.5523 11 21 11H18V12H18.3C20.2754 12 22 13.4739 22 15.5C22 17.5261 20.2754 19 18.3 19C17.6457 19 17.0925 18.8643 16.5528 18.5944C16.0588 18.3474 15.8586 17.7468 16.1055 17.2528C16.3525 16.7588 16.9532 16.5586 17.4472 16.8056C17.7074 16.9357 17.9542 17 18.3 17C19.3246 17 20 16.2739 20 15.5C20 14.7261 19.3246 14 18.3 14H17C16.4477 14 16 13.5523 16 13L16 12.9928V10Z",
            fill: "currentColor"
          }
        )
      ]
    }
  );
});
HeadingFiveIcon.displayName = "HeadingFiveIcon";

// src/components/tiptap-icons/heading-six-icon.tsx
var import_react28 = require("react");
var import_jsx_runtime28 = require("react/jsx-runtime");
var HeadingSixIcon = (0, import_react28.memo)(({ className, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(
    "svg",
    {
      width: "24",
      height: "24",
      className,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
          "path",
          {
            d: "M5 6C5 5.44772 4.55228 5 4 5C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19C4.55228 19 5 18.5523 5 18V13H11V18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18V6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6V11H5V6Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M20.7071 9.29289C21.0976 9.68342 21.0976 10.3166 20.7071 10.7071C19.8392 11.575 19.2179 12.2949 18.7889 13.0073C18.8587 13.0025 18.929 13 19 13C20.6569 13 22 14.3431 22 16C22 17.6569 20.6569 19 19 19C17.3431 19 16 17.6569 16 16C16 14.6007 16.2837 13.4368 16.8676 12.3419C17.4384 11.2717 18.2728 10.3129 19.2929 9.29289C19.6834 8.90237 20.3166 8.90237 20.7071 9.29289ZM19 17C18.4477 17 18 16.5523 18 16C18 15.4477 18.4477 15 19 15C19.5523 15 20 15.4477 20 16C20 16.5523 19.5523 17 19 17Z",
            fill: "currentColor"
          }
        )
      ]
    }
  );
});
HeadingSixIcon.displayName = "HeadingSixIcon";

// src/components/tiptap-ui/heading-button/use-heading.ts
var headingIcons = {
  1: HeadingOneIcon,
  2: HeadingTwoIcon,
  3: HeadingThreeIcon,
  4: HeadingFourIcon,
  5: HeadingFiveIcon,
  6: HeadingSixIcon
};
var HEADING_SHORTCUT_KEYS = {
  1: "ctrl+alt+1",
  2: "ctrl+alt+2",
  3: "ctrl+alt+3",
  4: "ctrl+alt+4",
  5: "ctrl+alt+5",
  6: "ctrl+alt+6"
};
function canToggle(editor, level, turnInto = true) {
  if (!editor || !editor.isEditable) return false;
  if (!isNodeInSchema("heading", editor) || isNodeTypeSelected(editor, ["image"]))
    return false;
  if (!turnInto) {
    return level ? editor.can().setNode("heading", { level }) : editor.can().setNode("heading");
  }
  if (!selectionWithinConvertibleTypes(editor, [
    "paragraph",
    "heading",
    "bulletList",
    "orderedList",
    "taskList",
    "blockquote",
    "codeBlock"
  ]))
    return false;
  return level ? editor.can().setNode("heading", { level }) || editor.can().clearNodes() : editor.can().setNode("heading") || editor.can().clearNodes();
}
function isHeadingActive(editor, level) {
  if (!editor || !editor.isEditable) return false;
  if (Array.isArray(level)) {
    return level.some((l) => editor.isActive("heading", { level: l }));
  }
  return level ? editor.isActive("heading", { level }) : editor.isActive("heading");
}
function toggleHeading(editor, level) {
  if (!editor || !editor.isEditable) return false;
  const levels = Array.isArray(level) ? level : [level];
  const toggleLevel = levels.find((l) => canToggle(editor, l));
  if (!toggleLevel) return false;
  try {
    const view = editor.view;
    let state = view.state;
    let tr = state.tr;
    if (state.selection.empty || state.selection instanceof import_state2.TextSelection) {
      const pos = findNodePosition({
        editor,
        node: state.selection.$anchor.node(1)
      })?.pos;
      if (!isValidPosition(pos)) return false;
      tr = tr.setSelection(import_state2.NodeSelection.create(state.doc, pos));
      view.dispatch(tr);
      state = view.state;
    }
    const selection = state.selection;
    let chain = editor.chain().focus();
    if (selection instanceof import_state2.NodeSelection) {
      const firstChild = selection.node.firstChild?.firstChild;
      const lastChild = selection.node.lastChild?.lastChild;
      const from = firstChild ? selection.from + firstChild.nodeSize : selection.from + 1;
      const to = lastChild ? selection.to - lastChild.nodeSize : selection.to - 1;
      const resolvedFrom = state.doc.resolve(from);
      const resolvedTo = state.doc.resolve(to);
      chain = chain.setTextSelection(import_state2.TextSelection.between(resolvedFrom, resolvedTo)).clearNodes();
    }
    const isActive = levels.some(
      (l) => editor.isActive("heading", { level: l })
    );
    const toggle = isActive ? chain.setNode("paragraph") : chain.setNode("heading", { level: toggleLevel });
    toggle.run();
    editor.chain().focus().selectTextblockEnd().run();
    return true;
  } catch {
    return false;
  }
}
function shouldShowButton(props) {
  const { editor, level, hideWhenUnavailable } = props;
  if (!editor || !editor.isEditable) return false;
  if (!isNodeInSchema("heading", editor)) return false;
  if (hideWhenUnavailable && !editor.isActive("code")) {
    if (Array.isArray(level)) {
      return level.some((l) => canToggle(editor, l));
    }
    return canToggle(editor, level);
  }
  return true;
}
function useHeading(config) {
  const {
    editor: providedEditor,
    level,
    hideWhenUnavailable = false,
    onToggled
  } = config;
  const { editor } = useTiptapEditor(providedEditor);
  const [isVisible, setIsVisible] = (0, import_react29.useState)(true);
  const canToggleState = canToggle(editor, level);
  const isActive = isHeadingActive(editor, level);
  (0, import_react29.useEffect)(() => {
    if (!editor) return;
    const handleSelectionUpdate = () => {
      setIsVisible(shouldShowButton({ editor, level, hideWhenUnavailable }));
    };
    handleSelectionUpdate();
    editor.on("selectionUpdate", handleSelectionUpdate);
    return () => {
      editor.off("selectionUpdate", handleSelectionUpdate);
    };
  }, [editor, level, hideWhenUnavailable]);
  const handleToggle = (0, import_react29.useCallback)(() => {
    if (!editor) return false;
    const success = toggleHeading(editor, level);
    if (success) {
      onToggled?.();
    }
    return success;
  }, [editor, level, onToggled]);
  return {
    isVisible,
    isActive,
    handleToggle,
    canToggle: canToggleState,
    label: `Heading ${level}`,
    shortcutKeys: HEADING_SHORTCUT_KEYS[level],
    Icon: headingIcons[level]
  };
}

// src/components/tiptap-ui-primitive/dropdown-menu/dropdown-menu.tsx
var import_react30 = require("react");
var DropdownMenuPrimitive2 = __toESM(require("@radix-ui/react-dropdown-menu"));
var import_jsx_runtime29 = require("react/jsx-runtime");
function DropdownMenu2({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(DropdownMenuPrimitive2.Root, { modal: false, ...props });
}
function DropdownMenuPortal({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(DropdownMenuPrimitive2.Portal, { ...props });
}
var DropdownMenuTrigger2 = (0, import_react30.forwardRef)(({ ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(DropdownMenuPrimitive2.Trigger, { ref, ...props }));
DropdownMenuTrigger2.displayName = DropdownMenuPrimitive2.Trigger.displayName;
var DropdownMenuItem2 = DropdownMenuPrimitive2.Item;
var DropdownMenuSubContent = (0, import_react30.forwardRef)(({ className, portal = true, ...props }, ref) => {
  const content = /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
    DropdownMenuPrimitive2.SubContent,
    {
      ref,
      className: cn2("tiptap-dropdown-menu", className),
      ...props
    }
  );
  return portal ? /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(DropdownMenuPortal, { ...typeof portal === "object" ? portal : {}, children: content }) : content;
});
DropdownMenuSubContent.displayName = DropdownMenuPrimitive2.SubContent.displayName;
var DropdownMenuContent2 = (0, import_react30.forwardRef)(({ className, sideOffset = 4, portal = false, ...props }, ref) => {
  const content = /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
    DropdownMenuPrimitive2.Content,
    {
      ref,
      sideOffset,
      onCloseAutoFocus: (e) => e.preventDefault(),
      className: cn2("tiptap-dropdown-menu", className),
      ...props
    }
  );
  return portal ? /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(DropdownMenuPortal, { ...typeof portal === "object" ? portal : {}, children: content }) : content;
});
DropdownMenuContent2.displayName = DropdownMenuPrimitive2.Content.displayName;

// src/components/tiptap-ui-primitive/card/card.tsx
var import_react31 = require("react");
var import_jsx_runtime30 = require("react/jsx-runtime");
var Card = (0, import_react31.forwardRef)(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { ref, className: cn2("tiptap-card", className), ...props });
  }
);
Card.displayName = "Card";
var CardHeader = (0, import_react31.forwardRef)(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
      "div",
      {
        ref,
        className: cn2("tiptap-card-header", className),
        ...props
      }
    );
  }
);
CardHeader.displayName = "CardHeader";
var CardBody = (0, import_react31.forwardRef)(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { ref, className: cn2("tiptap-card-body", className), ...props });
  }
);
CardBody.displayName = "CardBody";
var CardItemGroup = (0, import_react31.forwardRef)(({ className, orientation = "vertical", ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
    "div",
    {
      ref,
      "data-orientation": orientation,
      className: cn2("tiptap-card-item-group", className),
      ...props
    }
  );
});
CardItemGroup.displayName = "CardItemGroup";
var CardGroupLabel = (0, import_react31.forwardRef)(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
      "div",
      {
        ref,
        className: cn2("tiptap-card-group-label", className),
        ...props
      }
    );
  }
);
CardGroupLabel.displayName = "CardGroupLabel";
var CardFooter = (0, import_react31.forwardRef)(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
      "div",
      {
        ref,
        className: cn2("tiptap-card-footer", className),
        ...props
      }
    );
  }
);
CardFooter.displayName = "CardFooter";

// src/components/tiptap-ui/heading-dropdown-menu/heading-dropdown-menu.tsx
var import_jsx_runtime31 = require("react/jsx-runtime");
var HeadingDropdownMenu = (0, import_react32.forwardRef)(
  ({
    editor: providedEditor,
    levels = [1, 2, 3, 4, 5, 6],
    hideWhenUnavailable = false,
    portal = false,
    onOpenChange,
    ...buttonProps
  }, ref) => {
    const { editor } = useTiptapEditor(providedEditor);
    const [isOpen, setIsOpen] = (0, import_react32.useState)(false);
    const { isVisible, isActive, canToggle: canToggle2, Icon } = useHeadingDropdownMenu({
      editor,
      levels,
      hideWhenUnavailable
    });
    const handleOpenChange = (0, import_react32.useCallback)(
      (open) => {
        if (!editor || !canToggle2) return;
        setIsOpen(open);
        onOpenChange?.(open);
      },
      [canToggle2, editor, onOpenChange]
    );
    if (!isVisible) {
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(DropdownMenu2, { modal: true, open: isOpen, onOpenChange: handleOpenChange, children: [
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(DropdownMenuTrigger2, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(
        Button2,
        {
          type: "button",
          "data-style": "ghost",
          "data-active-state": isActive ? "on" : "off",
          role: "button",
          tabIndex: -1,
          disabled: !canToggle2,
          "data-disabled": !canToggle2,
          "aria-label": "Format text as heading",
          "aria-pressed": isActive,
          tooltip: "Heading",
          ...buttonProps,
          ref,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(Icon, { className: "tiptap-button-icon" }),
            /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(ChevronDownIcon, { className: "tiptap-button-dropdown-small" })
          ]
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(DropdownMenuContent2, { align: "start", portal, children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(CardBody, { children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(ButtonGroup, { children: levels.map((level) => /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(DropdownMenuItem2, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
        HeadingButton,
        {
          editor,
          level,
          text: `Heading ${level}`,
          showTooltip: false
        }
      ) }, `heading-${level}`)) }) }) }) })
    ] });
  }
);
HeadingDropdownMenu.displayName = "HeadingDropdownMenu";

// src/components/tiptap-ui/heading-dropdown-menu/use-heading-dropdown-menu.ts
var import_react34 = require("react");

// src/components/tiptap-icons/heading-icon.tsx
var import_react33 = require("react");
var import_jsx_runtime32 = require("react/jsx-runtime");
var HeadingIcon = (0, import_react33.memo)(({ className, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
    "svg",
    {
      width: "24",
      height: "24",
      className,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
        "path",
        {
          d: "M6 3C6.55228 3 7 3.44772 7 4V11H17V4C17 3.44772 17.4477 3 18 3C18.5523 3 19 3.44772 19 4V20C19 20.5523 18.5523 21 18 21C17.4477 21 17 20.5523 17 20V13H7V20C7 20.5523 6.55228 21 6 21C5.44772 21 5 20.5523 5 20V4C5 3.44772 5.44772 3 6 3Z",
          fill: "currentColor"
        }
      )
    }
  );
});
HeadingIcon.displayName = "HeadingIcon";

// src/components/tiptap-ui/heading-dropdown-menu/use-heading-dropdown-menu.ts
function getActiveHeadingLevel(editor, levels = [1, 2, 3, 4, 5, 6]) {
  if (!editor || !editor.isEditable) return void 0;
  return levels.find((level) => isHeadingActive(editor, level));
}
function useHeadingDropdownMenu(config) {
  const {
    editor: providedEditor,
    levels = [1, 2, 3, 4, 5, 6],
    hideWhenUnavailable = false
  } = config || {};
  const { editor } = useTiptapEditor(providedEditor);
  const [isVisible, setIsVisible] = (0, import_react34.useState)(true);
  const activeLevel = getActiveHeadingLevel(editor, levels);
  const isActive = isHeadingActive(editor);
  const canToggleState = canToggle(editor);
  (0, import_react34.useEffect)(() => {
    if (!editor) return;
    const handleSelectionUpdate = () => {
      setIsVisible(
        shouldShowButton({ editor, hideWhenUnavailable, level: levels })
      );
    };
    handleSelectionUpdate();
    editor.on("selectionUpdate", handleSelectionUpdate);
    return () => {
      editor.off("selectionUpdate", handleSelectionUpdate);
    };
  }, [editor, hideWhenUnavailable, levels]);
  return {
    isVisible,
    activeLevel,
    isActive,
    canToggle: canToggleState,
    levels,
    label: "Heading",
    Icon: activeLevel ? headingIcons[activeLevel] : HeadingIcon
  };
}

// src/components/tiptap-ui/image-upload-button/image-upload-button.tsx
var import_react35 = require("react");
var import_jsx_runtime33 = require("react/jsx-runtime");
function ImageShortcutBadge({
  shortcutKeys = IMAGE_UPLOAD_SHORTCUT_KEY
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Badge, { children: parseShortcutKeys({ shortcutKeys }) });
}
var ImageUploadButton = (0, import_react35.forwardRef)(
  ({
    editor: providedEditor,
    text,
    hideWhenUnavailable = false,
    onInserted,
    showShortcut = false,
    onClick,
    icon: CustomIcon,
    children,
    ...buttonProps
  }, ref) => {
    const { editor } = useTiptapEditor(providedEditor);
    const {
      isVisible,
      canInsert,
      handleImage,
      label,
      isActive,
      shortcutKeys,
      Icon
    } = useImageUpload({
      editor,
      hideWhenUnavailable,
      onInserted
    });
    const handleClick = (0, import_react35.useCallback)(
      async (event) => {
        onClick?.(event);
        if (event.defaultPrevented) return;
        await handleImage();
      },
      [handleImage, onClick]
    );
    if (!isVisible) {
      return null;
    }
    const RenderIcon = CustomIcon ?? Icon;
    return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
      Button2,
      {
        type: "button",
        "data-style": "ghost",
        "data-active-state": isActive ? "on" : "off",
        role: "button",
        tabIndex: -1,
        disabled: !canInsert,
        "data-disabled": !canInsert,
        "aria-label": label,
        "aria-pressed": isActive,
        tooltip: `${label}${shortcutKeys ? ` (${String(parseShortcutKeys({ shortcutKeys })).replace(/Mod/i, "Ctrl").replace(/,/g, " + ")})` : ""}`,
        onClick: handleClick,
        ...buttonProps,
        ref,
        children: children ?? /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(import_jsx_runtime33.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(RenderIcon, { className: "tiptap-button-icon" }),
          text && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { className: "tiptap-button-text", children: text }),
          showShortcut && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(ImageShortcutBadge, { shortcutKeys })
        ] })
      }
    );
  }
);
ImageUploadButton.displayName = "ImageUploadButton";

// src/components/tiptap-ui/image-upload-button/use-image-upload.ts
var import_react38 = require("react");
var import_react_hotkeys_hook = require("react-hotkeys-hook");

// src/hooks/use-is-breakpoint.ts
var import_react36 = require("react");
function useIsBreakpoint(mode = "max", breakpoint = 768) {
  const [matches, setMatches] = (0, import_react36.useState)(void 0);
  (0, import_react36.useEffect)(() => {
    const query = mode === "min" ? `(min-width: ${breakpoint}px)` : `(max-width: ${breakpoint - 1}px)`;
    const mql = window.matchMedia(query);
    const onChange = (e) => setMatches(e.matches);
    setMatches(mql.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [mode, breakpoint]);
  return !!matches;
}

// src/components/tiptap-icons/image-plus-icon.tsx
var import_react37 = require("react");
var import_jsx_runtime34 = require("react/jsx-runtime");
var ImagePlusIcon = (0, import_react37.memo)(({ className, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
    "svg",
    {
      width: "24",
      height: "24",
      className,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M20 2C20 1.44772 19.5523 1 19 1C18.4477 1 18 1.44772 18 2V4H16C15.4477 4 15 4.44772 15 5C15 5.55228 15.4477 6 16 6H18V8C18 8.55228 18.4477 9 19 9C19.5523 9 20 8.55228 20 8V6H22C22.5523 6 23 5.55228 23 5C23 4.44772 22.5523 4 22 4H20V2ZM5 4C4.73478 4 4.48043 4.10536 4.29289 4.29289C4.10536 4.48043 4 4.73478 4 5V19C4 19.2652 4.10536 19.5196 4.29289 19.7071C4.48043 19.8946 4.73478 20 5 20H5.58579L14.379 11.2068C14.9416 10.6444 15.7045 10.3284 16.5 10.3284C17.2955 10.3284 18.0584 10.6444 18.621 11.2068L20 12.5858V12C20 11.4477 20.4477 11 21 11C21.5523 11 22 11.4477 22 12V14.998C22 14.9994 22 15.0007 22 15.002V19C22 19.7957 21.6839 20.5587 21.1213 21.1213C20.5587 21.6839 19.7957 22 19 22H6.00219C6.00073 22 5.99927 22 5.99781 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7957 2 19V5C2 4.20435 2.31607 3.44129 2.87868 2.87868C3.44129 2.31607 4.20435 2 5 2H12C12.5523 2 13 2.44772 13 3C13 3.55228 12.5523 4 12 4H5ZM8.41422 20H19C19.2652 20 19.5196 19.8946 19.7071 19.7071C19.8946 19.5196 20 19.2652 20 19V15.4142L17.207 12.6212C17.0195 12.4338 16.7651 12.3284 16.5 12.3284C16.2349 12.3284 15.9806 12.4337 15.7931 12.6211L8.41422 20ZM6.87868 6.87868C7.44129 6.31607 8.20435 6 9 6C9.79565 6 10.5587 6.31607 11.1213 6.87868C11.6839 7.44129 12 8.20435 12 9C12 9.79565 11.6839 10.5587 11.1213 11.1213C10.5587 11.6839 9.79565 12 9 12C8.20435 12 7.44129 11.6839 6.87868 11.1213C6.31607 10.5587 6 9.79565 6 9C6 8.20435 6.31607 7.44129 6.87868 6.87868ZM9 8C8.73478 8 8.48043 8.10536 8.29289 8.29289C8.10536 8.48043 8 8.73478 8 9C8 9.26522 8.10536 9.51957 8.29289 9.70711C8.48043 9.89464 8.73478 10 9 10C9.26522 10 9.51957 9.89464 9.70711 9.70711C9.89464 9.51957 10 9.26522 10 9C10 8.73478 9.89464 8.48043 9.70711 8.29289C9.51957 8.10536 9.26522 8 9 8Z",
          fill: "currentColor"
        }
      )
    }
  );
});
ImagePlusIcon.displayName = "ImagePlusIcon";

// src/components/tiptap-ui/image-upload-button/use-image-upload.ts
var IMAGE_UPLOAD_SHORTCUT_KEY = "mod+shift+i";
function canInsertImage(editor) {
  if (!editor || !editor.isEditable) return false;
  if (!isExtensionAvailable(editor, "imageUpload")) return false;
  return editor.can().insertContent({ type: "imageUpload" });
}
function isImageActive(editor) {
  if (!editor || !editor.isEditable) return false;
  return editor.isActive("imageUpload");
}
async function insertImage(editor) {
  if (!editor || !editor.isEditable) return false;
  if (!canInsertImage(editor)) return false;
  try {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    return new Promise((resolve) => {
      input.onchange = async () => {
        const file = input.files?.[0];
        if (!file) return resolve(false);
        const reader = new FileReader();
        reader.onload = () => {
          const base64 = reader.result;
          const images = JSON.parse(localStorage.getItem("tiptap-images") || "[]");
          images.push(base64);
          localStorage.setItem("tiptap-images", JSON.stringify(images));
          editor.chain().focus().insertContent({
            type: "image",
            attrs: { src: base64 }
          }).run();
          resolve(true);
        };
        reader.onerror = () => resolve(false);
        reader.readAsDataURL(file);
      };
      input.click();
    });
  } catch {
    return false;
  }
}
function shouldShowButton2(props) {
  const { editor, hideWhenUnavailable } = props;
  if (!editor || !editor.isEditable) return false;
  if (!isExtensionAvailable(editor, "imageUpload")) return false;
  if (hideWhenUnavailable && !editor.isActive("code")) {
    return canInsertImage(editor);
  }
  return true;
}
function useImageUpload(config) {
  const {
    editor: providedEditor,
    hideWhenUnavailable = false,
    onInserted
  } = config || {};
  const { editor } = useTiptapEditor(providedEditor);
  const isMobile = useIsBreakpoint();
  const [isVisible, setIsVisible] = (0, import_react38.useState)(true);
  const canInsert = canInsertImage(editor);
  const isActive = isImageActive(editor);
  (0, import_react38.useEffect)(() => {
    if (!editor) return;
    const handleSelectionUpdate = () => {
      setIsVisible(shouldShowButton2({ editor, hideWhenUnavailable }));
    };
    handleSelectionUpdate();
    editor.on("selectionUpdate", handleSelectionUpdate);
    return () => {
      editor.off("selectionUpdate", handleSelectionUpdate);
    };
  }, [editor, hideWhenUnavailable]);
  const handleImage = (0, import_react38.useCallback)(async () => {
    if (!editor) return false;
    const success = insertImage(editor);
    if (await success) {
      onInserted?.();
    }
    return success;
  }, [editor, onInserted]);
  (0, import_react_hotkeys_hook.useHotkeys)(
    IMAGE_UPLOAD_SHORTCUT_KEY,
    (event) => {
      event.preventDefault();
      handleImage();
    },
    {
      enabled: isVisible && canInsert,
      enableOnContentEditable: !isMobile,
      enableOnFormTags: true
    }
  );
  return {
    isVisible,
    isActive,
    handleImage,
    canInsert,
    label: "Add image",
    shortcutKeys: IMAGE_UPLOAD_SHORTCUT_KEY,
    Icon: ImagePlusIcon
  };
}

// src/components/tiptap-ui/list-dropdown-menu/list-dropdown-menu.tsx
var import_react45 = require("react");

// src/components/tiptap-ui/list-button/list-button.tsx
var import_react39 = require("react");
var import_jsx_runtime35 = require("react/jsx-runtime");
function ListShortcutBadge({
  type,
  shortcutKeys = LIST_SHORTCUT_KEYS[type]
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(Badge, { children: parseShortcutKeys({ shortcutKeys }) });
}
var ListButton = (0, import_react39.forwardRef)(
  ({
    editor: providedEditor,
    type,
    text,
    hideWhenUnavailable = false,
    onToggled,
    showShortcut = true,
    onClick,
    children,
    ...buttonProps
  }, ref) => {
    const { editor } = useTiptapEditor(providedEditor);
    const {
      isVisible,
      canToggle: canToggle2,
      isActive,
      handleToggle,
      label,
      shortcutKeys,
      Icon
    } = useList({
      editor,
      type,
      hideWhenUnavailable,
      onToggled
    });
    const handleClick = (0, import_react39.useCallback)(
      (event) => {
        onClick?.(event);
        if (event.defaultPrevented) return;
        handleToggle();
      },
      [handleToggle, onClick]
    );
    if (!isVisible) {
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
      Button2,
      {
        type: "button",
        "data-style": "ghost",
        "data-active-state": isActive ? "on" : "off",
        role: "button",
        tabIndex: -1,
        disabled: !canToggle2,
        "data-disabled": !canToggle2,
        "aria-label": label,
        "aria-pressed": isActive,
        tooltip: `${label}${shortcutKeys ? ` (${String(parseShortcutKeys({ shortcutKeys })).replace(/Mod/i, "Ctrl").replace(/,/g, " + ")})` : ""}`,
        onClick: handleClick,
        ...buttonProps,
        ref,
        children: children ?? /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(import_jsx_runtime35.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(Icon, { className: "tiptap-button-icon" }),
          text && /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { className: "tiptap-button-text", children: text }),
          showShortcut && /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(ListShortcutBadge, { type, shortcutKeys })
        ] })
      }
    );
  }
);
ListButton.displayName = "ListButton";

// src/components/tiptap-ui/list-button/use-list.ts
var import_react43 = require("react");
var import_state3 = require("@tiptap/pm/state");

// src/components/tiptap-icons/list-icon.tsx
var import_react40 = require("react");
var import_jsx_runtime36 = require("react/jsx-runtime");
var ListIcon = (0, import_react40.memo)(({ className, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
    "svg",
    {
      width: "24",
      height: "24",
      className,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M7 6C7 5.44772 7.44772 5 8 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H8C7.44772 7 7 6.55228 7 6Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M7 12C7 11.4477 7.44772 11 8 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H8C7.44772 13 7 12.5523 7 12Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M7 18C7 17.4477 7.44772 17 8 17H21C21.5523 17 22 17.4477 22 18C22 18.5523 21.5523 19 21 19H8C7.44772 19 7 18.5523 7 18Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M2 6C2 5.44772 2.44772 5 3 5H3.01C3.56228 5 4.01 5.44772 4.01 6C4.01 6.55228 3.56228 7 3.01 7H3C2.44772 7 2 6.55228 2 6Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M2 12C2 11.4477 2.44772 11 3 11H3.01C3.56228 11 4.01 11.4477 4.01 12C4.01 12.5523 3.56228 13 3.01 13H3C2.44772 13 2 12.5523 2 12Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M2 18C2 17.4477 2.44772 17 3 17H3.01C3.56228 17 4.01 17.4477 4.01 18C4.01 18.5523 3.56228 19 3.01 19H3C2.44772 19 2 18.5523 2 18Z",
            fill: "currentColor"
          }
        )
      ]
    }
  );
});
ListIcon.displayName = "ListIcon";

// src/components/tiptap-icons/list-ordered-icon.tsx
var import_react41 = require("react");
var import_jsx_runtime37 = require("react/jsx-runtime");
var ListOrderedIcon = (0, import_react41.memo)(({ className, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(
    "svg",
    {
      width: "24",
      height: "24",
      className,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M9 6C9 5.44772 9.44772 5 10 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H10C9.44772 7 9 6.55228 9 6Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M9 12C9 11.4477 9.44772 11 10 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H10C9.44772 13 9 12.5523 9 12Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M9 18C9 17.4477 9.44772 17 10 17H21C21.5523 17 22 17.4477 22 18C22 18.5523 21.5523 19 21 19H10C9.44772 19 9 18.5523 9 18Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M3 6C3 5.44772 3.44772 5 4 5H5C5.55228 5 6 5.44772 6 6V10C6 10.5523 5.55228 11 5 11C4.44772 11 4 10.5523 4 10V7C3.44772 7 3 6.55228 3 6Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M3 10C3 9.44772 3.44772 9 4 9H6C6.55228 9 7 9.44772 7 10C7 10.5523 6.55228 11 6 11H4C3.44772 11 3 10.5523 3 10Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M5.82219 13.0431C6.54543 13.4047 6.99997 14.1319 6.99997 15C6.99997 15.5763 6.71806 16.0426 6.48747 16.35C6.31395 16.5814 6.1052 16.8044 5.91309 17H5.99997C6.55226 17 6.99997 17.4477 6.99997 18C6.99997 18.5523 6.55226 19 5.99997 19H3.99997C3.44769 19 2.99997 18.5523 2.99997 18C2.99997 17.4237 3.28189 16.9575 3.51247 16.65C3.74323 16.3424 4.03626 16.0494 4.26965 15.8161C4.27745 15.8083 4.2852 15.8006 4.29287 15.7929C4.55594 15.5298 4.75095 15.3321 4.88748 15.15C4.96287 15.0495 4.99021 14.9922 4.99911 14.9714C4.99535 14.9112 4.9803 14.882 4.9739 14.8715C4.96613 14.8588 4.95382 14.845 4.92776 14.8319C4.87723 14.8067 4.71156 14.7623 4.44719 14.8944C3.95321 15.1414 3.35254 14.9412 3.10555 14.4472C2.85856 13.9533 3.05878 13.3526 3.55276 13.1056C4.28839 12.7378 5.12272 12.6934 5.82219 13.0431Z",
            fill: "currentColor"
          }
        )
      ]
    }
  );
});
ListOrderedIcon.displayName = "ListOrderedIcon";

// src/components/tiptap-icons/list-todo-icon.tsx
var import_react42 = require("react");
var import_jsx_runtime38 = require("react/jsx-runtime");
var ListTodoIcon = (0, import_react42.memo)(({ className, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(
    "svg",
    {
      width: "24",
      height: "24",
      className,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M2 6C2 4.89543 2.89543 4 4 4H8C9.10457 4 10 4.89543 10 6V10C10 11.1046 9.10457 12 8 12H4C2.89543 12 2 11.1046 2 10V6ZM8 6H4V10H8V6Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M9.70711 14.2929C10.0976 14.6834 10.0976 15.3166 9.70711 15.7071L5.70711 19.7071C5.31658 20.0976 4.68342 20.0976 4.29289 19.7071L2.29289 17.7071C1.90237 17.3166 1.90237 16.6834 2.29289 16.2929C2.68342 15.9024 3.31658 15.9024 3.70711 16.2929L5 17.5858L8.29289 14.2929C8.68342 13.9024 9.31658 13.9024 9.70711 14.2929Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12 6C12 5.44772 12.4477 5 13 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H13C12.4477 7 12 6.55228 12 6Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12 12C12 11.4477 12.4477 11 13 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H13C12.4477 13 12 12.5523 12 12Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12 18C12 17.4477 12.4477 17 13 17H21C21.5523 17 22 17.4477 22 18C22 18.5523 21.5523 19 21 19H13C12.4477 19 12 18.5523 12 18Z",
            fill: "currentColor"
          }
        )
      ]
    }
  );
});
ListTodoIcon.displayName = "ListTodoIcon";

// src/components/tiptap-ui/list-button/use-list.ts
var listIcons = {
  bulletList: ListIcon,
  orderedList: ListOrderedIcon,
  taskList: ListTodoIcon
};
var listLabels = {
  bulletList: "Bullet List",
  orderedList: "Ordered List",
  taskList: "Task List"
};
var LIST_SHORTCUT_KEYS = {
  bulletList: "mod+shift+8",
  orderedList: "mod+shift+7",
  taskList: "mod+shift+9"
};
function canToggleList(editor, type, turnInto = true) {
  if (!editor || !editor.isEditable) return false;
  if (!isNodeInSchema(type, editor) || isNodeTypeSelected(editor, ["image"]))
    return false;
  if (!turnInto) {
    switch (type) {
      case "bulletList":
        return editor.can().toggleBulletList();
      case "orderedList":
        return editor.can().toggleOrderedList();
      case "taskList":
        return editor.can().toggleList("taskList", "taskItem");
      default:
        return false;
    }
  }
  if (!selectionWithinConvertibleTypes(editor, [
    "paragraph",
    "heading",
    "bulletList",
    "orderedList",
    "taskList",
    "blockquote",
    "codeBlock"
  ]))
    return false;
  switch (type) {
    case "bulletList":
      return editor.can().toggleBulletList() || editor.can().clearNodes();
    case "orderedList":
      return editor.can().toggleOrderedList() || editor.can().clearNodes();
    case "taskList":
      return editor.can().toggleList("taskList", "taskItem") || editor.can().clearNodes();
    default:
      return false;
  }
}
function isListActive(editor, type) {
  if (!editor || !editor.isEditable) return false;
  switch (type) {
    case "bulletList":
      return editor.isActive("bulletList");
    case "orderedList":
      return editor.isActive("orderedList");
    case "taskList":
      return editor.isActive("taskList");
    default:
      return false;
  }
}
function toggleList(editor, type) {
  if (!editor || !editor.isEditable) return false;
  if (!canToggleList(editor, type)) return false;
  try {
    const view = editor.view;
    let state = view.state;
    let tr = state.tr;
    if (state.selection.empty || state.selection instanceof import_state3.TextSelection) {
      const pos = findNodePosition({
        editor,
        node: state.selection.$anchor.node(1)
      })?.pos;
      if (!isValidPosition(pos)) return false;
      tr = tr.setSelection(import_state3.NodeSelection.create(state.doc, pos));
      view.dispatch(tr);
      state = view.state;
    }
    const selection = state.selection;
    let chain = editor.chain().focus();
    if (selection instanceof import_state3.NodeSelection) {
      const firstChild = selection.node.firstChild?.firstChild;
      const lastChild = selection.node.lastChild?.lastChild;
      const from = firstChild ? selection.from + firstChild.nodeSize : selection.from + 1;
      const to = lastChild ? selection.to - lastChild.nodeSize : selection.to - 1;
      const resolvedFrom = state.doc.resolve(from);
      const resolvedTo = state.doc.resolve(to);
      chain = chain.setTextSelection(import_state3.TextSelection.between(resolvedFrom, resolvedTo)).clearNodes();
    }
    if (editor.isActive(type)) {
      chain.liftListItem("listItem").lift("bulletList").lift("orderedList").lift("taskList").run();
    } else {
      const toggleMap = {
        bulletList: () => chain.toggleBulletList(),
        orderedList: () => chain.toggleOrderedList(),
        taskList: () => chain.toggleList("taskList", "taskItem")
      };
      const toggle = toggleMap[type];
      if (!toggle) return false;
      toggle().run();
    }
    editor.chain().focus().selectTextblockEnd().run();
    return true;
  } catch {
    return false;
  }
}
function shouldShowButton3(props) {
  const { editor, type, hideWhenUnavailable } = props;
  if (!editor || !editor.isEditable) return false;
  if (!isNodeInSchema(type, editor)) return false;
  if (hideWhenUnavailable && !editor.isActive("code")) {
    return canToggleList(editor, type);
  }
  return true;
}
function useList(config) {
  const {
    editor: providedEditor,
    type,
    hideWhenUnavailable = false,
    onToggled
  } = config;
  const { editor } = useTiptapEditor(providedEditor);
  const [isVisible, setIsVisible] = (0, import_react43.useState)(true);
  const canToggle2 = canToggleList(editor, type);
  const isActive = isListActive(editor, type);
  (0, import_react43.useEffect)(() => {
    if (!editor) return;
    const handleSelectionUpdate = () => {
      setIsVisible(shouldShowButton3({ editor, type, hideWhenUnavailable }));
    };
    handleSelectionUpdate();
    editor.on("selectionUpdate", handleSelectionUpdate);
    return () => {
      editor.off("selectionUpdate", handleSelectionUpdate);
    };
  }, [editor, type, hideWhenUnavailable]);
  const handleToggle = (0, import_react43.useCallback)(() => {
    if (!editor) return false;
    const success = toggleList(editor, type);
    if (success) {
      onToggled?.();
    }
    return success;
  }, [editor, type, onToggled]);
  return {
    isVisible,
    isActive,
    handleToggle,
    canToggle: canToggle2,
    label: listLabels[type],
    shortcutKeys: LIST_SHORTCUT_KEYS[type],
    Icon: listIcons[type]
  };
}

// src/components/tiptap-ui/list-dropdown-menu/use-list-dropdown-menu.ts
var import_react44 = require("react");
var listOptions = [
  {
    label: "Bullet List",
    type: "bulletList",
    icon: ListIcon
  },
  {
    label: "Ordered List",
    type: "orderedList",
    icon: ListOrderedIcon
  },
  {
    label: "Task List",
    type: "taskList",
    icon: ListTodoIcon
  }
];
function canToggleAnyList(editor, listTypes) {
  if (!editor || !editor.isEditable) return false;
  return listTypes.some((type) => canToggleList(editor, type));
}
function isAnyListActive(editor, listTypes) {
  if (!editor || !editor.isEditable) return false;
  return listTypes.some((type) => isListActive(editor, type));
}
function getFilteredListOptions(availableTypes) {
  return listOptions.filter(
    (option) => !option.type || availableTypes.includes(option.type)
  );
}
function shouldShowListDropdown(params) {
  const { editor, hideWhenUnavailable, listInSchema, canToggleAny } = params;
  if (!listInSchema || !editor) {
    return false;
  }
  if (hideWhenUnavailable && !editor.isActive("code")) {
    return canToggleAny;
  }
  return true;
}
function getActiveListType(editor, availableTypes) {
  if (!editor || !editor.isEditable) return void 0;
  return availableTypes.find((type) => isListActive(editor, type));
}
function useListDropdownMenu(config) {
  const {
    editor: providedEditor,
    types = ["bulletList", "orderedList", "taskList"],
    hideWhenUnavailable = false
  } = config || {};
  const { editor } = useTiptapEditor(providedEditor);
  const [isVisible, setIsVisible] = (0, import_react44.useState)(true);
  const listInSchema = types.some((type) => isNodeInSchema(type, editor));
  const filteredLists = (0, import_react44.useMemo)(() => getFilteredListOptions(types), [types]);
  const canToggleAny = canToggleAnyList(editor, types);
  const isAnyActive = isAnyListActive(editor, types);
  const activeType = getActiveListType(editor, types);
  const activeList = filteredLists.find((option) => option.type === activeType);
  (0, import_react44.useEffect)(() => {
    if (!editor) return;
    const handleSelectionUpdate = () => {
      setIsVisible(
        shouldShowListDropdown({
          editor,
          listTypes: types,
          hideWhenUnavailable,
          listInSchema,
          canToggleAny
        })
      );
    };
    handleSelectionUpdate();
    editor.on("selectionUpdate", handleSelectionUpdate);
    return () => {
      editor.off("selectionUpdate", handleSelectionUpdate);
    };
  }, [canToggleAny, editor, hideWhenUnavailable, listInSchema, types]);
  return {
    isVisible,
    activeType,
    isActive: isAnyActive,
    canToggle: canToggleAny,
    types,
    filteredLists,
    label: "List",
    Icon: activeList ? listIcons[activeList.type] : ListIcon
  };
}

// src/components/tiptap-ui/list-dropdown-menu/list-dropdown-menu.tsx
var import_jsx_runtime39 = require("react/jsx-runtime");
function ListDropdownMenu({
  editor: providedEditor,
  types = ["bulletList", "orderedList", "taskList"],
  hideWhenUnavailable = false,
  onOpenChange,
  portal = false,
  ...props
}) {
  const { editor } = useTiptapEditor(providedEditor);
  const [isOpen, setIsOpen] = (0, import_react45.useState)(false);
  const { filteredLists, canToggle: canToggle2, isActive, isVisible, Icon } = useListDropdownMenu({
    editor,
    types,
    hideWhenUnavailable
  });
  const handleOnOpenChange = (0, import_react45.useCallback)(
    (open) => {
      setIsOpen(open);
      onOpenChange?.(open);
    },
    [onOpenChange]
  );
  if (!isVisible) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(DropdownMenu2, { open: isOpen, onOpenChange: handleOnOpenChange, children: [
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(DropdownMenuTrigger2, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(
      Button2,
      {
        type: "button",
        "data-style": "ghost",
        "data-active-state": isActive ? "on" : "off",
        role: "button",
        tabIndex: -1,
        disabled: !canToggle2,
        "data-disabled": !canToggle2,
        "aria-label": "List options",
        tooltip: "List",
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(Icon, { className: "tiptap-button-icon" }),
          /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(ChevronDownIcon, { className: "tiptap-button-dropdown-small" })
        ]
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(DropdownMenuContent2, { align: "start", portal, children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(CardBody, { children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(ButtonGroup, { children: filteredLists.map((option) => /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(DropdownMenuItem2, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
      ListButton,
      {
        editor,
        type: option.type,
        text: option.label,
        showTooltip: false
      }
    ) }, option.type)) }) }) }) })
  ] });
}

// src/components/tiptap-ui/blockquote-button/blockquote-button.tsx
var import_react46 = require("react");
var import_jsx_runtime40 = require("react/jsx-runtime");
function BlockquoteShortcutBadge({
  shortcutKeys = BLOCKQUOTE_SHORTCUT_KEY
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(Badge, { children: parseShortcutKeys({ shortcutKeys }) });
}
var BlockquoteButton = (0, import_react46.forwardRef)(
  ({
    editor: providedEditor,
    text,
    hideWhenUnavailable = false,
    onToggled,
    showShortcut = false,
    onClick,
    children,
    ...buttonProps
  }, ref) => {
    const { editor } = useTiptapEditor(providedEditor);
    const {
      isVisible,
      canToggle: canToggle2,
      isActive,
      handleToggle,
      label,
      shortcutKeys,
      Icon
    } = useBlockquote({
      editor,
      hideWhenUnavailable,
      onToggled
    });
    const handleClick = (0, import_react46.useCallback)(
      (event) => {
        onClick?.(event);
        if (event.defaultPrevented) return;
        handleToggle();
      },
      [handleToggle, onClick]
    );
    if (!isVisible) {
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
      Button2,
      {
        type: "button",
        "data-style": "ghost",
        "data-active-state": isActive ? "on" : "off",
        role: "button",
        tabIndex: -1,
        disabled: !canToggle2,
        "data-disabled": !canToggle2,
        "aria-label": label,
        "aria-pressed": isActive,
        tooltip: `${label}${shortcutKeys ? ` (${String(parseShortcutKeys({ shortcutKeys })).replace(/Mod/i, "Ctrl").replace(/,/g, " + ")})` : ""}`,
        onClick: handleClick,
        ...buttonProps,
        ref,
        children: children ?? /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(import_jsx_runtime40.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(Icon, { className: "tiptap-button-icon" }),
          text && /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("span", { className: "tiptap-button-text", children: text }),
          showShortcut && /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(BlockquoteShortcutBadge, { shortcutKeys })
        ] })
      }
    );
  }
);
BlockquoteButton.displayName = "BlockquoteButton";

// src/components/tiptap-ui/blockquote-button/use-blockquote.ts
var import_react48 = require("react");
var import_state4 = require("@tiptap/pm/state");

// src/components/tiptap-icons/blockquote-icon.tsx
var import_react47 = require("react");
var import_jsx_runtime41 = require("react/jsx-runtime");
var BlockquoteIcon = (0, import_react47.memo)(({ className, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(
    "svg",
    {
      width: "24",
      height: "24",
      className,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M8 6C8 5.44772 8.44772 5 9 5H16C16.5523 5 17 5.44772 17 6C17 6.55228 16.5523 7 16 7H9C8.44772 7 8 6.55228 8 6Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M4 3C4.55228 3 5 3.44772 5 4L5 20C5 20.5523 4.55229 21 4 21C3.44772 21 3 20.5523 3 20L3 4C3 3.44772 3.44772 3 4 3Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M8 12C8 11.4477 8.44772 11 9 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H9C8.44772 13 8 12.5523 8 12Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M8 18C8 17.4477 8.44772 17 9 17H16C16.5523 17 17 17.4477 17 18C17 18.5523 16.5523 19 16 19H9C8.44772 19 8 18.5523 8 18Z",
            fill: "currentColor"
          }
        )
      ]
    }
  );
});
BlockquoteIcon.displayName = "BlockquoteIcon";

// src/components/tiptap-ui/blockquote-button/use-blockquote.ts
var BLOCKQUOTE_SHORTCUT_KEY = "mod+shift+b";
function canToggleBlockquote(editor, turnInto = true) {
  if (!editor || !editor.isEditable) return false;
  if (!isNodeInSchema("blockquote", editor) || isNodeTypeSelected(editor, ["image"]))
    return false;
  if (!turnInto) {
    return editor.can().toggleWrap("blockquote");
  }
  if (!selectionWithinConvertibleTypes(editor, [
    "paragraph",
    "heading",
    "bulletList",
    "orderedList",
    "taskList",
    "blockquote",
    "codeBlock"
  ]))
    return false;
  return editor.can().toggleWrap("blockquote") || editor.can().clearNodes();
}
function toggleBlockquote(editor) {
  if (!editor || !editor.isEditable) return false;
  if (!canToggleBlockquote(editor)) return false;
  try {
    const view = editor.view;
    let state = view.state;
    let tr = state.tr;
    if (state.selection.empty || state.selection instanceof import_state4.TextSelection) {
      const pos = findNodePosition({
        editor,
        node: state.selection.$anchor.node(1)
      })?.pos;
      if (!isValidPosition(pos)) return false;
      tr = tr.setSelection(import_state4.NodeSelection.create(state.doc, pos));
      view.dispatch(tr);
      state = view.state;
    }
    const selection = state.selection;
    let chain = editor.chain().focus();
    if (selection instanceof import_state4.NodeSelection) {
      const firstChild = selection.node.firstChild?.firstChild;
      const lastChild = selection.node.lastChild?.lastChild;
      const from = firstChild ? selection.from + firstChild.nodeSize : selection.from + 1;
      const to = lastChild ? selection.to - lastChild.nodeSize : selection.to - 1;
      const resolvedFrom = state.doc.resolve(from);
      const resolvedTo = state.doc.resolve(to);
      chain = chain.setTextSelection(import_state4.TextSelection.between(resolvedFrom, resolvedTo)).clearNodes();
    }
    const toggle = editor.isActive("blockquote") ? chain.lift("blockquote") : chain.wrapIn("blockquote");
    toggle.run();
    editor.chain().focus().selectTextblockEnd().run();
    return true;
  } catch {
    return false;
  }
}
function shouldShowButton4(props) {
  const { editor, hideWhenUnavailable } = props;
  if (!editor || !editor.isEditable) return false;
  if (!isNodeInSchema("blockquote", editor)) return false;
  if (hideWhenUnavailable && !editor.isActive("code")) {
    return canToggleBlockquote(editor);
  }
  return true;
}
function useBlockquote(config) {
  const {
    editor: providedEditor,
    hideWhenUnavailable = false,
    onToggled
  } = config || {};
  const { editor } = useTiptapEditor(providedEditor);
  const [isVisible, setIsVisible] = (0, import_react48.useState)(true);
  const canToggle2 = canToggleBlockquote(editor);
  const isActive = editor?.isActive("blockquote") || false;
  (0, import_react48.useEffect)(() => {
    if (!editor) return;
    const handleSelectionUpdate = () => {
      setIsVisible(shouldShowButton4({ editor, hideWhenUnavailable }));
    };
    handleSelectionUpdate();
    editor.on("selectionUpdate", handleSelectionUpdate);
    return () => {
      editor.off("selectionUpdate", handleSelectionUpdate);
    };
  }, [editor, hideWhenUnavailable]);
  const handleToggle = (0, import_react48.useCallback)(() => {
    if (!editor) return false;
    const success = toggleBlockquote(editor);
    if (success) {
      onToggled?.();
    }
    return success;
  }, [editor, onToggled]);
  return {
    isVisible,
    isActive,
    handleToggle,
    canToggle: canToggle2,
    label: "Blockquote",
    shortcutKeys: BLOCKQUOTE_SHORTCUT_KEY,
    Icon: BlockquoteIcon
  };
}

// src/components/tiptap-ui/color-highlight-popover/color-highlight-popover.tsx
var import_react53 = require("react");

// src/components/tiptap-icons/ban-icon.tsx
var import_react49 = require("react");
var import_jsx_runtime42 = require("react/jsx-runtime");
var BanIcon = (0, import_react49.memo)(({ className, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
    "svg",
    {
      width: "24",
      height: "24",
      className,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M4.43471 4.01458C4.34773 4.06032 4.26607 4.11977 4.19292 4.19292C4.11977 4.26607 4.06032 4.34773 4.01458 4.43471C2.14611 6.40628 1 9.0693 1 12C1 18.0751 5.92487 23 12 23C14.9306 23 17.5936 21.854 19.5651 19.9856C19.6522 19.9398 19.7339 19.8803 19.8071 19.8071C19.8803 19.7339 19.9398 19.6522 19.9856 19.5651C21.854 17.5936 23 14.9306 23 12C23 5.92487 18.0751 1 12 1C9.0693 1 6.40628 2.14611 4.43471 4.01458ZM6.38231 4.9681C7.92199 3.73647 9.87499 3 12 3C16.9706 3 21 7.02944 21 12C21 14.125 20.2635 16.078 19.0319 17.6177L6.38231 4.9681ZM17.6177 19.0319C16.078 20.2635 14.125 21 12 21C7.02944 21 3 16.9706 3 12C3 9.87499 3.73647 7.92199 4.9681 6.38231L17.6177 19.0319Z",
          fill: "currentColor"
        }
      )
    }
  );
});
BanIcon.displayName = "BanIcon";

// src/components/tiptap-icons/highlighter-icon.tsx
var import_react50 = require("react");
var import_jsx_runtime43 = require("react/jsx-runtime");
var HighlighterIcon = (0, import_react50.memo)(({ className, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
    "svg",
    {
      width: "24",
      height: "24",
      className,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M14.7072 4.70711C15.0977 4.31658 15.0977 3.68342 14.7072 3.29289C14.3167 2.90237 13.6835 2.90237 13.293 3.29289L8.69294 7.89286L8.68594 7.9C8.13626 8.46079 7.82837 9.21474 7.82837 10C7.82837 10.2306 7.85491 10.4584 7.90631 10.6795L2.29289 16.2929C2.10536 16.4804 2 16.7348 2 17V20C2 20.5523 2.44772 21 3 21H12C12.2652 21 12.5196 20.8946 12.7071 20.7071L15.3205 18.0937C15.5416 18.1452 15.7695 18.1717 16.0001 18.1717C16.7853 18.1717 17.5393 17.8639 18.1001 17.3142L22.7072 12.7071C23.0977 12.3166 23.0977 11.6834 22.7072 11.2929C22.3167 10.9024 21.6835 10.9024 21.293 11.2929L16.6971 15.8887C16.5105 16.0702 16.2605 16.1717 16.0001 16.1717C15.7397 16.1717 15.4897 16.0702 15.303 15.8887L10.1113 10.697C9.92992 10.5104 9.82837 10.2604 9.82837 10C9.82837 9.73963 9.92992 9.48958 10.1113 9.30297L14.7072 4.70711ZM13.5858 17L9.00004 12.4142L4 17.4142V19H11.5858L13.5858 17Z",
          fill: "currentColor"
        }
      )
    }
  );
});
HighlighterIcon.displayName = "HighlighterIcon";

// src/components/tiptap-ui-primitive/popover/popover.tsx
var PopoverPrimitive = __toESM(require("@radix-ui/react-popover"));
var import_jsx_runtime44 = require("react/jsx-runtime");
function Popover({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(PopoverPrimitive.Root, { ...props });
}
function PopoverTrigger({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(PopoverPrimitive.Trigger, { ...props });
}
function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(PopoverPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
    PopoverPrimitive.Content,
    {
      align,
      sideOffset,
      className: cn2("tiptap-popover", className),
      ...props
    }
  ) });
}

// src/components/tiptap-ui/color-highlight-button/color-highlight-button.tsx
var import_react51 = require("react");
var import_jsx_runtime45 = require("react/jsx-runtime");
function ColorHighlightShortcutBadge({
  shortcutKeys = COLOR_HIGHLIGHT_SHORTCUT_KEY
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(Badge, { children: parseShortcutKeys({ shortcutKeys }) });
}
var ColorHighlightButton = (0, import_react51.forwardRef)(
  ({
    editor: providedEditor,
    highlightColor,
    text,
    hideWhenUnavailable = false,
    mode = "mark",
    onApplied,
    showShortcut = false,
    onClick,
    children,
    style,
    ...buttonProps
  }, ref) => {
    const { editor } = useTiptapEditor(providedEditor);
    const {
      isVisible,
      canColorHighlight: canColorHighlight2,
      isActive,
      handleColorHighlight,
      label,
      shortcutKeys
    } = useColorHighlight({
      editor,
      highlightColor,
      label: text || `Toggle highlight (${highlightColor})`,
      hideWhenUnavailable,
      mode,
      onApplied
    });
    const handleClick = (0, import_react51.useCallback)(
      (event) => {
        onClick?.(event);
        if (event.defaultPrevented) return;
        handleColorHighlight();
      },
      [handleColorHighlight, onClick]
    );
    const buttonStyle = (0, import_react51.useMemo)(
      () => ({
        ...style,
        "--highlight-color": highlightColor
      }),
      [highlightColor, style]
    );
    if (!isVisible) {
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
      Button2,
      {
        type: "button",
        "data-style": "ghost",
        "data-active-state": isActive ? "on" : "off",
        role: "button",
        tabIndex: -1,
        disabled: !canColorHighlight2,
        "data-disabled": !canColorHighlight2,
        "aria-label": label,
        "aria-pressed": isActive,
        tooltip: label,
        onClick: handleClick,
        style: buttonStyle,
        ...buttonProps,
        ref,
        children: children ?? /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(import_jsx_runtime45.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
            "span",
            {
              className: "tiptap-button-highlight",
              style: { "--highlight-color": highlightColor }
            }
          ),
          text && /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("span", { className: "tiptap-button-text", children: text }),
          showShortcut && /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(ColorHighlightShortcutBadge, { shortcutKeys })
        ] })
      }
    );
  }
);
ColorHighlightButton.displayName = "ColorHighlightButton";

// src/components/tiptap-ui/color-highlight-button/use-color-highlight.ts
var import_react52 = require("react");
var import_react_hotkeys_hook2 = require("react-hotkeys-hook");
var COLOR_HIGHLIGHT_SHORTCUT_KEY = "mod+shift+h";
var HIGHLIGHT_COLORS = [
  {
    label: "Default background",
    value: "var(--tt-bg-color)",
    border: "var(--tt-bg-color-contrast)"
  },
  {
    label: "Gray background",
    value: "var(--tt-color-highlight-gray)",
    border: "var(--tt-color-highlight-gray-contrast)"
  },
  {
    label: "Brown background",
    value: "var(--tt-color-highlight-brown)",
    border: "var(--tt-color-highlight-brown-contrast)"
  },
  {
    label: "Orange background",
    value: "var(--tt-color-highlight-orange)",
    border: "var(--tt-color-highlight-orange-contrast)"
  },
  {
    label: "Yellow background",
    value: "var(--tt-color-highlight-yellow)",
    border: "var(--tt-color-highlight-yellow-contrast)"
  },
  {
    label: "Green background",
    value: "var(--tt-color-highlight-green)",
    border: "var(--tt-color-highlight-green-contrast)"
  },
  {
    label: "Blue background",
    value: "var(--tt-color-highlight-blue)",
    border: "var(--tt-color-highlight-blue-contrast)"
  },
  {
    label: "Purple background",
    value: "var(--tt-color-highlight-purple)",
    border: "var(--tt-color-highlight-purple-contrast)"
  },
  {
    label: "Pink background",
    value: "var(--tt-color-highlight-pink)",
    border: "var(--tt-color-highlight-pink-contrast)"
  },
  {
    label: "Red background",
    value: "var(--tt-color-highlight-red)",
    border: "var(--tt-color-highlight-red-contrast)"
  }
];
function pickHighlightColorsByValue(values) {
  const colorMap = new Map(
    HIGHLIGHT_COLORS.map((color) => [color.value, color])
  );
  return values.map((value) => colorMap.get(value)).filter((color) => !!color);
}
function canColorHighlight(editor, mode = "mark") {
  if (!editor || !editor.isEditable) return false;
  if (mode === "mark") {
    if (!isMarkInSchema("highlight", editor) || isNodeTypeSelected(editor, ["image"]))
      return false;
    return editor.can().setMark("highlight");
  } else {
    if (!isExtensionAvailable(editor, ["nodeBackground"])) return false;
    try {
      return editor.can().setNode("nodeBackground", { backgroundColor: "test" });
    } catch {
      return false;
    }
  }
}
function isColorHighlightActive(editor, highlightColor, mode = "mark") {
  if (!editor || !editor.isEditable) return false;
  if (mode === "mark") {
    return highlightColor ? editor.isActive("highlight", { color: highlightColor }) : editor.isActive("highlight");
  } else {
    if (!highlightColor) return false;
    try {
      const { state } = editor;
      const { selection } = state;
      const $pos = selection.$anchor;
      for (let depth = $pos.depth; depth >= 0; depth--) {
        const node = $pos.node(depth);
        if (node && node.attrs?.backgroundColor === highlightColor) {
          return true;
        }
      }
      return false;
    } catch {
      return false;
    }
  }
}
function removeHighlight(editor, mode = "mark") {
  if (!editor || !editor.isEditable) return false;
  if (!canColorHighlight(editor, mode)) return false;
  if (mode === "mark") {
    return editor.chain().focus().unsetMark("highlight").run();
  } else {
    return editor.chain().focus().unsetBackgroundColor().run();
  }
}
function shouldShowButton5(props) {
  const { editor, hideWhenUnavailable, mode } = props;
  if (!editor || !editor.isEditable) return false;
  if (mode === "mark") {
    if (!isMarkInSchema("highlight", editor)) return false;
  } else {
    if (!isExtensionAvailable(editor, ["nodeBackground"])) return false;
  }
  if (hideWhenUnavailable && !editor.isActive("code")) {
    return canColorHighlight(editor, mode);
  }
  return true;
}
function useColorHighlight(config) {
  const {
    editor: providedEditor,
    label,
    highlightColor,
    hideWhenUnavailable = false,
    mode = "mark",
    onApplied
  } = config;
  const { editor } = useTiptapEditor(providedEditor);
  const isMobile = useIsBreakpoint();
  const [isVisible, setIsVisible] = (0, import_react52.useState)(true);
  const canColorHighlightState = canColorHighlight(editor, mode);
  const isActive = isColorHighlightActive(editor, highlightColor, mode);
  (0, import_react52.useEffect)(() => {
    if (!editor) return;
    const handleSelectionUpdate = () => {
      setIsVisible(shouldShowButton5({ editor, hideWhenUnavailable, mode }));
    };
    handleSelectionUpdate();
    editor.on("selectionUpdate", handleSelectionUpdate);
    return () => {
      editor.off("selectionUpdate", handleSelectionUpdate);
    };
  }, [editor, hideWhenUnavailable, mode]);
  const handleColorHighlight = (0, import_react52.useCallback)(() => {
    if (!editor || !canColorHighlightState || !highlightColor || !label)
      return false;
    if (mode === "mark") {
      if (editor.state.storedMarks) {
        const highlightMarkType = editor.schema.marks.highlight;
        if (highlightMarkType) {
          editor.view.dispatch(
            editor.state.tr.removeStoredMark(highlightMarkType)
          );
        }
      }
      setTimeout(() => {
        const success = editor.chain().focus().toggleMark("highlight", { color: highlightColor }).run();
        if (success) {
          onApplied?.({ color: highlightColor, label, mode });
        }
        return success;
      }, 0);
      return true;
    } else {
      const success = editor.chain().focus().setNode("nodeBackground", { backgroundColor: highlightColor }).run();
      if (success) {
        onApplied?.({ color: highlightColor, label, mode });
      }
      return success;
    }
  }, [canColorHighlightState, highlightColor, editor, label, onApplied, mode]);
  const handleRemoveHighlight = (0, import_react52.useCallback)(() => {
    const success = removeHighlight(editor, mode);
    if (success) {
      onApplied?.({ color: "", label: "Remove highlight", mode });
    }
    return success;
  }, [editor, onApplied, mode]);
  (0, import_react_hotkeys_hook2.useHotkeys)(
    COLOR_HIGHLIGHT_SHORTCUT_KEY,
    (event) => {
      event.preventDefault();
      handleColorHighlight();
    },
    {
      enabled: isVisible && canColorHighlightState,
      enableOnContentEditable: !isMobile,
      enableOnFormTags: true
    }
  );
  return {
    isVisible,
    isActive,
    handleColorHighlight,
    handleRemoveHighlight,
    canColorHighlight: canColorHighlightState,
    label: label || `Highlight`,
    shortcutKeys: COLOR_HIGHLIGHT_SHORTCUT_KEY,
    Icon: HighlighterIcon,
    mode
  };
}

// src/components/tiptap-ui/color-highlight-popover/color-highlight-popover.tsx
var import_jsx_runtime46 = require("react/jsx-runtime");
var ColorHighlightPopoverButton = (0, import_react53.forwardRef)(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
  Button2,
  {
    type: "button",
    className,
    "data-style": "ghost",
    "data-appearance": "default",
    role: "button",
    tabIndex: -1,
    "aria-label": "Highlight text",
    tooltip: "Highlight",
    ref,
    ...props,
    children: children ?? /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(HighlighterIcon, { className: "tiptap-button-icon" })
  }
));
ColorHighlightPopoverButton.displayName = "ColorHighlightPopoverButton";
function ColorHighlightPopoverContent({
  editor,
  colors = pickHighlightColorsByValue([
    "var(--tt-color-highlight-green)",
    "var(--tt-color-highlight-blue)",
    "var(--tt-color-highlight-red)",
    "var(--tt-color-highlight-purple)",
    "var(--tt-color-highlight-yellow)"
  ])
}) {
  const { handleRemoveHighlight } = useColorHighlight({ editor });
  const isMobile = useIsBreakpoint();
  const containerRef = (0, import_react53.useRef)(null);
  const menuItems = (0, import_react53.useMemo)(
    () => [...colors, { label: "Remove highlight", value: "none" }],
    [colors]
  );
  const { selectedIndex } = useMenuNavigation({
    containerRef,
    items: menuItems,
    orientation: "both",
    onSelect: (item) => {
      if (!containerRef.current) return false;
      const highlightedElement = containerRef.current.querySelector(
        '[data-highlighted="true"]'
      );
      if (highlightedElement) highlightedElement.click();
      if (item.value === "none") handleRemoveHighlight();
      return true;
    },
    autoSelectFirstItem: false
  });
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
    Card,
    {
      ref: containerRef,
      tabIndex: 0,
      style: isMobile ? { boxShadow: "none", border: 0 } : {},
      children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(CardBody, { style: isMobile ? { padding: 0 } : {}, children: /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)(CardItemGroup, { orientation: "horizontal", children: [
        /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(ButtonGroup, { orientation: "horizontal", children: colors.map((color, index) => /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
          ColorHighlightButton,
          {
            editor,
            highlightColor: color.value,
            tooltip: color.label,
            "aria-label": `${color.label} highlight color`,
            tabIndex: index === selectedIndex ? 0 : -1,
            "data-highlighted": selectedIndex === index
          },
          color.value
        )) }),
        /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(Separator3, {}),
        /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(ButtonGroup, { orientation: "horizontal", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
          Button2,
          {
            onClick: handleRemoveHighlight,
            "aria-label": "Remove highlight",
            tooltip: "Remove highlight",
            tabIndex: selectedIndex === colors.length ? 0 : -1,
            type: "button",
            role: "menuitem",
            "data-style": "ghost",
            "data-highlighted": selectedIndex === colors.length,
            children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(BanIcon, { className: "tiptap-button-icon" })
          }
        ) })
      ] }) })
    }
  );
}

// src/components/tiptap-ui/link-popover/link-popover.tsx
var import_react58 = require("react");

// src/components/tiptap-icons/corner-down-left-icon.tsx
var import_react54 = require("react");
var import_jsx_runtime47 = require("react/jsx-runtime");
var CornerDownLeftIcon = (0, import_react54.memo)(({ className, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
    "svg",
    {
      width: "24",
      height: "24",
      className,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M21 4C21 3.44772 20.5523 3 20 3C19.4477 3 19 3.44772 19 4V11C19 11.7956 18.6839 12.5587 18.1213 13.1213C17.5587 13.6839 16.7956 14 16 14H6.41421L9.70711 10.7071C10.0976 10.3166 10.0976 9.68342 9.70711 9.29289C9.31658 8.90237 8.68342 8.90237 8.29289 9.29289L3.29289 14.2929C2.90237 14.6834 2.90237 15.3166 3.29289 15.7071L8.29289 20.7071C8.68342 21.0976 9.31658 21.0976 9.70711 20.7071C10.0976 20.3166 10.0976 19.6834 9.70711 19.2929L6.41421 16H16C17.3261 16 18.5979 15.4732 19.5355 14.5355C20.4732 13.5979 21 12.3261 21 11V4Z",
          fill: "currentColor"
        }
      )
    }
  );
});
CornerDownLeftIcon.displayName = "CornerDownLeftIcon";

// src/components/tiptap-icons/external-link-icon.tsx
var import_react55 = require("react");
var import_jsx_runtime48 = require("react/jsx-runtime");
var ExternalLinkIcon = (0, import_react55.memo)(({ className, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(
    "svg",
    {
      width: "24",
      height: "24",
      className,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
          "path",
          {
            d: "M14 3C14 2.44772 14.4477 2 15 2H21C21.5523 2 22 2.44772 22 3V9C22 9.55228 21.5523 10 21 10C20.4477 10 20 9.55228 20 9V5.41421L10.7071 14.7071C10.3166 15.0976 9.68342 15.0976 9.29289 14.7071C8.90237 14.3166 8.90237 13.6834 9.29289 13.2929L18.5858 4H15C14.4477 4 14 3.55228 14 3Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
          "path",
          {
            d: "M4.29289 7.29289C4.48043 7.10536 4.73478 7 5 7H11C11.5523 7 12 6.55228 12 6C12 5.44772 11.5523 5 11 5H5C4.20435 5 3.44129 5.31607 2.87868 5.87868C2.31607 6.44129 2 7.20435 2 8V19C2 19.7957 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H16C16.7957 22 17.5587 21.6839 18.1213 21.1213C18.6839 20.5587 19 19.7957 19 19V13C19 12.4477 18.5523 12 18 12C17.4477 12 17 12.4477 17 13V19C17 19.2652 16.8946 19.5196 16.7071 19.7071C16.5196 19.8946 16.2652 20 16 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V8C4 7.73478 4.10536 7.48043 4.29289 7.29289Z",
            fill: "currentColor"
          }
        )
      ]
    }
  );
});
ExternalLinkIcon.displayName = "ExternalLinkIcon";

// src/components/tiptap-icons/link-icon.tsx
var import_react56 = require("react");
var import_jsx_runtime49 = require("react/jsx-runtime");
var LinkIcon = (0, import_react56.memo)(({ className, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
    "svg",
    {
      width: "24",
      height: "24",
      className,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
          "path",
          {
            d: "M16.9958 1.06669C15.4226 1.05302 13.907 1.65779 12.7753 2.75074L12.765 2.76086L11.045 4.47086C10.6534 4.86024 10.6515 5.49341 11.0409 5.88507C11.4303 6.27673 12.0634 6.27858 12.4551 5.88919L14.1697 4.18456C14.9236 3.45893 15.9319 3.05752 16.9784 3.06662C18.0272 3.07573 19.0304 3.49641 19.772 4.23804C20.5137 4.97967 20.9344 5.98292 20.9435 7.03171C20.9526 8.07776 20.5515 9.08563 19.8265 9.83941L16.833 12.8329C16.4274 13.2386 15.9393 13.5524 15.4019 13.7529C14.8645 13.9533 14.2903 14.0359 13.7181 13.9949C13.146 13.9539 12.5894 13.7904 12.0861 13.5154C11.5827 13.2404 11.1444 12.8604 10.8008 12.401C10.47 11.9588 9.84333 11.8685 9.40108 12.1993C8.95883 12.5301 8.86849 13.1568 9.1993 13.599C9.71464 14.288 10.3721 14.858 11.1272 15.2705C11.8822 15.683 12.7171 15.9283 13.5753 15.9898C14.4334 16.0513 15.2948 15.9274 16.1009 15.6267C16.907 15.326 17.639 14.8555 18.2473 14.247L21.2472 11.2471L21.2593 11.2347C22.3523 10.1031 22.9571 8.58751 22.9434 7.01433C22.9297 5.44115 22.2987 3.93628 21.1863 2.82383C20.0738 1.71138 18.5689 1.08036 16.9958 1.06669Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
          "path",
          {
            d: "M10.4247 8.0102C9.56657 7.94874 8.70522 8.07256 7.89911 8.37326C7.09305 8.67395 6.36096 9.14458 5.75272 9.753L2.75285 12.7529L2.74067 12.7653C1.64772 13.8969 1.04295 15.4125 1.05662 16.9857C1.07029 18.5589 1.70131 20.0637 2.81376 21.1762C3.9262 22.2886 5.43108 22.9196 7.00426 22.9333C8.57744 22.947 10.0931 22.3422 11.2247 21.2493L11.2371 21.2371L12.9471 19.5271C13.3376 19.1366 13.3376 18.5034 12.9471 18.1129C12.5565 17.7223 11.9234 17.7223 11.5328 18.1129L9.82932 19.8164C9.07555 20.5414 8.06768 20.9425 7.02164 20.9334C5.97285 20.9243 4.9696 20.5036 4.22797 19.762C3.48634 19.0203 3.06566 18.0171 3.05655 16.9683C3.04746 15.9222 3.44851 14.9144 4.17355 14.1606L7.16719 11.167C7.5727 10.7613 8.06071 10.4476 8.59811 10.2471C9.13552 10.0467 9.70976 9.96412 10.2819 10.0051C10.854 10.0461 11.4106 10.2096 11.9139 10.4846C12.4173 10.7596 12.8556 11.1397 13.1992 11.599C13.53 12.0412 14.1567 12.1316 14.5989 11.8007C15.0412 11.4699 15.1315 10.8433 14.8007 10.401C14.2854 9.71205 13.6279 9.14198 12.8729 8.72948C12.1178 8.31697 11.2829 8.07166 10.4247 8.0102Z",
            fill: "currentColor"
          }
        )
      ]
    }
  );
});
LinkIcon.displayName = "LinkIcon";

// src/components/tiptap-icons/trash-icon.tsx
var import_react57 = require("react");
var import_jsx_runtime50 = require("react/jsx-runtime");
var TrashIcon = (0, import_react57.memo)(({ className, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
    "svg",
    {
      width: "24",
      height: "24",
      className,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M7 5V4C7 3.17477 7.40255 2.43324 7.91789 1.91789C8.43324 1.40255 9.17477 1 10 1H14C14.8252 1 15.5668 1.40255 16.0821 1.91789C16.5975 2.43324 17 3.17477 17 4V5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H20V20C20 20.8252 19.5975 21.5668 19.0821 22.0821C18.5668 22.5975 17.8252 23 17 23H7C6.17477 23 5.43324 22.5975 4.91789 22.0821C4.40255 21.5668 4 20.8252 4 20V7H3C2.44772 7 2 6.55228 2 6C2 5.44772 2.44772 5 3 5H7ZM9 4C9 3.82523 9.09745 3.56676 9.33211 3.33211C9.56676 3.09745 9.82523 3 10 3H14C14.1748 3 14.4332 3.09745 14.6679 3.33211C14.9025 3.56676 15 3.82523 15 4V5H9V4ZM6 7V20C6 20.1748 6.09745 20.4332 6.33211 20.6679C6.56676 20.9025 6.82523 21 7 21H17C17.1748 21 17.4332 20.9025 17.6679 20.6679C17.9025 20.4332 18 20.1748 18 20V7H6Z",
          fill: "currentColor"
        }
      )
    }
  );
});
TrashIcon.displayName = "TrashIcon";

// src/components/tiptap-ui-primitive/input/input.tsx
var import_jsx_runtime51 = require("react/jsx-runtime");
function Input2({ className, type, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("input", { type, className: cn2("tiptap-input", className), ...props });
}
function InputGroup({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: cn2("tiptap-input-group", className), ...props, children });
}

// src/components/tiptap-ui/link-popover/link-popover.tsx
var import_jsx_runtime52 = require("react/jsx-runtime");
var LinkButton = (0, import_react58.forwardRef)(
  ({ className, children, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
      Button2,
      {
        type: "button",
        className,
        "data-style": "ghost",
        role: "button",
        tabIndex: -1,
        "aria-label": "Link",
        tooltip: "Link",
        ref,
        ...props,
        children: children || /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(LinkIcon, { className: "tiptap-button-icon" })
      }
    );
  }
);
LinkButton.displayName = "LinkButton";
var LinkMain = ({
  url,
  setUrl,
  setLink,
  removeLink,
  openLink,
  isActive
}) => {
  const isMobile = useIsBreakpoint();
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setLink();
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
    Card,
    {
      style: {
        ...isMobile ? { boxShadow: "none", border: 0 } : {}
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
        CardBody,
        {
          style: {
            ...isMobile ? { padding: 0 } : {}
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(CardItemGroup, { orientation: "horizontal", children: [
            /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(InputGroup, { children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
              Input2,
              {
                type: "url",
                placeholder: "Paste a link...",
                value: url,
                onChange: (e) => setUrl(e.target.value),
                onKeyDown: handleKeyDown,
                autoFocus: true,
                autoComplete: "off",
                autoCorrect: "off",
                autoCapitalize: "off"
              }
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(ButtonGroup, { orientation: "horizontal", children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
              Button2,
              {
                type: "button",
                onClick: setLink,
                title: "Apply link",
                disabled: !url && !isActive,
                "data-style": "ghost",
                children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(CornerDownLeftIcon, { className: "tiptap-button-icon" })
              }
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Separator3, {}),
            /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(ButtonGroup, { orientation: "horizontal", children: [
              /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
                Button2,
                {
                  type: "button",
                  onClick: openLink,
                  title: "Open in new window",
                  disabled: !url && !isActive,
                  "data-style": "ghost",
                  children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(ExternalLinkIcon, { className: "tiptap-button-icon" })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
                Button2,
                {
                  type: "button",
                  onClick: removeLink,
                  title: "Remove link",
                  disabled: !url && !isActive,
                  "data-style": "ghost",
                  children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(TrashIcon, { className: "tiptap-button-icon" })
                }
              )
            ] })
          ] })
        }
      )
    }
  );
};
var LinkContent = ({ editor }) => {
  const linkPopover = useLinkPopover({
    editor
  });
  return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(LinkMain, { ...linkPopover });
};
var LinkPopover = (0, import_react58.forwardRef)(
  ({
    editor: providedEditor,
    hideWhenUnavailable = false,
    onSetLink,
    onOpenChange,
    autoOpenOnLinkActive = true,
    onClick,
    children,
    ...buttonProps
  }, ref) => {
    const { editor } = useTiptapEditor(providedEditor);
    const [isOpen, setIsOpen] = (0, import_react58.useState)(false);
    const {
      isVisible,
      canSet,
      isActive,
      url,
      setUrl,
      setLink,
      removeLink,
      openLink,
      label,
      Icon
    } = useLinkPopover({
      editor,
      hideWhenUnavailable,
      onSetLink
    });
    const handleOnOpenChange = (0, import_react58.useCallback)(
      (nextIsOpen) => {
        setIsOpen(nextIsOpen);
        onOpenChange?.(nextIsOpen);
      },
      [onOpenChange]
    );
    const handleSetLink = (0, import_react58.useCallback)(() => {
      setLink();
      setIsOpen(false);
    }, [setLink]);
    const handleClick = (0, import_react58.useCallback)(
      (event) => {
        onClick?.(event);
        if (event.defaultPrevented) return;
        setIsOpen(!isOpen);
      },
      [onClick, isOpen]
    );
    (0, import_react58.useEffect)(() => {
      if (autoOpenOnLinkActive && isActive) {
        setIsOpen(true);
      }
    }, [autoOpenOnLinkActive, isActive]);
    if (!isVisible) {
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(Popover, { open: isOpen, onOpenChange: handleOnOpenChange, children: [
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
        LinkButton,
        {
          disabled: !canSet,
          "data-active-state": isActive ? "on" : "off",
          "data-disabled": !canSet,
          "aria-label": label,
          "aria-pressed": isActive,
          onClick: handleClick,
          ...buttonProps,
          ref,
          children: children ?? /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Icon, { className: "tiptap-button-icon" })
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(PopoverContent, { children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
        LinkMain,
        {
          url,
          setUrl,
          setLink: handleSetLink,
          removeLink,
          openLink,
          isActive
        }
      ) })
    ] });
  }
);
LinkPopover.displayName = "LinkPopover";

// src/components/tiptap-ui/link-popover/use-link-popover.ts
var import_react59 = require("react");
function canSetLink(editor) {
  if (!editor || !editor.isEditable) return false;
  if (isNodeTypeSelected(editor, ["image"], true)) return false;
  return editor.can().setMark("link");
}
function isLinkActive(editor) {
  if (!editor || !editor.isEditable) return false;
  return editor.isActive("link");
}
function shouldShowLinkButton(props) {
  const { editor, hideWhenUnavailable } = props;
  const linkInSchema = isMarkInSchema("link", editor);
  if (!linkInSchema || !editor) {
    return false;
  }
  if (hideWhenUnavailable && !editor.isActive("code")) {
    return canSetLink(editor);
  }
  return true;
}
function useLinkHandler(props) {
  const { editor, onSetLink } = props;
  const [url, setUrl] = (0, import_react59.useState)(null);
  (0, import_react59.useEffect)(() => {
    if (!editor) return;
    const { href } = editor.getAttributes("link");
    if (isLinkActive(editor) && url === null) {
      setUrl(href || "");
    }
  }, [editor, url]);
  (0, import_react59.useEffect)(() => {
    if (!editor) return;
    const updateLinkState = () => {
      const { href } = editor.getAttributes("link");
      setUrl(href || "");
    };
    editor.on("selectionUpdate", updateLinkState);
    return () => {
      editor.off("selectionUpdate", updateLinkState);
    };
  }, [editor]);
  const setLink = (0, import_react59.useCallback)(() => {
    if (!url || !editor) return;
    const { selection } = editor.state;
    const isEmpty = selection.empty;
    let chain = editor.chain().focus();
    chain = chain.extendMarkRange("link").setLink({ href: url });
    if (isEmpty) {
      chain = chain.insertContent({ type: "text", text: url });
    }
    chain.run();
    setUrl(null);
    onSetLink?.();
  }, [editor, onSetLink, url]);
  const removeLink = (0, import_react59.useCallback)(() => {
    if (!editor) return;
    editor.chain().focus().extendMarkRange("link").unsetLink().setMeta("preventAutolink", true).run();
    setUrl("");
  }, [editor]);
  const openLink = (0, import_react59.useCallback)(
    (target = "_blank", features = "noopener,noreferrer") => {
      if (!url) return;
      const safeUrl = sanitizeUrl(url, window.location.href);
      if (safeUrl !== "#") {
        window.open(safeUrl, target, features);
      }
    },
    [url]
  );
  return {
    url: url || "",
    setUrl,
    setLink,
    removeLink,
    openLink
  };
}
function useLinkState(props) {
  const { editor, hideWhenUnavailable = false } = props;
  const canSet = canSetLink(editor);
  const isActive = isLinkActive(editor);
  const [isVisible, setIsVisible] = (0, import_react59.useState)(true);
  (0, import_react59.useEffect)(() => {
    if (!editor) return;
    const handleSelectionUpdate = () => {
      setIsVisible(
        shouldShowLinkButton({
          editor,
          hideWhenUnavailable
        })
      );
    };
    handleSelectionUpdate();
    editor.on("selectionUpdate", handleSelectionUpdate);
    return () => {
      editor.off("selectionUpdate", handleSelectionUpdate);
    };
  }, [editor, hideWhenUnavailable]);
  return {
    isVisible,
    canSet,
    isActive
  };
}
function useLinkPopover(config) {
  const {
    editor: providedEditor,
    hideWhenUnavailable = false,
    onSetLink
  } = config || {};
  const { editor } = useTiptapEditor(providedEditor);
  const { isVisible, canSet, isActive } = useLinkState({
    editor,
    hideWhenUnavailable
  });
  const linkHandler = useLinkHandler({
    editor,
    onSetLink
  });
  return {
    isVisible,
    canSet,
    isActive,
    label: "Link",
    Icon: LinkIcon,
    ...linkHandler
  };
}

// src/components/tiptap-ui/mark-button/mark-button.tsx
var import_react60 = require("react");
var import_jsx_runtime53 = require("react/jsx-runtime");
function MarkShortcutBadge({
  type,
  shortcutKeys = MARK_SHORTCUT_KEYS[type]
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(Badge, { children: parseShortcutKeys({ shortcutKeys }) });
}
var MarkButton = (0, import_react60.forwardRef)(
  ({
    editor: providedEditor,
    type,
    text,
    hideWhenUnavailable = false,
    onToggled,
    showShortcut = false,
    onClick,
    children,
    ...buttonProps
  }, ref) => {
    const { editor } = useTiptapEditor(providedEditor);
    const {
      isVisible,
      handleMark,
      label,
      canToggle: canToggle2,
      isActive,
      Icon,
      shortcutKeys
    } = useMark({
      editor,
      type,
      hideWhenUnavailable,
      onToggled
    });
    const handleClick = (0, import_react60.useCallback)(
      (event) => {
        onClick?.(event);
        if (event.defaultPrevented) return;
        handleMark();
      },
      [handleMark, onClick]
    );
    if (!isVisible) {
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
      Button2,
      {
        type: "button",
        disabled: !canToggle2,
        "data-style": "ghost",
        "data-active-state": isActive ? "on" : "off",
        "data-disabled": !canToggle2,
        role: "button",
        tabIndex: -1,
        "aria-label": label,
        "aria-pressed": isActive,
        tooltip: `${label}${shortcutKeys ? ` (${String(parseShortcutKeys({ shortcutKeys })).replace(/Mod/i, "Ctrl").replace(/,/g, " + ")})` : ""}`,
        onClick: handleClick,
        ...buttonProps,
        ref,
        children: children ?? /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)(import_jsx_runtime53.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(Icon, { className: "tiptap-button-icon" }),
          text && /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("span", { className: "tiptap-button-text", children: text }),
          showShortcut && /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(MarkShortcutBadge, { type, shortcutKeys })
        ] })
      }
    );
  }
);
MarkButton.displayName = "MarkButton";

// src/components/tiptap-ui/mark-button/use-mark.ts
var import_react68 = require("react");

// src/components/tiptap-icons/bold-icon.tsx
var import_react61 = require("react");
var import_jsx_runtime54 = require("react/jsx-runtime");
var BoldIcon = (0, import_react61.memo)(({ className, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(
    "svg",
    {
      width: "24",
      height: "24",
      className,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M6 2.5C5.17157 2.5 4.5 3.17157 4.5 4V20C4.5 20.8284 5.17157 21.5 6 21.5H15C16.4587 21.5 17.8576 20.9205 18.8891 19.8891C19.9205 18.8576 20.5 17.4587 20.5 16C20.5 14.5413 19.9205 13.1424 18.8891 12.1109C18.6781 11.9 18.4518 11.7079 18.2128 11.5359C19.041 10.5492 19.5 9.29829 19.5 8C19.5 6.54131 18.9205 5.14236 17.8891 4.11091C16.8576 3.07946 15.4587 2.5 14 2.5H6ZM14 10.5C14.663 10.5 15.2989 10.2366 15.7678 9.76777C16.2366 9.29893 16.5 8.66304 16.5 8C16.5 7.33696 16.2366 6.70107 15.7678 6.23223C15.2989 5.76339 14.663 5.5 14 5.5H7.5V10.5H14ZM7.5 18.5V13.5H15C15.663 13.5 16.2989 13.7634 16.7678 14.2322C17.2366 14.7011 17.5 15.337 17.5 16C17.5 16.663 17.2366 17.2989 16.7678 17.7678C16.2989 18.2366 15.663 18.5 15 18.5H7.5Z",
          fill: "currentColor"
        }
      )
    }
  );
});
BoldIcon.displayName = "BoldIcon";

// src/components/tiptap-icons/code2-icon.tsx
var import_react62 = require("react");
var import_jsx_runtime55 = require("react/jsx-runtime");
var Code2Icon = (0, import_react62.memo)(({ className, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)(
    "svg",
    {
      width: "24",
      height: "24",
      className,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
          "path",
          {
            d: "M15.4545 4.2983C15.6192 3.77115 15.3254 3.21028 14.7983 3.04554C14.2712 2.88081 13.7103 3.1746 13.5455 3.70175L8.54554 19.7017C8.38081 20.2289 8.6746 20.7898 9.20175 20.9545C9.72889 21.1192 10.2898 20.8254 10.4545 20.2983L15.4545 4.2983Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
          "path",
          {
            d: "M6.70711 7.29289C7.09763 7.68342 7.09763 8.31658 6.70711 8.70711L3.41421 12L6.70711 15.2929C7.09763 15.6834 7.09763 16.3166 6.70711 16.7071C6.31658 17.0976 5.68342 17.0976 5.29289 16.7071L1.29289 12.7071C0.902369 12.3166 0.902369 11.6834 1.29289 11.2929L5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.70711 7.29289Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
          "path",
          {
            d: "M17.2929 7.29289C17.6834 6.90237 18.3166 6.90237 18.7071 7.29289L22.7071 11.2929C23.0976 11.6834 23.0976 12.3166 22.7071 12.7071L18.7071 16.7071C18.3166 17.0976 17.6834 17.0976 17.2929 16.7071C16.9024 16.3166 16.9024 15.6834 17.2929 15.2929L20.5858 12L17.2929 8.70711C16.9024 8.31658 16.9024 7.68342 17.2929 7.29289Z",
            fill: "currentColor"
          }
        )
      ]
    }
  );
});
Code2Icon.displayName = "Code2Icon";

// src/components/tiptap-icons/italic-icon.tsx
var import_react63 = require("react");
var import_jsx_runtime56 = require("react/jsx-runtime");
var ItalicIcon = (0, import_react63.memo)(({ className, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
    "svg",
    {
      width: "24",
      height: "24",
      className,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
        "path",
        {
          d: "M15.0222 3H19C19.5523 3 20 3.44772 20 4C20 4.55228 19.5523 5 19 5H15.693L10.443 19H14C14.5523 19 15 19.4477 15 20C15 20.5523 14.5523 21 14 21H9.02418C9.00802 21.0004 8.99181 21.0004 8.97557 21H5C4.44772 21 4 20.5523 4 20C4 19.4477 4.44772 19 5 19H8.30704L13.557 5H10C9.44772 5 9 4.55228 9 4C9 3.44772 9.44772 3 10 3H14.9782C14.9928 2.99968 15.0075 2.99967 15.0222 3Z",
          fill: "currentColor"
        }
      )
    }
  );
});
ItalicIcon.displayName = "ItalicIcon";

// src/components/tiptap-icons/strike-icon.tsx
var import_react64 = require("react");
var import_jsx_runtime57 = require("react/jsx-runtime");
var StrikeIcon = (0, import_react64.memo)(({ className, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)(
    "svg",
    {
      width: "24",
      height: "24",
      className,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
          "path",
          {
            d: "M9.00039 3H16.0001C16.5524 3 17.0001 3.44772 17.0001 4C17.0001 4.55229 16.5524 5 16.0001 5H9.00011C8.68006 4.99983 8.36412 5.07648 8.07983 5.22349C7.79555 5.37051 7.55069 5.5836 7.36585 5.84487C7.181 6.10614 7.06155 6.40796 7.01754 6.72497C6.97352 7.04198 7.00623 7.36492 7.11292 7.66667C7.29701 8.18737 7.02414 8.75872 6.50344 8.94281C5.98274 9.1269 5.4114 8.85403 5.2273 8.33333C5.01393 7.72984 4.94851 7.08396 5.03654 6.44994C5.12456 5.81592 5.36346 5.21229 5.73316 4.68974C6.10285 4.1672 6.59256 3.74101 7.16113 3.44698C7.72955 3.15303 8.36047 2.99975 9.00039 3Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
          "path",
          {
            d: "M18 13H20C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11H4C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H14C14.7956 13 15.5587 13.3161 16.1213 13.8787C16.6839 14.4413 17 15.2044 17 16C17 16.7956 16.6839 17.5587 16.1213 18.1213C15.5587 18.6839 14.7956 19 14 19H6C5.44772 19 5 19.4477 5 20C5 20.5523 5.44772 21 6 21H14C15.3261 21 16.5979 20.4732 17.5355 19.5355C18.4732 18.5979 19 17.3261 19 16C19 14.9119 18.6453 13.8604 18 13Z",
            fill: "currentColor"
          }
        )
      ]
    }
  );
});
StrikeIcon.displayName = "StrikeIcon";

// src/components/tiptap-icons/subscript-icon.tsx
var import_react65 = require("react");
var import_jsx_runtime58 = require("react/jsx-runtime");
var SubscriptIcon = (0, import_react65.memo)(({ className, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(
    "svg",
    {
      width: "24",
      height: "24",
      className,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M3.29289 7.29289C3.68342 6.90237 4.31658 6.90237 4.70711 7.29289L12.7071 15.2929C13.0976 15.6834 13.0976 16.3166 12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L3.29289 8.70711C2.90237 8.31658 2.90237 7.68342 3.29289 7.29289Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12.7071 7.29289C13.0976 7.68342 13.0976 8.31658 12.7071 8.70711L4.70711 16.7071C4.31658 17.0976 3.68342 17.0976 3.29289 16.7071C2.90237 16.3166 2.90237 15.6834 3.29289 15.2929L11.2929 7.29289C11.6834 6.90237 12.3166 6.90237 12.7071 7.29289Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M17.4079 14.3995C18.0284 14.0487 18.7506 13.9217 19.4536 14.0397C20.1566 14.1578 20.7977 14.5138 21.2696 15.0481L21.2779 15.0574L21.2778 15.0575C21.7439 15.5988 22 16.2903 22 17C22 18.0823 21.3962 18.8401 20.7744 19.3404C20.194 19.8073 19.4858 20.141 18.9828 20.378C18.9638 20.387 18.9451 20.3958 18.9266 20.4045C18.4473 20.6306 18.2804 20.7817 18.1922 20.918C18.1773 20.9412 18.1619 20.9681 18.1467 21H21C21.5523 21 22 21.4477 22 22C22 22.5523 21.5523 23 21 23H17C16.4477 23 16 22.5523 16 22C16 21.1708 16.1176 20.4431 16.5128 19.832C16.9096 19.2184 17.4928 18.8695 18.0734 18.5956C18.6279 18.334 19.138 18.0901 19.5207 17.7821C19.8838 17.49 20 17.2477 20 17C20 16.7718 19.9176 16.5452 19.7663 16.3672C19.5983 16.1792 19.3712 16.0539 19.1224 16.0121C18.8722 15.9701 18.6152 16.015 18.3942 16.1394C18.1794 16.2628 18.0205 16.4549 17.9422 16.675C17.7572 17.1954 17.1854 17.4673 16.665 17.2822C16.1446 17.0972 15.8728 16.5254 16.0578 16.005C16.2993 15.3259 16.7797 14.7584 17.4039 14.4018L17.4079 14.3995L17.4079 14.3995Z",
            fill: "currentColor"
          }
        )
      ]
    }
  );
});
SubscriptIcon.displayName = "SubscriptIcon";

// src/components/tiptap-icons/superscript-icon.tsx
var import_react66 = require("react");
var import_jsx_runtime59 = require("react/jsx-runtime");
var SuperscriptIcon = (0, import_react66.memo)(({ className, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)(
    "svg",
    {
      width: "24",
      height: "24",
      className,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12.7071 7.29289C13.0976 7.68342 13.0976 8.31658 12.7071 8.70711L4.70711 16.7071C4.31658 17.0976 3.68342 17.0976 3.29289 16.7071C2.90237 16.3166 2.90237 15.6834 3.29289 15.2929L11.2929 7.29289C11.6834 6.90237 12.3166 6.90237 12.7071 7.29289Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M3.29289 7.29289C3.68342 6.90237 4.31658 6.90237 4.70711 7.29289L12.7071 15.2929C13.0976 15.6834 13.0976 16.3166 12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L3.29289 8.70711C2.90237 8.31658 2.90237 7.68342 3.29289 7.29289Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M17.405 1.40657C18.0246 1.05456 18.7463 0.92634 19.4492 1.04344C20.1521 1.16054 20.7933 1.51583 21.2652 2.0497L21.2697 2.05469L21.2696 2.05471C21.7431 2.5975 22 3.28922 22 4.00203C22 5.08579 21.3952 5.84326 20.7727 6.34289C20.1966 6.80531 19.4941 7.13675 18.9941 7.37261C18.9714 7.38332 18.9491 7.39383 18.9273 7.40415C18.4487 7.63034 18.2814 7.78152 18.1927 7.91844C18.1778 7.94155 18.1625 7.96834 18.1473 8.00003H21C21.5523 8.00003 22 8.44774 22 9.00003C22 9.55231 21.5523 10 21 10H17C16.4477 10 16 9.55231 16 9.00003C16 8.17007 16.1183 7.44255 16.5138 6.83161C16.9107 6.21854 17.4934 5.86971 18.0728 5.59591C18.6281 5.33347 19.1376 5.09075 19.5208 4.78316C19.8838 4.49179 20 4.25026 20 4.00203C20 3.77192 19.9178 3.54865 19.7646 3.37182C19.5968 3.18324 19.3696 3.05774 19.1205 3.01625C18.8705 2.97459 18.6137 3.02017 18.3933 3.14533C18.1762 3.26898 18.0191 3.45826 17.9406 3.67557C17.7531 4.19504 17.18 4.46414 16.6605 4.27662C16.141 4.0891 15.8719 3.51596 16.0594 2.99649C16.303 2.3219 16.7817 1.76125 17.4045 1.40689L17.405 1.40657Z",
            fill: "currentColor"
          }
        )
      ]
    }
  );
});
SuperscriptIcon.displayName = "SuperscriptIcon";

// src/components/tiptap-icons/underline-icon.tsx
var import_react67 = require("react");
var import_jsx_runtime60 = require("react/jsx-runtime");
var UnderlineIcon = (0, import_react67.memo)(({ className, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(
    "svg",
    {
      width: "24",
      height: "24",
      className,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M7 4C7 3.44772 6.55228 3 6 3C5.44772 3 5 3.44772 5 4V10C5 11.8565 5.7375 13.637 7.05025 14.9497C8.36301 16.2625 10.1435 17 12 17C13.8565 17 15.637 16.2625 16.9497 14.9497C18.2625 13.637 19 11.8565 19 10V4C19 3.44772 18.5523 3 18 3C17.4477 3 17 3.44772 17 4V10C17 11.3261 16.4732 12.5979 15.5355 13.5355C14.5979 14.4732 13.3261 15 12 15C10.6739 15 9.40215 14.4732 8.46447 13.5355C7.52678 12.5979 7 11.3261 7 10V4ZM4 19C3.44772 19 3 19.4477 3 20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20C21 19.4477 20.5523 19 20 19H4Z",
          fill: "currentColor"
        }
      )
    }
  );
});
UnderlineIcon.displayName = "UnderlineIcon";

// src/components/tiptap-ui/mark-button/use-mark.ts
var markIcons = {
  bold: BoldIcon,
  italic: ItalicIcon,
  underline: UnderlineIcon,
  strike: StrikeIcon,
  code: Code2Icon,
  superscript: SuperscriptIcon,
  subscript: SubscriptIcon
};
var MARK_SHORTCUT_KEYS = {
  bold: "mod+b",
  italic: "mod+i",
  underline: "mod+u",
  strike: "mod+shift+s",
  code: "mod+e",
  superscript: "mod+.",
  subscript: "mod+,"
};
function canToggleMark(editor, type) {
  if (!editor || !editor.isEditable) return false;
  if (!isMarkInSchema(type, editor) || isNodeTypeSelected(editor, ["image"]))
    return false;
  return editor.can().toggleMark(type);
}
function isMarkActive(editor, type) {
  if (!editor || !editor.isEditable) return false;
  return editor.isActive(type);
}
function toggleMark(editor, type) {
  if (!editor || !editor.isEditable) return false;
  if (!canToggleMark(editor, type)) return false;
  return editor.chain().focus().toggleMark(type).run();
}
function shouldShowButton6(props) {
  const { editor, type, hideWhenUnavailable } = props;
  if (!editor || !editor.isEditable) return false;
  if (!isMarkInSchema(type, editor)) return false;
  if (hideWhenUnavailable && !editor.isActive("code")) {
    return canToggleMark(editor, type);
  }
  return true;
}
function getFormattedMarkName(type) {
  return type.charAt(0).toUpperCase() + type.slice(1);
}
function useMark(config) {
  const {
    editor: providedEditor,
    type,
    hideWhenUnavailable = false,
    onToggled
  } = config;
  const { editor } = useTiptapEditor(providedEditor);
  const [isVisible, setIsVisible] = (0, import_react68.useState)(true);
  const canToggle2 = canToggleMark(editor, type);
  const isActive = isMarkActive(editor, type);
  (0, import_react68.useEffect)(() => {
    if (!editor) return;
    const handleSelectionUpdate = () => {
      setIsVisible(shouldShowButton6({ editor, type, hideWhenUnavailable }));
    };
    handleSelectionUpdate();
    editor.on("selectionUpdate", handleSelectionUpdate);
    return () => {
      editor.off("selectionUpdate", handleSelectionUpdate);
    };
  }, [editor, type, hideWhenUnavailable]);
  const handleMark = (0, import_react68.useCallback)(() => {
    if (!editor) return false;
    const success = toggleMark(editor, type);
    if (success) {
      onToggled?.();
    }
    return success;
  }, [editor, type, onToggled]);
  return {
    isVisible,
    isActive,
    handleMark,
    canToggle: canToggle2,
    label: getFormattedMarkName(type),
    shortcutKeys: MARK_SHORTCUT_KEYS[type],
    Icon: markIcons[type]
  };
}

// src/components/tiptap-ui/text-align-button/text-align-button.tsx
var import_react69 = require("react");
var import_jsx_runtime61 = require("react/jsx-runtime");
function TextAlignShortcutBadge({
  align,
  shortcutKeys = TEXT_ALIGN_SHORTCUT_KEYS[align]
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(Badge, { children: parseShortcutKeys({ shortcutKeys }) });
}
var TextAlignButton = (0, import_react69.forwardRef)(
  ({
    editor: providedEditor,
    align,
    text,
    hideWhenUnavailable = false,
    onAligned,
    showShortcut = false,
    onClick,
    icon: CustomIcon,
    children,
    ...buttonProps
  }, ref) => {
    const { editor } = useTiptapEditor(providedEditor);
    const {
      isVisible,
      handleTextAlign,
      label,
      canAlign,
      isActive,
      Icon,
      shortcutKeys
    } = useTextAlign({
      editor,
      align,
      hideWhenUnavailable,
      onAligned
    });
    const handleClick = (0, import_react69.useCallback)(
      (event) => {
        onClick?.(event);
        if (event.defaultPrevented) return;
        handleTextAlign();
      },
      [handleTextAlign, onClick]
    );
    if (!isVisible) {
      return null;
    }
    const RenderIcon = CustomIcon ?? Icon;
    return /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
      Button2,
      {
        type: "button",
        disabled: !canAlign,
        "data-style": "ghost",
        "data-active-state": isActive ? "on" : "off",
        "data-disabled": !canAlign,
        role: "button",
        tabIndex: -1,
        "aria-label": label,
        "aria-pressed": isActive,
        tooltip: `${label}${shortcutKeys ? ` (${String(parseShortcutKeys({ shortcutKeys })).replace(/Mod/i, "Ctrl").replace(/,/g, " + ")})` : ""}`,
        onClick: handleClick,
        ...buttonProps,
        ref,
        children: children ?? /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)(import_jsx_runtime61.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(RenderIcon, { className: "tiptap-button-icon" }),
          text && /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("span", { className: "tiptap-button-text", children: text }),
          showShortcut && /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
            TextAlignShortcutBadge,
            {
              align,
              shortcutKeys
            }
          )
        ] })
      }
    );
  }
);
TextAlignButton.displayName = "TextAlignButton";

// src/components/tiptap-ui/text-align-button/use-text-align.ts
var import_react74 = require("react");

// src/components/tiptap-icons/align-center-icon.tsx
var import_react70 = require("react");
var import_jsx_runtime62 = require("react/jsx-runtime");
var AlignCenterIcon = (0, import_react70.memo)(({ className, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)(
    "svg",
    {
      width: "24",
      height: "24",
      className,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M4 18C4 17.4477 4.44772 17 5 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18Z",
            fill: "currentColor"
          }
        )
      ]
    }
  );
});
AlignCenterIcon.displayName = "AlignCenterIcon";

// src/components/tiptap-icons/align-justify-icon.tsx
var import_react71 = require("react");
var import_jsx_runtime63 = require("react/jsx-runtime");
var AlignJustifyIcon = (0, import_react71.memo)(({ className, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)(
    "svg",
    {
      width: "24",
      height: "24",
      className,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M2 18C2 17.4477 2.44772 17 3 17H21C21.5523 17 22 17.4477 22 18C22 18.5523 21.5523 19 21 19H3C2.44772 19 2 18.5523 2 18Z",
            fill: "currentColor"
          }
        )
      ]
    }
  );
});
AlignJustifyIcon.displayName = "AlignJustifyIcon";

// src/components/tiptap-icons/align-left-icon.tsx
var import_react72 = require("react");
var import_jsx_runtime64 = require("react/jsx-runtime");
var AlignLeftIcon = (0, import_react72.memo)(({ className, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)(
    "svg",
    {
      width: "24",
      height: "24",
      className,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M2 12C2 11.4477 2.44772 11 3 11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13H3C2.44772 13 2 12.5523 2 12Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M2 18C2 17.4477 2.44772 17 3 17H17C17.5523 17 18 17.4477 18 18C18 18.5523 17.5523 19 17 19H3C2.44772 19 2 18.5523 2 18Z",
            fill: "currentColor"
          }
        )
      ]
    }
  );
});
AlignLeftIcon.displayName = "AlignLeftIcon";

// src/components/tiptap-icons/align-right-icon.tsx
var import_react73 = require("react");
var import_jsx_runtime65 = require("react/jsx-runtime");
var AlignRightIcon = (0, import_react73.memo)(({ className, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)(
    "svg",
    {
      width: "24",
      height: "24",
      className,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M8 12C8 11.4477 8.44772 11 9 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H9C8.44772 13 8 12.5523 8 12Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M6 18C6 17.4477 6.44772 17 7 17H21C21.5523 17 22 17.4477 22 18C22 18.5523 21.5523 19 21 19H7C6.44772 19 6 18.5523 6 18Z",
            fill: "currentColor"
          }
        )
      ]
    }
  );
});
AlignRightIcon.displayName = "AlignRightIcon";

// src/components/tiptap-ui/text-align-button/use-text-align.ts
var TEXT_ALIGN_SHORTCUT_KEYS = {
  left: "mod+shift+l",
  center: "mod+shift+e",
  right: "mod+shift+r",
  justify: "mod+shift+j"
};
var textAlignIcons = {
  left: AlignLeftIcon,
  center: AlignCenterIcon,
  right: AlignRightIcon,
  justify: AlignJustifyIcon
};
var textAlignLabels = {
  left: "Align left",
  center: "Align center",
  right: "Align right",
  justify: "Align justify"
};
function canSetTextAlign(editor, align) {
  if (!editor || !editor.isEditable) return false;
  if (!isExtensionAvailable(editor, "textAlign") || isNodeTypeSelected(editor, ["image", "horizontalRule"]))
    return false;
  return editor.can().setTextAlign(align);
}
function hasSetTextAlign(commands) {
  return "setTextAlign" in commands;
}
function isTextAlignActive(editor, align) {
  if (!editor || !editor.isEditable) return false;
  return editor.isActive({ textAlign: align });
}
function setTextAlign(editor, align) {
  if (!editor || !editor.isEditable) return false;
  if (!canSetTextAlign(editor, align)) return false;
  const chain = editor.chain().focus();
  if (hasSetTextAlign(chain)) {
    return chain.setTextAlign(align).run();
  }
  return false;
}
function shouldShowButton7(props) {
  const { editor, hideWhenUnavailable, align } = props;
  if (!editor || !editor.isEditable) return false;
  if (!isExtensionAvailable(editor, "textAlign")) return false;
  if (hideWhenUnavailable && !editor.isActive("code")) {
    return canSetTextAlign(editor, align);
  }
  return true;
}
function useTextAlign(config) {
  const {
    editor: providedEditor,
    align,
    hideWhenUnavailable = false,
    onAligned
  } = config;
  const { editor } = useTiptapEditor(providedEditor);
  const [isVisible, setIsVisible] = (0, import_react74.useState)(true);
  const canAlign = canSetTextAlign(editor, align);
  const isActive = isTextAlignActive(editor, align);
  (0, import_react74.useEffect)(() => {
    if (!editor) return;
    const handleSelectionUpdate = () => {
      setIsVisible(shouldShowButton7({ editor, align, hideWhenUnavailable }));
    };
    handleSelectionUpdate();
    editor.on("selectionUpdate", handleSelectionUpdate);
    return () => {
      editor.off("selectionUpdate", handleSelectionUpdate);
    };
  }, [editor, hideWhenUnavailable, align]);
  const handleTextAlign = (0, import_react74.useCallback)(() => {
    if (!editor) return false;
    const success = setTextAlign(editor, align);
    if (success) {
      onAligned?.();
    }
    return success;
  }, [editor, align, onAligned]);
  return {
    isVisible,
    isActive,
    handleTextAlign,
    canAlign,
    label: textAlignLabels[align],
    shortcutKeys: TEXT_ALIGN_SHORTCUT_KEYS[align],
    Icon: textAlignIcons[align]
  };
}

// src/components/tiptap-ui/undo-redo-button/undo-redo-button.tsx
var import_react75 = require("react");
var import_jsx_runtime66 = require("react/jsx-runtime");
function HistoryShortcutBadge({
  action,
  shortcutKeys = UNDO_REDO_SHORTCUT_KEYS[action]
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(Badge, { children: parseShortcutKeys({ shortcutKeys }) });
}
var UndoRedoButton = (0, import_react75.forwardRef)(
  ({
    editor: providedEditor,
    action,
    text,
    hideWhenUnavailable = false,
    onExecuted,
    showShortcut = false,
    onClick,
    children,
    ...buttonProps
  }, ref) => {
    const { editor } = useTiptapEditor(providedEditor);
    const { isVisible, handleAction, label, canExecute, Icon, shortcutKeys } = useUndoRedo({
      editor,
      action,
      hideWhenUnavailable,
      onExecuted
    });
    const handleClick = (0, import_react75.useCallback)(
      (event) => {
        onClick?.(event);
        if (event.defaultPrevented) return;
        handleAction();
      },
      [handleAction, onClick]
    );
    if (!isVisible) {
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(
      Button2,
      {
        type: "button",
        disabled: !canExecute,
        "data-style": "ghost",
        "data-disabled": !canExecute,
        role: "button",
        tabIndex: -1,
        "aria-label": label,
        tooltip: `${label}${shortcutKeys ? ` (${String(parseShortcutKeys({ shortcutKeys })).replace(/Mod/i, "Ctrl").replace(/,/g, " + ")})` : ""}`,
        onClick: handleClick,
        ...buttonProps,
        ref,
        children: children ?? /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)(import_jsx_runtime66.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(Icon, { className: "tiptap-button-icon" }),
          text && /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("span", { className: "tiptap-button-text", children: text }),
          showShortcut && /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(
            HistoryShortcutBadge,
            {
              action,
              shortcutKeys
            }
          )
        ] })
      }
    );
  }
);
UndoRedoButton.displayName = "UndoRedoButton";

// src/components/tiptap-ui/undo-redo-button/use-undo-redo.ts
var import_react78 = require("react");

// src/components/tiptap-icons/redo2-icon.tsx
var import_react76 = require("react");
var import_jsx_runtime67 = require("react/jsx-runtime");
var Redo2Icon = (0, import_react76.memo)(({ className, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(
    "svg",
    {
      width: "24",
      height: "24",
      className,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M15.7071 2.29289C15.3166 1.90237 14.6834 1.90237 14.2929 2.29289C13.9024 2.68342 13.9024 3.31658 14.2929 3.70711L17.5858 7H9.5C7.77609 7 6.12279 7.68482 4.90381 8.90381C3.68482 10.1228 3 11.7761 3 13.5C3 14.3536 3.16813 15.1988 3.49478 15.9874C3.82144 16.7761 4.30023 17.4926 4.90381 18.0962C6.12279 19.3152 7.77609 20 9.5 20H13C13.5523 20 14 19.5523 14 19C14 18.4477 13.5523 18 13 18H9.5C8.30653 18 7.16193 17.5259 6.31802 16.682C5.90016 16.2641 5.56869 15.768 5.34254 15.2221C5.1164 14.6761 5 14.0909 5 13.5C5 12.3065 5.47411 11.1619 6.31802 10.318C7.16193 9.47411 8.30653 9 9.5 9H17.5858L14.2929 12.2929C13.9024 12.6834 13.9024 13.3166 14.2929 13.7071C14.6834 14.0976 15.3166 14.0976 15.7071 13.7071L20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.29289L15.7071 2.29289Z",
          fill: "currentColor"
        }
      )
    }
  );
});
Redo2Icon.displayName = "Redo2Icon";

// src/components/tiptap-icons/undo2-icon.tsx
var import_react77 = require("react");
var import_jsx_runtime68 = require("react/jsx-runtime");
var Undo2Icon = (0, import_react77.memo)(({ className, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(
    "svg",
    {
      width: "24",
      height: "24",
      className,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M9.70711 3.70711C10.0976 3.31658 10.0976 2.68342 9.70711 2.29289C9.31658 1.90237 8.68342 1.90237 8.29289 2.29289L3.29289 7.29289C2.90237 7.68342 2.90237 8.31658 3.29289 8.70711L8.29289 13.7071C8.68342 14.0976 9.31658 14.0976 9.70711 13.7071C10.0976 13.3166 10.0976 12.6834 9.70711 12.2929L6.41421 9H14.5C15.0909 9 15.6761 9.1164 16.2221 9.34254C16.768 9.56869 17.2641 9.90016 17.682 10.318C18.0998 10.7359 18.4313 11.232 18.6575 11.7779C18.8836 12.3239 19 12.9091 19 13.5C19 14.0909 18.8836 14.6761 18.6575 15.2221C18.4313 15.768 18.0998 16.2641 17.682 16.682C17.2641 17.0998 16.768 17.4313 16.2221 17.6575C15.6761 17.8836 15.0909 18 14.5 18H11C10.4477 18 10 18.4477 10 19C10 19.5523 10.4477 20 11 20H14.5C15.3536 20 16.1988 19.8319 16.9874 19.5052C17.7761 19.1786 18.4926 18.6998 19.0962 18.0962C19.6998 17.4926 20.1786 16.7761 20.5052 15.9874C20.8319 15.1988 21 14.3536 21 13.5C21 12.6464 20.8319 11.8012 20.5052 11.0126C20.1786 10.2239 19.6998 9.50739 19.0962 8.90381C18.4926 8.30022 17.7761 7.82144 16.9874 7.49478C16.1988 7.16813 15.3536 7 14.5 7H6.41421L9.70711 3.70711Z",
          fill: "currentColor"
        }
      )
    }
  );
});
Undo2Icon.displayName = "Undo2Icon";

// src/components/tiptap-ui/undo-redo-button/use-undo-redo.ts
var UNDO_REDO_SHORTCUT_KEYS = {
  undo: "mod+z",
  redo: "mod+shift+z"
};
var historyActionLabels = {
  undo: "Undo",
  redo: "Redo"
};
var historyIcons = {
  undo: Undo2Icon,
  redo: Redo2Icon
};
function canExecuteUndoRedoAction(editor, action) {
  if (!editor || !editor.isEditable) return false;
  if (isNodeTypeSelected(editor, ["image"])) return false;
  return action === "undo" ? editor.can().undo() : editor.can().redo();
}
function executeUndoRedoAction(editor, action) {
  if (!editor || !editor.isEditable) return false;
  if (!canExecuteUndoRedoAction(editor, action)) return false;
  const chain = editor.chain().focus();
  return action === "undo" ? chain.undo().run() : chain.redo().run();
}
function shouldShowButton8(props) {
  const { editor, hideWhenUnavailable, action } = props;
  if (!editor || !editor.isEditable) return false;
  if (hideWhenUnavailable && !editor.isActive("code")) {
    return canExecuteUndoRedoAction(editor, action);
  }
  return true;
}
function useUndoRedo(config) {
  const {
    editor: providedEditor,
    action,
    hideWhenUnavailable = false,
    onExecuted
  } = config;
  const { editor } = useTiptapEditor(providedEditor);
  const [isVisible, setIsVisible] = (0, import_react78.useState)(true);
  const canExecute = canExecuteUndoRedoAction(editor, action);
  (0, import_react78.useEffect)(() => {
    if (!editor) return;
    const handleUpdate = () => {
      setIsVisible(shouldShowButton8({ editor, hideWhenUnavailable, action }));
    };
    handleUpdate();
    editor.on("transaction", handleUpdate);
    return () => {
      editor.off("transaction", handleUpdate);
    };
  }, [editor, hideWhenUnavailable, action]);
  const handleAction = (0, import_react78.useCallback)(() => {
    if (!editor) return false;
    const success = executeUndoRedoAction(editor, action);
    if (success) {
      onExecuted?.();
    }
    return success;
  }, [editor, action, onExecuted]);
  return {
    isVisible,
    handleAction,
    canExecute,
    label: historyActionLabels[action],
    shortcutKeys: UNDO_REDO_SHORTCUT_KEYS[action],
    Icon: historyIcons[action]
  };
}

// src/components/tiptap-ui/font-family-dropdown/font-family-dropdown.tsx
var import_react79 = require("@tiptap/react");
var import_react80 = require("react");

// src/lib/font.ts
var FONT_OPTIONS = [
  { label: "Inter", cssFontFamily: "Inter" },
  { label: "Roboto", cssFontFamily: "Roboto" },
  { label: "Open Sans", cssFontFamily: "Opensans" },
  { label: "Poppins", cssFontFamily: "Poppins" },
  { label: "Montserrat", cssFontFamily: "Montserrat" },
  { label: "Lato", cssFontFamily: "Lato" },
  { label: "Oswald", cssFontFamily: "Oswald" },
  { label: "Raleway", cssFontFamily: "Raleway" },
  { label: "Merriweather", cssFontFamily: "Merriweather" },
  { label: "Playfair Display", cssFontFamily: "Playfair" },
  { label: "Ubuntu", cssFontFamily: "Ubuntu" },
  { label: "PT Sans", cssFontFamily: "Ptsans" },
  { label: "Barlow", cssFontFamily: "Barlow" },
  { label: "Fira Sans", cssFontFamily: "Fira" },
  { label: "Nunito", cssFontFamily: "Nunito" },
  { label: "Cabin", cssFontFamily: "Cabin" },
  { label: "Bebas Neue", cssFontFamily: "Bebas" },
  { label: "Source Serif Pro", cssFontFamily: "Sourceserif" },
  { label: "Libre Baskerville", cssFontFamily: "Librebask" },
  { label: "Rubik", cssFontFamily: "Rubik" },
  { label: "Inconsolata", cssFontFamily: "Inconsolata" },
  { label: "Work Sans", cssFontFamily: "Worksans" },
  { label: "Mulish", cssFontFamily: "Mulish" },
  { label: "Quicksand", cssFontFamily: "Quicksand" },
  { label: "Kanit", cssFontFamily: "Kanit" },
  { label: "Teko", cssFontFamily: "Teko" },
  { label: "Josefin Sans", cssFontFamily: "Josefin" },
  { label: "Philosopher", cssFontFamily: "Philosopher" },
  { label: "Dancing Script", cssFontFamily: "Dancing" },
  { label: "Noto Serif", cssFontFamily: "Notoserif" },
  { label: "Manrope", cssFontFamily: "Manrope" },
  { label: "Space Grotesk", cssFontFamily: "Spacegrotesk" }
];

// src/components/tiptap-ui/font-family-dropdown/font-family-dropdown.tsx
var import_lucide_react8 = require("lucide-react");

// src/components/ui/command.tsx
var import_cmdk = require("cmdk");
var import_lucide_react7 = require("lucide-react");
var import_jsx_runtime69 = require("react/jsx-runtime");
function Command({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
    import_cmdk.Command,
    {
      "data-slot": "command",
      className: cn(
        "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
        className
      ),
      ...props
    }
  );
}
function CommandInput({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)(
    "div",
    {
      "data-slot": "command-input-wrapper",
      className: "flex h-9 items-center gap-2 border-b px-3",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(import_lucide_react7.SearchIcon, { className: "size-4 shrink-0 opacity-50" }),
        /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
          import_cmdk.Command.Input,
          {
            "data-slot": "command-input",
            className: cn(
              "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
              className
            ),
            ...props
          }
        )
      ]
    }
  );
}
function CommandList({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
    import_cmdk.Command.List,
    {
      "data-slot": "command-list",
      className: cn(
        "max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto",
        className
      ),
      ...props
    }
  );
}
function CommandEmpty({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
    import_cmdk.Command.Empty,
    {
      "data-slot": "command-empty",
      className: "py-6 text-center text-sm",
      ...props
    }
  );
}
function CommandGroup({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
    import_cmdk.Command.Group,
    {
      "data-slot": "command-group",
      className: cn(
        "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
        className
      ),
      ...props
    }
  );
}
function CommandItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
    import_cmdk.Command.Item,
    {
      "data-slot": "command-item",
      className: cn(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}

// src/components/ui/popover.tsx
var PopoverPrimitive2 = __toESM(require("@radix-ui/react-popover"));
var import_jsx_runtime70 = require("react/jsx-runtime");
function Popover2({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(PopoverPrimitive2.Root, { "data-slot": "popover", ...props });
}
function PopoverTrigger2({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(PopoverPrimitive2.Trigger, { "data-slot": "popover-trigger", ...props });
}
function PopoverContent2({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(PopoverPrimitive2.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(
    PopoverPrimitive2.Content,
    {
      "data-slot": "popover-content",
      align,
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        className
      ),
      ...props
    }
  ) });
}

// src/components/tiptap-ui/font-family-dropdown/font-family-dropdown.tsx
var import_jsx_runtime71 = require("react/jsx-runtime");
function FontFamilyDropdown() {
  const { editor } = (0, import_react79.useCurrentEditor)();
  const [open, setOpen] = (0, import_react80.useState)(false);
  if (!editor) return null;
  const currentFont = editor.getAttributes("textStyle").fontFamily || "Font Family";
  const applyFont = (family) => {
    if (!editor) return;
    if (editor.state.storedMarks) {
      const textStyleMark = editor.schema.marks.textStyle;
      if (textStyleMark) {
        editor.view.dispatch(editor.state.tr.removeStoredMark(textStyleMark));
      }
    }
    setTimeout(() => {
      const success = editor.chain().focus().setFontFamily(family).run();
      if (!success) {
        console.warn("Font not applied:", family);
      }
    }, 0);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)(Popover2, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(PopoverTrigger2, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)(
      Button,
      {
        variant: "outlineFontFamily",
        className: "\r\n            min-w-[90px] h-7 px-2 flex items-center justify-between rounded-sm\r\n            border-[#a3a3a8] text-[#a3a3a8]\r\n            hover:border-[#000] hover:text-[#fff] transition-colors\r\n          ",
        children: [
          currentFont,
          /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(import_lucide_react8.ChevronDown, { className: "w-4 h-4" })
        ]
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
      PopoverContent2,
      {
        className: "w-[300px] p-0",
        align: "start",
        onInteractOutside: (e) => {
          const target = e.target;
          if (target.closest(".cmd-input-wrapper")) {
            e.preventDefault();
          }
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)(Command, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("div", { className: "cmd-input-wrapper", children: /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(CommandInput, { placeholder: "Search font..." }) }),
          /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)(CommandList, { className: "max-h-[220px]", children: [
            /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(CommandEmpty, { children: "No font found." }),
            /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)(CommandGroup, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
                CommandItem,
                {
                  onSelect: () => {
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
                  },
                  className: "font-sans",
                  children: "Default"
                },
                "default"
              ),
              FONT_OPTIONS.map(({ label, cssFontFamily }) => /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
                CommandItem,
                {
                  onSelect: () => {
                    applyFont(label);
                    setOpen(false);
                  },
                  style: { fontFamily: cssFontFamily },
                  children: label
                },
                label
              ))
            ] })
          ] })
        ] })
      }
    )
  ] });
}

// src/components/tiptap-ui/color-picker/color-picker.tsx
var import_react81 = require("react");
var import_react82 = require("@tiptap/react");
var import_react_colorful = require("react-colorful");

// src/lib/colors.ts
var GRADIENT_ROWS_70 = [
  // ROW 1 — GRAY (Neutral gradient)
  "#ffffff",
  "#f2f2f2",
  "#e6e6e6",
  "#cccccc",
  "#b3b3b3",
  "#999999",
  "#808080",
  "#666666",
  "#4d4d4d",
  "#333333",
  // ROW 2 — RED
  "#ffe8e8",
  "#ffc4c4",
  "#ff9e9e",
  "#ff7878",
  "#ff5252",
  "#ff2d2d",
  "#ff0707",
  "#d30000",
  "#a80000",
  "#7d0000",
  // ROW 3 — ORANGE
  "#fff1e0",
  "#ffd9b3",
  "#ffc285",
  "#ffab57",
  "#ff9429",
  "#ff7d00",
  "#e66700",
  "#cc5500",
  "#b24400",
  "#803000",
  // ROW 4 — YELLOW
  "#fffbe0",
  "#fff4b3",
  "#ffec85",
  "#ffe457",
  "#ffdc29",
  "#ffd400",
  "#e6be00",
  "#cca900",
  "#b39400",
  "#806e00",
  // ROW 5 — GREEN
  "#e7ffe8",
  "#c4ffc7",
  "#9effa5",
  "#78ff83",
  "#52ff61",
  "#2dff3f",
  "#0afc22",
  "#00d51d",
  "#00ad18",
  "#008512",
  // ROW 6 — BLUE
  "#e4f2ff",
  "#bcdcff",
  "#94c5ff",
  "#6badff",
  "#4396ff",
  "#1b7eff",
  "#0065e6",
  "#0054bf",
  "#004499",
  "#003373",
  // ROW 7 — PURPLE
  "#f3e6ff",
  "#dfb5ff",
  "#cb85ff",
  "#b755ff",
  "#a326ff",
  "#8a0dff",
  "#7600e6",
  "#6300bf",
  "#4f0099",
  "#3c0073"
];

// src/components/tiptap-ui/color-picker/color-picker.tsx
var import_lodash = require("lodash");

// src/components/ui/label.tsx
var LabelPrimitive = __toESM(require("@radix-ui/react-label"));
var import_jsx_runtime72 = require("react/jsx-runtime");
function Label2({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(
    LabelPrimitive.Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}

// src/components/tiptap-ui/color-picker/color-picker.tsx
var import_react83 = __toESM(require("react"));
var import_jsx_runtime73 = require("react/jsx-runtime");
function ColorPicker({ type = "text" }) {
  const { editor } = (0, import_react82.useCurrentEditor)();
  const [open, setOpen] = (0, import_react81.useState)(false);
  const [color, setColor] = (0, import_react81.useState)("#000000");
  const [showCustom, setShowCustom] = (0, import_react81.useState)(false);
  const [tempHex, setTempHex] = (0, import_react81.useState)("#000000");
  const [canApply, setCanApply] = (0, import_react81.useState)(false);
  (0, import_react81.useEffect)(() => {
    const current = type === "text" ? editor?.getAttributes("textStyle").color || "#000000" : editor?.getAttributes("highlight")?.color || "#FFFF00";
    setColor(current);
    setTempHex(current);
  }, [editor, type]);
  (0, import_react81.useEffect)(() => {
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
  const applyColor = import_react83.default.useCallback(
    (value) => {
      if (!editor) return;
      if (editor.state.storedMarks) {
        const textStyleMark = editor.schema.marks.textStyle;
        if (textStyleMark) {
          editor.view.dispatch(editor.state.tr.removeStoredMark(textStyleMark));
        }
      }
      setTimeout(() => {
        editor.chain().focus().setColor(value).run();
        setColor(value);
      }, 0);
    },
    [editor]
  );
  const debouncedSetTemp = import_react83.default.useMemo(
    () => (0, import_lodash.debounce)((v) => setTempHex(v), 50),
    []
  );
  if (!editor) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime73.jsxs)(Popover2, { open, onOpenChange: (v) => setOpen(v), children: [
    /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(PopoverTrigger2, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime73.jsxs)(
      Button,
      {
        variant: "outlineFontFamily",
        className: "flex items-center h-7 rounded-sm px-2 border-[#a3a3a8] text-[#a3a3a8] hover:text-white",
        children: [
          "Color",
          /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(
            "span",
            {
              className: "w-3 h-3 ml-2 rounded-sm border border-black/20",
              style: { backgroundColor: color }
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime73.jsxs)(
      PopoverContent2,
      {
        className: "w-[260px] p-3",
        align: "start",
        onClick: (e) => e.stopPropagation(),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(Label2, { className: "text-xs mb-2", children: type === "text" ? "Text Color" : "Highlight Color" }),
          !showCustom && /* @__PURE__ */ (0, import_jsx_runtime73.jsxs)("div", { className: "flex flex-col gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime73.jsx)("div", { className: "grid grid-cols-7 gap-1", children: GRADIENT_ROWS_70.map((c) => /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(
              "div",
              {
                onClick: () => {
                  applyColor(c);
                  setOpen(false);
                },
                className: "w-5 h-5 rounded-lg cursor-pointer border border-black/10  hover:scale-105 transition",
                style: { backgroundColor: c }
              },
              c
            )) }),
            /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(
              Button,
              {
                size: "sm",
                variant: "outline",
                onClick: () => {
                  setTempHex(color);
                  setShowCustom(true);
                },
                children: "Custom"
              }
            )
          ] }),
          showCustom && // stop mouse/pointer events from bubbling so popover doesn't treat them as outside clicks
          /* @__PURE__ */ (0, import_jsx_runtime73.jsxs)(
            "div",
            {
              className: "flex flex-col gap-3",
              onMouseDown: (e) => e.stopPropagation(),
              onMouseUp: (e) => e.stopPropagation(),
              onPointerDown: (e) => e.stopPropagation(),
              onPointerUp: (e) => e.stopPropagation(),
              onClick: (e) => e.stopPropagation(),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(
                  import_react_colorful.HexColorPicker,
                  {
                    color: tempHex,
                    onChange: (v) => {
                      setTempHex(v);
                    },
                    onMouseDown: (e) => e.stopPropagation(),
                    onMouseUp: (e) => e.stopPropagation()
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime73.jsxs)("div", { className: "flex gap-2 items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(
                    "input",
                    {
                      value: tempHex,
                      onChange: (e) => {
                        debouncedSetTemp(e.target.value);
                        setTempHex(e.target.value);
                      },
                      className: "w-full px-2 py-1 border rounded text-sm"
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(
                    Button,
                    {
                      size: "sm",
                      variant: "outline",
                      onClick: () => {
                        setTempHex(color);
                        setShowCustom(false);
                      },
                      children: "Back"
                    }
                  )
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime73.jsx)("div", { className: "flex justify-end mt-2", children: /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(
                  Button,
                  {
                    size: "sm",
                    onClick: () => {
                      applyColor(tempHex);
                      setShowCustom(false);
                      setOpen(false);
                      setTimeout(() => {
                        editor?.commands.focus();
                      }, 200);
                    },
                    children: "OK"
                  }
                ) })
              ]
            }
          )
        ]
      }
    )
  ] });
}

// src/components/tiptap-ui/table-dropdown-menu/table-dropdown-menu.tsx
var import_react84 = require("react");
var import_react85 = require("@tiptap/react");
var import_fi = require("react-icons/fi");
var import_jsx_runtime74 = require("react/jsx-runtime");
function TableDropdownMenu() {
  const { editor } = (0, import_react85.useCurrentEditor)();
  const [open, setOpen] = (0, import_react84.useState)(false);
  if (!editor) return null;
  const handleAction = (action) => {
    switch (action) {
      case "insert":
        editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();
        break;
      case "addColBefore":
        editor.chain().focus().addColumnBefore().run();
        break;
      case "addColAfter":
        editor.chain().focus().addColumnAfter().run();
        break;
      case "delCol":
        editor.chain().focus().deleteColumn().run();
        break;
      case "addRowBefore":
        editor.chain().focus().addRowBefore().run();
        break;
      case "addRowAfter":
        editor.chain().focus().addRowAfter().run();
        break;
      case "delRow":
        editor.chain().focus().deleteRow().run();
        break;
      case "merge":
        editor.chain().focus().mergeCells().run();
        break;
      case "split":
        editor.chain().focus().splitCell().run();
        break;
      case "deleteTable":
        editor.chain().focus().deleteTable().run();
        break;
      default:
        break;
    }
    setOpen(false);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime74.jsxs)(Popover2, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(PopoverTrigger2, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(Button, { variant: "tableButton", size: "sm", children: /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(import_fi.FiTable, { size: 16, color: "#a3a3a8" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(PopoverContent2, { className: "w-[220px] p-0", align: "start", children: /* @__PURE__ */ (0, import_jsx_runtime74.jsxs)(Command, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(CommandInput, { placeholder: "Search table actions..." }),
      /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(CommandList, { className: "max-h-[260px]", children: /* @__PURE__ */ (0, import_jsx_runtime74.jsxs)(CommandGroup, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(CommandItem, { onSelect: () => handleAction("insert"), children: "Insert Table" }),
        /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(CommandItem, { onSelect: () => handleAction("addColBefore"), children: "Add Column Before" }),
        /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(CommandItem, { onSelect: () => handleAction("addColAfter"), children: "Add Column After" }),
        /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(CommandItem, { onSelect: () => handleAction("delCol"), children: "Delete Column" }),
        /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(CommandItem, { onSelect: () => handleAction("addRowBefore"), children: "Add Row Before" }),
        /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(CommandItem, { onSelect: () => handleAction("addRowAfter"), children: "Add Row After" }),
        /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(CommandItem, { onSelect: () => handleAction("delRow"), children: "Delete Row" }),
        /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(CommandItem, { onSelect: () => handleAction("merge"), children: "Merge Cells" }),
        /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(CommandItem, { onSelect: () => handleAction("split"), children: "Split Cells" }),
        /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(CommandItem, { onSelect: () => handleAction("deleteTable"), children: "Delete Table" })
      ] }) })
    ] }) })
  ] });
}

// src/components/tiptap-icons/arrow-left-icon.tsx
var import_react86 = require("react");
var import_jsx_runtime75 = require("react/jsx-runtime");
var ArrowLeftIcon = (0, import_react86.memo)(({ className, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(
    "svg",
    {
      width: "24",
      height: "24",
      className,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(
        "path",
        {
          d: "M12.7071 5.70711C13.0976 5.31658 13.0976 4.68342 12.7071 4.29289C12.3166 3.90237 11.6834 3.90237 11.2929 4.29289L4.29289 11.2929C3.90237 11.6834 3.90237 12.3166 4.29289 12.7071L11.2929 19.7071C11.6834 20.0976 12.3166 20.0976 12.7071 19.7071C13.0976 19.3166 13.0976 18.6834 12.7071 18.2929L7.41421 13L19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11L7.41421 11L12.7071 5.70711Z",
          fill: "currentColor"
        }
      )
    }
  );
});
ArrowLeftIcon.displayName = "ArrowLeftIcon";

// src/hooks/use-window-size.ts
var import_react89 = require("react");

// src/hooks/use-throttled-callback.ts
var import_lodash2 = __toESM(require("lodash.throttle"));

// src/hooks/use-unmount.ts
var import_react87 = require("react");
var useUnmount = (callback) => {
  const ref = (0, import_react87.useRef)(callback);
  ref.current = callback;
  (0, import_react87.useEffect)(
    () => () => {
      ref.current();
    },
    []
  );
};

// src/hooks/use-throttled-callback.ts
var import_react88 = require("react");
var defaultOptions = {
  leading: false,
  trailing: true
};
function useThrottledCallback(fn, wait = 250, dependencies = [], options = defaultOptions) {
  const handler = (0, import_react88.useMemo)(
    () => (0, import_lodash2.default)(fn, wait, options),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    dependencies
  );
  useUnmount(() => {
    handler.cancel();
  });
  return handler;
}

// src/hooks/use-window-size.ts
function useWindowSize() {
  const [windowSize, setWindowSize] = (0, import_react89.useState)({
    width: 0,
    height: 0,
    offsetTop: 0,
    offsetLeft: 0,
    scale: 0
  });
  const handleViewportChange = useThrottledCallback(() => {
    if (typeof window === "undefined") return;
    const vp = window.visualViewport;
    if (!vp) return;
    const {
      width = 0,
      height = 0,
      offsetTop = 0,
      offsetLeft = 0,
      scale = 0
    } = vp;
    setWindowSize((prevState) => {
      if (width === prevState.width && height === prevState.height && offsetTop === prevState.offsetTop && offsetLeft === prevState.offsetLeft && scale === prevState.scale) {
        return prevState;
      }
      return { width, height, offsetTop, offsetLeft, scale };
    });
  }, 200);
  (0, import_react89.useEffect)(() => {
    const visualViewport = window.visualViewport;
    if (!visualViewport) return;
    visualViewport.addEventListener("resize", handleViewportChange);
    handleViewportChange();
    return () => {
      visualViewport.removeEventListener("resize", handleViewportChange);
    };
  }, [handleViewportChange]);
  return windowSize;
}

// src/hooks/use-element-rect.ts
var import_react90 = require("react");
var initialRect = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};
var isSSR = typeof window === "undefined";
var hasResizeObserver = !isSSR && typeof ResizeObserver !== "undefined";
var isClientSide = () => !isSSR;
function useElementRect({
  element,
  enabled = true,
  throttleMs = 100,
  useResizeObserver = true
} = {}) {
  const [rect, setRect] = (0, import_react90.useState)(initialRect);
  const getTargetElement = (0, import_react90.useCallback)(() => {
    if (!enabled || !isClientSide()) return null;
    if (!element) {
      return document.body;
    }
    if (typeof element === "string") {
      return document.querySelector(element);
    }
    if ("current" in element) {
      return element.current;
    }
    return element;
  }, [element, enabled]);
  const updateRect = useThrottledCallback(
    () => {
      if (!enabled || !isClientSide()) return;
      const targetElement = getTargetElement();
      if (!targetElement) {
        setRect(initialRect);
        return;
      }
      const newRect = targetElement.getBoundingClientRect();
      setRect({
        x: newRect.x,
        y: newRect.y,
        width: newRect.width,
        height: newRect.height,
        top: newRect.top,
        right: newRect.right,
        bottom: newRect.bottom,
        left: newRect.left
      });
    },
    throttleMs,
    [enabled, getTargetElement],
    { leading: true, trailing: true }
  );
  (0, import_react90.useEffect)(() => {
    if (!enabled || !isClientSide()) {
      setRect(initialRect);
      return;
    }
    const targetElement = getTargetElement();
    if (!targetElement) return;
    updateRect();
    const cleanup = [];
    if (useResizeObserver && hasResizeObserver) {
      const resizeObserver = new ResizeObserver(() => {
        window.requestAnimationFrame(updateRect);
      });
      resizeObserver.observe(targetElement);
      cleanup.push(() => resizeObserver.disconnect());
    }
    const handleUpdate = () => updateRect();
    window.addEventListener("scroll", handleUpdate, true);
    window.addEventListener("resize", handleUpdate, true);
    cleanup.push(() => {
      window.removeEventListener("scroll", handleUpdate);
      window.removeEventListener("resize", handleUpdate);
    });
    return () => {
      cleanup.forEach((fn) => fn());
      setRect(initialRect);
    };
  }, [enabled, getTargetElement, updateRect, useResizeObserver]);
  return rect;
}
function useBodyRect(options = {}) {
  return useElementRect({
    ...options,
    element: isClientSide() ? document.body : null
  });
}
function useRefRect(ref, options = {}) {
  return useElementRect({ ...options, element: ref });
}

// src/hooks/use-cursor-visibility.ts
var import_react91 = require("react");
function useCursorVisibility({
  editor,
  overlayHeight = 0
}) {
  const { height: windowHeight } = useWindowSize();
  const rect = useBodyRect({
    enabled: true,
    throttleMs: 100,
    useResizeObserver: true
  });
  (0, import_react91.useEffect)(() => {
    const ensureCursorVisibility = () => {
      if (!editor) return;
      const { state, view } = editor;
      if (!view.hasFocus()) return;
      const { from } = state.selection;
      const cursorCoords = view.coordsAtPos(from);
      if (windowHeight < rect.height && cursorCoords) {
        const availableSpace = windowHeight - cursorCoords.top;
        if (availableSpace < overlayHeight) {
          const targetCursorY = Math.max(windowHeight / 2, overlayHeight);
          const currentScrollY = window.scrollY;
          const cursorAbsoluteY = cursorCoords.top + currentScrollY;
          const newScrollY = cursorAbsoluteY - targetCursorY;
          window.scrollTo({
            top: Math.max(0, newScrollY),
            behavior: "smooth"
          });
        }
      }
    };
    ensureCursorVisibility();
  }, [editor, overlayHeight, windowHeight, rect.height]);
  return rect;
}

// src/components/tiptap-templates/simple/simple-editor.tsx
var import_jsx_runtime76 = require("react/jsx-runtime");
var MainToolbarContent = ({
  onHighlighterClick,
  onLinkClick,
  isMobile
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime76.jsxs)(import_jsx_runtime76.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(Spacer, {}),
    /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(FontFamilyDropdown, {}),
    /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(ColorPicker, { type: "text" }),
    /* @__PURE__ */ (0, import_jsx_runtime76.jsxs)(ToolbarGroup, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(MarkButton, { type: "bold" }),
      /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(MarkButton, { type: "italic" }),
      /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(MarkButton, { type: "strike" }),
      /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(MarkButton, { type: "code" }),
      /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(MarkButton, { type: "underline" }),
      /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(UndoRedoButton, { action: "undo" }),
      /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(UndoRedoButton, { action: "redo" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(ToolbarSeparator, {}),
    /* @__PURE__ */ (0, import_jsx_runtime76.jsxs)(ToolbarGroup, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(TextAlignButton, { align: "left" }),
      /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(TextAlignButton, { align: "center" }),
      /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(TextAlignButton, { align: "right" }),
      /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(TextAlignButton, { align: "justify" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(ToolbarSeparator, {}),
    /* @__PURE__ */ (0, import_jsx_runtime76.jsxs)(ToolbarGroup, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(HeadingDropdownMenu, { levels: [1, 2, 3, 4], portal: isMobile }),
      /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(
        ListDropdownMenu,
        {
          types: ["bulletList", "orderedList", "taskList"],
          portal: isMobile
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(BlockquoteButton, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(ToolbarGroup, { children: /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(TableDropdownMenu, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(ToolbarGroup, {}),
    /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(ToolbarSeparator, {}),
    /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(ToolbarGroup, { children: /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(ImageUploadButton, { text: "Add" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(Spacer, {}),
    isMobile && /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(ToolbarSeparator, {})
  ] });
};
var MobileToolbarContent = ({
  type,
  onBack
}) => /* @__PURE__ */ (0, import_jsx_runtime76.jsxs)(import_jsx_runtime76.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(ToolbarGroup, { children: /* @__PURE__ */ (0, import_jsx_runtime76.jsxs)(Button2, { "data-style": "ghost", onClick: onBack, children: [
    /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(ArrowLeftIcon, { className: "tiptap-button-icon" }),
    type === "highlighter" ? /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(HighlighterIcon, { className: "tiptap-button-icon" }) : /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(LinkIcon, { className: "tiptap-button-icon" })
  ] }) }),
  /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(ToolbarSeparator, {}),
  type === "highlighter" ? /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(ColorHighlightPopoverContent, {}) : /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(LinkContent, {})
] });
function SimpleEditor() {
  const { setEditorContent, debouncedSave } = useEditorBridge();
  const isMobile = useIsBreakpoint();
  const { height } = useWindowSize();
  const [mobileView, setMobileView] = (0, import_react92.useState)(
    "main"
  );
  const toolbarRef = (0, import_react92.useRef)(null);
  const editor = (0, import_react93.useEditor)({
    immediatelyRender: false,
    editorProps: {
      attributes: {
        autocomplete: "off",
        autocorrect: "off",
        autocapitalize: "off",
        "aria-label": "Main content area, start typing to enter text.",
        class: "simple-editor"
      }
    },
    extensions: [
      import_starter_kit.StarterKit.configure({
        horizontalRule: false,
        link: {
          openOnClick: false,
          enableClickSelection: true
        }
      }),
      HorizontalRule,
      index_default,
      index_default2,
      index_default3,
      import_extensions.Gapcursor,
      import_extension_text_style2.TextStyle,
      FontSizeStepper.configure({ step: 2, min: 8, defaultSize: 16 }),
      import_extension_text_style2.FontFamily.configure({
        types: ["textStyle"]
      }),
      import_extension_color.default.configure({ types: ["textStyle"] }),
      import_extension_highlight.Highlight.configure({ multicolor: true }),
      import_extension_table.TableKit.configure({
        table: { resizable: true }
      }),
      import_extension_text_style.TextStyleKit,
      import_extension_text_align.TextAlign.configure({ types: ["heading", "paragraph"] }),
      import_extension_list.TaskList,
      import_extension_list.TaskItem.configure({ nested: true }),
      import_extension_highlight.Highlight.configure({ multicolor: true }),
      import_extension_image.default,
      import_extensions2.Dropcursor,
      import_extension_typography.Typography,
      import_extension_superscript.Superscript,
      import_extension_subscript.Subscript,
      import_extensions.Selection,
      ImageUploadNode2.configure({
        accept: "image/*",
        maxSize: MAX_FILE_SIZE,
        limit: 3,
        upload: handleImageUpload,
        onError: (error) => console.error("Upload failed:", error)
      })
    ],
    content: "",
    onCreate: ({ editor: editor2 }) => {
      console.log("\u{1F7E2} Editor created");
      setEditorContent(editor2);
    },
    onUpdate: ({ editor: editor2 }) => {
      console.log("\u270F\uFE0F Editor updated - triggering debounced save");
      debouncedSave(editor2);
    }
  });
  (0, import_react92.useEffect)(() => {
    if (editor) {
      console.log("\u{1F527} Setting editor content in context");
      setEditorContent(editor);
    }
  }, [editor, setEditorContent]);
  const rect = useCursorVisibility({
    editor,
    overlayHeight: toolbarRef.current?.getBoundingClientRect().height ?? 0
  });
  (0, import_react92.useEffect)(() => {
    if (!isMobile && mobileView !== "main") {
      setMobileView("main");
    }
  }, [isMobile, mobileView]);
  (0, import_react92.useEffect)(() => {
    if (editor) {
      editor.commands.focus("start");
    }
  }, [editor]);
  (0, import_react92.useEffect)(() => {
    if (!window?.visualViewport) return;
    const toolbar = document.querySelector(
      ".tiptap-toolbar[data-variant='fixed']"
    );
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
  return /* @__PURE__ */ (0, import_jsx_runtime76.jsx)("div", { className: "simple-editor-wrapper", children: /* @__PURE__ */ (0, import_jsx_runtime76.jsxs)(import_react93.EditorContext.Provider, { value: { editor }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(
      Toolbar,
      {
        ref: toolbarRef,
        style: {
          ...isMobile ? {
            bottom: `calc(100% - ${height - rect.y}px)`
          } : {}
        },
        children: mobileView === "main" ? /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(
          MainToolbarContent,
          {
            onHighlighterClick: () => setMobileView("highlighter"),
            onLinkClick: () => setMobileView("link"),
            isMobile
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(
          MobileToolbarContent,
          {
            type: mobileView === "highlighter" ? "highlighter" : "link",
            onBack: () => setMobileView("main")
          }
        )
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(
      import_react93.EditorContent,
      {
        editor,
        role: "presentation",
        autoFocus: true,
        className: "simple-editor-content",
        children: editor && /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(BubbleMenuInline, {})
      }
    )
  ] }) });
}

// src/components/editor/editor.tsx
var import_jsx_runtime77 = require("react/jsx-runtime");
function Editor({ onChange, className, style }) {
  return /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("div", { className, style, children: /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(EditorShell, { children: /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(EditorLayout, { onChange, children: /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(SimpleEditor, {}) }) }) });
}

// src/hooks/use-scrolling.ts
var import_react94 = require("react");
function useScrolling(target, options = {}) {
  const { debounce: debounce2 = 150, fallbackToDocument = true } = options;
  const [isScrolling, setIsScrolling] = (0, import_react94.useState)(false);
  (0, import_react94.useEffect)(() => {
    const element = target && typeof Window !== "undefined" && target instanceof Window ? target : target?.current ?? window;
    const eventTarget = fallbackToDocument && element === window && typeof document !== "undefined" ? document : element;
    const on = (el, event, handler) => el.addEventListener(event, handler, true);
    const off = (el, event, handler) => el.removeEventListener(event, handler);
    let timeout;
    const supportsScrollEnd = element === window && "onscrollend" in window;
    const handleScroll = () => {
      if (!isScrolling) setIsScrolling(true);
      if (!supportsScrollEnd) {
        clearTimeout(timeout);
        timeout = setTimeout(() => setIsScrolling(false), debounce2);
      }
    };
    const handleScrollEnd = () => setIsScrolling(false);
    on(eventTarget, "scroll", handleScroll);
    if (supportsScrollEnd) {
      on(eventTarget, "scrollend", handleScrollEnd);
    }
    return () => {
      off(eventTarget, "scroll", handleScroll);
      if (supportsScrollEnd) {
        off(eventTarget, "scrollend", handleScrollEnd);
      }
      clearTimeout(timeout);
    };
  }, [target, debounce2, fallbackToDocument, isScrolling]);
  return isScrolling;
}

// src/lib/local-image.ts
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
function saveImageBase64(key, base64) {
  localStorage.setItem(key, base64);
}
function loadImageBase64(key) {
  return localStorage.getItem(key);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Editor,
  EditorBridgeProvider,
  FONT_OPTIONS,
  GRADIENT_ROWS_70,
  cn,
  fileToBase64,
  loadActiveTab,
  loadImageBase64,
  loadTabs,
  saveActiveTab,
  saveImageBase64,
  saveTabs,
  useBodyRect,
  useComposedRef,
  useCursorVisibility,
  useEditorBridge,
  useElementRect,
  useIsBreakpoint,
  useIsMobile,
  useMenuNavigation,
  useRefRect,
  useScrolling,
  useThrottledCallback,
  useTiptapEditor,
  useUnmount,
  useWindowSize
});
//# sourceMappingURL=index.js.map