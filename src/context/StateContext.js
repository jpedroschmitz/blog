import React, { useState, useEffect, createContext } from 'react';

export const StateContext = createContext({
  dark: true,
  toggleDark: () => {},
});

export const StateProvider = ({ children }) => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches === true) {
      setDark(true);
      localStorage.setItem('@joaopedro.cc/dark-theme', JSON.stringify(dark));
    } else {
      const darkTheme = localStorage.getItem('@joaopedro.cc/dark-theme');
      if (darkTheme) {
        const lsDark = JSON.parse(darkTheme);
        setDark(lsDark);
      }
    }
  }, []);

  const toggleDark = () => {
    localStorage.setItem('@joaopedro.cc/dark-theme', JSON.stringify(!dark));
    setDark(!dark);
  };

  return (
    <StateContext.Provider
      value={{
        dark,
        toggleDark,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
