"use client";

import { Letters } from "@kumailnanji/letters";

export function JainilParekhSignature() {
  return (
    <Letters
      text="jainil parekh"
      autoPlay
      loop
      loopPauseMs={600}
      animation={{ type: "tween", duration: 2.8, ease: "easeInOut" }}
      strokeWidth={3}
      className="h-16 w-auto"
    />
  );
}
