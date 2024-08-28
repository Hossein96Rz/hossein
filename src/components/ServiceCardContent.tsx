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
      <h3 className="text-custom-text-dark mb-5 text-[20px] font-semibold transition-all duration-300 group-hover:text-white dark:text-white">
        {title}
      </h3>
      <div className="text-custom-text-light dark:text-custom-text-light-dark relative text-nowrap text-lg transition-all duration-300 group-hover:text-white">
        {t("learnMore")}
        <span className="after:content-* bg-custom-text-light before:bg-custom-text-light after:bg-custom-text-light absolute top-1/2 inline-block h-[2px] w-[10px] rounded-[50px] transition-all duration-700 before:absolute before:bottom-[-2px] before:right-0 before:h-[2px] before:w-[6px] before:-rotate-45 before:rounded-[50px] before:transition-all before:duration-700 after:absolute after:right-0 after:top-[-2px] after:h-[2px] after:w-[6px] after:rotate-45 after:rounded-[50px] after:transition-all after:duration-700 group-hover:w-[30px] group-hover:bg-white group-hover:before:bg-white group-hover:after:bg-white ltr:ml-4 rtl:mr-4 rtl:scale-x-[-1]" />
      </div>
    </div>
  );
}

export default ServiceCardContent;
