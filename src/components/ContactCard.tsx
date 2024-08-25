import { getTranslations } from "next-intl/server";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { ReactNode } from "react";

interface ContactCardProps {
  icon: StaticImport;
  title: string;
  children: ReactNode;
}

async function ContactCard({ icon, title, children }: ContactCardProps) {

  return (
    <div
      data-aos="fade-right"
      className="mb-7 md:basis-1/2 lg:basis-1/3 ltr:md:pl-7 rtl:md:pr-7"
    >
      <div className="flex rounded-md bg-[#F5F8FC] p-5 ltr:pr-1 rtl:pl-1 dark:bg-[#191C26]">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#34495e]">
          <Image
            src={icon}
            className="invert"
            alt="email icon"
            width={25}
            height={25}
          />
        </div>
        <div className="grow ltr:pl-4 rtl:pr-4">
          <h3 className="mb-1 text-xl font-medium text-[#1a1a1a] dark:text-white">
            {title}
          </h3>
          {children}
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
