'use client'

import AOS from "aos";
import { useEffect } from "react";
function AosInitator() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
}

export default AosInitator;
