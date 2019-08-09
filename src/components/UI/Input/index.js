import React from 'react';
import { Input } from './styles';

export default ({ placeholder, value, onChange }) => (
  <Input
    type="text"
    placeholder={placeholder}
    onChange={onChange}
    value={value}
  />
);
