import React from 'react';
import Content from './styles';

export default ({ html }) => (
  <Content dangerouslySetInnerHTML={{ __html: html }} />
);
