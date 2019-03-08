import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Pagination = styled.div`
  margin: 0 15px 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PaginationLink = styled(Link)`
  margin: 0 10px 0 10px;
`;

export default ({ previous, next }) => (
  <Pagination>
    {previous && (
      <PaginationLink title="Voltar para página anterior" to={previous}>
        Anterior
      </PaginationLink>
    )}
    {next && (
      <PaginationLink title="Ir para a próxima página" to={next}>
        Próxima
      </PaginationLink>
    )}
  </Pagination>
);
