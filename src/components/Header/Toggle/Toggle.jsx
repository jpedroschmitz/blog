import React, { useState } from "react";
import styled from "styled-components";
import Dropdown from "../Dropdown";
import colors from "../../../styles/colors";
import breakpoints from "../../../styles/breakpoints";

const Menu = styled.div`
  flex: 0 0 calc(100% - 350px);
  text-align: right;
  font-size: 1.1rem;
  position: relative;
  cursor: pointer;
  display: none;
  transition: 0.2s;
  ${breakpoints.md} {
    display: inline-block;
  }
  ${breakpoints.sm} {
    font-size: 1rem;
  }
`;

const MenuText = styled.button`
  border: thick double ${colors.gray};
  outline: none;
  background-color: ${colors.white};
  padding: 10px;
  border-radius: 12px;
  @media (max-width: 470px) {
    padding: 7px;
  }
`;

export default function() {
  const [visible, setVisible] = useState(false);

  return (
    <React.Fragment>
      <Menu>
        <MenuText onClick={() => setVisible(!visible)}>menu</MenuText>
        <Dropdown visible={visible} />
      </Menu>
    </React.Fragment>
  );
}
