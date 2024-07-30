import Header from "@/src/views/Header";
import Sidebar from "@/src/views/Sidebar";
import { getDictionary } from "@/src/dictionaries";
import LangProvider from "@/src/components/LangProvider";
import { Poppins, Vazirmatn } from "next/font/google";
import classNames from "classnames";

export async function generateMetadata({ params }) {
  const { lang } = params;
  const dic = await getDictionary(lang);
  return {
    title: dic.title,
    description: dic.description,
  };
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const lalezar = Vazirmatn({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

async function layout({ children, params }) {
  const { lang } = params;
  const dic = await getDictionary(lang);
  return (
    <div
      className={classNames("h-dvh xl:flex", {
        [poppins.className]: lang === "en",
        [lalezar.className]: lang === "fa",
      })}
    >
      <LangProvider lang={lang} />
      <Header dictionary={dic} />
      <Sidebar dictionary={dic} />
      {children}
    </div>
  );
}

export default layout;
