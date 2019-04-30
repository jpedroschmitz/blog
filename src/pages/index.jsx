import React from "react";
import Layout from "../components/Layout";
import Highlight from "../components/Post/Highlight";
import Post from "../components/Post";
import Container from "../components/UI/Grid/Container";
import Row from "../components/UI/Grid/Row";

/*
  Um estudante de Engenharia de Software que é entusiasta de novas
  tecnologias e que adora aprender novos frameworks JavaScript.
  Atualemente trabalha como desenvolvedor FrontEnd, mas tem muita
  vontade de aprender mais sobre inteligência artificial.
*/

export default () => (
  <Layout>
    <Highlight />
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
      <div style={{ textAlign: "center", cursor: "pointer", textTransform: "uppercase" }}>Check older posts</div>
    </Container>
  </Layout>
);
