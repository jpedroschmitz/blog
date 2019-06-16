---
template: post
title: "Criando um blog com Gatsby e React - Parte 3"
tags:
  - React
  - Gatsby
category: Gatsby
slug: blog-com-gatsby-e-react-parte-3
image: /img/upload/blog-gatsby-react-2.png
draft: false
date: 2019-02-28T03:00:00.000Z
description: "No post de hoje vamos configurar a API Node do Gatsby para converter os posts de Markdown para HTML. Além disso veremos como realizar consultas com GraphQL no Gatsby."
---

## Introdução <!-- omit in toc -->

Fala pessoal! Como vocês estão? Estou de volta hoje para falar mais um pouquinho de Gatsby, e logo de cara vamos implementar a parte mais "complexa" do nosso blog, a listagem de posts na capa. Além disso, vamos criar um template para mostrar todos os posts marcados com a mesma tag. Por isso, já liga a cafeteira que o post de hoje vai ser grande.

## Tabela de conteúdos <!-- omit in toc -->
- [Configurando o Gatsby](#configurando-o-gatsby)
- [Criando os posts](#criando-os-posts)
- [Criando os templates](#criando-os-templates)
- [Criando um componente para listar os posts](#criando-um-componente-para-listar-os-posts)
- [Configurando a API Node do Gatsby](#configurando-a-api-node-do-gatsby)
- [Fazendo consultas e terminado a home](#fazendo-consultas-e-terminado-a-home)
- [Finalizando o template das tags](#finalizando-o-template-das-tags)
- [Conclusão](#conclus%C3%A3o)

## Configurando o Gatsby

Primeiro antes de mais nada nos vamos dar uma configurada no Gatsby para que ele possa reconhecer os plugins que temos instalados. Para isso, abra o arquivo ```gatsby-config.js``` e adicione o seguinte conteúdo:

```javascript
// gatsby-config.js
module.exports = {
  siteMetadata: {
    title: "CodeBlog Brasil",
    description: "O melhor blog de programação do mundo"
  },
  plugins: [
    "gatsby-plugin-catch-links",
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/posts`
      }
    }
  ]
}
```

- `gatsby-transformer-remark`: é responsável por transformar os posts do blog escritos em markdown para HTML;

- `gatsby-plugin-react-helmet`: O [helmet](https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/?=helmet) é um componente que permite você controlar o head do seu site. Vai ser muito útil para trocar o title e description das páginas;

- `gatsby-source-filesystem`: usado para "pegar" dados dos arquivos do sistema, de modo que possamos usá-los no Gatsby.

Porém, antes de continuar precisamos instalar o helmet.

```bash
npm install gatsby-plugin-react-helmet react-helmet
```

## Criando os posts

Dentro de content crie uma pasta chamada `posts`. É nela que iremos colocar todos os posts do nosso blog, também separados por pastas.

Sabendo disso, vamos criar um padrão para as pastas dos posts, de modo que ao olhar para uma pasta podemos saber a data do post e sua URL. Portando crie dentro de `posts` uma pasta com o seguinte nome: `2019-02-28--nosso-primeiro-post`. Dentro dessa pasta crie também um arquivo `index.md` e cole o seguinte conteúdo.

```md
---
title: "Nosso primeiro post"
date: "2019-02-28"
description: "Illas semine campoque declivia oppida corpora nam inter fuit discordia tellus solidumque iunctarum erat: quae terrenae ubi rerum recessit"
draft: false
tags:
    - Blog
    - Primeiro post
---

Aqui vai todo o conteúdo do seu blog, e você pode editar e escrever da maneira que mais gostar. Agora, como todo site deve ter, bora colocar um lorem ipsum:

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt hendrerit purus at elementum. Quisque sit amet malesuada felis. Proin ac fermentum lacus. Duis libero magna, iaculis ac semper id, volutpat ac mauris. Pellentesque ultricies lectus ut lectus eleifend fringilla. Nunc laoreet placerat pretium. Phasellus nec ultricies sem. Nunc pharetra ullamcorper elementum. Sed eget sem et nibh volutpat pharetra vel ac enim.
```

Todo o bloco ao redor dos hífens é chamado de `frontmatter`, e é nele que declaramos os principais dados do nosso post.

- title: Título do post;
- date: Data do post;
- description: Para a listagem e meta tags;
- draft: Define se o post será ou não publicado
- tags: Tags escolhidas para o post

E abaixo dos `frontmatter` vai todo o conteúdo do post, que, será transformado para HTML em um piscar de olhos! Agora, aproveite e crie mais alguns posts dentro de `content`, assim podemos testar melhor!

## Criando os templates

Precisamos criar também dois templates, um para os posts e outro para mostrar os posts que tem a mesma tag. Esses templates vão ser usados na hora de criar as páginas dinâmicas (algo que veremos mais para frente). Para começar crie dois arquivos dentro da pasta templates em src, o `tag.jsx` e o `post.jsx`.

```jsx
// src/templates/tag.jsx
import React from "react";
import Layout from "../components/Layout";

export default ({ data }) => (
  <Layout>
    <p>
      {/* Aqui vamos listar os posts com determinada tag */}
    </p>
  </Layout>
);
```

```jsx
// src/templates/post.jsx
import React from "react";
import Layout from "../components/Layout";

export default ({ data }) => (
  <Layout>
    <p>
      {/* Aqui vai todo o conteúdo do seu post */}
    </p>
  </Layout>
);
```

## Criando um componente para listar os posts

Com os templates criados precisamos criar também um componente que vai pegar os dados e listar eles nas páginas que forem necessárias.

Portanto, crie dentro de `components` uma pasta `Posts`.

```jsx
// src/components/Posts/Posts.jsx
import React from 'react';
import { Link } from 'gatsby';
import './Posts.css';

export default ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  const posts = (
    edges.map(({ node }) => (
      <div key={node.fields.slug} className="post">
        <Link to={node.fields.slug} className="post-title"><h2>{node.frontmatter.title}</h2></Link>
        <p className="post-date">{node.frontmatter.date}</p>
        <p>{node.frontmatter.description}</p>
      </div>
    ))
  );
  return (
    <div className="posts">
      {posts}
    </div>
  )
}
```

```javascript
// src/components/Posts/index.js
export { default } from './Posts.jsx';
```

```css
/* src/components/Posts/Posts.css */
.posts {
  padding: 10px 15px;
  width: 100%;
}

.post {
  padding: 1.5rem;
  margin-bottom: 1rem;
  border-radius: .50rem;
  background-color: #FFFFFF;
}

.post-title {
  color: #000000;
  text-decoration: none;
}

.post-title h2 {
  margin-bottom: 5px;
  font-size: 22px;
  font-weight: bold;
}

.post-date {
  margin-bottom: 5px;
}
```

## Configurando a API Node do Gatsby

Calma, calma, você não precisa ficar preocupado. Não iremos precisar de um servidor com node para o nosso site. O que acontece na verdade, é que o Gatsby fornece uma API em Node.js, que por sua vez providencia diversas funcionalidades, inclusive criação de páginas dinâmicas a partir de arquivos.

Essa API pode ser acessada a partir de um arquivo chamado `gatsby-node.js` que deve ficar na raiz do projeto. Esse arquivo pode também exportar várias API's nodes, mas, nós só estamos interessados na `createPages` API. E como ele vai ficar bem grande, vou deixar nesse [gist](https://gist.github.com/jpedroschmitz/5d783e83573992eb1f37ff323503c81c) para que vocês possam copiar e colar no seu `gatsby-node.js`.

Se ficar com alguma dúvida pode deixar aqui nos comentários que terei prazer em te ajudar. Além disso, você pode dar uma olhada nesse [tutorial](https://www.gatsbyjs.org/docs/creating-and-modifying-pages/) do site do Gatsby que ele me ajudou bastante a entender como criar páginas dinâmicas.

Além disso, é importante avisar que toda vez que você alterar o arquivo `gatsby-node.js` irá precisar reiniciar o servidor. Para isso basta dar um `CTRL + C` no terminal e usar o `gatsby develop` novamente.

## Fazendo consultas e terminado a home

*Observação: Se você não entende de GraphQL não deixe de seguir com o tutorial.*

O que vamos fazer agora é realizar uma consulta para pegarmos os dados que irão vir dos posts. Mas antes vamos olhar uma ferramenta muito legal do Gatsby, o GraphiQL. Para isso abra a seguinte url no seu navegador preferido: [http://localhost:8000/___graphql](http://localhost:8000/___graphql).

O GraphiQL é uma ferramenta que ajuda a economizar muito tempo procurando erros e facilita demais a nossa vida. Para testá-la adicione a seguinte query e execute:

```graphql
{
  allMarkdownRemark(limit: 2000, sort: {fields: [fields___prefix], order: DESC}) {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          title
          tags
          date
          description
        }
      }
    }
  }
}
```

Se nenhum erro surgiu você deve ter visto um JSON com os principais dados dos nossos posts. E uma vez que testamos e obtivemos sucesso na ferramenta podemos realizar a mesma consulta utilizando uma page query. Portanto, dentro do `index.jsx` em `pages` adicione o seguite código:

```jsx
// src/pages/index.jsx
import React, { Component } from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Posts from '../components/Posts';
import 'minireset.css';

