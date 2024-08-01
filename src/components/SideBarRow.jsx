"use client";
import Link from "next/link";
import CustomIcon from "./CustomIcon";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { useContext } from "react";
import { LayoutContext } from "../contexts/layoutContext";

function SideBarRow({ icon, title, route, isOnSight }) {
  const { state, dispatch } = useContext(LayoutContext);
  function linkClickHandler() {
    dispatch({ type: "toggleSideBar" });
  }

  return (
    <a href={route} onClick={linkClickHandler}>
      <li
        className={classNames(
          "relative mb-2 flex h-10 cursor-pointer items-center gap-3 rounded-md px-4 py-1 text-sm font-medium text-gray-700 transition-transform after:absolute after:left-0 after:top-0 after:z-0 after:h-full after:w-full after:origin-left after:scale-x-0 after:rounded-md after:bg-gray-200 after:transition-all after:duration-300 hover:after:scale-x-100 dark:text-gray-100 dark:after:bg-gray-800",
          { "after:scale-x-100": isOnSight },
        )}
      >
        <CustomIcon
          size={18}
          src={icon}
          alt={title}
          className="z-10 invert-[.3] dark:invert"
        />
        <span className="z-10">{title}</span>
      </li>
    </a>
  );
}

export default SideBarRow;
