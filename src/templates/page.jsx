import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content from "../components/Content";
import InternalBar from "../components/InternalBar";
import Container from "../components/UI/Grid/Container";
import SEO from "../components/SEO";

export default ({ data }) => {
  const { title, introduction, description } = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;
  return (
    <Layout>
      <SEO pageTitle={`${title}`} pageDescription={description} />
      <InternalBar title={title} introduction={introduction} />
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
