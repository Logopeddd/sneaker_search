import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, Box } from 'grommet';

import './input.css';

const PriceInput = ({ input, ...custom }) => (
  <Box size="xsmall">
    <TextInput
      {...input}
      onDOMChange={value => input.onChange(value)}
      {...custom}
    />
  </Box>
);

PriceInput.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
  }).isRequired,
};

export default PriceInput;
