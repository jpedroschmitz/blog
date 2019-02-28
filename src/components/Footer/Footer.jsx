import React from "react";
import styled from "styled-components";
import breakpoints from '../../styles/breakpoints';

const Footer = styled.footer`
  padding: 1.22rem;
  margin-top: 80px;
  p {
    padding: 0;
    margin: 0;
    text-align: center;
    font-size: 0.98rem;
  }
  ${breakpoints.sm} {
    margin-top: 50px;
  }
`;

export default () => (
  <Footer>
    <p>Feito com Gatsby e muito ❤</p>
  </Footer>
);
