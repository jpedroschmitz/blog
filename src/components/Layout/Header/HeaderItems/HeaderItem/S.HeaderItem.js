import styled from "styled-components";
import { Link } from "gatsby";
import day from "../../../../../../static/img/icons/day.svg";
import night from "../../../../../../static/img/icons/night.svg";
import search from "../../../../../../static/img/icons/search.svg";

export const Item = styled.li`
  margin: 0 1.5rem;
  text-transform: lowercase;
  font-family: "Roboto", sans-serif;

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

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: 0.2s ease;
  border: none;
  outline: none;
  margin: 0 1.5rem;
  background-repeat: no-repeat;
  background-color: #000;
  mask: url('${props => (props.typeIcon === "day" ? day : night)}');
  ${props => (props.typeIcon === "search" ? `mask: url(${search});` : null)}
  .dark & {
    background-color: #eee;
  }
`;
