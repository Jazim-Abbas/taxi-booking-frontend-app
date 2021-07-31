import React, { useContext } from "react";

const ExtraContext = React.createContext({});

export function ExtraProvider({ children, value }) {
  return (
    <ExtraContext.Provider value={value}>{children}</ExtraContext.Provider>
  );
}

export const useExtraContext = () => useContext(ExtraContext);
