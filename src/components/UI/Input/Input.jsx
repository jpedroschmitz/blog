import React from "react";
import styled from "styled-components";

const Input = styled.input`
  padding: 8px 10px;
  border-radius: 0.55rem;
  border: 1px solid #000;
  margin-top: 20px;
  width: 100%;
  outline: none;
`;

export default ({ placeholder, value, onChange }) => (
  <Input type="text" placeholder={placeholder} onChange={onChange} value={value} />
);
