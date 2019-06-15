import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import InternalBar from "../components/InternalBar";
import InternalPost from "../components/InternalPost";
import Container from "../components/UI/Grid/Container";
import SEO from "../components/SEO";

export default ({ data, pageContext }) => {
  const { category, introduction, description, color } = pageContext;
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <SEO pageTitle={category} pageDescription={description} />
      <InternalBar color={color} title={`Categoria: ${category}`} introduction={introduction} />
      <Container>
        <article>
          {edges.map(item => (
            <InternalPost
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
      sort: { fields: [fields___source], order: DESC }
      filter: {
        frontmatter: {
          category: { frontmatter: { title: { eq: $category } } }
          draft: { eq: false }
        }
      }
    ) {
      totalCount
      edges {
        node {
          excerpt
          frontmatter {
            title
            tags
            date(formatString: "DD/MM/YYYY")
            slug
            description
          }
        }
      }
    }
  }
`;
