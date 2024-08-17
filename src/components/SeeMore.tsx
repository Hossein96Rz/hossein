"use client";

import { useState } from "react";
import Modal from "../views/Modal";
import SeeMoreModalContent from "./SeeMoreModalContent";
import { useTranslations } from "next-intl";

function SeeMore() {
  const t = useTranslations("About");
  const [modal, toggleModal] = useState(false);
  function seeMoreHandler() {
    toggleModal((prev) => !prev);
  }
  return (
    <>
      <Modal modal={modal} toggle={toggleModal}>
        <SeeMoreModalContent />
      </Modal>
      <button
        onClick={seeMoreHandler}
        className="mt-2 rounded-md border-[2px] border-[#000] px-5 py-3 transition-all duration-500 hover:bg-[#000] hover:text-white dark:bg-white dark:text-black dark:hover:border-white"
      >
        {t("seeMore")}
      </button>
    </>
  );
}

export default SeeMore;
