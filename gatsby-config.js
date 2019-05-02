module.exports = {
  siteMetadata: {
    headerTitle: "João Pedro S.",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-react-helmet",
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
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [{
          resolve: "gatsby-remark-images",
          options: {
            maxWidth: 690,
          },
        },
        {
          resolve: "gatsby-remark-responsive-iframe",
        },
        "gatsby-remark-prismjs",
        "gatsby-remark-copy-linked-files",
        "gatsby-remark-autolink-headers",
        ],
      },
    },
  ],
};
