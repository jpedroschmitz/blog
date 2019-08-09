import styled from 'styled-components';

export const Article = styled.article`
  margin-bottom: 5rem;
  flex: 0 0 32%;
  height: 300px;
  position: relative;
  cursor: pointer;

  &:nth-child(3n-1) {
    margin-left: 2%;
    margin-right: 2%;
  }

  ${({ theme }) => theme.breakpoints.xxl} {
    flex: 0 0 45%;

    &:nth-child(3n-1) {
      margin-left: 0;
      margin-right: 0;
    }

    &:nth-child(even) {
      margin-left: 10%;
      margin-right: 0;
    }
  }

  ${({ theme }) => theme.breakpoints.lg} {
    flex: 0 0 100%;

    &:nth-child(even) {
      margin-left: 0;
      margin-right: 0;
    }
  }
`;

export const Background = styled.div`
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  width: 100%;
  padding: 35px 20px;
  border-radius: 0.55rem;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  & a {
    text-decoration: none;
    color: #fff;
    display: block;
    height: 100%;
  }

  & h2 {
    font-size: 2.2rem;
    font-weight: bold;
  }
`;

export const Info = styled.p`
  padding-top: 10px;
  font-size: 0.875rem;
`;
