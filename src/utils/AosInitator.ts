"use client";

import AOS from "aos";
import { ReactNode, useEffect } from "react";
interface AosInitatorProps {
  children: ReactNode;
}
function AosInitator({ children }: AosInitatorProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return children;
}

export default AosInitator;
