"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";

function Modal({ children, modal, toggle }) {
  const ModalNode = (
    <div id="portal">
      <div className="relative top-1/2 inline-block -translate-y-1/2 rounded-md bg-white px-3 pt-8 ltr:left-1/2 ltr:-translate-x-1/2 rtl:right-1/2 rtl:translate-x-1/2">
        <div
          className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-black"
          onClick={() => toggle()}
        >
          X
        </div>
        {children}
      </div>
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

  return modal && createPortal(ModalNode, document.body);
}

export default Modal;
