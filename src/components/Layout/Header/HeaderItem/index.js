import React from 'react';
import * as S from './styles';

export default ({ children, link, onClick, typeIcon }) => {
  let element = (
    <S.Item>
      <S.ItemLink to={link}>{children}</S.ItemLink>
    </S.Item>
  );

  if (onClick) {
    element = (
      <li>
        <S.Icon typeIcon={typeIcon} onClick={onClick} />
      </li>
    );
  }
  return element;
};
