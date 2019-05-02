import React from "react";
import Layout from "../components/Layout";
import PageBar from "../components/Internal/PageBar";
import Post from "../components/Internal/Post";
import Container from "../components/UI/Grid/Container";

export default (props) => {
  const { pageContext } = props;
  const { categoryList } = pageContext;
  return (
    <Layout>
      <PageBar title="Categorias" introduction="React, Gatsby, node.js. Do FrontEnd ao BackEnd. Veja aqui todas as categorias do blog." />
      <Container>
        {categoryList.map(item => <Post title={item} key={item} quantity="1" />)}
      </Container>
    </Layout>
  );
};
