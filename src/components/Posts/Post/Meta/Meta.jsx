import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import colors from "../../../../styles/colors";
import breakpoints from "../../../../styles/breakpoints";

const Meta = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 0;
  padding: 10px 0 0 12px;
  a::first-letter {
    text-transform: capitalize;
  }
  ${breakpoints.md} {
    padding: 10px 0 0 05px;
  }
  ${breakpoints.sm} {
    padding: 05px 0 0 05px;
  }
`;

const Text = styled.span`
  font-size: ${props => (props.small ? "1.06rem" : "1.12rem")};
  ${breakpoints.md} {
    margin-top: 4px;
    font-size: ${props => (props.small ? "1.12rem" : "0.98rem")};
  }
`;

const Category = styled(Link)`
  color: ${colors.gray};
  font-size: ${props => (props.small ? "1.06rem" : "1.12rem")};
  ${breakpoints.md} {
    margin-top: 4px;
    font-size: ${props => (props.small ? "1.12rem" : "0.98rem")};
  }
`;

const MetaContent = styled.span`
  margin: 0px 10px 5px 0px;
  display: flex;
  align-items: center;
`;

const Svg = styled.svg`
  fill: ${colors.brand};
  margin: 0px 5px 0px 0px;
`;

export default ({ date, category, timeToRead }) => (
  <Meta>
    <MetaContent>
      <Svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 448 512"
        size="18"
        height="18"
        width="18"
      >
        <path d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z" />
      </Svg>
      <Text>
        {date.replace(/(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}).(\d{2})0Z/gm, '$3/$2/$1')}
        {timeToRead ? ` - ${timeToRead} min` : ""}
      </Text>
    </MetaContent>
    <MetaContent>
      <Svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 448 512"
        size="18"
        height="18"
        width="18"
      >
        <path d="M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z" />
      </Svg>
      <Category to={`/categoria/${category}`}>{category}</Category>
    </MetaContent>
  </Meta>
);
