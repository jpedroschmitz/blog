import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import {
  FacebookShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PocketShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
  PocketIcon,
} from 'react-share';
import urljoin from 'url-join';
import * as S from './S.ContentSocial';

export const SocialIcons = ({ title, slug, data }) => {
  const { siteUrl } = data.site.siteMetadata;
  const url = urljoin(siteUrl, slug);
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

        <LinkedinShareButton url={url}>
          <LinkedinIcon round size={38} />
        </LinkedinShareButton>

        <PocketShareButton url={url} title={title}>
          <PocketIcon round size={38} />
        </PocketShareButton>
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
