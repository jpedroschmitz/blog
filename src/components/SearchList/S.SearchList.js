import styled from 'styled-components';
import { Link } from 'gatsby';

export const List = styled.ul`
  padding: 10px;
`;

export const Item = styled.li`
  margin-bottom: 10px;
`;

export const ItemLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;
