import React, { Component } from "react";
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  GooglePlusIcon,
  LinkedinIcon
} from "react-share";
import styled from "styled-components";
import urljoin from "url-join";
import config from "../../../../data/config";

const Title = styled.h4`
  text-align: center;
  margin-bottom: 1.3rem;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 55px;
  & > div {
    margin: 0 10px 0 10px;
  }
`;

export default ({ postNode, postPath, mobile }) => {
  const post = postNode.frontmatter;
  const url = urljoin(config.siteUrl, config.pathPrefix, postPath);
  const iconSize = mobile ? 36 : 48;

  return (
    <React.Fragment>
      <Title>Compartilhe :)</Title>

      <SocialIcons>
        <TwitterShareButton url={url} title={post.title}>
          <TwitterIcon round size={iconSize} />
        </TwitterShareButton>

        <GooglePlusShareButton url={url}>
          <GooglePlusIcon round size={iconSize} />
        </GooglePlusShareButton>

        <FacebookShareButton url={url} quote={postNode.excerpt}>
          <FacebookIcon round size={iconSize} />
        </FacebookShareButton>

        <LinkedinShareButton
          url={url}
          title={post.title}
          description={postNode.excerpt}
        >
          <LinkedinIcon round size={iconSize} />
        </LinkedinShareButton>
      </SocialIcons>
    </React.Fragment>
  );
};
