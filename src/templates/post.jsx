import React from "react";
import { graphql } from "gatsby";
import moment from "moment";
import Layout from "../components/Layout";
import Highlight from "../components/Internal/Post/Highlight";
import Comments from "../components/Comments";
import Content from "../components/Content";
import Social from "../components/Social";
import PostNavigation from "../components/PostNavigation";
import Container from "../components/UI/Grid/Container";

export default ({ data, location, pageContext }) => {
  const { html } = data.markdownRemark;
  const { title, image, date, category, slug } = data.markdownRemark.frontmatter;
  const { timeToRead } = data.markdownRemark;
  const { origin } = location;
  return (
    <Layout>
      <Highlight
        timeToRead={timeToRead}
        title={title}
        date={moment(date, "YYYYMMDD").fromNow()}
        category={category.frontmatter.title}
        color={category.frontmatter.color}
        image={`${origin}${image}`}
      />
      <Container>
        <Content html={html} />
        <Social title={title} slug={slug} />
        <PostNavigation prev={pageContext.prev} next={pageContext.next} />
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
        date(formatString: "YYYYMMDD")
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
