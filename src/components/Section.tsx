import classNames from "classnames";
import { ReactNode } from "react";

interface SectionProps {
  children?: ReactNode;
  title: string;
  id: string;
  className?: string;
}

function Section({ children, title, id, className }: SectionProps) {
  return (
    <section
      className={classNames("overflow-hidden px-5 pb-36 pt-28", className)}
      id={id}
    >
      <div className="mx-auto max-w-screen-2xl">
        <h3 className=" text-4xl font-bold text-[#1A1A1A] md:text-5xl dark:text-white">
          {title}
        </h3>
        {children}
      </div>
    </section>
  );
}

export default Section;
