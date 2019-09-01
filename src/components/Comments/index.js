import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import urljoin from 'url-join';
import ReactDisqusComments from 'react-disqus-comments';

export const PureComments = ({ data, postTitle, postSlug }) => {
  const { siteUrl, disqusShortname } = data.site.siteMetadata;

  if (!disqusShortname) return null;

  const url = urljoin(siteUrl, postSlug);
  return (
    <>
      <h3 style={{ marginBottom: '35px', fontWeight: 'bold' }}>
        Comentários xD
      </h3>
      <ReactDisqusComments
        shortname={disqusShortname}
        identifier={postSlug}
        title={postTitle}
        url={url}
      />
    </>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query CommentsQuery {
        site {
          siteMetadata {
            disqusShortname
            siteUrl
          }
        }
      }
    `}
    render={data => <PureComments {...props} data={data} />}
  />
);
