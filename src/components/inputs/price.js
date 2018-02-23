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

const { shape, func } = PropTypes;

PriceInput.propTypes = {
  input: shape({
    onChange: func.isRequired,
  }).isRequired,
};

export default PriceInput;
