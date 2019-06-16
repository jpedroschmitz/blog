---
template: post
title: "Simplificando formulários no React com Hooks"
tags:
  - Hooks
category: React
slug: simplificando-formularios-com-hooks
image: /img/upload/form-hooks-banner.png
draft: false
date: 2019-06-16T20:54:42.591Z
description: "Desde o lançamento dos Hooks na versão 16.8.0 do React a forma de escrever componentes mudou. No post de hoje veremos como simplificar formulários no React utilizando essa nova API."
---

Fala pessoal! Como vocês estão? Desde o lançamento dos Hooks na versão 16.8.0 do React a forma de escrever componentes mudou. Antes era muito difícil reutilizar lógica de estado entre componentes, e por exemplo, no caso de termos vários formulários dentro de nosso projeto muitas vezes teríamos algo parecido com isso repetidas vezes:

```jsx
export default class Form extends Component {
  state = {
    values: {},
    loading: false
  };

  handleChange = (event) => {
    const { values: auxValues } = this.state;
    auxValues[event.target.name] = event.target.value;
    this.setState({ values: auxValues });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ loading: true });

    // Post da API
    this.setState({ loading: false });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* formulário aqui */}
      </form>
    );
  }
}
```

Em um primeiro momento você pode olhar e dizer que não tem nada de errado com esse componente, e eu concordo contigo, não tem nada de errado com ele. Porém, imagine a seguinte situação: você tem 10 ou 20 formulários no seu projeto e todos eles compartilham basicamente esse mesmo código. Não me parece algo bom. Por isso no post de hoje nos veremos uma forma de compartilhar toda essa lógica criando um hook customizado.

Caso você tenha começado a estudar React há pouco tempo e não conhece Hooks eu recomendo fortemente que dê uma olhada na [documentação do React](https://pt-br.reactjs.org/docs/hooks-intro.html), eles tem exemplos bem legais e lá você irá aprender um pouco mais dessa feature maravilhosa.

## Iniciando um projeto

Para começar, vamos precisar criar um projeto React. Para isso, vá até a pasta onde você deseja deixar o mesmo e digite o seguinte comando no terminal:

```bash
yarn create react-app form-hooks

# Ou com o npx
# npx create-react-app form-hooks
```

Uma vez que o projeto foi criado apague todos os arquivos da pasta `src` exceto o `App.js` e o `index.js`.

No `index.js` adicione o seguinte código:

```jsx
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

E no `App.js`:

```jsx
// src/App.js
import React from 'react';

export default () => {
  return (
    <div>
      <h1>Contato</h1>
      <form>
        <input type="text" name="name" placeholder="Digite o seu nome"/>
        <input type="email" name="email" placeholder="Digite o seu e-mail"/>
        <input type="text" name="message" placeholder="Mensagem"/>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
```

Se tudo deu certo até o momento você deve estar vendo uma tela parecida com essa no seu navegador:

![Imagem do projeto criado até o momento](/img/upload/form-hooks.png)

Sim, eu sei que isso não é visualmente bonito, mas vou manter o foco do post. Por isso, vamos adicionar um pouco de funcionalidade criando um Hook customizado.

### Criando um Hook customizado

Toda vez que queremos compartilhar lógica entre funções no JavaScript, ou em outras linguagens no geral, nos sempre extraímos ela para uma terceira função, permitindo assim o desacoplamento da lógica. E como Hooks são funções, então podemos fazer isso também.

É importante destacar que todo Hook customizado deve começar com "use" e que é possível utilizar o mesmo junto com outros Hooks próprios. E, diferente de um componente React nós podemos decidir quais argumentos ele vai receber e o que vai retornar, exatamente como uma função normal do JavaScript.

Antes de criar o Hook vamos primeiro criar uma pasta dentro de `src` com o nome de `hooks`. E dentro dessa nova pasta um arquivo `useForm.js`. Nesse arquivo vamos começar pelo básico: importando o `useState` da API dos Hooks e criando as funções básicas de um formulário, o `handleChange()` e o `handleSubmit()`.

```jsx
// src/hooks/useForm.js
import { useState } from "react";

const useForm = () => {
  const handleChange = () => {

  };

  const handleSubmit = (callback) => {
    callback();
  };
};

export default useForm;
```

Até aqui você não viu nada de novo. Nós criamos e exportamos uma função, além disso criamos dois métodos para manipular os eventos de onChange e onSubmit. O método `handleSubmit()` recebe um parâmetro, o callback. Mas, aí você pode estar se perguntando o que esse callback vai fazer. Então, ele pode fazer básicamente qualquer coisa (ah, sério?), você pode fazer uma chamada para a API ou salvar os dados do formulário no `localStorage`, enfim, vai da lógica do componente. O que nós precisamos fazer agora é criar a lógica para esses métodos, além de adicionar estado.

```jsx
import { useState } from "react";

const useForm = (callback) => {
  const [values, setValues] = useState({ });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const auxValues = { ...values };
    auxValues[event.target.name] = event.target.value;
    setValues(auxValues);
  };

  const handleSubmit = callback => event => {
    event.preventDefault();
    setLoading(true);
    callback();
    setLoading(false);
  };
};

export default useForm;
```

Pronto, nosso Hook está começando a criar vida. E, se você reparou só falta fazer uma única coisa, retornar o estado junto com os métodos. Por isso, adicione o seguinte linha de código depois do `handleSubmit()`:

```js
return [{ values, loading }, handleChange, handleSubmit];
```

## Ligando as partes

Uma vez que criamos o nosso hook customizado nós temos que usá-lo no `App.js`. Portanto, adicione o seguinte código dentro do arquivo:

```jsx
import React from "react";
import useForm from "./hooks/useForm";

export default () => {
  const [{ values, loading }, handleChange, handleSubmit] = useForm();

  const enviarContato = () => {
    // faça o que for preciso :)
    console.log(values);
  };

  return (
    <div>
      <h1>Contato</h1>
      <form onSubmit={handleSubmit(enviarContato)}>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Digite o seu nome"
        />
        <input
          onChange={handleChange}
          type="text"
          name="email"
          placeholder="Digite o seu e-mail"
        />
        <input
          onChange={handleChange}
          type="text"
          name="message"
          placeholder="Mensagem"
        />
        <button type="submit">{loading ? "Enviando..." : "Enviar"}</button>
      </form>
    </div>
  );
};
```

Por mais que pareça grande, o código acima é bem simples. Nós começamos importando o nosso Hook logo depois do React. Depois, na declaração do `useForm()` nós recebemos o estado junto com os métodos que são usados nos eventos. Simples, não é?

Lembrando que o nosso `handleSubmit()` recebia como argumento um callback, que, nesse caso é o método `enviaContato()`. Veja o resultado:

![Resultado do projeto](/img/upload/hooks-form.gif)

## useYourCreativity()

A API dos Hooks foi sem dúvidas uma das atualizações mais importantes do React nos últimos tempos. Com essa feature maravilhosa nós podemos reutilizar lógica de estado entre componentes, além de deixar o nosso código extremamente limpo e fácil de entender quando comparados a classes.

Se você tem alguma consideração ou ficou com alguma dúvida não deixe de comentar aqui embaixo, terei prazer em ajudar. Nos vemos em um próximo post. Deus abençoe!

[Link para o repositório](https://github.com/jpedroschmitz/forms-with-hooks)
