"use client";

import { getTranslations } from "next-intl/server";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { ReactNode, useState, useEffect } from "react";
import { useTranslations } from "next-intl";

interface ContactCardProps {
  icon: StaticImport;
  title: string;
  children: ReactNode;
}

function ContactCard({ icon, title, children }: ContactCardProps) {
  const t = useTranslations("Contact");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  const aosAttrs = ready ? { "data-aos": "fade-right" } : {};

  return (
    <div
      {...aosAttrs}
      className="mb-7 md:basis-1/2 lg:basis-1/3 ltr:md:pl-7 rtl:md:pr-7"
    >
      <div className="flex rounded-md bg-[#F5F8FC] p-5 ltr:pr-1 rtl:pl-1 dark:bg-[#191C26]">
        <div className="bg-custom-dark flex h-14 w-14 items-center justify-center rounded-full">
          <Image
            src={icon}
            className="invert"
            alt="email icon"
            width={25}
            height={25}
          />
        </div>
        <div className="grow ltr:pl-4 rtl:pr-4">
          <h3 className="text-custom-text-dark mb-1 text-xl font-medium dark:text-white">
            {title}
          </h3>
          {children}
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
