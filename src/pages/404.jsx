import React from "react";
import { graphql } from "gatsby";
import moment from "moment";
import Layout from "../components/Layout";
import Post from "../components/Post";
import Container from "../components/UI/Grid/Container";
import Row from "../components/UI/Grid/Row";

export default ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <Container>
        <h2>Página não encontrada.</h2>
        <p style={{ marginBottom: "35px" }}>Se quiser pode dar uma olhada nos últimos posts :)</p>
        <Row centered>
          {edges.map(item => (
            <Post
              key={item.node.frontmatter.slug}
              category={item.node.frontmatter.category}
              date={moment(item.node.frontmatter.date, "YYYYMMDD").fromNow()}
              title={item.node.frontmatter.title}
              image={`${origin}${item.node.frontmatter.image}`}
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
      filter: { frontmatter: { draft: { eq: false } }, fields: { source: { eq: "posts" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "YYYYMMDD")
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
