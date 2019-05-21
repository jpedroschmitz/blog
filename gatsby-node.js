const path = require("path");
const kebabCase = require("lodash.kebabcase");
const { paginate } = require("gatsby-awesome-pagination");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({
      node,
      getNode,
    });
    const fileNode = getNode(node.parent);
    const source = fileNode.sourceInstanceName;
    const separatorIndex = slug.indexOf("--") ? slug.indexOf("--") : 0;
    const shortSlugStart = separatorIndex ? separatorIndex + 2 : 0;

    if (source !== "parts") {
      createNodeField({
        node,
        name: "slug",
        value: `${separatorIndex ? "/" : ""}${slug.substring(shortSlugStart)}`,
      });
    }
    createNodeField({
      node,
      name: "prefix",
      value: separatorIndex ? slug.substring(1, separatorIndex) : "",
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
    const indexTemplate = path.resolve("src/templates/index.jsx");
    const categoryTemplate = path.resolve("src/templates/category.jsx");
    const pageTemplate = path.resolve("src/templates/page.jsx");
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              sort: {fields: [fields___source], order: DESC},
              limit: 1000,
              filter: {frontmatter: {draft: { eq: false }}}
            ) {
              edges {
                node {
                  id
                  fields {
                    prefix
                    source
                  }
                  frontmatter {
                    slug
                    title
                    tags
                    category
                    introduction
                    description
                  }
                }
              }
            }
          }
        `,
      )
        .then((result) => {
          if (result.errors) {
            // eslint-disable-next-line no-console
            console.log(result.errors);
            reject(result.errors);
          }

          const items = result.data.allMarkdownRemark.edges;

          const categorySet = new Set();
          const tagSet = new Set();
          const postsSet = new Set();
          items.forEach((edge) => {
            const {
              node: {
                frontmatter: { category },
              },
            } = edge;

            const {
              node: {
                fields: { source },
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

            if (source === "pages") {
              const {
                node: {
                  frontmatter: { slug },
                },
              } = edge;

              createPage({
                path: slug,
                component: pageTemplate,
                context: {
                  slug,
                },
              });
            } else if (source === "posts") {
              postsSet.add(edge);
            }
          });

          const itemsPerPage = 12;
          const posts = Array.from(postsSet);
          paginate({
            createPage,
            items: posts,
            itemsPerFirstPage: itemsPerPage,
            itemsPerPage,
            pathPrefix: "/",
            component: indexTemplate,
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

          posts.forEach(({ node }, index) => {
            const { source } = node.fields;
            const { slug } = node.frontmatter;
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
