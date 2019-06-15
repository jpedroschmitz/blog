import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

export const Social = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 55px;

  & div {
    margin: 0px 20px 0px 0px;
    cursor: pointer;
    outline: none;
  }

  ${breakpoints.sm} {
    & div {
      margin: 0px 10px 0px 0px;
    }
  }
`;

export const Title = styled.h3`
  margin-bottom: 12px;
  margin-top: 35px;
`;
