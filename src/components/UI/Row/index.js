import React from 'react';
import Row from './styles';

export default ({ centered, children }) => (
  <Row center={centered}>{children}</Row>
);
