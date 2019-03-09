import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import SEO from "../components/SEO";
import config from "../../data/config";
import Container from "../components/Container";

export default class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <Helmet title={`Sobre mim | ${config.siteTitle}`} />
        <SEO />
        <Container wide>
          <h2>Sobre mim</h2>

          <p>
            Meu nome é João Pedro Schmitz, nasci em Pinhalzinho/SC e sou
            estagiário em uma empresa de tecnologia da minha cidade. Nas horas
            vagas sou desenvolvedor FrontEnd Junior.
          </p>
          <p>
            No início de 2017 começei a cursar Engenharia de Software na
            Universidade do Estado de Santa Catarina e atualmente estou na 5ª
            fase. Nessa época também descobri o poder do desenvolvimento web, e
            de lá para cá foram muitos e muitos cursos e muitas horas de estudo
            e prática. Hoje procuro me especializar principalmente no
            desenvolvimento FrontEnd e em UX/UI.
          </p>
          <p>
            Além de tudo isso eu ainda amo trabalhar em equipe e ajudar as
            pessoas. No meu tempo livre costumo estudar teologia e conhecer um
            pouco melhor Jesus :)
          </p>

          <h2>Habilidades</h2>
          <ul>
            <li>HTML</li>
            <li>Design responsivo</li>
            <li>CSS</li>
            <li>CSS Frameworks</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Git</li>
            <li>PHP</li>
            <li>MySQL - MongoDB</li>
            <li>Scrum</li>
          </ul>

          <h2>Contato</h2>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/jpedroschmitz/"
                rel="noreferrer nofollow"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="mailto:jpedroschmitz@hotmail.com"
                rel="noreferrer nofollow"
              >
                E-mail
              </a>
            </li>
            <li>
              <a
                href="https://github.com/jpedroschmitz"
                rel="noreferrer nofollow"
              >
                GitHub
              </a>
            </li>
          </ul>
        </Container>
      </Layout>
    );
  }
}
