import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import Header from "../components/Header";
import Footer from "../components/Footer";
import favicon from "../../static/logos/favicon.png";
import "minireset.css";
import "./Layout.css";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
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
