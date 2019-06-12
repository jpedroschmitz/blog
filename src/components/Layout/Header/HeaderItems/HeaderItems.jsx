import React from "react";
import { navigate } from "gatsby";
import HeaderItem from "./HeaderItem";
import * as S from "./S.HeaderItems";

export default ({ theme }) => (
  <S.Navigation>
    <nav>
      <S.List>
        <HeaderItem link="/">Home</HeaderItem>
        <HeaderItem link="/categorias">Categorias</HeaderItem>
        <HeaderItem link="/tags">Tags</HeaderItem>
        <HeaderItem link="/sobre-mim">Sobre mim</HeaderItem>
        <HeaderItem typeIcon="search" onClick={() => navigate("/busca")} />
        <HeaderItem typeIcon={theme.dark ? "day" : "night"} onClick={theme.toggleDark} />
      </S.List>
    </nav>
  </S.Navigation>
);
