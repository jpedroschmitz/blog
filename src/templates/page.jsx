import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PageBar from "../components/Internal/PageBar";
import Container from "../components/UI/Grid/Container";

// TODO - get description from pageContext and add to page head

export default ({ data }) => {
  const { title, introduction } = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;
  return (
    <Layout>
      <PageBar title={title} introduction={introduction} />
      <Container>
        <div dangerouslySetInnerHTML={{ __html: html }} />
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
