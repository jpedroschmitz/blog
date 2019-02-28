import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import colors from "../../../styles/colors";
import breakpoints from "../../../styles/breakpoints";

const Nav = styled.nav`
  text-align: right;
  flex: 0 0 calc(100% - 350px);
  margin-right: 12px;
  ${breakpoints.md} {
    display: none;
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  list-style: none;
`;

const NavListItem = styled.li`
  &:first-child {
    margin-right: 15px;
  }
`;

const NavLink = styled(Link)`
  font-size: 1.25rem;
  color: ${colors.black};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default () => (
  <Nav role="navigation">
    <NavList>
      <NavListItem>
        <NavLink to="/">home</NavLink>
      </NavListItem>
      <NavListItem>
        <NavLink to="/sobre">sobre</NavLink>
      </NavListItem>
    </NavList>
  </Nav>
);
