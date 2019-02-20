const myQuery = `{
    allSitePage {
      edges {
        node {
          objectID: id
          component
          path
          componentChunkName
          jsonName
          internal {
            type
            contentDigest
            owner
          }
        }
      }
    }
  }`;
  
  const queries = [
    {
      query: myQuery,
      transformer: ({ data }) => data.allSitePage.edges.map(({ node }) => node),
      indexName: `content`,
    },
  ];
  
  
  module.exports = queries