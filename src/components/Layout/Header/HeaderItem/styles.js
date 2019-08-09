import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

import day from '~/assets/images/icons/day.svg';
import night from '~/assets/images/icons/night.svg';
import search from '~/assets/images/icons/search.svg';

export const Item = styled.li`
  margin: 0 1.5rem;
  text-transform: lowercase;
  font-family: 'Roboto', sans-serif;
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

  .dark & {
    color: #eeeeee;
  }

  .dark &:hover {
    color: #e7e7e7;
  }
`;

export const Icon = styled.button`
  ${props =>
    props.typeIcon === 'day' || props.typeIcon === 'night'
      ? css`
          width: 28px;
          height: 28px;
        `
      : css`
          width: 24px;
          height: 24px;
        `}

  cursor: pointer;
  border: none;
  outline: none;
  margin: 0 1.5rem;
  background-repeat: no-repeat;
  background-color: #000;

  mask: url('${props => (props.typeIcon === 'day' ? day : night)}');

  ${props =>
    props.typeIcon === 'search' &&
    css`
      mask: url(${search});
    `}

  .dark & {
    background-color: #eee;
  }

  ${({ theme }) => theme.breakpoints.sm} {
    width: 22px;
    height: 22px;
  }
`;
