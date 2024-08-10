"use client";

function DownloadCvButton({ dictionary }) {
  async function downloadCvHandler() {
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
      } else {
        console.error("Failed to download file");
      }
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <button
      onClick={downloadCvHandler}
      className="mt-6 rounded-full border-2 border-[#7e7e7e] px-9 py-2 text-lg font-medium text-[#1a1a1a] transition-all duration-200 ease-linear hover:-translate-y-1 hover:border-black hover:bg-black hover:text-white dark:border-[#a9afc3] dark:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-black"
    >
      {dictionary.downloadCv}
    </button>
  );
}

export default DownloadCvButton;
