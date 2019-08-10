import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import moment from 'moment';
import Layout from '~/components/Layout';
import Comments from '~/components/Comments';
import ContentInfo from '~/components/ContentInfo';
import Content from '~/components/Content';
import ContentSocial from '~/components/ContentSocial';
import ContentNavigation from '~/components/ContentNavigation';
import Container from '~/components/UI/Container';
import SEO from '~/components/SEO';

export default function Post({ data, pageContext }) {
  const { html } = data.markdownRemark;
  const {
    title,
    image,
    date,
    category,
    slug,
    tags,
  } = data.markdownRemark.frontmatter;
  const { timeToRead } = data.markdownRemark;
  return (
    <Layout>
      <ContentInfo
        timeToRead={timeToRead}
        title={title}
        date={moment(date, 'YYYY-MM-DDTh:m:sZ').fromNow()}
        category={category.frontmatter.title}
        color={category.frontmatter.color}
        image={image}
        tags={tags}
      />
      <SEO postNode={data.markdownRemark} postPath={slug} postSEO />
      <Container>
        <Content html={html} />
        <ContentSocial title={title} slug={slug} />
        <ContentNavigation prev={pageContext.prev} next={pageContext.next} />
        <Comments postTitle={title} postSlug={slug} />
      </Container>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        image
        slug
        date
        category {
          frontmatter {
            title
            color
          }
        }
        tags
        description
      }
    }
  }
`;

Post.propTypes = {
  pageContext: PropTypes.shape({
    prev: PropTypes.object,
    next: PropTypes.object,
  }),
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        category: PropTypes.shape({
          frontmatter: PropTypes.shape({
            title: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired,
          }).isRequired,
        }).isRequired,
        slug: PropTypes.string.isRequired,
        tags: PropTypes.array.isRequired,
      }).isRequired,
      timeToRead: PropTypes.number.isRequired,
      html: PropTypes.string.isRequired,
    }).isRequired,
  }),
};
