import styled from 'styled-components';

export const Main = styled.main`
  padding-top: 50px;
  min-height: 100vh;

  ${({ theme }) => theme.breakpoints.md} {
    padding-top: 35px;
  }
`;
