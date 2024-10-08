import Header from "@/src/views/Header";
import Sidebar from "@/src/views/Sidebar";
import { Poppins, Vazirmatn } from "next/font/google";
import classNames from "classnames";
import "./globals.css";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import LayoutContextProvider from "@/src/contexts/layoutContext";
import AosInitator from "@/src/utils/AosInitator";
import TWThemeProvider from "@/src/components/TWThemeProvider";
import { ReactNode } from "react";
import { Language } from "@/src/types/language";
import { NextIntlClientProvider } from "next-intl";
import { Analytics } from "@vercel/analytics/react";
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ToastifyContainer from "@/src/components/ToastifyContainer";
import { Viewport } from "next";

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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#34495E" },
    { media: "(prefers-color-scheme: dark)", color: "#ffffff" },
  ],
};

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
  const messages = await getMessages({ locale });
  unstable_setRequestLocale(locale);
  return (
    <html
      lang={locale}
      dir={locale === "fa" ? "rtl" : "ltr"}
      suppressHydrationWarning
    >
      <body
        className={classNames(
          "h-dvh text-lg font-normal leading-[30px] text-custom-text-light dark:text-custom-text-light-dark",
          {
            [poppins.className]: locale === "en",
            [lalezar.className]: locale === "fa",
          },
        )}
      >
        <SpeedInsights />
        <Analytics />
        <NextIntlClientProvider messages={messages}>
          <TWThemeProvider>
            <AosInitator />
            <LayoutContextProvider>
              <ToastifyContainer />
              <Header />
              <Sidebar />
              {children}
            </LayoutContextProvider>
          </TWThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export default layout;
