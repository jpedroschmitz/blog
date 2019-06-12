import styled from "styled-components";

export const Wrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;
  background-color: #FFF;
  color: #000;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  padding: 20px 1.30rem;

  .dark & {
    background: #222831;
    color: #eeeeee;
  }
`;

export const Header = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 1.6rem;
  font-weight: bold;
  font-family: "Roboto", sans-serif;

  & a {
    color: inherit;
    text-decoration: none;
  }
`;
