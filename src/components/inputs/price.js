import React from 'react';
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

export default PriceInput;
