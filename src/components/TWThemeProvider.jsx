"use client";
import { ThemeProvider } from "next-themes";

function TWThemeProvider({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}

export default TWThemeProvider;
