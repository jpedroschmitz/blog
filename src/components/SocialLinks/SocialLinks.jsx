import React, { Component } from "react";
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  GooglePlusIcon,
  LinkedinIcon,
} from "react-share";
import urljoin from "url-join";
import Container from '../Container';
import config from "../../../data/SiteConfig";
import classes from './SocialLinks.module.css';

class SocialLinks extends Component {
  render() {
    const { postNode, postPath, mobile } = this.props;
    const post = postNode.frontmatter;
    const url = urljoin(config.siteUrl, config.pathPrefix, postPath);
    const iconSize = mobile ? 36 : 48;

    return (
      <Container>
        <h3 style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '1.25rem' }}>Compartilhe :) </h3>
        <div className={classes.SocialIcons}>
          <TwitterShareButton url={url} title={post.title}>
            <TwitterIcon round size={iconSize} />
          </TwitterShareButton>
          <GooglePlusShareButton url={url}>
            <GooglePlusIcon round size={iconSize} />
          </GooglePlusShareButton>
          <FacebookShareButton url={url} quote={postNode.excerpt}>
            <FacebookIcon round size={iconSize} />
          </FacebookShareButton>
          <LinkedinShareButton url={url} title={post.title} description={postNode.excerpt}>
            <LinkedinIcon round size={iconSize} />
          </LinkedinShareButton>
        </div>
      </Container>
    );
  }
}

export default SocialLinks;
