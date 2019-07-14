import React from 'react';

const defaultState = {
  dark: false,
  toggleDark: () => {},
};

const ThemeContext = React.createContext(defaultState);

const supportsDarkMode = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches === true;

class ThemeProvider extends React.Component {
  state = {
    dark: false,
  };

  componentDidMount() {
    if (localStorage.getItem('dark')) {
      const lsDark = JSON.parse(localStorage.getItem('dark'));
      if (lsDark) {
        this.setState({ dark: lsDark });
      } else if (supportsDarkMode()) {
        this.setState({ dark: true });
      }
    } else {
      const { dark } = this.state;
      localStorage.setItem('dark', JSON.stringify(dark));
    }
  }

  toggleDark = () => {
    const { dark: darkEl } = this.state;
    localStorage.setItem('dark', JSON.stringify(!darkEl));
    this.setState({ dark: !darkEl });
  };

  render() {
    const { children } = this.props;
    const { dark } = this.state;
    return (
      <ThemeContext.Provider
        value={{
          dark,
          toggleDark: this.toggleDark,
        }}
      >
        {children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContext;

export { ThemeProvider };
