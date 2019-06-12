import React from "react";
import { Link } from "gatsby";
import ThemeContext from "../../../context/ThemeContext";
import HeaderItems from "./HeaderItems";
import * as S from "./S.Header";

export default () => (
  <ThemeContext.Consumer>
    {theme => (
      <S.Wrapper>
        <S.Header>
          <S.Title>
            <Link to="/">João Pedro S.</Link>
          </S.Title>
          <HeaderItems theme={theme} />
        </S.Header>
      </S.Wrapper>
    )}
  </ThemeContext.Consumer>
);
