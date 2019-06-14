import React from "react";
import { Link } from "gatsby";
import * as S from "./S.PostNavigation";

export default ({ next, prev }) => (
  <S.Posts>
    {prev && (
      <S.Post url={prev.frontmatter.image} isFullWidth={(next && !prev) || (!next && prev)}>
        <Link to={`/${prev.frontmatter.slug}`}>
          <p>Post anterior</p>
          <h2>{prev.frontmatter.title}</h2>
        </Link>
      </S.Post>
    )}
    {next && (
      <S.Post url={next.frontmatter.image} isFullWidth={(next && !prev) || (!next && prev)}>
        <Link to={`/${next.frontmatter.slug}`}>
          <p>Próximo post</p>
          <h2>{next.frontmatter.title}</h2>
        </Link>
      </S.Post>
    )}
  </S.Posts>
);
