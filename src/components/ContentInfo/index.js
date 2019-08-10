import React from 'react';
import kebabcase from 'lodash.kebabcase';
import Container from '~/components/UI/Container';
import * as S from './styles';
import Tags from './Tags';

export default ({ title, category, date, timeToRead, color, tags }) => (
  <section>
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
