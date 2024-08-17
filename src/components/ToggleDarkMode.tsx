"use client";

import moon from "public/icons/moon.svg";
import sun from "public/icons/sun.svg";
import template from "public/icons/template.svg";
import Image from "next/image";
import cx from "classnames";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface ToggleDarkModeProps {
  className?: string;
}

function ToggleDarkMode({ className }: ToggleDarkModeProps) {
  const [icon, setIcon] = useState();
  const { theme, setTheme } = useTheme();
  function toggleDarkMode() {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  useEffect(() => {
    setIcon(theme === "light" ? moon : sun);
  }, [theme]);
  return (
    <label
      className={cx(
        "flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-gray-200 dark:bg-slate-500",
        className,
      )}
    >
      <input
        type="checkbox"
        checked={theme === "dark"}
        hidden
        onChange={toggleDarkMode}
      />
      <Image
        src={icon || template}
        alt="moon or sun image"
        width={24}
        height={24}
        className={cx({ "dark:invert-[2]": !icon })}
      />
    </label>
  );
}

export default ToggleDarkMode;
