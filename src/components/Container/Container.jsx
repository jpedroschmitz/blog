import React from "react";
import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

const Wrapper = styled.div`
  padding: 0px 25px;
  max-width: ${props => (props.wide ? "840px" : "650px")};
  margin: 0px auto;
  ${breakpoints.sm} {
    padding: 0px 30px;
  }
`;

export default ({ children, wide }) => (
  <Wrapper wide={wide}>{children}</Wrapper>
);
