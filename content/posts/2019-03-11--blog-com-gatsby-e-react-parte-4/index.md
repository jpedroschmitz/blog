---
title: "Criando um blog com Gatsby e React - Parte 4"
cover: "./cover.png"
date: 2019-02-26
description: "4 post da série"
category: "gatsby"
draft: true
tags:
    - React
    - Gatsby
---

## Introdução

Iaee pessoal! Como vocês estão? Depois de alguns dias estou de volta hoje para mais um post da nossa série, onde vamos adicionar vários plugins e melhorar algumas coisas. Por isso, como de costume, já pega o café e bora *codar*.

## Tabela de conteúdos <!-- omit in toc -->

- [Introdução](#introdu%C3%A7%C3%A3o)
- [Terminando o template dos posts](#terminando-o-template-dos-posts)
- [Melhorias no projeto](#melhorias-no-projeto)
- [React Helmet](#react-helmet)
- [Melhorando o SEO](#melhorando-o-seo)
  - [manifest.json e suporte offline](#manifestjson-e-suporte-offline)
  - [Google Analytics](#google-analytics)
  - [Sitemap.xml e RSS](#sitemapxml-e-rss)

## Terminando o template dos posts

Antes de começarmos a adicionar os plugins vamos primeiro terminar o template do nosso post. A ideia é adicionarmos um título, mostrarmos as tags e a data de publicação.

Para isso, dentro de templates, no `post.jsx` adicione o seguinte código:

```javascript
// src/templates/post.jsx
import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import _ from "lodash";
import Layout from "../components/Layout";

export default class Post extends Component {
  render() {
    const { data } = this.props;
    const { title, tags, date } = data.markdownRemark.frontmatter;
    const { html } = data.markdownRemark; 
    return (
      <Layout>
        <div style={{ backgroundColor: '#FFF', width: '100%', padding: '1.5rem', borderRadius: '0.50rem', margin: '10px 15px'}}>
          <h2 style={{ fontSize: '22px', fontWeight: 'bold' }}>{title}</h2>
          <p>{tags.map(tag => <Link style={{ color: '#000', marginRight: '10px' }} key={tag} to={`/tag/${_.kebabCase(tag)}`}>{tag}</Link>)}</p>
          <p>{date}</p>
          <div className="content">
            <p dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </Layout>
    )
  }
};

export const pageQuery = graphql`
  query PostPage($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } } ) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        date(formatString: "DD/MM/YYYY")
        tags
        description
      }
      fields {
        slug
      }
    }
  }
`;
```

Adicione também um pouco de CSS no `Layout.css`.

```css
/* src/components/Layout/Layout.css */
/* ... */
.content p {
    line-height: 1.5;
    text-align: justify;
    margin: 22px 0px;
}
```

![Página do post](/images/posts/2019-03-04--blog-com-gatsby-e-react-parte-4/result-part7.png)

## Melhorias no projeto

Agora que terminamos toda a parte bruta do site vamos começar a cuidar dos pequenos detalhes que vão deixar o nosso blog bem "equipado", e para começarmos, vamos usar um componente responsável por manipular o `head` das nossas páginas, o [Helmet](https://github.com/nfl/react-helmet).

## React Helmet
 
Antes de começarmos a usar o Helmet precisamos instalar ele junto com um plugin do Gatsby que permite o suporte para renderização dos dados no *server*.

```
npm install --save react-helmet gatsby-plugin-react-helmet
```

Uma vez que o plugin foi instalado precisamos adicionar dentro do `gatsby-node.js`. Portanto, dentro do array de plugins adicione a seguite linha: `'gatsby-plugin-react-helmet'`

E antes de começarmos a usar vamos criar um arquivo JavaScript com os principais dados do nosso site, de modo que facilitesse a nossa manutenção depois. Logo, dentro da pasta `data` crie um arquivo chamado `config.js`.

Dentro dessa arquivo vamos colocar o título do nosso site, dados para o `manifest.json`, id do Google Analytics e outras coisas.

```javascript
// data/config.js
const config = {
  siteTitle: 'CodeStack Brasil', 
  siteDescription: 'O melhor blog de programação do Brasil', 
  siteTitleShort: 'CodeStack BR',
  siteRss: "/rss.xml",
  googleAnalyticsID: "**-********-*",
  themeColor: "#000000",
  backgroundColor: "#F2F3F4",
};

module.exports = config;
```

Agora precisamos editar o `gatsby-config.js`.

```javascript
// gatsby-config.js
const config = require("./data/config");

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDescription
  },
  // plugins aqui
}
```

Se você abrir a página no navegador nada deve ter mudado. A mesma interface, porém com uma manutenção melhor.

O que precisamos fazer nesse momento é criar um estrutura básica para o helmet, e para isso, nada mais justo que usarmos o layout.

Dentro do arquivo `Layout.jsx` adicione o seguinte componente junto com os imports:

```javascript
// src/components/Layout/Layout.jsx

// imports aqui
import Helmet from 'react-helmet';
import favicon from '../../../static/favicon.png';
import config from '../../../data/config';

export default ({ children }) => (
  <div>
    <Helmet>
      <meta name="description" content={config.siteDescription} />
      <link rel="icon" href={favicon} />
    </Helmet>
    /* o resto do conteúdo */
  </div>
);
```

O favicon que estou utilizando aqui pode ser encontrado nesse [link](https://br.pinterest.com/pin/638877897118737778), mas caso queira usar outra imagem sinta-se à vontate.

## Melhorando o SEO

Todo mundo sabe que SEO é muito importante para qualquer site/blog por justamente criar visibilidade para a sua marca/produto ou para o seu framework JavaScript haha. Por tal motivo vamos precisar de um componente top, e, nem precisamos criar n



### manifest.json e suporte offline

### Google Analytics

### Sitemap.xml e RSS