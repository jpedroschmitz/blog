import React from 'react';
import * as S from './styles';

export default ({ title, introduction, color }) => (
  <S.Bar>
    <S.Info>
      <S.Title color={color}>{title}</S.Title>
      <p>{introduction}</p>
    </S.Info>
  </S.Bar>
);
