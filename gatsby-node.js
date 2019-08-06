const path = require('path');
const kebabCase = require('lodash.kebabcase');
const uniqBy = require('lodash.uniqby');

const { paginate } = require('gatsby-awesome-pagination');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src'),
      },
    },
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent);
    const source = fileNode.sourceInstanceName;
    createNodeField({
      node,
      name: 'source',
      value: source,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve('src/templates/post.jsx');
    const tagTemplate = path.resolve('src/templates/tag.jsx');
    const indexTemplate = path.resolve('src/templates/index.jsx');
    const categoryTemplate = path.resolve('src/templates/category.jsx');
    const categoriesTemplate = path.resolve('src/templates/categories.jsx');
    const pageTemplate = path.resolve('src/templates/page.jsx');
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC }
              limit: 1000
              filter: { frontmatter: { draft: { eq: false } } }
            ) {
              edges {
                node {
                  id
                  fields {
                    source
                  }
                  frontmatter {
                    slug
                    title
                    tags
                    image
                    category {
                      frontmatter {
                        title
                        introduction
                        description
                        color
                      }
                    }
                    introduction
                    description
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        const items = result.data.allMarkdownRemark.edges;

        const categorySet = new Set();
        const tagSet = new Set();
        const postsSet = new Set();
        items.forEach(edge => {
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

          if (source === 'pages') {
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
          } else if (source === 'posts') {
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
          pathPrefix: '/',
          component: indexTemplate,
        });

        const categoryList = Array.from(categorySet);
        createPage({
          path: '/categorias',
          component: categoriesTemplate,
          context: {
            categories: uniqBy(categoryList, 'frontmatter.title'),
          },
        });

        categoryList.forEach(category => {
          const {
            title,
            introduction,
            description,
            color,
          } = category.frontmatter;
          createPage({
            path: `/categoria/${kebabCase(category.frontmatter.title)}/`,
            component: categoryTemplate,
            context: {
              category: title,
              introduction,
              description,
              color,
            },
          });
        });

        const tagList = Array.from(tagSet);
        tagList.forEach(tag => {
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
          const next = index === 0 ? null : posts[index - 1].node;
          const prev =
            index === posts.length - 1 ? null : posts[index + 1].node;

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
      })
    );
  });
};
