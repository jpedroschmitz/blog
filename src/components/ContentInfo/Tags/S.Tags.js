import styled from "styled-components";
import { Link } from "gatsby";
import colors from "../../../styles/colors";

export const Tags = styled.div`
  margin-top: 35px;
  padding: 10px 0 0 12px;
`;

export const Tag = styled(Link)`
  background: ${colors.link};
  border-radius: 3px 0 0 3px;
  color: #000;
  display: inline-block;
  height: 26px;
  line-height: 26px;
  padding: 0 20px 0 23px;
  position: relative;
  margin: 0 10px 10px 0;
  text-decoration: none;
  transition: color 0.2s;
  border: none;

  &::before {
    background: #000;
    border-radius: 10px;
    content: "";
    height: 6px;
    left: 10px;
    position: absolute;
    width: 6px;
    top: 10px;
  }

  &::after {
    background: #fff;
    border-bottom: 13px solid transparent;
    border-left: 10px solid ${colors.link};
    border-top: 13px solid transparent;
    content: "";
    position: absolute;
    right: 0;
    top: 0;
  }

  &:hover {
    background-color: #0984e3;
    border: none;
  }

  &:hover::after {
    border-left-color: #0984e3;
  }

  .dark &::after {
    background: ${colors.dark};
  }
`;
