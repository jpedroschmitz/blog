import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '~/components/Layout';
import Content from '~/components/Content';
import InternalBar from '~/components/InternalBar';
import Container from '~/components/UI/Container';
import SEO from '~/components/SEO';

export default function Page({ data }) {
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
}

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

Page.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        introduction: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
