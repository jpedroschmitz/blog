import React from "react";
import kebabCase from "lodash.kebabcase";
import * as S from "./S.Tags";

export default ({ tags }) => (
  <S.Tags>
    {tags
      && tags.map(tag => (
        <S.Tag key={tag} to={`/tag/${kebabCase(tag)}`}>
          {tag}
        </S.Tag>
      ))}
  </S.Tags>
);
