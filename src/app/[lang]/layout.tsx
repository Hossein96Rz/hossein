import Header from "@/src/views/Header";
import Sidebar from "@/src/views/Sidebar";
import { getDictionary } from "@/src/dictionaries";
import LangProvider from "@/src/utils/LangProvider";
import { Poppins, Vazirmatn } from "next/font/google";
import classNames from "classnames";
import "./globals.css";
import "aos/dist/aos.css";
import LayoutContextProvider from "@/src/contexts/layoutContext";
import AosInitator from "@/src/utils/AosInitator";
import TWThemeProvider from "@/src/components/TWThemeProvider";
import { ReactNode } from "react";
import { Language } from "@/src/types/language";
import { Dictionary } from "@/src/types/dictionary";
interface generateMetadataProps {
  params: {
    lang: Language;
  };
}

interface layoutProps {
  children: ReactNode;
  params: {
    lang: Language;
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

export async function generateStaticParams() {
  return [{ lang: "fa" }, { lang: "en" }];
}

export async function generateMetadata({ params }: generateMetadataProps) {
  const { lang } = params;
  const dic = await getDictionary(lang);
  return {
    title: dic.title,
    description: dic.description,
  };
}

async function layout({ children, params }: layoutProps) {
  const { lang } = params;
  const dic = (await getDictionary(lang)) as Dictionary;
  return (
    <html
      lang={params.lang}
      dir={params.lang === "fa" ? "rtl" : "ltr"}
      suppressHydrationWarning
    >
      <body
        className={classNames("h-dvh", {
          [poppins.className]: lang === "en",
          [lalezar.className]: lang === "fa",
        })}
      >
        <TWThemeProvider>
          <AosInitator>
            <LayoutContextProvider>
              <LangProvider lang={lang}>
                <Header dictionary={dic} />
                <Sidebar dictionary={dic} />
                {children}
              </LangProvider>
            </LayoutContextProvider>
          </AosInitator>
        </TWThemeProvider>
      </body>
    </html>
  );
}

export default layout;
