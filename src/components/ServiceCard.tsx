"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import ServiceCardContent from "./ServiceCardContent";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Modal from "../views/Modal";

interface ServiceCardProps {
  children: ReactNode;
  fadeInDelay?: number;
  title: string;
  icon: StaticImport;
}

function ServiceCard({ children, fadeInDelay, title, icon }: ServiceCardProps) {
  const elRef = useRef<HTMLDivElement>(null);
  const animationFrame = useRef<number | null>(null);
  const [modal, setModal] = useState(false);

  function toggleHandler(e: React.MouseEvent) {
    setModal((prev) => !prev);
  }

  function handleMove(e: MouseEvent) {
    if (!elRef.current) return;

    const width = elRef.current.clientWidth;
    const xVal = e.layerX;
    const yRotation = -20 * ((xVal - width / 2) / width);
    const xRotation = 20;

    const transformString =
      "perspective(1000px) scale3d(1.1, 1.1, 1.1) rotateX(" +
      xRotation +
      "deg) rotateY(" +
      yRotation +
      "deg)";

    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current);
    }
    animationFrame.current = requestAnimationFrame(() => {
      if (elRef.current) {
        elRef.current.style.transform = transformString;
      }
    });
  }

  function mouseLeaveHandler() {
    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current);
    }
    if (elRef.current) {
      elRef.current.style.transform = "";
    }
  }

  useEffect(() => {
    const currentEl = elRef.current;

    if (currentEl) {
      currentEl.addEventListener("mousemove", handleMove);
      currentEl.addEventListener("mouseleave", mouseLeaveHandler);
    }

    return () => {
      if (currentEl) {
        currentEl.removeEventListener("mousemove", handleMove);
        currentEl.removeEventListener("mouseleave", mouseLeaveHandler);
      }
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  return (
    <>
      <Modal modal={modal} toggle={toggleHandler}>
        {children}
      </Modal>
      <li
        data-aos="fade-right"
        data-aos-delay={fadeInDelay}
        data-aos-duration="1200"
        className="mb-8 w-full cursor-pointer md:w-1/2 md:pl-8 lg:min-h-[310px] lg:w-1/4"
        onClick={toggleHandler}
      >
        <div
          ref={elRef}
          className="group relative h-full w-full rounded-md bg-white transition-all duration-75 will-change-transform dark:bg-black"
        >
          <div className="absolute left-0 top-0 h-full w-full scale-95 rounded-md bg-black opacity-0 transition-all duration-700 group-hover:scale-[1.01] group-hover:!opacity-100" />
          <div className="bg-transparent px-10 py-12 transition-all duration-700 group-hover:translate-x-0 ltr:-translate-x-4 rtl:translate-x-4">
            <ServiceCardContent icon={icon} title={title} />
          </div>
        </div>
      </li>
    </>
  );
}

export default ServiceCard;
