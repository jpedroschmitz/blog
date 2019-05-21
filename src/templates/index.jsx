import React from "react";
import { graphql } from "gatsby";
import moment from "moment";
import "moment/locale/pt-br";
import Layout from "../components/Layout";
import Post from "../components/Post";
import Container from "../components/UI/Grid/Container";
import Row from "../components/UI/Grid/Row";
import Pagination from "../components/Pagination";

/*
  Um estudante de Engenharia de Software que é entusiasta de novas
  tecnologias e que adora aprender novos frameworks JavaScript.
  Atualemente trabalha como desenvolvedor FrontEnd, mas tem muita
  vontade de aprender mais sobre inteligência artificial.
*/

moment.locale("pt-br");

export default ({ data, location, pathContext }) => {
  const { origin } = location;
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <Container>
        <article>
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
      filter: { frontmatter: { draft: { eq: false } }, fields: { source: { eq: "posts"}} }
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "YYYYMMDD")
            slug
            image
            category
          }
        }
      }
    }
  }
`;
