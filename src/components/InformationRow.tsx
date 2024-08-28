import classNames from "classnames";
import { ReactNode } from "react";

interface InformationRowProps {
  title: string;
  children: ReactNode;
  className?: string;
}

function InformationRow({ title, children, className }: InformationRowProps) {
  return (
    <div className={classNames("pt-7", className)}>
      <h3 className="text-custom-text-dark mb-9 inline-block border-b-2 border-dashed border-[#ddd] pb-2 text-2xl font-semibold dark:border-white dark:text-white">
        {title}
      </h3>
      {children}
    </div>
  );
}

export default InformationRow;
