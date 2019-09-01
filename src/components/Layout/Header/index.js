import React, { useContext } from 'react';
import { Link, navigate } from 'gatsby';
import { StateContext } from 'context/StateContext';
import HeaderItem from './HeaderItem';
import { Icon } from './HeaderItem/styles';
import DrawerToggle from './DrawerToggle';
import * as S from './styles';

export default ({ openHandler, isOpened }) => {
  const theme = useContext(StateContext);

  return (
    <S.Wrapper>
      <S.Header>
        <S.TitleH1>
          <Link to="/">João Pedro S.</Link>
        </S.TitleH1>
        <S.Navigation>
          <nav>
            <S.List>
              <HeaderItem link="/">Home</HeaderItem>
              <HeaderItem link="/categorias">Categorias</HeaderItem>
              <HeaderItem link="/tags">Tags</HeaderItem>
              <HeaderItem link="/sobre-mim">Sobre mim</HeaderItem>
              <HeaderItem
                typeIcon="search"
                onClick={() => navigate('/busca')}
              />
              <HeaderItem
                typeIcon={theme.dark ? 'day' : 'night'}
                onClick={theme.toggleDark}
              />
            </S.List>
          </nav>
        </S.Navigation>
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
  );
};
