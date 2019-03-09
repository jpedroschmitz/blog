import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Title from "./Title";
import Body from "./Body";
import Image from "./Image";
import Comments from "./Comments";
import Container from "../Container";
import SocialLinks from "./SocialLinks";
import Meta from "../Posts/Post/Meta";
import Tags from "../Posts/Post/Tags";
import breakpoints from "../../styles/breakpoints";

const Navigation = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
  margin-bottom: 75px;
`;

const NavigationCard = styled(Link)`
  width: 50%;
  margin: 20px 0 20px 0;
  h4 {
    margin: 0;
    text-align: center;
  }
  p {
    margin: 0;
    text-align: center;
    line-height: 1;
    margin-top: 10px;
  }
  ${breakpoints.md} {
    width: 100%;
    p {
      font-size: 1.15rem;
      line-height: 2;
      margin-top: 0px;
    }
  }
`;

export default ({
  postNode,
  post,
  slug,
  timeToRead,
  nextTitle,
  nextSlug,
  prevTitle,
  prevSlug
}) => (
  <React.Fragment>
    <Container wide>
      <Title title={post.title} />
      <Meta
        author="João Pedro Schmitz"
        date={post.date}
        category={post.category}
        timeToRead={timeToRead}
      />
      <Tags tags={post.tags} />
    </Container>

    <Image title={post.title} cover={post.cover} />

    <Container wide>
      <Body html={postNode.html} />
      <SocialLinks postPath={slug} postNode={postNode} />
      <Navigation>
        {prevSlug && (
          <NavigationCard to={prevSlug}>
            <h4>Post anterior</h4>
            <p>{prevTitle}</p>
          </NavigationCard>
        )}
        {nextSlug && (
          <NavigationCard to={nextSlug}>
            <h4>Próximo post</h4>
            <p>{nextTitle}</p>
          </NavigationCard>
        )}
      </Navigation>
      <Comments postTitle={post.title} postSlug={slug} />
    </Container>
  </React.Fragment>
);
