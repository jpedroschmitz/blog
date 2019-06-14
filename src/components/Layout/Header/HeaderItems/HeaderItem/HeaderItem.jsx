import React from "react";
import Icon from "../Icon/Icon";
import * as S from "./S.HeaderItem";

export default ({ children, link, onClick, typeIcon }) => {
  let element = (
    <S.Item>
      <S.ItemLink to={link}>{children}</S.ItemLink>
    </S.Item>
  );

  if (onClick) {
    element = (
      <li>
        <Icon typeIcon={typeIcon} onClick={onClick} />
      </li>
    );
  }
  return element;
};
