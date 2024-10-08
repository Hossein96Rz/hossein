"use client";

import React from "react";
import classNames from "classnames";
interface BurgerMenuIconProps {
  isOpen: boolean;
  toggle: React.MouseEventHandler;
}
const BurgerMenuIcon = ({ isOpen, toggle }: BurgerMenuIconProps) => {
  return (
    <div className="relative h-full w-full rounded-full" onClick={toggle}>
      <button
        aria-label="sidebar button"
        className="relative z-10 flex h-full w-full flex-col items-center justify-center space-y-1 focus:outline-none"
      >
        <div
          className={classNames(
            "h-0.5 w-6 transform bg-white transition-transform duration-300 ease-in-out dark:bg-black",
            {
              "translate-y-1.5 rotate-45": isOpen,
            },
          )}
        ></div>
        <div
          className={classNames(
            "h-0.5 w-6 bg-white transition-transform duration-300 ease-in-out dark:bg-black",
            {
              "translate-x-[50%] scale-x-0": isOpen,
            },
          )}
        ></div>
        <div
          className={classNames(
            "h-0.5 w-6 transform bg-white transition-transform duration-300 ease-in-out dark:bg-black",
            {
              "-translate-y-1.5 -rotate-45": isOpen,
            },
          )}
        ></div>
      </button>
    </div>
  );
};

export default BurgerMenuIcon;
