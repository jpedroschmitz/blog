import React from 'react';
import { Link } from 'gatsby';
import Pagination from './S.Pagination';

export default ({ quantity, page, next, previous }) => (
  <Pagination>
    {previous && <Link to={previous}>{'<<'}</Link>}
    <span>{`Página ${page} de ${quantity}`}</span>
    {next && <Link to={next}>{'>>'}</Link>}
  </Pagination>
);
