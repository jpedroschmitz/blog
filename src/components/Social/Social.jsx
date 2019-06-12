import React from "react";
import { graphql, StaticQuery } from "gatsby";
import {
  FacebookShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
} from "react-share";
import * as S from "./S.Social";

export const SocialIcons = ({ title, slug, data }) => {
  const { siteUrl } = data.site.siteMetadata;
  const url = siteUrl + slug;
  return (
    <React.Fragment>
      <S.Title>Compartilhe :)</S.Title>
      <S.Social>
        <TwitterShareButton url={url} title={title}>
          <TwitterIcon round size={38} />
        </TwitterShareButton>

        <WhatsappShareButton url={url} title={title}>
          <WhatsappIcon round size={38} />
        </WhatsappShareButton>

        <FacebookShareButton url={url}>
          <FacebookIcon round size={38} />
        </FacebookShareButton>

        <LinkedinShareButton url={url} title={title}>
          <LinkedinIcon round size={38} />
        </LinkedinShareButton>
      </S.Social>
    </React.Fragment>
  );
};

export const Social = props => (
  <StaticQuery
    query={graphql`
      query SocialQuery {
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `}
    render={data => <SocialIcons {...props} data={data} />}
  />
);

export default Social;
