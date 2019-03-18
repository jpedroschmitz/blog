import { createGlobalStyle } from "styled-components";
import LeagueSpartan from "../fonts";
import colors from "./colors";
import fonts from "./fonts";

export default createGlobalStyle`
  @font-face {
    font-family: 'League Spartan';
    font-style: normal;
    font-weight: normal;
    src: local('League Spartan'), url('${LeagueSpartan}') format('ttf');
  }

  body {
    ${fonts.primary}
  }

  h1 {
    font-size: 2.2222222222222223rem;
  }

  h2 {
    font-size: 2.0rem;
  }

  h3 {
    font-size: 1.75rem;
  }

  h4 {
    font-size: 1.5rem;
  }

  h5 {
    font-size: 1.25rem;
  }

  h6 {
    font-size: 1rem;
  }

  h1, h2, h3, h4, h5, h6 {
    ${fonts.primary}
    color: ${colors.black};
  }

  img {
    max-width: 100%;
  }

  a {
    color: ${colors.link};
    text-decoration: none;
  }

  p {
    font-size: 1.25rem;
    line-height: 2;
    letter-spacing: .069rem;
    color: ${colors.gray};
    ${fonts.secondary}
    font-weight: 300;
    font-style: normal;
    margin: 22px 0 22px 0;
    text-align: justify;
  }

  li {
    font-size: 1.25rem;
    line-height: 2;
    letter-spacing: .069rem;
    color: ${colors.gray};
    ${fonts.secondary}
    font-weight: 300;
    font-style: normal;
    margin: 22px 0 22px 0;
    text-align: left;
  }

  span {
    font-size: 1.25rem;
    line-height: 2;
    letter-spacing: .069rem;
    ${fonts.secondary}
    font-weight: 300;
    font-style: normal;
    text-align: left;
  }

  ::selection {
    background-color: ${colors.brand};
  }
`;
