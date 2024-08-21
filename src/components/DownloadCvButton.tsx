"use client";

import classNames from "classnames";
import { useTranslations } from "next-intl";
import { toast } from "react-toastify";

interface DownloadCvButtonProps {
  className?: string;
}
function DownloadCvButton({ className }: DownloadCvButtonProps) {
  const t = useTranslations("CvButton");
  async function downloadCvHandler() {
    toast(t("downloading"), { autoClose: false });
    try {
      const res = await fetch("/api/cv");
      if (res.ok) {
        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "hossein-rezaei-cv.pdf";
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
        toast.dismiss();
        toast.success(t("downloadSuccessful"));
      } else {
        console.error("Failed to download file");
        toast.error("Failed to download file");
      }
    } catch (e) {
      toast.error("Failed to download file");
      console.error(e);
    }
  }
  return (
    <button
      onClick={downloadCvHandler}
      className={classNames(
        "mt-6 rounded-full border-2 border-[#7e7e7e] px-9 py-2 text-lg font-medium text-[#1a1a1a] transition-all duration-200 ease-linear hover:-translate-y-1 hover:border-black hover:bg-black hover:text-white dark:border-[#a9afc3] dark:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-black",
        className,
      )}
    >
      {t("downloadCv")}
    </button>
  );
}

export default DownloadCvButton;
