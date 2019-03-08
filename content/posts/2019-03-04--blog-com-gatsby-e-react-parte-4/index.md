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
  - [Seção de comentários com Disqus](#se%C3%A7%C3%A3o-de-coment%C3%A1rios-com-disqus)
- [Adicionando vários plugins](#adicionando-v%C3%A1rios-plugins)
- [React Helmet](#react-helmet)
  - [Manifest.json](#manifestjson)
  - [Suport offline](#suport-offline)
  - [Analytics](#analytics)
  - [Sitemap](#sitemap)
  - [RSS](#rss)
- [Melhorando o SEO](#melhorando-o-seo)
- [Adicionando um favicon](#adicionando-um-favicon)

## Terminando o template dos posts

Antes de começarmos a adicionar os plugins vamos primeiro terminar o template do nosso post. A ideia é adicionarmos um título, mostrarmos as tags e a data de publicação.

Para isso, dentro de templates, no `post.jsx` adicione o seguinte código:

```javascript
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
          <p style={{ marginTop: '1rem' }} dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </Layout>
    )
  }
};

export const pageQuery = graphql`
  query PostPage($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } } ) {
      html
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

![Página do post](/images/posts/2019-03-04--blog-com-gatsby-e-react-parte-4/result-part7.png)

O nosso post não ficou muito bonito, mas vou deixar a estilização com você!
 
### Seção de comentários com Disqus

Agora que temos o nosso template vamos adicionar o Disqus ao nosso site.

## Adicionando vários plugins

## React Helmet

### Manifest.json

### Suport offline

### Analytics

### Sitemap

### RSS

## Melhorando o SEO

## Adicionando um favicon