import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/Layout';
import Post from 'components/Post';
import Container from 'components/UI/Container';
import Row from 'components/UI/Row';
import SEO from 'components/SEO';

export default ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <SEO
        pageTitle="Página não encontrada"
        pageDescription="Infelizmente a página desejada não pode ser encontrada."
      />
      <Container>
        <h2>Página não encontrada.</h2>
        <p style={{ marginBottom: '35px', marginTop: '20px' }}>
          Se quiser pode dar uma olhada nos últimos posts :)
        </p>
        <Row centered>
          {edges.map(item => (
            <Post
              key={item.node.frontmatter.slug}
              timeToRead={item.node.timeToRead}
              date={item.node.frontmatter.date}
              title={item.node.frontmatter.title}
              image={item.node.frontmatter.image}
              slug={item.node.frontmatter.slug}
            />
          ))}
        </Row>
      </Container>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 6
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { draft: { eq: false } }
        fields: { source: { eq: "posts" } }
      }
    ) {
      edges {
        node {
          timeToRead
          frontmatter {
            title
            date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
            slug
            image
            category {
              frontmatter {
                title
                color
              }
            }
          }
        }
      }
    }
  }
`;
