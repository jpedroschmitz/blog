import React, { useState } from 'react';
import styled from 'styled-components';
import Global from '../../styles/Global';
import Header from './Header';
import Footer from './Footer';
import SideDrawer from './SideDrawer';
import ThemeContext from '../../context/ThemeContext';
import breakpoints from '../../styles/breakpoints';

const Main = styled.main`
  padding-top: 50px;
  min-height: 100vh;

  ${breakpoints.md} {
    padding-top: 35px;
  }
`;

export default ({ children }) => {
  const [isOpened, setOpen] = useState(false);

  const openHandler = () => {
    setOpen(!isOpened);
  };

  return (
    <ThemeContext.Consumer>
      {theme => (
        <div className={theme.dark ? 'dark' : 'light'}>
          <Global />
          <Header isOpened={isOpened} openHandler={openHandler} />
          <SideDrawer isOpened={isOpened} openHandler={openHandler} />
          <Main>{children}</Main>
          <Footer />
        </div>
      )}
    </ThemeContext.Consumer>
  );
};
