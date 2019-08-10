import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { Index } from 'elasticlunr';
import Layout from '~/components/Layout';
import SearchList from '~/components/SearchList';
import Container from '~/components/UI/Container';
import Input from '~/components/UI/Input';
import SEO from '~/components/SEO';

export default class Search extends Component {
  state = {
    query: '',
    results: [],
  };

  getOrCreateIndex = () => {
    if (this.index) return this.index;
    const { data } = this.props;
    const { index } = data.siteSearchIndex;
    return Index.load(index);
  };

  search = evt => {
    const query = evt.target.value;
    this.index = this.getOrCreateIndex();
    this.setState({
      query,
      results: this.index
        .search(query, {})
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    });
  };

  render() {
    const { results, query } = this.state;
    return (
      <Layout>
        <SEO
          pageTitle="Procurar posts 👀"
          pageDescription="Encontre todos os posts do blog buscando por palavras chaves."
        />
        <Container>
          <h2>Digite algo para buscar:</h2>
          <Input
            type="text"
            placeholder="Ex: React, blog, Gatsby..."
            value={query}
            onChange={this.search}
          />
          <SearchList results={results} />
        </Container>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query SearchIndexQuery {
    siteSearchIndex {
      index
    }
  }
`;
