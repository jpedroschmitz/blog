import React from "react";
import styled from "styled-components";
import breakpoints from '../../styles/breakpoints';

const Wrapper = styled.div`
  padding: 0px 25px;
  max-width: 650px;
  margin: 0px auto;
  ${breakpoints.sm} {
    padding: 0px 30px;
  }
`;

export default ({ children }) => <Wrapper>{children}</Wrapper>;
