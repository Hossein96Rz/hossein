"use client";

import { useLocale } from "next-intl";
import { ToastContainer } from "react-toastify";
import { useTheme } from "next-themes";

function ToastifyContainer() {
  const locale = useLocale();
  const { resolvedTheme } = useTheme();
  return (
    <ToastContainer
      position={locale === "fa" ? "bottom-left" : "bottom-right"}
      autoClose={5000}
      hideProgressBar={false}
      closeOnClick
      rtl={locale === "fa" ? true : false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={resolvedTheme}
    />
  );
}

export default ToastifyContainer;
