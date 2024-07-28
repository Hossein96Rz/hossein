import { Poppins } from "next/font/google";
import "./globals.css";
import LayoutContextProvider from "../contexts/layoutContext";
import DarkModeProvider from "../components/DarkModeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default async function RootLayout({ children }) {
  return (
    <html>
      <body className={poppins.className}>
        <LayoutContextProvider>
          <DarkModeProvider>{children}</DarkModeProvider>
        </LayoutContextProvider>
      </body>
    </html>
  );
}
