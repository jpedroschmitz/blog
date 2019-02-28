import React from "react";
import styled from "styled-components";
import breakpoints from "../../../styles/breakpoints";
import Image from "./Image";
import Title from "./Title";
import Meta from "./Meta";
import Description from "./Description";

const Post = styled.article`
  margin-bottom: 60px;
  ${breakpoints.sm} {
    margin-bottom: 40px;
  }
`;

export default ({ title, cover, path, date, category, description, main }) => (
  <Post>
    { main && <Image title={title} cover={cover} path={path} /> }
    <Title title={title} path={path} />
    <Meta date={date} category={category} small />
    { main && <Description description={description} /> }
  </Post>
);
