import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PageBar from "../components/Internal/PageBar";
import Post from "../components/Internal/Post";
import Container from "../components/UI/Grid/Container";

const CategoriesPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
  <Layout>
    <PageBar title="Categorias" introduction="Procure aqui os temas do blog através das categorias." />
    <Container>
      <article>
        {group.map(item => (
          <Post
            key={item.fieldValue}
            title={item.fieldValue}
            link="categoria"
            quantity={item.totalCount}
            slug={item.fieldValue}
          />
        ))}
      </article>
    </Container>
  </Layout>
);

export default CategoriesPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`;
