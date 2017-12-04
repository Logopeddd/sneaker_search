import React from 'react';
import { Select } from 'grommet';

const SelectComponent = ({ input, options }) => (
  <Select
    {...input}
    inline
    multiple
    value={input.value}
    options={options}
    onChange={option => input.onChange(option.value)}
    onBlur={() => input.onBlur(input.value)}
  />
);

export default SelectComponent;
