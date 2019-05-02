import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PageBar from "../components/Internal/PageBar";
import Post from "../components/Internal/Post";
import Container from "../components/UI/Grid/Container";
import Row from "../components/UI/Grid/Row";

export default (props) => {
  console.log(props);
  const teste = <h1>teste</h1>;
  return (
    <Layout>
      <PageBar title="Posts com a categoria X" introduction="" />
      <Container>
        {teste}
        <Row centered>
          <Post title="Why you should start coding today, not tomorrow" quantity="5" />
          <Post title="Why you should start coding today, not tomorrow" quantity="5" />
          <Post title="Why you should start coding today, not tomorrow" quantity="5" />
          <Post title="Why you should start coding today, not tomorrow" quantity="5" />
          <Post title="Why you should start coding today, not tomorrow" quantity="5" />
        </Row>
      </Container>
    </Layout>
  );
}

export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___prefix], order: DESC }
      filter: {
        frontmatter: { category: { eq: $category }, draft: { ne: true } }
      }
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
            date
            category
            description
          }
        }
      }
    }
  }
`;
