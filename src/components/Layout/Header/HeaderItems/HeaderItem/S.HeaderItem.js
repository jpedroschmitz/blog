import styled from 'styled-components';
import { Link } from 'gatsby';

export const Item = styled.li`
  margin: 0 1.5rem;
  text-transform: lowercase;
  font-family: 'Roboto', sans-serif;

  .dark & a {
    color: #eeeeee;
  }
`;

export const ItemLink = styled(Link)`
  color: #333;
  display: block;
  text-decoration: none;
  border-bottom: 1px dashed transparent;
  font-size: 1rem;
  width: 100%;
  height: 100%;

  &:hover {
    color: #000;
    border-color: #e7e7e7;
  }
`;
