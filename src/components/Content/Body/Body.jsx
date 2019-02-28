import React from "react";
import styled from "styled-components";
import fonts from "../../../styles/fonts";
import colors from "../../../styles/colors";

const Body = styled.div`
  text-align: justify;
  padding-bottom: 30px;
  ${fonts.secondary}
  font-weight: 300;
  font-style: normal;
  font-size: 1.25rem;
  line-height: 2;
  letter-spacing: 0.069rem;
  color: ${colors.gray};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.4;
    text-align: left;
  }

  ol,
  ul {
    padding-left: 1.25rem;
  }

  ul {
    list-style: disc;
  }
`;

export default ({ html }) => (
  <Body dangerouslySetInnerHTML={{ __html: html }} />
);
