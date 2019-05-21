import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PageBar from "../components/Internal/PageBar";
import Post from "../components/Internal/Post";
import Container from "../components/UI/Grid/Container";

export default ({ pageContext, data }) => {
  const { category } = pageContext;
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <PageBar title={`Categoria: ${category}`} introduction="" />
      <Container>
        <article>
          {edges.map(item => (
            <Post
              key={item.node.frontmatter.slug}
              category={item.node.frontmatter.category}
              date={item.node.frontmatter.date}
              title={item.node.frontmatter.title}
              slug={item.node.frontmatter.slug}
            />
          ))}
        </article>
      </Container>
    </Layout>
  );
};

export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___prefix], order: DESC }
      filter: { frontmatter: { category: { eq: $category }, draft: { eq: false } } }
    ) {
      totalCount
      edges {
        node {
          excerpt
          frontmatter {
            title
            tags
            date(formatString: "DD/MM/YYYY")
            category
            slug
            description
          }
        }
      }
    }
  }
`;
