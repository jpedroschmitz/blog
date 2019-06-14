const urljoin = require("url-join");
const config = require("./content/data/config");

module.exports = {
  siteMetadata: {
    siteUrl: `${config.siteUrl}`,
    disqusShortname: config.disqusShortname,
    rssMetadata: {
      site_url: urljoin(config.siteUrl, config.pathPrefix),
      feed_url: urljoin(config.siteUrl, config.pathPrefix, config.siteRss),
      title: config.siteTitle,
      description: config.siteDescription,
      image_url: `${urljoin(config.siteUrl, config.pathPrefix)}/images/favicon.png`,
      copyright: config.copyright,
    },
  },
  mapping: {
    "MarkdownRemark.frontmatter.category": "MarkdownRemark.frontmatter.title",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-lodash",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-image",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-offline",
    "gatsby-plugin-twitter",
    {
      resolve: "gatsby-plugin-canonical-urls",
      options: {
        siteUrl: config.siteUrl,
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: config.googleAnalyticsID,
      },
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: config.themeColor,
      },
    },
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
          {
            resolve: "gatsby-remark-autolink-headers",
            options: {
              offsetY: "90",
            },
          },
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
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: "standalone",
        icon: "static/favicon.png",
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/sitemap.xml",
        query: `
            {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`,
        // eslint-disable-next-line arrow-body-style
        serialize: ({ site, allSitePage }) => allSitePage.edges.map((edge) => {
          return {
            url: site.siteMetadata.siteUrl + edge.node.path,
          };
        }),
      },
    },
    {
      resolve: "gatsby-plugin-feed",
      options: {
        setup(ref) {
          const ret = ref.query.site.siteMetadata.rssMetadata;
          ret.allMarkdownRemark = ref.query.allMarkdownRemark;
          ret.generator = "GatsbyJS Plugin Feed";
          return ret;
        },
        query: `
        {
          site {
            siteMetadata {
              rssMetadata {
                site_url
                feed_url
                title
                description
                image_url
                copyright
              }
            }
          }
        }
      `,
        feeds: [
          {
            serialize(ctx) {
              const { rssMetadata } = ctx.query.site.siteMetadata;
              return ctx.query.allMarkdownRemark.edges.map(edge => ({
                categories: edge.node.frontmatter.tags,
                date: edge.node.frontmatter.title,
                title: edge.node.frontmatter.title,
                description: edge.node.excerpt,
                url: rssMetadata.site_url + edge.node.frontmatter.slug,
                guid: rssMetadata.site_url + edge.node.frontmatter.slug,
                custom_elements: [
                  {
                    "content:encoded": edge.node.html,
                  },
                  {
                    author: config.userEmail,
                  },
                ],
              }));
            },
            query: `
            {
              allMarkdownRemark(
                sort: { fields: [frontmatter___date], order: DESC }
                filter: { frontmatter: { draft: { eq: false } } }
              ) {
                edges {
                  node {
                    excerpt
                    html
                    timeToRead
                    frontmatter {
                      title
                      date
                      tags
                      slug
                    }
                  }
                }
              }
            }
          `,
            output: config.siteRss,
          },
        ],
      },
    },
  ],
};
