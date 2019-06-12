import React from "react";
import * as S from "./S.SearchList";

export default ({ results }) => (
  <S.List>
    {results.map(page => (
      <S.Item key={page.id}>
        <S.ItemLink to={`/${page.slug}`}>{`${page.title} em ${page.category}`}</S.ItemLink>
      </S.Item>
    ))}
  </S.List>
);
