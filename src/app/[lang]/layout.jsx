import Header from "@/src/views/Header";
import Sidebar from "@/src/views/Sidebar";
import { getDictionary } from "@/src/dictionaries";
import LangProvider from "@/src/components/LangProvider";
import { Poppins, Vazirmatn } from "next/font/google";
import classNames from "classnames";
import "./globals.css";
import "aos/dist/aos.css";
import LayoutContextProvider from "@/src/contexts/layoutContext";
import AosInitator from "@/src/components/AosInitator";
import TWThemeProvider from "@/src/components/TWThemeProvider";

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

export async function generateMetadata({ params }) {
  const { lang } = params;
  const dic = await getDictionary(lang);
  return {
    title: dic.title,
    description: dic.description,
  };
}

async function layout({ children, params }) {
  const { lang } = params;
  const dic = await getDictionary(lang);
  return (
    <html
      lang={params.lang}
      dir={params.lang === "fa" ? "rtl" : "ltr"}
      suppressHydrationWarning
    >
      <body>
        <TWThemeProvider>
          <AosInitator />
          <LayoutContextProvider>
            <div
              className={classNames("h-dvh", {
                [poppins.className]: lang === "en",
                [lalezar.className]: lang === "fa",
              })}
            >
              <LangProvider lang={lang} />
              <Header dictionary={dic} />
              <Sidebar dictionary={dic} />
              {children}
            </div>
          </LayoutContextProvider>
        </TWThemeProvider>
      </body>
    </html>
  );
}

export default layout;
