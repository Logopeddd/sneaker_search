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

SelectComponent.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ).isRequired,
};

export default SelectComponent;
