import React from 'react';
import { Link } from 'gatsby';
import * as S from './S.Post';

export default ({ category, title, date, slug, image }) => (
  <S.Article>
    <S.Background
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${image}')`,
      }}
    >
      <Link to={`/${slug}`}>
        <h2>{title}</h2>
        <S.Info>{`${date} em ${category.frontmatter.title}`}</S.Info>
      </Link>
    </S.Background>
  </S.Article>
);
