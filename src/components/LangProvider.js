"use client";

import { useContext, useEffect } from "react";
import { LayoutContext } from "../contexts/layoutContext";

function LangProvider({ lang }) {
  const { dispatch } = useContext(LayoutContext);
  useEffect(() => {
    dispatch({ type: "language", payload: lang });
  }, []);
}

export default LangProvider;
