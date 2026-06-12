"use client";

import { useEffect } from "react";

export function AosInitializer() {
  useEffect(() => {
    import("aos").then((AosModule) => {
      const AOS = AosModule.default;
      import("aos/dist/aos.css");
      AOS.init({
        duration: 1000,
        once: true,
      });
    });
  }, []);

  return null;
}