export default class Index extends Component {
  render() {
    const { data } = this.props;
    return (
      <Layout>
        <Posts data={data}/>
      </Layout>
    )
  }
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2000
      sort: {fields: [fields___prefix], order: DESC}
      filter: { frontmatter: { draft: { ne: true } } }
      ) {
      edges {
        node {
          fields {
            slug
          }
          timeToRead
          frontmatter {
            title
            tags
            date(formatString: "DD/MM/YYYY")
            description
          }
        }
      }
    }
  }
`;
```

Se tudo deu certo a sua página principal deve ter tido umas mudanças que deram um vida para nosso blog. Porém, vale ressaltar que nessa consulta estamos filtrando os posts de modo que somente os posts que não são rascunhos sejam mostrados.

![Página inicial do blog](/img/upload/result-part5.png)

Se você reparou viu que já temos um link que nos leva para a página do post, que, ainda não tem nada. Todavia, essa parte de mostrar o conteúdo fica para a nosso próximo post da série.

## Finalizando o template das tags

O template para as tags é muito parecido com a nossa página inicial. A única diferença é que teremos um consulta diferente e também um título acima dos posts, para ajudar o usuário a se localizar. Portanto, abra o `tag.jsx` e adicione o seguinte código:

```jsx
// src/templates/tag.jsx
import React, { Component } from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Posts from '../components/Posts';

export default class Tag extends Component {
  render() {
    const { data, pathContext } = this.props;
    const { tag } = pathContext;
    return (
      <Layout>
        <div>
          <h2 style={{ fontSize: '22px', padding: '0px 15px' }}>Todos os posts com a tag: {tag}</h2>
          <Posts data={data}/>
        </div>
      </Layout>
    )
  }
};

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___prefix], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }, draft: { ne: true } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {para falar a verdade
            title
            date(formatString: "DD/MM/YYYY")
            description
          }
        }
      }
    }
  }
`;
```

Se quiser testar a página pode o fazer pela seguinte URL: [http://localhost:8000/tag/blog/](http://localhost:8000/tag/blog/).

![Página das tags](/img/upload/result-part6.png)

## Conclusão

No post de hoje vimos muita coisa e começamos a dar vida para o nosso blog, que até agora já tem muitas funcionalidades boas, porém, tem também muita coisa para melhorar.

No próximo post vamos terminar a página que mostra o conteúdo dos posts. Além disso vamos adicionar muitos plugins do Gatsby que irão deixar o blog fantástico. Nos vemos lá! Deus abençoe!
