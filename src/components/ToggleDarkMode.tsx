"use client";

import moon from "public/icons/moon.svg";
import sun from "public/icons/sun.svg";
import template from "public/icons/unknown-darkmode.svg";
import Image from "next/image";
import cx from "classnames";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface ToggleDarkModeProps {
  className?: string;
}

function ToggleDarkMode({ className }: ToggleDarkModeProps) {
  const [icon, setIcon] = useState();
  const { resolvedTheme, theme, setTheme } = useTheme();
  function toggleDarkMode() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }
  useEffect(() => {
    setIcon(resolvedTheme === "light" ? moon : sun);
  }, [resolvedTheme]);
  return (
    <label
      className={cx(
        "flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-gray-200 dark:bg-slate-500",
        className,
      )}
    >
      <input
        type="checkbox"
        checked={resolvedTheme === "dark"}
        hidden
        onChange={toggleDarkMode}
      />
      <Image
        src={theme === "system" ? template : icon || template}
        alt="moon or sun image"
        width={24}
        height={24}
        className={cx({
          invert: theme === "system" && resolvedTheme === "dark",
        })}
      />
    </label>
  );
}

export default ToggleDarkMode;
