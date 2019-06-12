import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content from "../components/Content";
import PageBar from "../components/PageBar";
import Container from "../components/UI/Grid/Container";

export default ({ data }) => {
  const { title, introduction } = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;
  return (
    <Layout>
      <PageBar title={title} introduction={introduction} />
      <Container>
        <Content html={html} />
      </Container>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        introduction
        description
      }
    }
  }
`;
