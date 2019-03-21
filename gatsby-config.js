const urljoin = require("url-join");
const config = require("./data/config");

module.exports = {
  pathPrefix: config.pathPrefix === "" ? "/" : config.pathPrefix,
  siteMetadata: {
    siteUrl: `${config.siteUrl}`,
    disqusShortname: config.disqusShortname,
    rssMetadata: {
      site_url: urljoin(config.siteUrl, config.pathPrefix),
      feed_url: urljoin(config.siteUrl, config.pathPrefix, config.siteRss),
      title: config.siteTitle,
      description: config.siteDescription,
      image_url: `${urljoin(
        config.siteUrl,
        config.pathPrefix,
      )}/images/favicon.png`,
      copyright: config.copyright,
    },
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-lodash",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/static/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/`,
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
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-image",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-twitter",
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
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: "standalone",
        icon: "static/images/favicon.png",
      },
    },
    "gatsby-plugin-offline",
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
        feeds: [{
          serialize(ctx) {
            const {
              rssMetadata,
            } = ctx.query.site.siteMetadata;
            return ctx.query.allMarkdownRemark.edges.map(edge => ({
              categories: edge.node.frontmatter.tags,
              date: edge.node.fields.date,
              title: edge.node.frontmatter.title,
              description: edge.node.excerpt,
              url: rssMetadata.site_url + edge.node.fields.slug,
              guid: rssMetadata.site_url + edge.node.fields.slug,
              custom_elements: [{
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
                limit: 1000,
                sort: { fields: [fields___prefix], order: DESC }
                filter: { frontmatter: { draft: { ne: true } } }
              ) {
                edges {
                  node {
                    excerpt
                    html
                    timeToRead
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                      category
                      tags
                    }
                  }
                }
              }
            }
          `,
          output: config.siteRss,
        }],
      },
    },
  ],
};
