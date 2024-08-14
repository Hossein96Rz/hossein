import { ReactNode } from "react";

interface InformationRowProps {
  title: string;
  children: ReactNode;
}

function InformationRow({ title, children }: InformationRowProps) {
  return (
    <div className="pt-7">
      <h3 className="mb-9 inline-block border-b-2 border-dashed border-[#ddd] pb-2 text-2xl font-semibold text-[#1a1a1a] dark:border-white dark:text-white">
        {title}
      </h3>
      {children}
    </div>
  );
}

export default InformationRow;
