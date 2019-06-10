---
template: post
title: "Criando um blog com Gatsby e React - Parte 4"
tags:
  - React
  - Gatsby
category: Gatsby
slug: blog-com-gatsby-e-react-parte-4
image: /img/upload/blog-gatsby-react.png
draft: false
date: 2019-03-18T03:00:00.000Z
description: "No 4 post da série vamos terminar o nosso blog e adicionar diversos plugins que irão deixá-lo sensacional!"
---

## Introdução <!-- omit in toc -->

Fala pessoal! Como vocês estão? Depois de alguns dias estou de volta para mais um post da nossa série. Hoje vamos adicionar vários plugins e melhorar algumas coisas. Por isso, como de costume, já pega o café e bora *codar*.

## Tabela de conteúdos <!-- omit in toc -->

- [Terminando o template dos posts](#terminando-o-template-dos-posts)
- [Melhorias no projeto](#melhorias-no-projeto)
- [Facilitando nossa vida](#facilitando-nossa-vida)
- [Melhorando o SEO](#melhorando-o-seo)
  - [Adicionando outros plugins](#adicionando-outros-plugins)
  - [Robots.txt](#robotstxt)
- [Conclusão](#conclus%C3%A3o)

## Terminando o template dos posts

Antes de começarmos a adicionar os plugins vamos primeiro terminar o template do nosso post. A ideia é adicionarmos um título, mostrarmos as tags e a data de publicação. Para isso, dentro de templates, no `post.jsx` adicione o seguinte código:

```jsx
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

![Página do post](/img/upload/result-part7.png)

## Melhorias no projeto

Agora que terminamos toda a parte bruta do site vamos começar a cuidar dos pequenos detalhes que vão deixar o nosso blog bem "equipado", e para começarmos, vamos usar um componente responsável por manipular o `head` das nossas páginas, o [Helmet](https://github.com/nfl/react-helmet).

## Facilitando nossa vida

De modo a facilitar a nossa vida nós vamos criar um arquivo JavaScript com os principais dados do nosso site, de modo que facilite a manutenção depois. Para isso, dentro da pasta `data` crie um arquivo `config.js`. Dentro dessa arquivo vamos colocar o título do nosso site, dados para o `manifest.json`, ID do Google Analytics e outras informações.

```javascript
// data/config.js
const config = {
  siteTitle: 'CodeStack Brasil',
  siteDescription: 'O melhor blog de programação do Brasil tem nome, é CodeStack.',
  siteTitleShort: 'CodeStack BR',
  siteRss: "/rss.xml",
  siteImage: "https://codestackbrasil.netlify.com/banner-do-site.png",
  googleAnalyticsID: "**-********-*",
  themeColor: "#000000",
  backgroundColor: "#F2F3F4",
  siteUrl: "https://codestackbrasil.netlify.com",
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

Se você abrir a página no navegador nada deve ter mudado. A mesma interface, porém com uma manutenção melhor. Agora vamos criar um estrutura básica para o helmet (plugin para editar o head do site), e para isso, nada mais justo que usarmos o layout.

Dentro do arquivo `Layout.jsx` adicione o seguinte componente junto com os imports:

```jsx
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

Todo mundo sabe que SEO é muito importante para qualquer site/blog por justamente criar visibilidade para a sua marca/produto ou para o seu framework JavaScript haha. Por tal motivo vamos precisar de um componente top para podermos usar em todas as páginas. Logo, dentro de `components` crie uma pasta SEO e um arquivo `SEO.jsx`. No arquivo cole o seguinte código:

```jsx
// src/components/SEO/SEO.jsx
import React from "react";
import { Helmet } from "react-helmet";
import config from "../../../data/config";

export default ({ title, description, url, article }) => {
  const seo = {
    title: title ? `${title} | ${config.siteTitle}` : config.siteTitle,
    description: description || config.siteDescription,
    image: config.siteImage,
    url: url ? `${config.siteUrl}${url}` : '',
  }

  return (
    <React.Fragment>
      <Helmet title={seo.title} >
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        {seo.url && <meta property="og:url" content={seo.url} />}
        {article ? (
          <meta property="og:type" content="article" />
        ) : (
          <meta property="og:type" content="website" />
        )}
        {seo.title && <meta property="og:title" content={seo.title} />}
        {seo.description && (
          <meta property="og:description" content={seo.description} />
        )}
        {seo.image && <meta property="og:image" content={seo.image} />}
        <meta name="twitter:card" content="summary_large_image" />
        {seo.title && <meta name="twitter:title" content={seo.title} />}
        {seo.description && (
          <meta name="twitter:description" content={seo.description} />
        )}
        {seo.image && <meta name="twitter:image" content={seo.image} />}
      </Helmet>
    </React.Fragment>
  )
}
```

Agora que temos o nosso componente de SEO o que precisamos fazer é adicionar nas nossas 4 páginas (tag, index, 404 e post).

```jsx
// src/templates/tag.jsx

// imports
import SEO from '../components/SEO/SEO';

export default class Tag extends Component {
  render() {
    const { data, pathContext } = this.props;
    const { tag } = pathContext;
    const { pathname } = this.props.location;
    return (
      <Layout>
        <div>
          <SEO title={`Tag: ${tag}`} description={`Todos os posts marcados com a tag "${tag}" no CodeStack Brasil`} url={pathname}/>
          <h2 style={{ fontSize: '22px', padding: '0px 15px' }}>Todos os posts com a tag: {tag}</h2>
          <Posts data={data}/>
        </div>
      </Layout>
    )
  }
};

// aqui fica a query normal
```

```jsx
// src/templates/posts.jsx

// imports
import SEO from '../components/SEO/SEO';

export default class Post extends Component {
  render() {
    const { data } = this.props;
    const { fields } = data.markdownRemark;
    const { slug } = fields;
    const { title, tags, date, description } = data.markdownRemark.frontmatter;
    const { html } = data.markdownRemark;
    return (
      <Layout>
        <div style={{ backgroundColor: '#FFF', width: '100%', padding: '1.5rem', borderRadius: '0.50rem', margin: '10px 15px'}}>
          <SEO title={title} url={slug} description={description} article />
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

// a query continua aqui
```

No `index.js` e no `404.js` basta importar o componente do SEO e adicionar dentro do `return`, mas, não esqueça de adicionar um title no componente da página de 404.

### Adicionando outros plugins

Seguindo a mesma ideia do Helmet vamos adicionar alguns plugins para o blog, são eles:

- [gatsby-plugin-sitemap](https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap) - Gera um sitemap automático no build;
- [gatsby-plugin-offline](https://www.gatsbyjs.org/packages/gatsby-plugin-offline) - Dá suporte para o site funcionar offline;
- [gatsby-plugin-manifest](https://www.gatsbyjs.org/packages/gatsby-plugin-manifest) - Cria um manifest sem complicações;
- [gatsby-plugin-google-analytics](https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics) - Dá suporte para o analytics no seu site;
- [gatsby-plugin-google-feed](https://www.gatsbyjs.org/packages/gatsby-plugin-feed) - Cria um feed RSS para o seu site.

```bash
npm install --save gatsby-plugin-sitemap gatsby-plugin-offline gatsby-plugin-manifest gatsby-plugin-google-analytics gatsby-plugin-feed
```

Depois de instalar todos esses plugins nós precisamos adicionar eles no arquivo `gatsby-config.js`.

```javascript
"gatsby-plugin-offline",
"gatsby-plugin-sitemap",
{
  resolve: "gatsby-plugin-manifest",
  options: {
    name: config.siteTitle,
    short_name: config.siteTitleShort,
    description: config.siteDescription,
    start_url: '/',
    background_color: config.backgroundColor,
    theme_color: config.themeColor,
    display: "standalone",
    icon: "static/favicon.png",
  },
},
{
  resolve: "gatsby-plugin-google-analytics",
  options: {
    trackingId: config.googleAnalyticsID,
  },
},
{
  resolve: `gatsby-plugin-feed`,
  options: {
    query: `
      {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `,
    feeds: [
      {
        serialize: ({ query: { site, allMarkdownRemark } }) => {
          return allMarkdownRemark.edges.map(edge => {
            return Object.assign({}, edge.node.frontmatter, {
              description: edge.node.excerpt,
              date: edge.node.frontmatter.date,
              url: site.siteMetadata.siteUrl + edge.node.fields.slug,
              guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
              custom_elements: [{ "content:encoded": edge.node.html }],
            })
          })
        },
        query: `
          {
            allMarkdownRemark(
              limit: 1000,
              sort: { order: DESC, fields: [frontmatter___date] },
              filter: {frontmatter: { draft: { ne: true } }}
            ) {
              edges {
                node {
                  excerpt
                  html
                  fields { slug }
                  frontmatter {
                    title
                    date
                  }
                }
              }
            }
          }
        `,
        output: "/rss.xml",
        title: "Gatsby RSS Feed",
      },
    ],
  },
},
```

Ah, já ia esquecendo de comentar. Você não precisa gerar imagens de todos os tamanhos para o seu manifest. Se você passar um ícone de 512 x 512 o plugin irá gerar automaticamente para você :)

### Robots.txt

Antes de terminar crie também um arquivo `robots.txt` dentro da pasta `static`. Nesse arquivo adicione o seguinte conteúdo:

```
User-agent: *

Allow: /
Disallow: /404

sitemap: https://codestackbrasil.netlify.com/sitemap.xml
```

*Observação: Lembre-se de trocar a URL pela a sua (caso não tenha uma pode trocar depois).*

## Conclusão

E depois de muita coisa feita chegamos ao fim do nosso penúltimo post da série. Caso tenha ficado com alguma dúvida ou quer deixar alguma sugestão não deixe de comentar aqui embaixo para podermos trocar uma ideia. No último post da série vamos aprender a fazer deploy no Netlify. Nos vemos lá! Deus abençoe!
