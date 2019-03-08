import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import breakpoints from "../../../../styles/breakpoints";

const Outer = styled.div`
  width: 100%;
  max-width: 100%;
`;

const Image = styled(Img)`
  border-radius: 26px;
  ${breakpoints.sm} {
    border-radius: 10px;
  }
`;

export default ({ cover, title, path }) => (
  <Outer>
    <Link to={path}>
      <Image sizes={cover.childImageSharp.sizes} title={title} alt={title} />
    </Link>
  </Outer>
);
