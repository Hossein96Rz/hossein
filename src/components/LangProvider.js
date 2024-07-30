"use client";

import { useContext, useEffect } from "react";
import { LayoutContext } from "../contexts/layoutContext";

function LangProvider({ lang }) {
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
}

export default LangProvider;
