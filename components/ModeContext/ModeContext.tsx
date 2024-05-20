import React, { createContext, useState, ReactNode, useContext } from 'react';

interface ModeContextType {
  isDarkMode: boolean;
  toggleMode: () => void;
  setMode: (mode: boolean) => void;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export const ModeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const setMode = (mode: boolean) => {
    setIsDarkMode(mode);
  };

  return (
    <ModeContext.Provider value={{ isDarkMode, toggleMode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export const useMode = () => {
  const context = useContext(ModeContext);
  if (context === undefined) {
    throw new Error('useMode must be used within a ModeProvider');
  }
  return context;
};
