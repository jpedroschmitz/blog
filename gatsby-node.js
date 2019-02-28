const path = require("path");
const _ = require("lodash");

const { paginate } = require('gatsby-awesome-pagination');

const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode });
    const fileNode = getNode(node.parent);
    const source = fileNode.sourceInstanceName;
    const separtorIndex = slug.indexOf("--") ? slug.indexOf("--") : 0;
    const shortSlugStart = separtorIndex ? separtorIndex + 2 : 0;

    if (source !== "parts") {
      createNodeField({
        node,
        name: `slug`,
        value: `${separtorIndex ? "/" : ""}${slug.substring(shortSlugStart)}`
      });
    }
    createNodeField({
      node,
      name: `prefix`,
      value: separtorIndex ? slug.substring(1, separtorIndex) : ""
    });
    createNodeField({
      node,
      name: `source`,
      value: source
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve("src/templates/post.jsx");
    const tagTemplate = path.resolve("src/templates/tag.jsx");
    const categoryTemplate = path.resolve("src/templates/category.jsx");
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              sort: { fields: [fields___prefix], order: DESC }
              limit: 1000
              filter: { frontmatter: { draft: { ne: true } } }
            ) {
              edges {
                node {
                  id
                  fields {
                    slug
                    prefix
                    source
                  }
                  frontmatter {
                    title
                    tags
                    category
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          /* eslint no-console: "off" */
          console.log(result.errors);
          reject(result.errors);
        }

        const items = result.data.allMarkdownRemark.edges;

        /* Create a category and a tag list */
        const categorySet = new Set();
        const tagSet = new Set();
        items.forEach(edge => {
          const {
            node: {
              frontmatter: { category }
            }
          } = edge;

          const {
            node: {
              frontmatter: { tags }
            }
          } = edge;

          if (category && category !== null) {
            categorySet.add(category);
          }

          if (tags && tags !== null) {
            tags.forEach(tag => tagSet.add(tag));
          }
        });

        const itemsPerPage = 5;
        paginate({
          createPage, 
          items,
          itemsPerFirstPage: itemsPerPage, 
          itemsPerPage,
          pathPrefix: '/', 
          component: path.resolve('src/templates/index.jsx'), 
        });

        /* Create the category page */
        const categoryList = Array.from(categorySet);
        categoryList.forEach(category => {
          createPage({
            path: `/categoria/${_.kebabCase(category)}/`,
            component: categoryTemplate,
            context: {
              category
            }
          });
        });
        
        /* Create the tag page */
        const tagList = Array.from(tagSet);
        tagList.forEach(tag => {
          createPage({
            path: `/tag/${_.kebabCase(tag)}/`,
            component: tagTemplate,
            context: {
              tag
            }
          });
        });

        /* Create the posts page */
        const posts = items.filter(item => item.node.fields.source === "posts");
        posts.forEach(({ node }, index) => {
          const { slug, source } = node.fields;
          const next = index === 0 ? undefined : posts[index - 1].node;
          const prev =
            index === posts.length - 1 ? undefined : posts[index + 1].node;

          createPage({
            path: slug,
            component: postTemplate,
            context: {
              slug,
              prev,
              next,
              source
            }
          });
        });
      })
    );
  });
};
