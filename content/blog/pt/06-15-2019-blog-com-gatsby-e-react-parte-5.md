---
template: post
title: "Criando um blog com Gatsby e React - Parte 5"
tags:
  - React
  - Gatsby
category: Gatsby
slug: blog-com-gatsby-e-react-parte-5
image: /img/upload/blog-gatsby-react-2.png
draft: false
date: 2019-06-16T03:00:00.000Z
description: "Fazer deploy de uma aplicação pode não ser uma tarefa fácil, mas, no post de hoje veremos como hospedar o nosso blog feito com Gatsby no Netlify."
---

## Introdução

Fala pessoal! Como vocês estão? Depois de um longo tempo sem trazer conteúdo para o blog eu estou de volta para finalizar essa série que te ensinou a criar um blog com Gatsby. E, no post de hoje nós vamos ver como hospedar no [Netlify](https://www.netlify.com/).

## Fazendo build de produção

Sempre antes de colocar o site no ar é importante criar um build de produção. Para isso você pode rodar o comando `gatsby build` diretamente no terminal dentro da pasta do projeto. Ao rodar o comando todos os arquivos estáticos criados vão para a pasta `public`, e, com o comando `gatsby serve` podemos ver o site em produção no seguinte link [localhost:9000](http://localhost:9000/).

## Testando o blog com o Lighthouse

Segundo o site do [Lightouse](https://developers.google.com/web/tools/lighthouse/):

> O Lighthouse é uma ferramenta automatizada de código aberto que aprimora a qualidade de apps da Web. Ele pode ser executado como extensão do Chrome ou na linha de comando. Informe ao Lighthouse um URL que você quer auditar. Ele executará uma série de testes na página e gerará um relatório sobre o desempenho da página. Nesse relatório, você poderá usar os testes que apresentaram falha como indicadores do que pode ser feito para aprimorar o aplicativo.

Executar audits com o Lighthouse e, em seguida, abordar os erros encontrados ou oportunidades de melhoria é uma ótima maneira de preparar seu site para o deploy. Vamos testá-lo:

1. Primeiro abra o blog em produção em uma janela anônima, para que as extensões do Chrome não interfiram no teste. Depois, abra o DevTools.
2. Dentro do DevTools clique na aba "Audits" (não sei como fica em português). Dentro da mesma você verá uma tela parecida com essa:

![Página das tags](/img/upload/audits-chrome.png)

3. Click em "Run audits" (todos os tipos de audits devem estar marcados). Lembre-se também de marcar o Device como Desktop, até porque nosso site não é responsivo. Uma vez que o teste acabar você verá um resultado que se parece muito com esse:

![Resultado do teste](/img/upload/result-audit.png)

O que não é nada mal. Como você pode ver a performance chegou a 99 de 100. O SEO, acessibilidade e PWA também obtiveram scores impressionates. Enfim, só posso dizer que o Gatsby é sensacional!

## Realizando deploy no Netlify

Agora que testamos tudo e pudemos ver a qualidade do Gatsby nós vamos fazer deploy do nosso site no Netlify. Para isso, você precisa ter uma conta no Netlify (caso não tenha pode criar uma [nessa página](https://app.netlify.com/signup). Uma vez que você criou a sua conta e fez login verá uma tela parecida com essa:

![Resultado do teste](/img/upload/netlify-dashboard.png)

Clicando em "New site from Git" poderemos escolher qual Git Provider vamos usar (Github, GitLab ou BitBucket). Escolha aquele onde está o seu projeto. No meu caso é GitHub.

![Parte 1 para o deploy do site](/img/upload/netlify-part1.png)

Na segunda etapa precisamos escolher o repositório do projeto, no meu caso, é o codestack-brasil. Se não aparecer nenhum repositório basta permitir o acesso do Netlify.

Já na terceira e última etapa precisamos escolher os comandos que o Netlify vai executar para colocar o site no ar, no caso em produção. Para isso você pode seguir o exemplo da seguinte imagem:

![Opções para deploy](/img/upload/netlify-part2.png)

Nessa tela é possível escolher a branch e os comandos de build. Como vimos anteriormente o comando é `gatsby-build` e a pasta é a `public/`.

Com tudo preenchido agora fica fácil, basta clicar em deploy site que logo o Netlify iniciará todo o processo automaticamente. E sabe o que é o melhor do Netlify, é que depois você pode adicionar um domínio próprio.

*Observação: Para atualizações futuras no projeto você não precisa repetir o processo. O Netlify irá "monitorar" a branch escolhida e toda vez que fizer um novo commit irá fazer deploy automático.*

## Conclusão

Antes de terminar essa série queria te deixar um desafio bem simples: fazer o responsivo do site, e, caso queira, pode separar algumas partes em componentes (principalmente a parte do `post.jsx`). Não esqueça que um blog como esse é ótimo para portfólio.

Não esqueça de deixar um comentário falando o que você aprendeu e achou do blog. Caso tenha ficado com alguma dúvida comente aqui embaixo, terei o maior prazer em ajudar. Nos vemos nos comentários! Deus abençoe!

- [Link do repositório no GitHub](https://github.com/jpedroschmitz/codestack-brasil)
- [Site live](https://codestackbrasil.netlify.com/)
