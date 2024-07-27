"use client";

import { useContext, useEffect, useRef } from "react";
import { LayoutContext } from "../contexts/layoutContext";
import classNames from "classnames";
import SideBarRow from "../components/SideBarRow";
import home from "@/src/public/icons/home.svg";
import about from "@/src/public/icons/about.svg";
import service from "@/src/public/icons/services.svg";
import portfolio from "@/src/public/icons/portfolio.svg";
import testimonial from "@/src/public/icons/testimonial.svg";
import contact from "@/src/public/icons/contact.svg";
import blog from "@/src/public/icons/blog.svg";

function Sidebar({ dictionary }) {
  const { state, dispatch } = useContext(LayoutContext);
  const { sideBar } = state;

  const menuItems = [
    { title: dictionary.home, icon: home, route: "/" },
    { title: dictionary.about, icon: about, route: "/about" },
    { title: dictionary.service, icon: service, route: "/service" },
    { title: dictionary.portfolio, icon: portfolio, route: "/portfolio" },
    { title: dictionary.testimonial, icon: testimonial, route: "/testimonial" },
    { title: dictionary.blog, icon: blog, route: "/blog" },
    { title: dictionary.contact, icon: contact, route: "/contact" },
  ];

  return (
    <div
      className={classNames(
        "absolute top-0 z-10 h-full w-[320px] bg-white shadow-lg transition-all duration-700 ease-out dark:bg-black",
        { "-translate-x-full": !sideBar },
      )}
    >
      <div className="flex h-[81px] items-center border-b-[1px] border-b-black p-4 text-xl font-bold text-slate-800 dark:border-b-[#999] dark:text-white">
        {dictionary.name}
      </div>
      <ul className="px-5 pb-5 pt-9">
        {menuItems.map((item) => (
          <SideBarRow
            key={item.title}
            icon={item.icon}
            title={item.title}
            route={item.route}
          />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
