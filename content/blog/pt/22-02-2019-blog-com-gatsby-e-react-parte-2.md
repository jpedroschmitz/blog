---
template: post
title: "Criando um blog com Gatsby e React - Parte 2"
tags:
  - React
  - Gatsby
category: Gatsby
slug: blog-com-gatsby-e-react-parte-2
image: /img/upload/blog-gatsby-react.png
draft: false
date: 2019-02-24T03:00:00.000Z
description: "No post de hoje vamos dar continuidade ao nosso blog adicionando um reset, fontes e também criando a identidade visual das páginas."
---

## Introdução <!-- omit in toc -->

Iaee pessoal! Como vocês estão? Hoje estou de volta para dar continuidade a nossa série. Então já pega o cafezinho porque hoje vai ter muita coisa boa.

E conforme eu comentei no último post, hoje nós vamos desenvolver toda a parte visual do blog para deixar ele bonitão. Por isso, já abra o projeto e bora colocar a mão na massa.

## Tabela de conteúdos <!-- omit in toc -->

- [Adicionando um reset ao site](#adicionando-um-reset-ao-site)
- [Adicionando uma fonte](#adicionando-uma-fonte)
- [Estilizando o header](#estilizando-o-header)
  - [Criando um container](#criando-um-container)
  - [Criando o sidebar](#criando-o-sidebar)
- [Criando uma página de erro 404](#criando-uma-p%C3%A1gina-de-erro-404)
- [Conclusão](#conclus%C3%A3o)



## Adicionando um reset ao site

Antes de começarmos a fazer o header, sidebar e todo o site, precisamos primeiro adicionar um reset para remover o estilo padrão dos navegadores. Para isso eu vou usar o [minireset.css](https://jgthms.com/minireset.css/), que pode ser instalado com o seguinte comando:

```bash
npm install minireset.css
```

Ao terminar a instalação abra o `index.js` dentro de pages e adicione a seguinte linha de código:

```javascript
import 'minireset.css';
```

![Blog com reset aplicado](/images/posts/2019-02-22--blog-com-gatsby-e-react-parte-2/result-part2.png)

## Adicionando uma fonte

Agora que temos um reset para o site vamos adicionar uma fonte para o blog, e, a escolhida da vez foi a [Raleway](https://fonts.google.com/?query=rale&selection.family=Raleway:400,700).

Para usar uma fonte devemos primeiro importar ela, e isso pode ser feito adicionando uma tag no head do site ou adicionando um import no CSS, que é o que vamos usar. Para isso, crie um arquivo `Layout.css` e adicione esse código:

```css
/* src/components/Layout/Layout.css*/
@import url('https://fonts.googleapis.com/css?family=Raleway:400,700');

body {
    font-family: 'Raleway', sans-serif;
    background-color: #F2F3F4;
}

html, body {
    height: 100%;
}

p, div {
    font-size: 16px;
}
```

Agora, dentro do `Layout.jsx` adicione o seguite código para que possamos aplicar o CSS.

```javascript
// src/components/Layout/Layout.jsx
import './Layout.css';
```

## Estilizando o header

Depois de aplicarmos um reset e de termos adicionado uma fonte para o site podemos finalmente começar a deixar esse blog mais bonito, e, nada mais justo do que começarmos pelo `Header`. Portanto, dentro da pasta do Header crie um arquivo `Header.css` e adicione o CSS abaixo:

```css
/* src/components/Header/Header.css */
.header {
    padding: 1.0rem 1.5rem 1.0rem 1.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    font-size: 24px;
    background-color: #FFFFFF;
    margin-bottom: 1.0rem;
}

.header a {
    text-decoration: none;
}

.header-title {
    font-weight: bold;
    color: #000000;
}
```

Agora vamos importar e realizar uma pequena melhoria ao nosso site. Vamos realizar a consulta do título de dentro do Header para evitar de fazermos consultas em todas as páginas que criarmos.

```jsx
/* src/components/Header/Header.jsx */
import React from 'react';
import { StaticQuery, graphql, Link } from "gatsby"
import './Header.css';

export default () => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <header className="header">
        <Link to="/"><h1 className="header-title">{data.site.siteMetadata.title}</h1></Link>
      </header>
    )}
  />
)
```

Lembre-se que precisamos atualizar também o `index.js` para remover a consulta.

```jsx
// src/pages/index.js
import React from "react";
import Layout from "../components/Layout";
import 'minireset.css';

export default () => (
  <Layout>
    <p>
      Página inicial
    </p>
  </Layout>
);
```
Se tudo transcorreu bem até o momento esse deve ser o resultado parcial.

![Resultado do blog até essa parte do post](/images/posts/2019-02-22--blog-com-gatsby-e-react-parte-2/result-part3.png)

### Criando um container

Agora vamos criar um container para colocarmos o nosso sidebar e a nossa lista de posts.

```jsx
// src/components/Container/Container.jsx
import React from 'react';
import './Container.css';

export default ({ children }) => (
  <div className="container">
    {children}
  </div>
);
```

```css
/* src/components/Container/Container.css */
.container {
    max-width: 980px;
    display: flex;
    justify-content: space-between;
    padding: 15px;
    flex-direction: row;
    margin: 0 auto;
    margin-top: 4.0rem;
}
```

```javascript
// src/components/Container/index.js
export { default } from './Container';
```

Dentro do `Layout.jsx` adicione o container de modo que ele fique ao redor do `{children}`. Assim, podemos compartilhar a mesma estrutura entre as todas as páginas do blog.

### Criando o sidebar

Seguindo a mesma lógica dos componentes anteriores vamos criar o nosso Sidebar.

```jsx
// src/components/Sidebar/Sidebar.jsx
import React from 'react';
import './Sidebar.css';

export default ({ title, description }) => (
  <div className="sidebar">
    <h3 className="sidebar-title">{title}</h3>
    <p className="sidebar-description">{description}</p>
  </div>
);
```

```css
/* src/components/Sidebar/Sidebar.css */
.sidebar {
    padding: 1.5rem;
    margin-bottom: 1rem;
    border-radius: .50rem;
    background-color: #FFFFFF;
}

.sidebar .sidebar-title {
    font-size: 20px;
    font-weight: bold;
}

.sidebar .sidebar-description {
    text-align: justify;
    margin-top: 1rem;
    line-height: 1.5;
}
```

```javascript
// src/components/Sidebar/index.js
export { default } from './Sidebar';
```

Agora altere os arquivos `Layout.jsx`  e `Layout.css`, para que possamos adicionar o Sidebar ao layout padrão.

```jsx
// src/components/Layout/Layout.jsx
import React from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Container from '../Container';
import './Layout.css';

export default ({ children, title }) => (
  <div>
    <Header title={title} />
    <main role="main">
      <Container>
        {children}
        <aside className="aside">
          <Sidebar
            title="Sobre mim"
            description="Sou um desenvolvedor apaixonado por JavaScript e amo desenvolver produtos que melhoram a vida das pessoas."
          />
          <Sidebar
            title="Sobre o blog"
            description="Aqui você encontará muito conteúdo de FrontEnd e CSS, além de umas dicas senasacionais de carreira!"
          />
        </aside>
      </Container>
    </main>
  </div>
);
```

```css
/* src/components/Layout/Layout.css */
.aside {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
    flex-direction: column;
    padding: 10px;
}
```

![Estágio atual do blog](/images/posts/2019-02-22--blog-com-gatsby-e-react-parte-2/result-part4.png)

## Criando uma página de erro 404

Agora que temos quase toda a parte visual do nosso blog e layout pronta podemos criar páginas facilmente e compartilhar a mesma estrutura entre elas. E veja que bom, temos um site estático com uma ótima performance e com uma fácil manutenção!

Por tal motivo não podemos nos esquecer de criar uma página de erro 404 personalizada, e, com o Gatsby isso é muito simples. Basta criar um arquivo `404.js` dentro de `pages` e pronto.

```jsx
// src/pages/404.js
import React from "react";
import Layout from "../components/Layout";

export default () => (
  <Layout>
    <p>
      Infelizmente a página desejada não pode ser encontrada!
    </p>
  </Layout>
);
```

Se quiser testar a página basta acessar [http://localhost:8000/404](http://localhost:8000/404) ou digitar algo aleatório na url e ver a página de de erro de desenvolvimento (ela oferece uma opção para ver a de produção, no caso, a que criamos).

## Conclusão

No post de hoje criamos toda a parte visual do nosso blog, que já está pronto para começar a receber os posts e ganhar muitas funcionalidades legais. Por isso, no próximo tutorial da série vamos melhorar algumas coisas e também criar a listagem dos posts na home, além de um template para todos os posts do blog. Nos vemos lá! Deus abençoe!


