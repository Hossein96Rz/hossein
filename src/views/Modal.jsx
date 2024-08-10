"use client";

import classNames from "classnames";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

function Modal({ children, modal, toggle }) {
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
            "relative top-1/2 inline-block -translate-y-1/2 rounded-md bg-white px-3 pt-8 transition-all ltr:left-1/2 ltr:-translate-x-1/2 rtl:right-1/2 rtl:translate-x-1/2 dark:bg-[#12161f]",
            {
              "opacity-0": !modal,
              "opacity-100": modal,
            },
          )}
        >
          <div
            className="absolute right-2 top-2 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border-2 border-black dark:border-white dark:text-white"
            onClick={() => toggle()}
          >
            X
          </div>
          {children}
        </div>
      )}
    </div>
  );

  useEffect(() => {
    if (!modal) return;
    function outSideClickHandler(e) {
      if (e.target?.id !== "portal") return;
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
