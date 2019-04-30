import React from "react";
import Layout from "../components/Layout";
import Post from "../components/Post";
import Container from "../components/UI/Grid/Container";
import Row from "../components/UI/Grid/Row";

export default () => (
  <Layout>
    <Container>
      <h2>Página não encontrada.</h2>
      <p style={{ marginBottom: "35px" }}>Se quiser pode dar uma olhada nos últimos posts :)</p>
      <Row centered>
        <Post />
        <Post />
        <Post />
      </Row>
    </Container>
  </Layout>
);
