import { assertEvent, setup } from "xstate";

export const todosMachine = setup({
  types: {} as {
    context: {};
    events:
      | { type: "LOAD_SUCCESS"; todos?: string[] }
      | { type: "LOAD_FAILED"; error?: string };
  },
  actions: {
    log: (context, event) => {
      console.table(context);
      // TODO: Add your action here
    },
  },
}).createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QBUD2FUAICyBDAbgMYAWAlgHZgB0AMqrhBVJmhrAMQ0DyAggCIB9AMoBVAMJiAokKEBtAAwBdRKAAOqWKQAupVORUgAHogDsJqgA4r8gGwBGAKwAmAMwAWFyYcAaEAE9EAFo7FwBOKgdQlxsHCzc3EycYmycAX1TfViw8IjJKWnpGcmYsjm5+AQAxHgBJGkk+BWUkEHVNHT0DYwRgmxsqUISXCxMbUIcXOycffyCXSycE0ItYsLjPB3SMkHJ0OAMsnAISCjADNu1dfRbuwKc7czs7UKSk8cnp3wCepydzeSiMTiCSSDhS6Uy6Gyxzy1DoDCYLCh8BaFw611AtzsYyoTxeKTGEymM2+wTCEUBsXiiWSaW2hxyJ3ypUw8IgkHOGkunRuiCsuLcsRMbnkrg8Xi+cwWSxWFjW4s29KhR1ypwKDEwlVwpAANhzUVz0V0go5zC53HZbPEiZ9ZggQvIqG4Hk55LFLQ43DYrFtUkA */
  initial: "Loading Todos",
  type: "parallel",

  states: {
    "Loading Todos": {
      entry: ({ event }) => {
        assertEvent(event, "LOAD_SUCCESS");
        console.log("Todos loaded!", event.todos || []);
      },
      on: {
        LOAD_FAILED: { target: "Load Failed" },
        // ! The following line is commented out to prevent a type error
        // @ts-expect-error
        LOAD_SUCCESS: { target: "Todos Loaded", actions: ["log"] },
      },
    },

    "Todos Loaded": {},
    "Load Failed": {},
  },

  id: "Todo Machine",
});
