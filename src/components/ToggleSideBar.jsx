"use client";

import { useContext } from "react";
import { LayoutContext } from "../contexts/layoutContext";
import BurgerMenuIcon from "./BurgerMenuIcon";

function ToggleSideBar() {
  const { state, dispatch } = useContext(LayoutContext);

  function toggleSideBarHandler() {
    dispatch({ type: "toggleSideBar" });
    const isDarkModePreferd = localStorage.getItem("dark-mode");
    localStorage.setItem(
      "dark-mode",
      isDarkModePreferd === "true" ? "false" : "true",
    );
  }
  return (
    <label className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-black dark:bg-white">
      <input
        className="h-full w-full"
        type="checkbox"
        value={!state.sideBar}
        hidden
      />
      <BurgerMenuIcon isOpen={state.sideBar} toggle={toggleSideBarHandler} />
    </label>
  );
}

export default ToggleSideBar;
