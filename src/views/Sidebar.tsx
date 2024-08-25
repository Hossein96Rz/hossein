"use client";

import { useContext, useEffect, useRef, useState } from "react";
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
import ToggleLanguage from "../components/ToggleLanguage";
import { useTranslations } from "next-intl";

function Sidebar() {
  const { state, dispatch } = useContext(LayoutContext);
  const { sideBar } = state;
  const [activeSection, setActiveSection] = useState("");
  const t = useTranslations("Sidebar");
  const menuItems = [
    { title: t("home"), icon: home, route: "#home" },
    { title: t("about"), icon: about, route: "#about" },
    { title: t("service"), icon: service, route: "#services" },
    // { title: t("portfolio"), icon: portfolio, route: "/portfolio" },
    // { title: t("testimonial"), icon: testimonial, route: "/testimonial" },
    // { title: t("blog"), icon: blog, route: "/blog" },
    { title: t("contact"), icon: contact, route: "#contact" },
  ];
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: window.innerWidth > 768 ? 0.4 : 0.1 },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    function outClickHandler(event: Event) {
      const target = event.target as HTMLElement;
      const sidebarEl = document.getElementById("sidebar")!;
      if (!sidebarEl.contains(target)) {
        dispatch({ type: "toggleSideBar" });
      }
    }
    if (sideBar && window.innerWidth < 1280) {
      document.addEventListener("click", outClickHandler);
    }
    return () => document.removeEventListener("click", outClickHandler);
  }, [sideBar]);

  return (
    <div
      className={classNames(
        "fixed z-10 flex h-full w-[240px] flex-col bg-white shadow-lg transition-all duration-700 ease-out sm:w-[280px] lg:w-[320px] xl:h-full xl:transition-colors ltr:-translate-x-full ltr:xl:translate-x-0 rtl:translate-x-full rtl:xl:translate-x-0 dark:bg-black",
        { "ltr:translate-x-0 rtl:!-translate-x-0": sideBar },
      )}
      id="sidebar"
    >
      <div className="flex min-h-[81px] items-center justify-between border-b-[1px] border-b-black p-4 text-3xl font-black text-slate-800 xl:min-h-28 xl:p-10 dark:border-b-[#999] dark:text-white">
        <div>
          <span className="text-[#34495C] underline dark:text-[#557BA7]">
            {t("name")[0]}
          </span>
          {t("name").slice(1)}
        </div>
        <div className="flex gap-2">
          <ToggleLanguage className="hidden text-base xl:block" />
          <ToggleDarkMode className="hidden xl:flex" />
        </div>
      </div>
      <ul className="px-5 pb-5 pt-9 xl:px-10 xl:pb-14 xl:pt-14">
        {menuItems.map((item) => (
          <SideBarRow
            key={item.title}
            icon={item.icon}
            title={item.title}
            route={item.route}
            isOnSight={
              item.route.includes(activeSection) && activeSection !== ""
            }
          />
        ))}
      </ul>
      <div className="dark:border-custom-dark mt-auto flex gap-[13px] border-t-[1px] border-gray-400 p-4 sm:p-5 xl:p-10">
        <div className="h-[50px] w-[50px]">
          <Image
            quality={20}
            alt="profile-photo"
            width={50}
            height={50}
            src={avatar}
            className="dark:border-custom-dark rounded-full border border-gray-400"
          />
        </div>
        <div>
          <span className="text-custom-text-dark font-medium dark:text-white">
            {t("name")}
          </span>
          <address className="text-custom-text-light text-xs not-italic">
            <a href="mailto:webmaster@example.com">hossein96rz@gmail.com</a>
          </address>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
