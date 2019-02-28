import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Container from "../components/Container";
import config from "../../data/config";
import Posts from "../components/Posts";
import SEO from "../components/SEO";
import Layout from "../layout";

export default class Index extends Component {
  render() {
    const { data, pathContext } = this.props;
    const { edges } = data.allMarkdownRemark;
    return (
      <Layout>
        <div className="index-container">
          <Helmet title={config.siteTitle} />
          <SEO />
          <Container>
            <article>
              <Posts postEdges={edges} pathContext={pathContext} main />
            </article>
          </Container>
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query IndexQueryPaginate($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      skip: $skip 
      limit: $limit 
      sort: { fields: [fields___prefix], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover {
              childImageSharp {
                sizes(maxWidth: 650, maxHeight: 400) {
                    ...GatsbyImageSharpSizes
                }
              }
            }
            date
            category
            description
          }
        }
      }
    }
  }
`;
