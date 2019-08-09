import React, { useState, useEffect, createContext } from 'react';

export const StateContext = createContext({
  dark: true,
  toggleDark: () => {},
});

export const StateProvider = ({ children }) => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('dark')) {
      const lsDark = JSON.parse(localStorage.getItem('dark'));
      if (lsDark) {
        setDark(Boolean(lsDark));
      } else if (
        window.matchMedia('(prefers-color-scheme: dark)').matches === true
      ) {
        setDark(true);
      }
    } else {
      localStorage.setItem('dark', JSON.stringify(dark));
    }
  }, [dark]);

  const toggleDark = () => {
    localStorage.setItem('dark', JSON.stringify(!dark));
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
