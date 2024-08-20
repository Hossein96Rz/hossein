"use client";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface ServiceModalContentProps {
  image: StaticImport;
  title: string;
  text: string;
}

function ServiceModalContent({ image, title, text }: ServiceModalContentProps) {
  return (
    <div className="h-full overflow-auto p-4 lg:p-12">
      <Image
        placeholder="blur"
        src={image}
        alt="An ai generated image introduces the dynamic web applications"
        className="mb-5 max-h-[240px] rounded-md object-cover sm:max-h-[420px]"
        loading="lazy"
      />
      <h3 className="mb-4 text-xl font-bold text-[#0f172a] dark:text-white">
        {title}
      </h3>
      <p className="mb-7">{text}</p>
    </div>
  );
}

export default ServiceModalContent;
