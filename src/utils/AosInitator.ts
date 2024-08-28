"use client";

import AOS from "aos";
import { ReactNode, useEffect } from "react";

function AosInitator(): ReactNode {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return;
}

export default AosInitator;
