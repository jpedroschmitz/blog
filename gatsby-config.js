module.exports = {
  siteMetadata: {
    siteUrl: "https://www.joaopedro.cc/",
    disqusShortname: "blog-do-joao-pedro",
  },
  mapping: {
    "MarkdownRemark.frontmatter.category": "MarkdownRemark.frontmatter.title",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-image",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/static`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "upload",
        path: `${__dirname}/static/img/upload`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/blog/pt`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/content/pages/pt`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "categories",
        path: `${__dirname}/content/categories/pt`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 690,
            },
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
          },
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              aliases: {
                sh: "bash",
                react: "jsx",
                txt: "",
              },
            },
          },
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-autolink-headers",
        ],
      },
    },
    {
      resolve: "@gatsby-contrib/gatsby-plugin-elasticlunr-search",
      options: {
        fields: ["title", "tags", "category", "description"],
        resolvers: {
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            category: node => node.frontmatter.category,
            slug: node => node.frontmatter.slug,
          },
        },
      },
    },
  ],
};
