import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/Layout';
import InternalBar from 'components/InternalBar';
import InternalPost from 'components/InternalPost';
import Container from 'components/UI/Container';
import SEO from 'components/SEO';

export default function Tag({ pageContext, data }) {
  const { tag } = pageContext;
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <SEO
        pageTitle={`Tag: ${tag}`}
        pageDescription={`Veja todo o conteúdo relacionado com a tag ${tag} no blog do João Pedro Schmitz.`}
      />
      <InternalBar title={`Tag: ${tag}`} introduction="" />
      <Container>
        <article>
          {edges.map(item => (
            <InternalPost
              key={item.node.frontmatter.slug}
              category={item.node.frontmatter.category}
              date={item.node.frontmatter.date}
              title={item.node.frontmatter.title}
              slug={item.node.frontmatter.slug}
              borderColor={item.node.frontmatter.color}
            />
          ))}
        </article>
      </Container>
    </Layout>
  );
}

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___source], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }, draft: { eq: false } } }
    ) {
      totalCount
      edges {
        node {
          excerpt
          frontmatter {
            title
            tags
            date
            slug
            description
          }
        }
      }
    }
  }
`;

Tag.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }).isRequired,
  }),
};
