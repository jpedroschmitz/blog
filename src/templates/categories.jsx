import React from "react";
import Layout from "../components/Layout";
import PageBar from "../components/PageBar";
import Post from "../components/Internal/Post";
import Container from "../components/UI/Grid/Container";

const CategoriesPage = ({ pageContext }) => (
  <Layout>
    <PageBar title="Categorias" introduction="Procure aqui os temas do blog através das categorias." />
    <Container>
      <article>
        {pageContext.categories.map(item => (
          <Post
            key={item.fieldValue}
            title={item.frontmatter.title}
            color={item.frontmatter.color}
            link="categoria"
            slug={item.frontmatter.title}
          />
        ))}
      </article>
    </Container>
  </Layout>
);

export default CategoriesPage;
