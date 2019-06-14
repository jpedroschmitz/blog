import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import InternalBar from "../components/InternalBar";
import InternalPost from "../components/InternalPost";
import Container from "../components/UI/Grid/Container";
import SEO from "../components/SEO";

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
  <Layout>
    <SEO
      pageTitle="Tags"
      pageDescription="Procure os assuntos do blog através de tags como ReactJS, Gatsby, JavaScript, CSS, HTML e outras mais."
    />
    <InternalBar title="Tags" introduction="Veja aqui todas as tags do blog, como React.js, Gatsby.js e outras." />
    <Container>
      <article>
        {group.map(item => (
          <InternalPost
            key={item.fieldValue}
            title={item.fieldValue}
            link="tag"
            quantity={item.totalCount}
            slug={item.fieldValue}
          />
        ))}
      </article>
    </Container>
  </Layout>
);

export default TagsPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
