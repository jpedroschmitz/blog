import React from "react";
import * as S from "./S.HeaderItem";

export default ({ children, link, onClick, typeIcon }) => (!onClick ? (
  <S.Item>
    <S.ItemLink to={link}>{children}</S.ItemLink>
  </S.Item>
) : (
  <li>
    <S.Icon type="button" typeIcon={typeIcon} onClick={onClick} />
  </li>
));
