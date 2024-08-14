"use client";

import { useState } from "react";
import Modal from "../views/Modal";
import { Dictionary } from "../types/dictionary";
import Image from "next/image";
import SeeMoreModalContent from "./SeeMoreModalContent";
interface SeeMoreProps {
  dictionary: Dictionary;
}
function SeeMore({ dictionary }: SeeMoreProps) {
  const [modal, toggleModal] = useState(false);
  function seeMoreHandler() {
    toggleModal((prev) => !prev);
  }
  return (
    <>
      <Modal modal={modal} toggle={toggleModal}>
        <SeeMoreModalContent dictionary={dictionary} />
      </Modal>
      <button
        onClick={seeMoreHandler}
        className="mt-2 rounded-md border-[2px] border-[#000] px-5 py-3 transition-all duration-500 hover:bg-[#000] hover:text-white dark:bg-white dark:text-black dark:hover:border-white"
      >
        {dictionary.seeMore}
      </button>
    </>
  );
}

export default SeeMore;
