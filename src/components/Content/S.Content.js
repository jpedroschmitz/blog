import styled from "styled-components";
import fonts from "../../styles/fonts";
import colors from "../../styles/colors";

export default styled.div`
  & ol, ul {
    padding-left: 1.25rem;
    margin: 0 auto 1.875rem;
  }

  & ul {
    list-style: disc;
  }

  & ul > li {
    font-size: 1em;
    line-height: 2;
    letter-spacing: 0.069rem;
  }

  & li > ul {
    margin-bottom: 0;
  }

  & ul > p, li > p {
    margin-bottom: 0!important;
  }

  & a {
    color: inherit;
    text-decoration: none;
    font-size: 1em;
    line-height: 2;
    padding: 0;
    color: ${colors.link};
  }

  & a:hover {
    border-bottom: 1px dashed ${colors.linkHover};
  }

  & p {
    width: auto;
    float: none;
    display: block;
    margin-right: auto;
    margin-left: auto;
    padding-left: 0;
    padding-right: 0;
    margin: 0 auto 1.2rem;
    font-weight: 300;
    font-style: normal;
    font-size: 1em;
    line-height: 2;
    letter-spacing: 0.069rem;
  }

  & h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${fonts.primary}
    font-weight: 700;
    line-height: 1.4;
    margin: 0 auto 1.25rem;
  }
`;
