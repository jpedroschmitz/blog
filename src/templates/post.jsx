import React from "react";
import { graphql } from "gatsby";
import moment from "moment";
import Layout from "../components/Layout";
import Comments from "../components/Comments";
import ContentInfo from "../components/ContentInfo";
import Content from "../components/Content";
import ContentSocial from "../components/ContentSocial";
import ContentNavigation from "../components/ContentNavigation";
import Container from "../components/UI/Grid/Container";
import SEO from "../components/SEO";

export default ({ data, pageContext }) => {
  const { html } = data.markdownRemark;
  const { title, image, date, category, slug, tags } = data.markdownRemark.frontmatter;
  const { timeToRead } = data.markdownRemark;
  return (
    <Layout>
      <ContentInfo
        timeToRead={timeToRead}
        title={title}
        date={moment(date, "YYYYMMDD").fromNow()}
        category={category.frontmatter.title}
        color={category.frontmatter.color}
        image={image}
        tags={tags}
      />
      <SEO postNode={data.markdownRemark} postPath={slug} postSEO />
      <Container>
        <Content html={html} />
        <ContentSocial title={title} slug={slug} />
        <ContentNavigation prev={pageContext.prev} next={pageContext.next} />
        <Comments postTitle={title} postSlug={slug} />
      </Container>
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        image
        slug
        date
        category {
          frontmatter {
            title
            color
          }
        }
        tags
        description
      }
    }
  }
`;
