import React, { Component } from "react";
import Helmet from "react-helmet";
import { Link } from 'gatsby';
import Layout from "../layout";
import SEO from '../components/SEO/SEO';
import config from "../../data/SiteConfig";
import Container from "../components/Container";
import PictureFrame from '../components/PictureFrame';

class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <Helmet title={`Página não encontrada | ${config.siteTitle}`} />
        <SEO />
        <Container>
          <h2>Heyy, você está perdido?</h2>
          <p>
            Se quiser voltar para a página inicial&nbsp;
            <Link to="/">clique aqui</Link>
            .
          </p>
          <p>
            Caso queira conhecer um pouco de mim pode clicar&nbsp;
            <Link to="/sobre">aqui</Link>
            .
          </p>
          <p>
            Ou se você quiser pode ficar admirando minha beleza
          </p>
          <PictureFrame />
        </Container>
      </Layout>
    );
  }
}

export default AboutPage;
