import Header from "@/src/views/Header";
import Sidebar from "@/src/views/Sidebar";
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
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
interface generateMetadataProps {
  params: {
    locale: Language;
  };
}

interface layoutProps {
  children: ReactNode;
  params: {
    locale: Language;
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
  const locales = ["en", "fa"];
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: generateMetadataProps) {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

async function layout({ children, params }: layoutProps) {
  const { locale } = params;
  const messages = await getMessages();
  return (
    <html
      lang={locale}
      dir={locale === "fa" ? "rtl" : "ltr"}
      suppressHydrationWarning
    >
      <body
        className={classNames("h-dvh", {
          [poppins.className]: locale === "en",
          [lalezar.className]: locale === "fa",
        })}
      >
        <NextIntlClientProvider messages={messages}>
          <TWThemeProvider>
            <AosInitator>
              <LayoutContextProvider>
                <Header />
                <Sidebar />
                {children}
              </LayoutContextProvider>
            </AosInitator>
          </TWThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export default layout;
