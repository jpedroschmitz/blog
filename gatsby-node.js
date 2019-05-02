const path = require("path");
const kebabCase = require("lodash.kebabcase");
const { paginate } = require("gatsby-awesome-pagination");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode });
    const fileNode = getNode(node.parent);
    const source = fileNode.sourceInstanceName;
    const separtorIndex = slug.indexOf("--") ? slug.indexOf("--") : 0;
    const shortSlugStart = separtorIndex ? separtorIndex + 2 : 0;

    if (source !== "parts") {
      createNodeField({
        node,
        name: "slug",
        value: `${separtorIndex ? "/" : ""}${slug.substring(shortSlugStart)}`,
      });
    }
    createNodeField({
      node,
      name: "prefix",
      value: separtorIndex ? slug.substring(1, separtorIndex) : "",
    });
    createNodeField({
      node,
      name: "source",
      value: source,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve("src/templates/post.jsx");
    const tagTemplate = path.resolve("src/templates/tag.jsx");
    const categoryTemplate = path.resolve("src/templates/category.jsx");
    const categoriesTemplate = path.resolve("src/templates/categories.jsx");
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              sort: { fields: [fields___prefix], order: DESC }
              limit: 1000
              filter: { frontmatter: { draft: { ne: false } } }
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
        `,
      ).then((result) => {
        if (result.errors) {
          // eslint-disable-next-line no-console
          console.log(result.errors);
          reject(result.errors);
        }

        const items = result.data.allMarkdownRemark.edges;

        const categorySet = new Set();
        const tagSet = new Set();
        items.forEach((edge) => {
          const {
            node: {
              frontmatter: { category },
            },
          } = edge;

          const {
            node: {
              frontmatter: { tags },
            },
          } = edge;

          if (category && category !== null) {
            categorySet.add(category);
          }

          if (tags && tags !== null) {
            tags.forEach(tag => tagSet.add(tag));
          }
        });

        const itemsPerPage = 1;
        paginate({
          createPage,
          items,
          itemsPerFirstPage: itemsPerPage,
          itemsPerPage,
          pathPrefix: "/blog/",
          component: path.resolve("src/templates/blog.jsx"),
        });

        const categoryList = Array.from(categorySet);
        categoryList.forEach((category) => {
          createPage({
            path: `/categoria/${kebabCase(category)}/`,
            component: categoryTemplate,
            context: {
              category,
            },
          });
        });

        createPage({
          path: "/categorias/",
          component: categoriesTemplate,
          context: {
            categoryList,
          },
        });

        const tagList = Array.from(tagSet);
        tagList.forEach((tag) => {
          createPage({
            path: `/tag/${kebabCase(tag)}/`,
            component: tagTemplate,
            context: {
              tag,
            },
          });
        });

        const posts = items.filter(item => item.node.fields.source === "posts");
        posts.forEach(({ node }, index) => {
          const { slug, source } = node.fields;
          const next = index === 0 ? undefined : posts[index - 1].node;
          const prev = index === posts.length - 1 ? undefined : posts[index + 1].node;

          createPage({
            path: slug,
            component: postTemplate,
            context: {
              slug,
              prev,
              next,
              source,
            },
          });
        });
      }),
    );
  });
};
