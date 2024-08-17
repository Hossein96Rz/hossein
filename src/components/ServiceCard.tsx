"use client";

import { useEffect, useRef, useState } from "react";

function ServiceCard() {
  const [offset, setOffset] = useState(0);
  const [isHoverd, setIsHovered] = useState(false);
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function getPostionHandler(e: MouseEvent) {
      const rect = elRef.current!.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const normalizedPosition = (mouseX / rect.width) * 2 - 1;
      const result = normalizedPosition * 20;
      setOffset(result);
    }
    elRef.current?.addEventListener("mousemove", getPostionHandler);
    return () =>
      elRef.current?.removeEventListener("mousemove", getPostionHandler);
  }, []);

  return (
    <li
      data-aos="fade-right"
      data-aos-duration="1200"
      className="mb-8 h-full w-full rounded-md md:w-1/2 md:pl-8 lg:w-1/4"
    >
      <div
        style={{
          transform: `rotateX(${isHoverd ? 20 : 0}deg) rotateY(${offset}deg) perspective(1000px) scale3d(1, 1, 1)`,
        }}
        ref={elRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="h-full w-full bg-white px-10 py-12 transition-all duration-500 will-change-transform"
      >
        CARD
      </div>
    </li>
  );
}

export default ServiceCard;
