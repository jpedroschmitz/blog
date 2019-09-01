import React from 'react';
import HeaderItem from 'components/Layout/Header/HeaderItem';
import SideDrawer from './styles';

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
