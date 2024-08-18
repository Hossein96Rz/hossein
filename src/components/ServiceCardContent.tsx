"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ReactNode } from "react";
import Modal from "../views/Modal";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface ServiceCardContentProps {
  title: string;
  icon: StaticImport;
}

function ServiceCardContent({ title, icon }: ServiceCardContentProps) {
  const t = useTranslations("Services");

  return (
    <div>
      <Image
        src={icon}
        height={50}
        width={50}
        alt={`an icon to indroduce ${title}`}
        className="mb-6 transition-all duration-300 group-hover:invert dark:invert"
      />
      <h3 className="mb-5 text-[20px] font-semibold text-[#1a1a1a] transition-all duration-300 group-hover:text-white dark:text-white">
        {title}
      </h3>
      <div className="relative text-nowrap text-lg text-[#7e7e7e] transition-all duration-300 group-hover:text-white dark:text-[#a9afc3]">
        {t("learnMore")}
        <span className="after:content-* absolute top-1/2 inline-block h-[2px] w-[10px] rounded-[50px] bg-[#7e7e7e] transition-all duration-700 before:absolute before:bottom-[-2px] before:right-0 before:h-[2px] before:w-[6px] before:-rotate-45 before:rounded-[50px] before:bg-[#7e7e7e] before:transition-all before:duration-700 after:absolute after:right-0 after:top-[-2px] after:h-[2px] after:w-[6px] after:rotate-45 after:rounded-[50px] after:bg-[#7e7e7e] after:transition-all after:duration-700 group-hover:w-[30px] group-hover:bg-white group-hover:before:bg-white group-hover:after:bg-white ltr:ml-4 rtl:mr-4 rtl:scale-x-[-1]" />
      </div>
    </div>
  );
}

export default ServiceCardContent;
