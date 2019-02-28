import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import breakpoints from "../../../styles/breakpoints";
import img from "../../../../static/images/logo/logo.png";

const Logo = styled.div`
  line-height: 0;
  flex: 0 1 350px;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100px;
  ${breakpoints.sm} {
    max-height: 80px;
  }
  ${breakpoints.xsm} {
    max-height: 72px;
  }
`;

export default () => (
  <Logo>
    <Link to="/">
      <Image src={img} alt="Logomarca" />
    </Link>
  </Logo>
);
