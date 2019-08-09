import { createGlobalStyle } from 'styled-components';
import Roboto from '~/assets/fonts/Roboto-Regular.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: "Roboto";
    src: url(${Roboto});
  }

  body,
  html {
    width: 100%;
    height: 100%;
    min-height: 100%;
    margin: 0;
    padding: 0;
    left: 0;
    top: 0;
    font-size: 100%;
    padding-bottom: 60px;
  }

  body {
    display: flex;
    flex-direction: column;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji','Segoe UI Emoji', 'Segoe UI Symbol';
    transition: color .5s ease-in-out;
  }

  ::-webkit-scrollbar {
    width: 8px;
    background-color: rgba(0, 0, 0, 0.09);
    -webkit-border-radius: 100px;
  }

  ::-webkit-scrollbar:hover {
    background-color: rgba(0, 0, 0, 0.18);
  }

  ::-webkit-scrollbar-thumb:vertical {
    background: rgba(0, 0, 0, 0.5);
    -webkit-border-radius: 100px;
  }

  ::-webkit-scrollbar-thumb:vertical:active {
    background: rgba(0, 0, 0, 0.61);
    -webkit-border-radius: 100px;
  }

  pre::-webkit-scrollbar {
    height: 8px;
    background-color: rgba(0, 0, 0, 0);
    -webkit-border-radius: 100px;
  }

  pre::-webkit-scrollbar:hover {
    background-color: rgba(0, 0, 0, 0.09);
  }

  pre::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.5);
    -webkit-border-radius: 100px;
  }

  pre::-webkit-scrollbar-thumb:active {
    background: rgba(0, 0, 0, 0.5);
    -webkit-border-radius: 100px;
  }

  .gatsby-highlight {
    padding-bottom: 14px;
    margin-bottom: 0.5em;
  }

  h1 {
    font-size: 1.625rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.375rem;
  }

  h4 {
    font-size: 1.25rem;
  }

  h5 {
    font-size: 1.125rem;
  }

  h6 {
    font-size: 1rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto', sans-serif;
  }

  a {
    color: #00a8ff;
    border-bottom: 1px solid transparent;
  }

  .dark {
    background-color: #393e46;
    color: #eee;
  }

  .dark p {
    color: #eee;
  }

  :not(pre) > code[class*="language-"] {
    padding: .1em 0.4em!important;
  }

  blockquote {
    border-left: 4px solid #e7e7e7;
    padding: 0 2rem;
    & p {
      font-style: italic!important;
      font-size: 0.88em!important;
    }
  }
`;
