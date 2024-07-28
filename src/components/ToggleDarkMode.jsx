"use client";

import { useContext } from "react";
import { LayoutContext } from "../contexts/layoutContext";
import moon from "public/icons/moon.svg";
import sun from "public/icons/sun.svg";
import Image from "next/image";

function ToggleDarkMode() {
  const { state, dispatch } = useContext(LayoutContext);
  function toggleDarkMode() {
    dispatch({ type: "toggleDarkMode" });
    const isDarkModePreferd = localStorage.getItem("dark-mode");
    localStorage.setItem(
      "dark-mode",
      isDarkModePreferd === "true" ? "false" : "true",
    );
  }
  return (
    <label className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-gray-200 dark:bg-slate-500">
      <input
        type="checkbox"
        value={!state.isDark}
        hidden
        onClick={toggleDarkMode}
      />
      <Image
        src={!state.isDark ? moon : sun}
        alt="moon"
        width={24}
        height={24}
      />
    </label>
  );
}

export default ToggleDarkMode;
