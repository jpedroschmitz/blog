import React from "react";
import kebabcase from "lodash.kebabcase";
import * as S from "./S.Highlight";

export default ({ title, category, date, image, timeToRead, color }) => (
  <section>
    <S.Hightlight url={image}>
      <S.Nav>
        <h2>{title}</h2>
        <S.Info>
          <S.Category color={color} to={`/categoria/${kebabcase(category)}`}>
            {category}
          </S.Category>
          <p>{date}</p>
          <p>{`${timeToRead} min de leitura`}</p>
        </S.Info>
      </S.Nav>
    </S.Hightlight>
  </section>
);
