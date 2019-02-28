import React, { Component } from "react";
import Helmet from "react-helmet";
import styled from 'styled-components';
import { graphql } from "gatsby";
import Layout from "../layout";
import Posts from "../components/Posts";
import Container from "../components/Container";
import config from "../../data/config";
import SEO from "../components/SEO";
import fonts from '../styles/fonts';

const Title = styled.h1`
  font-size: 1.8rem;
  text-align: center;
  margin: 0;
  margin-bottom: 60px;
  ${fonts.secondary}
  font-weight: 300;
`

export default class CategoryTemplate extends Component {
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
          <Title>{`Todos os posts com a categoria "${category}"`}</Title>
          <article>
            <Posts postEdges={edges} />
          </article>
        </Container>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___prefix], order: DESC }
      filter: { frontmatter: { category: { eq: $category }, draft: { ne: true } } }
    ) {
      totalCount
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
