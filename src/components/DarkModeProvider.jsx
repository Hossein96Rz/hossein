"use client";
import { useContext, useEffect } from "react";
import { LayoutContext } from "../contexts/layoutContext";

const DarkModeProvider = ({ children }) => {
  const { dispatch } = useContext(LayoutContext);

  useEffect(() => {
    const darkModePreference = localStorage.getItem("dark-mode") === "true";
    dispatch({ type: "isDark", payload: darkModePreference });
    if (darkModePreference) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return <>{children}</>;
};

export default DarkModeProvider;
