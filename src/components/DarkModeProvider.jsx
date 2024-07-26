"use client";
import { useContext, useEffect, useLayoutEffect } from "react";
import { LayoutContext } from "../contexts/layoutContext";

const DarkModeProvider = ({ children }) => {
  const { state, dispatch } = useContext(LayoutContext);

  useLayoutEffect(() => {
    if (state.isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [state.isDark]);

  useEffect(() => {
    const darkModePreference = localStorage.getItem("dark-mode") === "true";
    if (darkModePreference) {
      dispatch({ type: "isDark", payload: darkModePreference });
    }
  }, []);

  return <>{children}</>;
};

export default DarkModeProvider;
