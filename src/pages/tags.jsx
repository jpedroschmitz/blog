import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PageBar from "../components/PageBar";
import Post from "../components/Internal/Post";
import Container from "../components/UI/Grid/Container";

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
  <Layout>
    <PageBar title="Tags" introduction="JavaScript, React, node.js e até Java. Tem de tudo um pouco." />
    <Container>
      <article>
        {group.map(item => (
          <Post
            key={item.fieldValue}
            title={item.fieldValue}
            link="tag"
            quantity={item.totalCount}
            slug={item.fieldValue}
          />
        ))}
      </article>
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
