import React from "react";
import Layout from "../components/Layout";
import PageBar from "../components/Internal/PageBar";
import Post from "../components/Internal/Post";
import Container from "../components/UI/Grid/Container";
import Row from "../components/UI/Grid/Row";

export default (props) => {
  const { pageContext } = props;
  const { group } = pageContext;
  const categories = group.map(item => (
    <Post
      key={item.fieldValue}
      title={item.fieldValue}
      quantity={item.totalCount}
    />
  ));
  return (
    <Layout>
      <PageBar title="Categorias" introduction="Veja aqui todas as categorias do blog." />
      <Container>
        <Row centered>
          {categories}
        </Row>
      </Container>
    </Layout>
  );
};
