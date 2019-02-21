import React, { Component } from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";
import Layout from "../layout";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";
import Container from "../components/Container";
import Gif from "../../static/404.gif";

class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <Helmet title={`Página não encontrada | ${config.siteTitle}`} />
        <SEO />
        <Container>
          <h2 style={{ marginBottom: "22px" }}>Vish, deu ruim...</h2>
          <img src={Gif} alt="Pessoa caindo" title="Hoje nãããão!" />
          <p>
            Se quiser voltar para a página inicial&nbsp;
            <Link to="/">clique aqui</Link>
          </p>
          <p>
            Caso queira conhecer um pouco de mim pode clicar&nbsp;
            <Link to="/sobre">aqui</Link>
          </p>
        </Container>
      </Layout>
    );
  }
}

export default AboutPage;
