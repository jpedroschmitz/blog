import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import Posts from "../components/Posts";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import Container from "../components/Container";

class Index extends React.Component {
  render() {
    const { data } = this.props;
    const { edges } = data.allMarkdownRemark;
    return (
      <Layout>
        <div className="index-container">
          <Helmet title={config.siteTitle} />
          <SEO />
          <Container>
            <Posts postEdges={edges} />
          </Container>
        </div>
      </Layout>
    );
  }
}

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
    ) {
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
