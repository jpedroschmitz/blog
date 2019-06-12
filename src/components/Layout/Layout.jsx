import React from "react";
import styled from "styled-components";
import Global from "../../styles/Global";
import Header from "./Header";
import Footer from "./Footer";
import ThemeContext from "../../context/ThemeContext";

const Main = styled.main`
  padding-top: 50px;
  min-height: calc(100vh - 155px);
`;

export default ({ children }) => (
  <ThemeContext.Consumer>
    {theme => (
      <div className={theme.dark ? "dark" : "light"}>
        <Global />
        <Header />
        <Main>{children}</Main>
        <Footer />
      </div>
    )}
  </ThemeContext.Consumer>
);
