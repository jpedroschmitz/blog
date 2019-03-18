import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";
import styled from "styled-components";
import colors from "../../../../styles/colors";

const Tags = styled.div`
  margin-top: 35px;
  padding: 10px 0 0 12px;
`;

const Tag = styled(Link)`
  background: ${colors.secondary};
  border-radius: 3px 0 0 3px;
  color: ${colors.black};
  display: inline-block;
  height: 26px;
  line-height: 26px;
  padding: 0 20px 0 23px;
  position: relative;
  margin: 0 10px 10px 0;
  text-decoration: none;
  transition: color 0.2s;
  border: none;

  &::before {
    background: ${colors.black};
    border-radius: 10px;
    content: "";
    height: 6px;
    left: 10px;
    position: absolute;
    width: 6px;
    top: 10px;
  }

  &::after {
    background: ${colors.white};
    border-bottom: 13px solid transparent;
    border-left: 10px solid ${colors.secondary};
    border-top: 13px solid transparent;
    content: "";
    position: absolute;
    right: 0;
    top: 0;
  }

  &:hover {
    background-color: ${colors.brand};
    border: none;
  }

  &:hover::after {
    border-left-color: ${colors.brand};
  }
`;

export default class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <Tags>
        {
          tags
          && tags.map(tag => (
            <Tag key={tag} to={`/tag/${_.kebabCase(tag)}`}>
              {tag}
            </Tag>
          ))}
      </Tags>
    );
  }
}
