"use client";

import { ReactNode, useContext, useEffect } from "react";
import { LayoutContext } from "../contexts/layoutContext";
import { Language } from "../types/language";

interface LangProviderProps {
  lang: Language;
  children: ReactNode;
}
function LangProvider({ lang, children }: LangProviderProps) {
  const { state, dispatch } = useContext(LayoutContext);
  useEffect(() => {
    if (!state.language) return;
    document.documentElement.setAttribute(
      "dir",
      state.language === "fa" ? "rtl" : "ltr",
    );
  }, [state.language]);
  useEffect(() => {
    dispatch({ type: "language", payload: lang });
  }, []);
  return children;
}

export default LangProvider;
