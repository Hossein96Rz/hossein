"use client";

import { useState } from "react";
import Modal from "../views/Modal";
import SeeMoreModalContent from "./SeeMoreModalContent";
import { useTranslations } from "next-intl";
import Button from "./Button";

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
      <Button onClick={seeMoreHandler}>{t("seeMore")}</Button>
    </>
  );
}

export default SeeMore;
