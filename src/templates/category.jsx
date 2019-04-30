import React from "react";
import Layout from "../components/Layout";
import PageBar from "../components/Internal/PageBar";
import Post from "../components/Internal/Post";
import Container from "../components/UI/Grid/Container";
import Row from "../components/UI/Grid/Row";

export default () => (
  <Layout>
    <PageBar title="Posts com a categoria X" introduction="" />
    <Container>
      <Row centered>
        <Post title="Why you should start coding today, not tomorrow" quantity="5" />
        <Post title="Why you should start coding today, not tomorrow" quantity="5" />
        <Post title="Why you should start coding today, not tomorrow" quantity="5" />
        <Post title="Why you should start coding today, not tomorrow" quantity="5" />
        <Post title="Why you should start coding today, not tomorrow" quantity="5" />
      </Row>
    </Container>
  </Layout>
);
