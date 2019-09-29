import React from 'react';
import { Link } from 'gatsby';
import * as S from './styles';

export default ({ timeToRead, title, date, slug, image }) => (
  <S.Article>
    <S.Background
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${image}')`,
      }}
    >
      <Link to={`/${slug}`}>
        <h2>{title}</h2>
        <S.Info>
          {date} - {timeToRead} min
        </S.Info>
      </Link>
    </S.Background>
  </S.Article>
);
