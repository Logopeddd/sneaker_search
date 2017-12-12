import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Accordion, AccordionPanel, Form } from 'grommet';
import SelectComponent from '../inputs/select';

const brands = [
  'Adidas',
  'Air Jordan',
  'Asics',
  'Nike',
  'New Balance',
  'Puma',
  'Reebok',
  'Saucony',
];
const sizes = ['5', '6', '7', '8', '9', '10', '11', '12'];

const FilterForm = props => {
  const { handleSubmit } = props;

  return (
    <Form compact onSubmit={handleSubmit} pad={{ horizontal: 'medium' }}>
      <Accordion openMulti>
        <AccordionPanel heading="BRAND">
          <Field name="brand" component={SelectComponent} options={brands} />
        </AccordionPanel>

        <AccordionPanel heading="SIZE">
          <Field name="size" component={SelectComponent} options={sizes} />
        </AccordionPanel>
      </Accordion>
    </Form>
  );
};

FilterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'filter',
})(FilterForm);
