import React from 'react';
import classes from './Content.module.css';
import ContentTitle from './ContentTitle';
import ContentBody from './ContentBody';
import ContentImage from './ContentImage';
import PostMeta from '../Posts/Post/PostMeta';
import Container from '../Container';
import PostTags from '../Posts/Post/PostTags';
import SocialLinks from '../SocialLinks/SocialLinks';

const Content = ({ postNode, post, slug, config }) => (
  <React.Fragment>
    <ContentImage title={post.title} cover={post.cover} />
    <Container>
      <ContentTitle title={post.title} />
      <PostMeta author="João Pedro Schmitz" date={post.date} category={post.category} />
      <PostTags tags={post.tags} />
    </Container>
    <Container>
      <ContentBody html={postNode.html} />
    </Container>
    <SocialLinks postPath={slug} postNode={postNode} />
  </React.Fragment>
);

export default Content;