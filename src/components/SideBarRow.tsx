"use client";
import CustomIcon from "./CustomIcon";
import classNames from "classnames";
import { useContext } from "react";
import { LayoutContext } from "../contexts/layoutContext";
import { useRouter } from "next/navigation";

interface SideBarRowProps {
  icon: SVGElement;
  title: string;
  route: string;
  isOnSight: boolean;
}

function SideBarRow({ icon, title, route, isOnSight }: SideBarRowProps) {
  const { dispatch } = useContext(LayoutContext);
  const router = useRouter();

  function linkClickHandler() {
    dispatch({ type: "toggleSideBar" });
    router.push(route);
  }

  return (
    <li
      onClick={linkClickHandler}
      className={classNames(
        "relative mb-2 flex h-10 cursor-pointer items-center gap-3 rounded-md px-4 py-1 text-sm font-medium text-gray-700 transition-transform after:absolute after:left-0 after:top-0 after:z-0 after:h-full after:w-full after:scale-x-0 after:rounded-md after:bg-gray-200 after:transition-all after:duration-300 hover:after:scale-x-100 xl:mb-5 xl:py-4 xl:text-base ltr:after:origin-left rtl:after:origin-right dark:text-gray-100 dark:after:bg-gray-800",
        { "after:scale-x-100": isOnSight },
      )}
    >
      <CustomIcon
        size={20}
        src={icon}
        alt={"icon of sidebar button of " + title}
        className="z-10 invert-[.3] dark:invert"
      />
      <span className="z-10">{title}</span>
    </li>
  );
}

export default SideBarRow;
