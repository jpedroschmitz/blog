import React from 'react';
import { Link, navigate } from 'gatsby';
import ThemeContext from '../../../context/ThemeContext';
import HeaderItems from './HeaderItems';
import Icon from './HeaderItems/Icon/Icon';
import DrawerToggle from './DrawerToggle';
import * as S from './S.Header';

export default ({ openHandler, isOpened }) => (
  <ThemeContext.Consumer>
    {theme => (
      <S.Wrapper>
        <S.Header>
          <S.TitleH1>
            <Link to="/">João Pedro S.</Link>
          </S.TitleH1>
          <HeaderItems
            theme={theme}
            openHandler={openHandler}
            isOpened={isOpened}
          />
          <S.NavResponsive>
            <Icon
              typeIcon={theme.dark ? 'day' : 'night'}
              onClick={theme.toggleDark}
            />
            <DrawerToggle openHandler={openHandler} isOpened={isOpened} />
            <Icon typeIcon="search" onClick={() => navigate('/busca')} />
          </S.NavResponsive>
        </S.Header>
      </S.Wrapper>
    )}
  </ThemeContext.Consumer>
);
