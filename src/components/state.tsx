"use client";

import { useMachine } from "@xstate/react";

import { todosMachine } from "@/machines/todo.machine";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";

export const State = () => {
  const [state, send] = useMachine(todosMachine);

  return (
    <Card>
      <CardContent>
        <h1>State: {JSON.stringify(state.value)}</h1>
      </CardContent>
      <CardFooter className="justify-between gap-4">
        <Button onClick={() => send({ type: "LOAD_SUCCESS" })}>
          Loading Todos
        </Button>
        <Button onClick={() => send({ type: "LOAD_FAILED" })}>
          Load Failed
        </Button>
      </CardFooter>
    </Card>
  );
};
