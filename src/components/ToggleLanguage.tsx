import classNames from "classnames";
import { useLocale } from "next-intl";

interface ToggleLanguageProps {
  className?: string;
}

function ToggleLanguage({ className }: ToggleLanguageProps) {
  const language = useLocale();
  return (
    <a
      href={language === "fa" ? "/en" : "/fa"}
      aria-label="language toggle button"
    >
      <div
        className={classNames(
          "relative h-11 w-11 cursor-pointer rounded-full bg-gray-200 dark:bg-slate-500",
          className,
        )}
      >
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pt-1 text-black dark:text-white">
          {language === "fa" ? "EN" : "فا"}
        </span>
      </div>
    </a>
  );
}

export default ToggleLanguage;
