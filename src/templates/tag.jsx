import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PageBar from "../components/PageBar";
import Post from "../components/Internal/Post";
import Container from "../components/UI/Grid/Container";

export default ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <PageBar title={`Tag: ${tag}`} introduction="" />
      <Container>
        <article>
          {edges.map(item => (
            <Post
              key={item.node.frontmatter.slug}
              category={item.node.frontmatter.category}
              date={item.node.frontmatter.date}
              title={item.node.frontmatter.title}
              slug={item.node.frontmatter.slug}
              borderColor={item.node.frontmatter.color}
            />
          ))}
        </article>
      </Container>
    </Layout>
  );
};

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___source], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }, draft: { eq: false } } }
    ) {
      totalCount
      edges {
        node {
          excerpt
          frontmatter {
            title
            tags
            date
            slug
            description
          }
        }
      }
    }
  }
`;
