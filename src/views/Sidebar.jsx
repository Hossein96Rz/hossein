"use client";

import { useContext, useEffect, useRef } from "react";
import { LayoutContext } from "../contexts/layoutContext";
import classNames from "classnames";
import SideBarRow from "../components/SideBarRow";
import home from "public/icons/home.svg";
import about from "public/icons/about.svg";
import service from "public/icons/services.svg";
import portfolio from "public/icons/portfolio.svg";
import testimonial from "public/icons/testimonial.svg";
import contact from "public/icons/contact.svg";
import blog from "public/icons/blog.svg";
import Image from "next/image";
import avatar from "public/avatar/avatar.jpg";
import ToggleDarkMode from "../components/ToggleDarkMode";
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
        "fixed z-10 flex h-full w-[240px] -translate-x-full flex-col bg-white shadow-lg transition-all duration-700 ease-out sm:w-[280px] lg:w-[320px] xl:static xl:h-full xl:translate-x-0 xl:transition-none dark:bg-black",
        { "translate-x-0": sideBar },
      )}
    >
      <div className="flex min-h-[81px] items-center justify-between border-b-[1px] border-b-black p-4 text-3xl font-black text-slate-800 xl:min-h-28 dark:border-b-[#999] dark:text-white">
        <div>
          <span className="text-[#34495C] underline dark:text-[#557BA7]">
            {dictionary.name[0]}
          </span>
          {dictionary.name.slice(1)}
        </div>
        <ToggleDarkMode className="hidden xl:flex" />
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
      <div className="mt-auto flex h-[90px] gap-[13px] border-t-[1px] border-gray-400 p-4 sm:p-5 dark:border-[#34495e]">
        <div className="h-[50px] w-[50px]">
          <Image
            quality={20}
            alt="profile-photo"
            width={50}
            height={50}
            src={avatar}
            className="rounded-full border border-gray-400 dark:border-[#34495e]"
          />
        </div>
        <div>
          <span className="font-medium text-[#1A1A1A] dark:text-white">
            {dictionary.name}
          </span>
          <address className="text-xs not-italic text-[#7E7E7E]">
            <a href="mailto:webmaster@example.com">hossein96rz@gmail.com</a>
          </address>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
