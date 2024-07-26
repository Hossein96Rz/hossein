"use client";

import { useContext } from "react";
import { LayoutContext } from "../contexts/layoutContext";

function ToggleDarkMode() {
  const state = useContext(LayoutContext);
  console.log(state);
  //   function toggleDarkMode() {
  //     dispatch({ type: "toggleDarkMode" });
  //   }
  return (
    <label className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-200">
      <input
        type="checkbox"
        // value={state.isDark}
        hidden
        // onClick={toggleDarkMode}
      />
    </label>
  );
}

export default ToggleDarkMode;
