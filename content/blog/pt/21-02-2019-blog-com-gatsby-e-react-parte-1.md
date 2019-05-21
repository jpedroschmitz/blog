---
template: post
title: "Criando um blog com Gatsby e React - Parte 1"
tags:
  - React
  - Gatsby
category: Gatsby
slug: blog-com-gatsby-e-react-parte-1
image: /img/upload/blog-gatsby-react.png
draft: false
date: 2019-02-21T03:00:00.000Z
description: "Nesse primeiro post da série iremos ver o que é o Gatsby e porque é tão bom usá-lo. Além disso, daremos início ao nosso projeto criando a primeira página."
---

## Introdução  <!-- omit in toc -->

Iaee pessoal! Como vocês estão? Conforme prometido hoje estou aqui para começar a construir o nosso blog com React e Gatsby. Vai ter muita funcionalidade boa que vai deixar o blog top demais. Não esqueça de assinar o feed RSS para não perder os próximos posts.

Antes de começar já pega aquele cafezinho por que o primeiro post dessa série vai ser grande e tem muito conteúdo.

*Edit:* Caso queira ver o blog no ar clique [aqui](https://codestackbrasil.netlify.com/).

## Tabela de conteúdos <!-- omit in toc -->

- [Pré-requisitos](#pr%C3%A9-requisitos)
- [O que vamos construir?](#o-que-vamos-construir)
  - [Funcionalidades do blog](#funcionalidades-do-blog)
- [O que é o Gatsby?](#o-que-%C3%A9-o-gatsby)
  - [Plugins](#plugins)
- [Inciando o projeto](#inciando-o-projeto)
  - [Instalando dependências](#instalando-depend%C3%AAncias)
  - [Criando a estrutura](#criando-a-estrutura)
- [Criando o layout padrão](#criando-o-layout-padr%C3%A3o)
- [Testando no navegador](#testando-no-navegador)
- [Conclusão](#conclus%C3%A3o)


## Pré-requisitos

Não é necessário você ser um expert nessas tecnologias, mas, como vamos construir um blog com bastantes funcionalidades eu espero que você tenha ao menos um pouco de experiência com as tecnologias abaixo:

- HTML
- CSS
- JavaScript
- React

Vale ressaltar que não vou usar nenhuma biblioteca para UI. Iremos desenvolver tudo com "CSS puro".

Além disso, antes de começar verifique se você tem o Node.js e o NPM instalados na sua máquina. Para isso você pode rodar o seguinte comando no terminal: ``` node -v && npm -v ```. Se tudo der certo essa deverá ser a saída:

```sh
v8.11.3 // Node.js
5.6.0 // npm
```

*Observação: A versão mínima do Node para usar o Gatsby é a 8.*

Caso você não tenha o Node.js instalado baixe do site [oficial](<https://nodejs.org/en/>) e siga o processo de instalação.

## O que vamos construir?

Como já disse, o blog que iremos construir tem diversas funcionalidades. A ideia dessa série é que você possa aprender um pouco sobre o Gatsby para poder criar projetos e aumentar o seu portfólio. Além disso, ao final da série, você terá um blog bacana para poder publicar e compartilhar um pouco do que vem aprendendo.

Na lista abaixo você pode ver algumas funcionalidades que iremos implementar.

### Funcionalidades do blog

- Suporte para RSS Feed;
- Gerador automático de Sitemap;
- Suporte para Google Analytics;
- Suporte offline;
- Markdown para escrever os posts;
- Manifest.json;
- Tags;
- Robots.txt;
- OpenGraph Tags;
- Muita performance e layout insano!

## O que é o Gatsby?

Se você conhece o React já sabe que apesar de ter ele trazer diversas vantagens para o FrontEnd ele possui diversos problemas com SEO devido a renderização dos componentes no JavaScript.

Para contornar essa situação surgiram alguns frameworks como o Next.js e o Gatsby. O Next.js utiliza um processo de SSR (server-side-rendering), onde o Node renderiza o componente antes da requisição do cliente chegar. Por sua vez o Gatsby é um SSG (static site generator), ou seja, um gerador de sites estáticos.

Porém, vale ressaltar que o Gatsby não se limita a conteúdo estático, ele é meio que um hibrído, pois permite utilizar conteúdo dinâmico, conectar com um CMS e até mesmo utilizar SSR. Neste tutorial nos vamos focar principalmente na parte estática.

### Plugins

O Gatsby tem uma quantidade gigantesca de plugins muito úteis. Basicamente eles podem adicionar conteúdo externo, transformar conteúdo de outros formatos como Markdown e também permitem implementar funcionalidades como Manifest e suporte offline de uma maneira bem simples.

No nosso projeto vamos usar vários plugins, como o ``` gatsby-plugin-catch-links ```, que intercepta todos os links criados sem o ``` gatsby-link ``` e substitui o comportamento dos links para que a página não recarregue enquanto navegamos, preservando assim a sensação de SPA (Single Page Application).

## Inciando o projeto

Agora que já entendemos o que vamos construir e como é a tecnologia que iremos utilizar podemos dar início ao projeto. Para isso, abra o terminal e navegue até a pasta que você irá guardar o código.

Dentro do terminal digite ``` mkdir codeblog ``` e em seguida ``` cd codeblog ```. Feito isso, digite o comando ``` npm init -y ``` que irá criar o ``` package.json ```.

Com o ``` package.json ``` criado você pode abrir o projeto na sua IDE favorita. Caso você esteja usando o VS code pode usar o comando ``` code . ``` no terminal para abrir o projeto.

### Instalando dependências

Agora vamos instalar algumas dependências para que possamos começar o projeto. Para isso, digite o seguinte comando no terminal (aviso, esse processo pode demorar).

```
npm install react react-dom gatsby gatsby-source-filesystem gatsby-transformer-remark gatsby-plugin-catch-links lodash
```

Rodando esse comando você instalará o Gatsby, React e alguns plugins que irei comentar mais adiante.

Depois de todas as dependências estarem instaladas crie um arquivo na raíz da sua pasta chamado de ``` gatsby-config.js ``` e adicione o seguinte código:

```javascript
// gatsby-config.js
module.exports = {
  siteMetadata: {
    title: 'CodeBlog Brasil',
    description: 'O melhor blog de programação do Brasil'
  },
}
```

O ``` siteMetadata ``` reune algumas informações do projeto, como título e descrição. A ideia por trás dele é reutilizar a informação nas páginas e componentes, o que facilita as consultas e a manutenção do site.

### Criando a estrutura

Antes de começar a criar o nosso layout vamos estruturar o nosso projeto. Para isso dentro da raíz crie uma pasta chamada ``` static ```. É nela que guardaremos as nossas imagens e também alguns arquivos, como o ``robots.txt``.

Crie também na raíz do projeto as pastas ``` src ```, ``data`` e ``content``. Por sua vez, dentro de ``src`` crie as seguintes subpastas: ``components``, ``pages`` e ``templates``.

No final de todos esse processo essa deve ser a sua estrutura:

```
├── node_modules
├── src
├──── pages
├──── components
├──── templates
├── static
├── data
├── content
├── gatsby-config.js
├── package-lock.json
├── package.json
```

- content: onde guardaremos nossos posts;
- data: informações gerais do projeto;
- src: pasta onde ficará todo o nosso código.

## Criando o layout padrão

Agora que temos a nossa estrutura pronta vamos criar o nosso componente padrão para todas as telas, o layout. Para isso, crie uma pasta com o nome de `` Layout `` dentro de ``components``. Dentro dessa pasta crie também um arquivo ``Layout.jsx`` e um arquivo `` index.js ``.

```javascript
// src/components/Layout/Layout.jsx
import React from 'react';
import Header from '../Header';

export default ({ children, title }) => (
  <div>
    <Header title={title} />
    <main role="main">
      {children}
    </main>
  </div>
);
```

```javascript
// src/components/Layout/index.js
export { default } from "./Layout";
```

Se você reparou no código anterior percebeu que usamos um componente Header que ainda não foi criado. Portanto, para criar esse componente siga a mesma estrutura de pastas e arquivos de Layout.

```javascript
// src/components/Header/Header.jsx
import React from 'react';

export default ({ title }) => (
  <header className="header">
    <h1 className="header-title">{title}</h1>
  </header>
)
```

```javascript
// src/components/Header/index.js
export { default } from "./Header";
```

Com o básico do layout pronto vamos criar a página inicial. Para isso crie um arquivo `index.js` dentro de `pages`. É nesse arquivo que vamos fazer uma consulta utilizando GraphQL para pegarmos os dados do nosso blog (aqueles que salvamos no `gatsby-config.js`). O objetivo é simplificar a manutenção, até porque se precisarmos alterar o nosso título vamos a um só lugar :)

```javascript
// src/pages/index.js
import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export default ({ data }) => (
  <Layout title={data.site.siteMetadata.title}>
    <p>
      {data.site.siteMetadata.description}
    </p>
  </Layout>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
```

Antes de testarmos se tudo está funcionando é importante destacar que com o Gatsby podemos consultar dados com [*page query*](https://www.gatsbyjs.org/docs/page-query/) ou com [*static query*](https://www.gatsbyjs.org/docs/static-query/).

A *page query* permite que as páginas consultem dados utilizando GraphQL. Já a *static query* permite que componentes que não são páginas, como o Header, façam consultas também com GraphQL.

## Testando no navegador

Para testar e ver o resultado desenvolvido vamos executar o seguinte comando de dentro do terminal: ``` gatsby develop ```.

Se tudo der certo uma mensagem parecida com essa deve aparecer:

```
DONE  Compiled successfully in 4675ms

You can now view codestack in the browser.

...
```

Se você abrir o endereço [http://localhost:8000/](http://localhost:8000/) deverá ver a seguinte tela ainda sem muito estilo:

![Resultado do projeto até essa parte do post](/images/posts/2019-02-21--blog-com-gatsby-e-react-parte-1/result-part1.png)

## Conclusão

Nesse primeiro post entendemos um pouco do que é o Gatsby e de quebra já começamos o nosso blog. E claro, se você teve algum problema ou ficou com alguma dúvida não esqueça de comentar aqui embaixo, terei prazer em responder :)

Nos próximo post iremos criar toda a parte visual do nosso blog. Nos vemos lá! Deus abençoe!
