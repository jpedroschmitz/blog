import React from "react";
import { Link } from "gatsby";
import * as S from "./S.Post";

export default ({ category, title, date, slug, image }) => (
  <S.Article>
    <S.Background url={image}>
      <Link to={`/${slug}`}>
        <h2>{title}</h2>
        <S.Info>{`${date} em ${category.frontmatter.title}`}</S.Info>
      </Link>
    </S.Background>
  </S.Article>
);
