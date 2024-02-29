"use client";

import { useMachine } from "@xstate/react";

import { myFirstMachine } from "@/machines/first-machine";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";

export const State = () => {
  const [state, send] = useMachine(myFirstMachine);

  return (
    <Card>
      <CardContent>
        <h1>State: {JSON.stringify(state.value)}</h1>
      </CardContent>
      <CardFooter className="justify-between gap-4">
        <Button onClick={() => send({ type: "MOUSE_ENTER" })}>
          Mouse Enter
        </Button>
        <Button onClick={() => send({ type: "MOUSE_LEAVE" })}>
          Mouse Leave
        </Button>
      </CardFooter>
    </Card>
  );
};
