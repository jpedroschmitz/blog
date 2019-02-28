import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Toogle from "./Toggle";
import breakpoints from "../../styles/breakpoints";

const Header = styled.header`
  display: flex;
  align-items: center;
  width: 85vw;
  margin: 0 auto;
  min-height: 135px;
  padding: 30px;
  @media (min-width: 1380px) {
    width: 75vw;
  }
  ${breakpoints.xxl} {
    width: 92vw;
  }
  ${breakpoints.lg} {
    padding: 20px;
  }
  ${breakpoints.sm} {
    margin-bottom: 1.5rem;
    padding: 0;
  }
`;

export default () => (
  <Header>
    <Logo />
    <Navigation />
    <Toogle />
  </Header>
);
