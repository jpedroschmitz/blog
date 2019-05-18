import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Post from "../components/Post";
import Container from "../components/UI/Grid/Container";
import Row from "../components/UI/Grid/Row";

export default ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <Container>
        <h2>Página não encontrada.</h2>
        <p style={{ marginBottom: "35px" }}>Se quiser pode dar uma olhada nos últimos posts :)</p>
        <Row centered>
          {edges.map(item => (
            <Post
              category={item.node.frontmatter.category}
              date={item.node.frontmatter.date}
              title={item.node.frontmatter.title}
            />
          ))}
        </Row>
      </Container>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [fields___prefix], order: DESC }
      limit: 6
      filter: { frontmatter: { draft: { ne: false } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
            prefix
            source
          }
          frontmatter {
            title
            date
            category
          }
        }
      }
    }
  }
`;
