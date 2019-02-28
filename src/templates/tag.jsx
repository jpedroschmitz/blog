import React, { Component } from "react";
import Helmet from "react-helmet";
import styled from 'styled-components';
import { graphql } from "gatsby";
import Layout from "../layout";
import Posts from "../components/Posts";
import Container from "../components/Container";
import SEO from "../components/SEO";
import config from "../../data/config";
import fonts from '../styles/fonts';

const Title = styled.h1`
  font-size: 1.8rem;
  text-align: center;
  margin: 0;
  margin-bottom: 60px;
  ${fonts.secondary}
  font-weight: 300;
`

export default class TagTemplate extends Component {
  render() {
    const { pageContext, data } = this.props;
    const { tag } = pageContext;
    const { edges } = data.allMarkdownRemark;
    return (
      <Layout>
        <SEO />
        <Container>
          <Helmet title={`Posts com a tag "${tag}" | ${config.siteTitle}`} />
          <Title>{`Todos os posts com a tag "${tag}"`}</Title>
          <article>
            <Posts postEdges={edges} />
          </article>
        </Container>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___prefix], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }, draft: { ne: true } } }
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
