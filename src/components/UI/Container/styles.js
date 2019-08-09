import styled from 'styled-components';

export const Container = styled.div`
  margin: 100px auto 100px auto;
  width: 70%;
  max-width: 1100px;

  ${({ theme }) => theme.breakpoints.xxl} {
    width: 80%;
  }

  ${({ theme }) => theme.breakpoints.lg} {
    width: 85%;
  }
`;
