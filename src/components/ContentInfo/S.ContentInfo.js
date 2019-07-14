import styled from 'styled-components';
import { Link } from 'gatsby';
import breakpoints from '../../styles/breakpoints';

export const Hightlight = styled.div`
  width: 100%;
  margin: 0px auto;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  background-image: url('${props => props.url}');
  ${breakpoints.xl} {
    display: none;
  }
`;

export const Title = styled.h2`
  font-weight: bold;
  color: #000;
  font-size: 54px;
  line-height: 1.2;
  margin: 0;
  width: 85%;

  ${breakpoints.md} {
    font-size: 36px;
  }

  .dark & {
    color: #fff;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;

  & p {
    font-weight: bold;
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
  color: ${props => props.color};
`;
