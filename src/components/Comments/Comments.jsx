import React from "react";
import { graphql, StaticQuery } from "gatsby";
import ReactDisqusComments from "react-disqus-comments";

export const PureComments = ({ data, postTitle, postSlug }) => {
  const { siteUrl, disqusShortname } = data.site.siteMetadata;

  if (!disqusShortname) {
    return null;
  }

  return (
    <>
      <h3 style={{ marginBottom: "35px" }}>Comentários xD</h3>
      <ReactDisqusComments
        shortname={disqusShortname}
        identifier={postTitle}
        title={postTitle}
        url={siteUrl + postSlug}
      />
    </>
  );
};

export const Comments = props => (
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
export default Comments;
