import React from "react";
import Title from "./Title";
import Body from "./Body";
import Image from "./Image";
import Comments from "./Comments";
import SocialLinks from "./SocialLinks";
import PostMeta from "../Posts/Post/PostMeta";
import Container from "../Container";
import PostTags from "../Posts/Post/PostTags";

const Content = ({ postNode, post, slug }) => (
  <React.Fragment>
    <Image title={post.title} cover={post.cover} />
    <Container>
      <Title title={post.title} />
      <PostMeta
        author="João Pedro Schmitz"
        date={post.date}
        category={post.category}
      />
      <PostTags tags={post.tags} />
      <Body html={postNode.html} />
      <SocialLinks postPath={slug} postNode={postNode} />
      <Comments postTitle={post.title} postSlug={slug} />
    </Container>
  </React.Fragment>
);

export default Content;
