import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import Posts from "../components/Posts";
import Container from "../components/Container";
import Subtitle from "../components/UI/Subtitle";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";

class TagTemplate extends Component {
  render() {
    const { pageContext, data } = this.props;
    const { tag } = pageContext;
    const { edges } = data.allMarkdownRemark;
    return (
      <Layout>
        <SEO />
        <Container>
          <Helmet title={`Posts com a tag "${tag}" | ${config.siteTitle}`} />
          <Subtitle>{`Tag "${tag}"`}</Subtitle>
          <Posts postEdges={edges} />
        </Container>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
            category
            description
          }
        }
      }
    }
  }
`;

export default TagTemplate;
