import styled from "styled-components";
import breakpoints from "../../../../styles/breakpoints";

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;

  ${breakpoints.xl} {
    display: none;
  }
`;

export const Navigation = styled.div`
  display: block;
`;
