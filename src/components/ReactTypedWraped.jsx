"use client";

import { ReactTyped } from "react-typed";

function ReactTypedWraped({text}) {
  return (
    <ReactTyped
      strings={[text]}
      typeSpeed={80}
      startDelay={300}
    />
  );
}

export default ReactTypedWraped;
