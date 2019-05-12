import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PageBar from "../components/Internal/PageBar";
import Post from "../components/Internal/Post";
import Container from "../components/UI/Grid/Container";
import Row from "../components/UI/Grid/Row";

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
  <Layout>
    <PageBar title="Tags" introduction="Veja todas as tags do blog" />
    <Container>
      <Row centered>
        {group.map(item => (
          <Post
            key={item.fieldValue}
            title={item.fieldValue}
            link="tag"
            quantity={item.totalCount}
            slug={item.fieldValue}
          />
        ))}
      </Row>
    </Container>
  </Layout>
);

export default TagsPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
