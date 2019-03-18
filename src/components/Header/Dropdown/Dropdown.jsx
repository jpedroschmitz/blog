import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import colors from "../../../styles/colors";

const Dropdown = styled.div`
  position: absolute;
  background-color: ${colors.secondary};
  min-width: 160px;
  right: 0;
  padding: 15px;
  border-radius: 26px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  margin-top: 18px;
  transition: 0.2s ease-in-out;
`;

const List = styled.ul`
  list-style: none;
`;

const NavItem = styled.li`
  margin: 10px 0;
  text-align: right;
`;

const NavLink = styled(Link)`
  font-size: 1.25rem;
  color: ${colors.black};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default ({ visible }) => visible && (
  <Dropdown>
    <nav role="navigation">
      <List>
        <NavItem>
          <NavLink to="/">home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/sobre">sobre</NavLink>
        </NavItem>
      </List>
    </nav>
  </Dropdown>
);
