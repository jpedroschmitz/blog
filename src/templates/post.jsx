import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import Disqus from "../components/Disqus/Disqus";
import SEO from "../components/SEO/SEO";
import Content from "../components/Content";
import config from "../../data/SiteConfig";
import "../styles/code-dark.css";

export default class PostTemplate extends React.Component {
  render() {
    const { pageContext, data } = this.props;
    const { slug } = pageContext;
    const postNode = data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <React.Fragment>
        <Layout>
          <Helmet title={`${post.title} | ${config.siteTitle}`} />
          <SEO postPath={slug} postNode={postNode} postSEO />
          <Content post={post} postNode={postNode} slug={slug} config={config} />
          <Disqus postNode={postNode} />
        </Layout>
      </React.Fragment>
    );
  }
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        nextTitle
        nextSlug
        prevTitle
        prevSlug
        slug
        date
      }
    }
  }
`;
