import React from "react";
import Layout from "../components/Layout";
import InternalBar from "../components/InternalBar";
import InternalPost from "../components/InternalPost";
import Container from "../components/UI/Grid/Container";
import SEO from "../components/SEO";

const CategoriesPage = ({ pageContext }) => (
  <Layout>
    <SEO
      pageTitle="Categorias"
      pageDescription="Procure os assuntos do blog através de categorias como ReactJS, Gatsby, JavaScript, CSS, HTML e outras mais."
    />
    <InternalBar
      title="Categorias"
      introduction="Procure os assuntos do blog através de categorias."
    />
    <Container>
      <article>
        {pageContext.categories.map(item => (
          <InternalPost
            key={item.frontmatter.title}
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
