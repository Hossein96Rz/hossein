"use client";

import { useContext } from "react";
import { LayoutContext } from "../contexts/layoutContext";
import BurgerMenuIcon from "./BurgerMenuIcon";

function ToggleSideBar() {
  const { state, dispatch } = useContext(LayoutContext);

  function toggleSideBarHandler() {
    dispatch({ type: "toggleSideBar" });
  }
  return (
    <label className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-black dark:bg-white">
      <input
        className="h-full w-full"
        type="checkbox"
        checked={!state.sideBar}
        readOnly
        hidden
      />
      <BurgerMenuIcon isOpen={state.sideBar} toggle={toggleSideBarHandler} />
    </label>
  );
}

export default ToggleSideBar;
