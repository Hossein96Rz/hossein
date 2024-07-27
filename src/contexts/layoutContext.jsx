"use client";
import { createContext, useReducer } from "react";

const initialState = {
  isDark: false,
  sideBar: false,
  language: "",
};

export const LayoutContext = createContext();

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "toggleDarkMode":
      return { ...state, isDark: !state.isDark };
    case "toggleSideBar":
      return { ...state, sideBar: !state.sideBar };
    case "reset":
      return initialState;
    case "allStates":
      return { ...state, ...payload };
    default:
      return { ...state, [type]: payload };
  }
};

function LayoutContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <LayoutContext.Provider value={{ state, dispatch }}>
      {children}
    </LayoutContext.Provider>
  );
}

export default LayoutContextProvider;
