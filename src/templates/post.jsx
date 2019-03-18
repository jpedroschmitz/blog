import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import SEO from "../components/SEO";
import Content from "../components/Content";
import GlobalStyleCode from "../styles/code";
import config from "../../data/config";

export default class PostTemplate extends Component {
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
        <GlobalStyleCode />
        <Layout>
          <Helmet
            title={`${post.title} | ${config.siteTitle}`}
            description={post.description}
          />
          <SEO postPath={slug} postNode={postNode} postSEO />
          <Content
            post={post}
            postNode={postNode}
            slug={slug}
            config={config}
            timeToRead={data.markdownRemark.timeToRead}
            nextTitle={
              pageContext.next ? pageContext.next.frontmatter.title : ""
            }
            nextSlug={pageContext.next ? pageContext.next.fields.slug : ""}
            prevTitle={
              pageContext.prev ? pageContext.prev.frontmatter.title : ""
            }
            prevSlug={pageContext.prev ? pageContext.prev.fields.slug : ""}
          />
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
        cover {
          childImageSharp {
            sizes(maxWidth: 1150) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        date
        category
        tags
        description
      }
      fields {
        slug
      }
    }
  }
`;
