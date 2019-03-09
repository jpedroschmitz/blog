import React from "react";
import styled from "styled-components";
import breakpoints from "../../../styles/breakpoints";

const Title = styled.h1`
  font-size: 54px;
  line-height: 1.2;
  margin: 0;
  padding-top: 55px;
  ${breakpoints.md} {
    font-size: 44px;
  }
`;

export default ({ title }) => <Title>{title}</Title>;
