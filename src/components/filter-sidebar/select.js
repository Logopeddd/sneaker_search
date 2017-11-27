import React from 'react';
import PropTypes from 'prop-types';
import { FormField, Label, Select } from 'grommet';

const FormFieldSelect = props => (
  <FormField label={<Label uppercase>{props.label}</Label>}>
    <Select placeHolder="None" options={props.options} />
  </FormField>
);

FormFieldSelect.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ).isRequired,
};

export default FormFieldSelect;
