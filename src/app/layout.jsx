import { Inter } from "next/font/google";
import "./globals.css";
import LayoutContextProvider from "../contexts/layoutContext";
import DarkModeProvider from "../components/DarkModeProvider";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children }) {
  return (
    <html>
      <body className={inter.className}>
        <LayoutContextProvider>
          <DarkModeProvider>{children}</DarkModeProvider>
        </LayoutContextProvider>
      </body>
    </html>
  );
}
