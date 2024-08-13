"use client";

import { ReactTyped } from "react-typed";

interface ReactTypedWrapedProps {
  text: string;
}

function ReactTypedWraped({ text }: ReactTypedWrapedProps) {
  return <ReactTyped strings={[text]} typeSpeed={80} startDelay={300} />;
}

export default ReactTypedWraped;
