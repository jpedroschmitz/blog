import styled, { css } from 'styled-components';

export default styled.div`
  display: flex;
  flex-wrap: wrap;
  ${props =>
    props.center &&
    css`
      justify-content: flex-start;
    `};
`;
