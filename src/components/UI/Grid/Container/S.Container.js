import styled from 'styled-components';
import breakpoints from '../../../../styles/breakpoints';

export default styled.div`
  margin: 100px auto 100px auto;
  width: 70%;
  max-width: 1100px;

  ${breakpoints.xxl} {
    width: 80%;
  }

  ${breakpoints.lg} {
    width: 85%;
  }
`;
