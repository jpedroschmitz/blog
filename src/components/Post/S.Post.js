import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

export const Article = styled.article`
  margin-bottom: 5rem;
  width: 30.5%;
  height: 300px;
  position: relative;
  cursor: pointer;
  ${breakpoints.xxl} {
    width: 45%;
  }

  ${breakpoints.md} {
    width: 100%;
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
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)
  ), url('${props => props.url}');
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
