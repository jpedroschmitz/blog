import React from 'react';
import Row from './S.Row';

export default ({ centered, children }) => (
  <Row center={centered}>{children}</Row>
);
