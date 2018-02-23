import React from 'react';
import { Select } from 'grommet';
import PropTypes from 'prop-types';

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

const { shape, func, oneOfType, string, number, arrayOf } = PropTypes;

SelectComponent.propTypes = {
  input: shape({
    onChange: func.isRequired,
    onBlur: func.isRequired,
    value: oneOfType([string, number]),
  }).isRequired,
  options: arrayOf(oneOfType([string, number])).isRequired,
};

export default SelectComponent;
