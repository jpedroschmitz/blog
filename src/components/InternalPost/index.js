import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash.kebabcase';
import * as S from './styles';

export default ({ title, color, slug, link }) => (
  <S.Post borderColor={color}>
    <Link to={link ? `/${link}/${kebabCase(slug)}` : `/${kebabCase(slug)}`}>
      <S.Title color={color}>{title}</S.Title>
    </Link>
  </S.Post>
);
