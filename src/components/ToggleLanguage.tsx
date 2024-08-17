import classNames from "classnames";
import { useContext } from "react";
import { LayoutContext } from "../contexts/layoutContext";
import { getLocale } from "next-intl/server";

interface ToggleLanguageProps {
  className?: string;
}

async function ToggleLanguage({ className }: ToggleLanguageProps) {
  const language = await getLocale();
  return (
    <a href={language === "fa" ? "/en" : "/fa"}>
      <div
        className={classNames(
          "relative h-11 w-11 cursor-pointer rounded-full bg-gray-200 dark:bg-slate-500",
          className,
        )}
      >
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pt-1">
          {language === "fa" ? "EN" : "فا"}
        </span>
      </div>
    </a>
  );
}

export default ToggleLanguage;
