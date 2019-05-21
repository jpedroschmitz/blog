import React from "react";
import { graphql } from "gatsby";
import moment from "moment";
import Layout from "../components/Layout";
import Highlight from "../components/Internal/Post/Highlight";
import Comments from "../components/Comments";
import Social from "../components/Social";
import Container from "../components/UI/Grid/Container";

export default ({ data, location }) => {
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
        category={category}
        image={`${origin}${image}`}
      />
      <Container>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <Social title={title} slug={slug} />
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
        category
        tags
        description
      }
      fields {
        slug
      }
    }
  }
`;
