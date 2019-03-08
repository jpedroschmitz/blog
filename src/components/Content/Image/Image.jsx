import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import breakpoints from "../../../styles/breakpoints";

const ContentImageWrapper = styled.div`
  max-width: 1050px;
  margin: 50px auto;
  ${breakpoints.md} {
    display: none;
  }
`;

const Image = styled(Img)`
  width: 100%;
  height: 100%;
`;

export default ({ cover, title }) => (
  <ContentImageWrapper>
    <Image sizes={cover.childImageSharp.sizes} title={title} alt={title} />
  </ContentImageWrapper>
);
