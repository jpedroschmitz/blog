import React from 'react';
import GitHubButton from 'react-github-btn';
import * as S from './styles';

export default () => (
  <S.Footer>
    <S.Text>Blog desenvolvido com Gatsby e ❤!</S.Text>
    <GitHubButton
      href="https://github.com/jpedroschmitz/joaopedro.cc"
      aria-label="Star jpedroschmitz/joaopedro.cc on GitHub"
    >
      Star
    </GitHubButton>
  </S.Footer>
);
