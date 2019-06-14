import React from "react";
import kebabcase from "lodash.kebabcase";
import Container from "../UI/Grid/Container";
import * as S from "./S.ContentInfo";
import Tags from "./Tags";

export default ({ title, category, date, image, timeToRead, color, tags }) => (
  <section>
    <S.Hightlight url={image} />
    <Container>
      <article>
        <S.Title>{title}</S.Title>
        <S.Info>
          <S.Category color={color} to={`/categoria/${kebabcase(category)}`}>
            {category}
          </S.Category>
          <p>{date}</p>
          <p>{`${timeToRead} min de leitura`}</p>
        </S.Info>
        <Tags tags={tags} />
      </article>
    </Container>
  </section>
);
