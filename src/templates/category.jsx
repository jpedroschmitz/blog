import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PageBar from "../components/Internal/PageBar";
import Post from "../components/Internal/Post";
import Container from "../components/UI/Grid/Container";
import Row from "../components/UI/Grid/Row";

export default ({ pageContext, data }) => {
  const { category } = pageContext;
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <PageBar title={`Categoria: ${category}`} introduction="" />
      <Container>
        <Row centered>
          {edges.map(item => (
            <Post
              category={item.node.frontmatter.category}
              date={item.node.frontmatter.date}
              title={item.node.frontmatter.title}
              slug={item.node.frontmatter.slug}
              borderColor={item.node.frontmatter.color}
            />
          ))}
        </Row>
      </Container>
    </Layout>
  );
};

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
          excerpt
          frontmatter {
            title
            tags
            date
            category
            slug
            description
          }
        }
      }
    }
  }
`;
