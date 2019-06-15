import styled from "styled-components";
import breakpoints from "../../../../styles/breakpoints";

export default styled.div`
  margin: 100px auto 100px auto;
  width: 75%;
  max-width: 1200px;

  ${breakpoints.xlg} {
    width: 86%;
  }

  ${breakpoints.xxl} {
    width: 92%;
  }

  ${breakpoints.lg} {
    width: 95%;
  }
`;
