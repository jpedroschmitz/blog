import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import Posts from "../components/Posts";
import Container from "../components/Container";
import Subtitle from "../components/UI/Subtitle";
import config from "../../data/SiteConfig";
import SEO from "../components/SEO";

class CategoryTemplate extends React.Component {
  render() {
    const { pageContext, data } = this.props;
    const { category } = pageContext;
    const { edges } = data.allMarkdownRemark;
    return (
      <Layout>
        <SEO />
        <Container>
          <Helmet
            title={`Posts na categoria "${category}" | ${config.siteTitle}`}
          />
          <Subtitle>{`Categoria "${category}"`}</Subtitle>
          <Posts postEdges={edges} />
        </Container>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
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

export default CategoryTemplate;
