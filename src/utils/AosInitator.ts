"use client";

import { useEffect } from "react";

export function AosInitializer() {
  useEffect(() => {
    let cancelled = false;

    const initAos = () => {
      if (cancelled) return;
      import("aos").then((AosModule) => {
        if (cancelled) return;
        const AOS = AosModule.default;
        import("aos/dist/aos.css");
        AOS.init({
          duration: 1000,
          once: true,
        });
      });
    };

    // Double rAF ensures React hydration is complete and the browser
    // has painted the server-rendered HTML before AOS adds its classes
    requestAnimationFrame(() => {
      requestAnimationFrame(initAos);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
