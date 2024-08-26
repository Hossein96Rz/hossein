"use client";

import { useLocale } from "next-intl";
import { ToastContainer } from "react-toastify";
import { useTheme } from "next-themes";

function ToastifyContainer() {
  const locale = useLocale();
  const { theme } = useTheme();
  console.log(theme);
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
      theme={theme === "system" ? "colored" : theme}
    />
  );
}

export default ToastifyContainer;
