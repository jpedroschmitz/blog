import styled from "styled-components";
import breakpoints from "../../../../styles/breakpoints";

export default styled.div`
  margin: 100px auto 100px auto;
  width: 75%;

  ${breakpoints.xl} {
    width: 90%;
  }
`;
