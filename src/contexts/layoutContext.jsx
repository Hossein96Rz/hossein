"use client";
import { createContext, useReducer } from "react";

const initialState = {
  isDark: false,
};

export const LayoutContext = createContext();

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "toggleDarkMode":
      return { ...state, isDark: !state.isDark };
    case "reset":
      return initialState;
    case "allStates":
      return { ...state, ...payload };
    default:
      return { ...state, [type]: [payload] };
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
