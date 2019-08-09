import React from 'react';
import { Link } from 'gatsby';
import * as S from './styles';

export default ({ results }) => (
  <S.List>
    {results.map(page => (
      <li key={page.id}>
        <Link to={`/${page.slug}`}>{`${page.title} em ${page.category}`}</Link>
      </li>
    ))}
  </S.List>
);
