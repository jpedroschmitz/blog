import React from "react";
import SideDrawer from "./S.SideDrawer";
import HeaderItem from "../Header/HeaderItems/HeaderItem";

export default ({ isOpened }) => (
  <SideDrawer open={isOpened}>
    <ul>
      <HeaderItem link="/">Home</HeaderItem>
      <HeaderItem link="/categorias">Categorias</HeaderItem>
      <HeaderItem link="/tags">Tags</HeaderItem>
      <HeaderItem link="/sobre-mim">Sobre mim</HeaderItem>
    </ul>
  </SideDrawer>
);
