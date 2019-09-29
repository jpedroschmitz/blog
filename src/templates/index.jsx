import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/Layout';
import Post from 'components/Post';
import Container from 'components/UI/Container';
import Row from 'components/UI/Row';
import Pagination from 'components/Pagination';
import SEO from 'components/SEO';

export default ({ data, pathContext }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <SEO postSEO={false} />
      <Container>
        <article>
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
        </article>
        <Pagination
          next={pathContext.nextPagePath}
          previous={pathContext.previousPagePath}
          page={pathContext.humanPageNumber}
          quantity={pathContext.numberOfPages}
        />
      </Container>
    </Layout>
  );
};

export const pageQuery = graphql`
  query IndexQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      skip: $skip
      limit: $limit
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
