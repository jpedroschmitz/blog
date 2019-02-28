import React from "react";
import styled from "styled-components";
import colors from "../../../../styles/colors";
import breakpoints from "../../../../styles/breakpoints";

const Description = styled.p`
  font-size: 1.06rem;
  line-height: 1.5;
  color: ${colors.gray};
  margin: 0;
  padding: 0 0 0 12px;
  ${breakpoints.md} {
    display: none;
  }
`;

export default ({ description }) => <Description>{description}</Description>;
