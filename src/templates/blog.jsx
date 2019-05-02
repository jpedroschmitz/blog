import React from "react";
import Layout from "../components/Layout";
import Post from "../components/Post";
import Container from "../components/UI/Grid/Container";
import Row from "../components/UI/Grid/Row";
import Pagination from "../components/Pagination";

/*
  Um estudante de Engenharia de Software que é entusiasta de novas
  tecnologias e que adora aprender novos frameworks JavaScript.
  Atualemente trabalha como desenvolvedor FrontEnd, mas tem muita
  vontade de aprender mais sobre inteligência artificial.
*/

export default () => (
  <Layout>
    <Container>
      <Row centered>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </Row>
      <Pagination page="1" quantity="3" />
    </Container>
  </Layout>
);
