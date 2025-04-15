import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { ThemeMode } from '../styles/themes';

interface ThemeContextType {
  mode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Check if localStorage is available (client-side)
  const isClient = typeof window !== 'undefined';
  
  // Initialize state with the saved theme or default to 'dark'
  const [mode, setMode] = useState<ThemeMode>(() => {
    if (isClient) {
      const savedTheme = localStorage.getItem('themeMode') as ThemeMode;
      return savedTheme || 'dark';
    }
    return 'dark';
  });

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setMode((prevMode) => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      if (isClient) {
        localStorage.setItem('themeMode', newMode);
      }
      return newMode;
    });
  };

  // Effect to handle system preference changes
  useEffect(() => {
    if (!isClient) return;
    
    // Save the theme preference to localStorage whenever it changes
    localStorage.setItem('themeMode', mode);
    
    // Apply theme-specific class to body for global CSS
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(`${mode}-mode`);
  }, [mode, isClient]);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useMyTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
