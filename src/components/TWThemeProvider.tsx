"use client";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

interface TWThemeProviderProps {
  children: ReactNode;
}

function TWThemeProvider({ children }: TWThemeProviderProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}

export default TWThemeProvider;
