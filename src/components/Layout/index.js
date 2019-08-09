import React, { useState, useContext } from 'react';
import GlobalStyle from '~/styles/global';
import Header from './Header';
import Footer from './Footer';
import SideDrawer from './SideDrawer';
import { StateContext } from '~/context/StateContext';
import { Main } from './styles';

export default ({ children }) => {
  const [isOpened, setOpen] = useState(false);
  const theme = useContext(StateContext);

  const openHandler = () => {
    setOpen(!isOpened);
  };

  return (
    <div className={theme.dark ? 'dark' : 'light'}>
      <GlobalStyle />
      <Header isOpened={isOpened} openHandler={openHandler} />
      <SideDrawer isOpened={isOpened} openHandler={openHandler} />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};
