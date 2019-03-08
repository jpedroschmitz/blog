import React, { Component } from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";
import Layout from "../layout";
import SEO from "../components/SEO";
import config from "../../data/config";
import Container from "../components/Container";
import Gif from "../../static/images/general/404.gif";

export default class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <Helmet title={`Página não encontrada | ${config.siteTitle}`} />
        <SEO />
        <Container>
          <h2>Vish, deu ruim...</h2>
          <img
            src={Gif}
            style={{ maxWidth: "100%" }}
            alt="Pessoa caindo"
            title="Hoje nãããão!"
          />
          <p>
            Se quiser voltar para a página inicial&nbsp;
            <Link to="/">clique aqui</Link>
            . Caso queira conhecer um pouco de
            mim pode clicar&nbsp;
            <Link to="/sobre">aqui</Link>
            .
          </p>
        </Container>
      </Layout>
    );
  }
}
