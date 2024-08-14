"use client";

import classNames from "classnames";
import Image from "next/image";
import React, { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import crossIcon from "@/public/icons/cross.svg";

interface ModalProps {
  children: ReactNode;
  modal: boolean;
  toggle: Function;
}

function Modal({ children, modal, toggle }: ModalProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const ModalNode = (
    <div
      id="portal"
      className={classNames("transition-all duration-300", {
        "z-[99999] opacity-100": modal,
        "z-[-1] opacity-0": !modal,
      })}
    >
      {modal && (
        <div
          className={classNames(
            "relative top-1/2 inline-block h-[75dvh] max-w-[90%] -translate-y-1/2 rounded-md bg-white px-5 transition-all sm:px-12 lg:max-w-5xl ltr:left-1/2 ltr:-translate-x-1/2 rtl:right-1/2 rtl:translate-x-1/2 dark:bg-[#12161f]",
            {
              "opacity-0": !modal,
              "opacity-100": modal,
            },
          )}
        >
          <div
            className="absolute -right-2 -top-10 flex cursor-pointer items-center justify-center rounded-full sm:-top-12 xl:-right-14 xl:-top-6 dark:text-white"
            onClick={() => toggle()}
          >
            <Image
              src={crossIcon}
              className="h-8 w-8 invert-[1] sm:h-11 sm:w-11"
              alt="an x icon as close button"
            />
          </div>
          {children}
        </div>
      )}
    </div>
  );

  useEffect(() => {
    if (!modal) return;
    function outSideClickHandler(e: Event) {
      const target = e.target as HTMLElement;
      if (target?.id !== "portal") return;
      toggle();
    }

    document.addEventListener("click", outSideClickHandler);

    return () => document.removeEventListener("click", outSideClickHandler);
  }, [modal]);

  if (!mounted) {
    return null;
  }
  return createPortal(ModalNode, document.body);
}

export default Modal;
