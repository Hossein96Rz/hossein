import { Poppins } from "next/font/google";
import "./globals.css";
import LayoutContextProvider from "../contexts/layoutContext";
import DarkModeProvider from "../components/DarkModeProvider";
import "aos/dist/aos.css";

export default async function RootLayout({ children }) {
  return (
    <html>
      <body>
        <LayoutContextProvider>
          <DarkModeProvider>{children}</DarkModeProvider>
        </LayoutContextProvider>
      </body>
    </html>
  );
}
