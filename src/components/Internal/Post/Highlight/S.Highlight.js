import styled from "styled-components";
import { Link } from "gatsby";

export const Hightlight = styled.article`
  height: 650px;
  width: 100%;
  position: relative;
  color: inherit;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('${props => props.url}')
`;

export const Nav = styled.div`
  width: 35%;
  background-color: #FFF;
  padding: 45px;
  box-sizing: border-box;
  height: 190px;
  position: absolute;
  right: 0;
  bottom: 0;

  @media (min-width: 700px) {
    width: 50%;
  }

  .dark & {
    background-color: #393e46;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;

  & p {
    font-weight: 300;
    font-size: 0.875rem;
    margin-right: 40px;
  }
`;

export const Category = styled(Link)`
  font-weight: bold;
  font-size: 1rem;
  text-transform: uppercase;
  margin-right: 40px;
  color: inherit;
  text-decoration: none;
  color: ${props => props.color}
`;
