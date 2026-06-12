"use client";

import { useEffect, useState } from "react";

export function useAos() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    animation: string,
    delay?: number,
    duration?: number,
    offset?: number,
  ) =>
    ready
      ? {
          "data-aos": animation,
          ...(delay != null ? { "data-aos-delay": String(delay) } : {}),
          ...(duration != null ? { "data-aos-duration": String(duration) } : {}),
          ...(offset != null ? { "data-aos-offset": String(offset) } : {}),
        }
      : {};
}
