import React from "react";
import Helmet from "react-helmet";
import config from "../../data/config";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GlobalStyle from "../styles/global";
import favicon from "../../static/images/favicon.png";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        <GlobalStyle />
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <link rel="icon" href={favicon} />
        </Helmet>
        <Header />
        <main role="main">{children}</main>
        <Footer config={config} />
      </React.Fragment>
    );
  }
}
