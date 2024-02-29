import { createMachine } from "xstate";

export const myFirstMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAOnwHsAXACXIDcwAnSAYgFkB5AVQGUBRAPp8AcgBU+AJQDaABgC6iUAAdysXJVzl8ikAA9EANgDMJABwAWAEwBWSwE57B0wHZrAGhABPRAEZLBkjsDOxlnGXMjc2swox8AXziPNCw8QlJseiZWTl5BABk+AEEANT5ZBSQQFTUNLR19BANrEibrGXtHF3cvRGcA82DQ8MjomViExJAKCDgdZJwCYh1q9U1tSoaAWj9TEja-SyHYmw9vBG2fEjGZBztrJqsg01MEpIwFtLIqWgZmCGXVKs6htEJtTDI9jIDkc-N0zqZLHtbOYxn1nCEjAZzK8QPNUsQSBlfpAATU1vVEJYjM5AuYUXYfOinK5TohTM0ZMjUQZ0WMsRM4kA */
  initial: "notHovered",
  states: {
    notHovered: {
      on: {
        MOUSE_ENTER: {
          target: "hovered",
        },
      },
    },
    hovered: {
      on: {
        MOUSE_LEAVE: {
          target: "notHovered",
        },
      },
    },
  },
});
