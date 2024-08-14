import luggageIcon from "@/public/icons/luggage.svg";
import Image from "next/image";

interface TimelineProps {
  dateFrom: string;
  dateTo: string;
  title: string;
  location: string;
  desc: string;
}

function Timeline({ dateFrom, dateTo, title, location, desc }: TimelineProps) {
  return (
    <li className="after:content-* z relative mb-12 after:absolute after:bottom-0 after:top-0 after:border-l-[1px] ltr:pl-14 ltr:pr-5 ltr:after:left-5 rtl:pl-5 rtl:pr-14 rtl:after:right-5">
      <div className="absolute top-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border-[#ddd] bg-[#34495e] ltr:left-0 rtl:right-0">
        <Image
          alt="A luggage"
          src={luggageIcon}
          height={20}
          width={20}
          className="invert-[1]"
        />
      </div>
      <span className="mb-3 inline-block rounded-full bg-[#eee] px-4 py-2 text-xs font-semibold text-[#333]">
        {dateFrom} - {dateTo}
      </span>
      <h5 className="mb-3 mt-2 text-lg font-semibold text-[#34495e]">
        {title} - <span className="text-base opacity-80">{location}</span>
      </h5>
      <p className="break-words text-base font-normal text-[#7e7e7e]">{desc}</p>
    </li>
  );
}

export default Timeline;
