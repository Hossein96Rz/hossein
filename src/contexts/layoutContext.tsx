"use client";
import { createContext, ReactNode, useReducer, Dispatch } from "react";

interface LayoutState {
  sideBar: boolean;
  language: string;
}

interface LayoutAction {
  type: string;
  payload?: any;
}

const initialState: LayoutState = {
  sideBar: false,
  language: "",
};

interface LayoutContextProps {
  state: LayoutState;
  dispatch: Dispatch<LayoutAction>;
}

export const LayoutContext = createContext<LayoutContextProps>({
  state: initialState,
  dispatch: () => null,
});

const reducer = (state: LayoutState, action: LayoutAction): LayoutState => {
  const { type, payload } = action;

  switch (type) {
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

interface LayoutContextProviderProps {
  children: ReactNode;
}

function LayoutContextProvider({ children }: LayoutContextProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <LayoutContext.Provider value={{ state, dispatch }}>
      {children}
    </LayoutContext.Provider>
  );
}

export default LayoutContextProvider;
