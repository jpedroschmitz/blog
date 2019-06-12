import React from "react";
import * as S from "./S.PageBar";

export default ({ title, introduction }) => (
  <S.Bar>
    <S.Info>
      <S.Title>{title}</S.Title>
      <p>{introduction}</p>
    </S.Info>
  </S.Bar>
);
