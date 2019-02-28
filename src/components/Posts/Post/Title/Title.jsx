import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import breakpoints from "../../../../styles/breakpoints";

const Title = styled(Link)`
  & h2 {
    font-size: calc(2.04em);
    line-height: 1.1;
    padding: 05px 0 0 12px;
    margin: 20px 0 0 0;
  }

  ${breakpoints.md} {
    & h2 {
      padding: 10px 0 0 05px;
      margin: 08px 0 0 0;
      font-size: calc(1.45em);
    }
  }
`;
const PostTitle = ({ title, path }) => (
  <Title to={path}>
    <h2>{title}</h2>
  </Title>
);

export default PostTitle;
