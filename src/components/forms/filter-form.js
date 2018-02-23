import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Box, Accordion, AccordionPanel, Form } from 'grommet';
import SelectComponent from '../inputs/select';
import PriceInput from '../inputs/price';

const brands = [
  'Adidas',
  'Air Jordan',
  'Asics',
  'Nike',
  'New Balance',
  'Puma',
  'Reebok',
];
const sizes = [5, 6, 7, 8, 9, 10, 11, 12, 12.5];

const FilterForm = props => {
  return (
    <Form compact pad={{ horizontal: 'medium' }} onSubmit={props.handleSubmit}>
      <Accordion openMulti>
        <AccordionPanel heading="BRAND">
          <Field name="brand" component={SelectComponent} options={brands} />
        </AccordionPanel>

        <AccordionPanel heading="SIZE">
          <Field name="size" component={SelectComponent} options={sizes} />
        </AccordionPanel>

        <AccordionPanel heading="PRICE">
          <Box direction="row" justify="between" pad="small">
            <Field
              name="from"
              type="number"
              component={PriceInput}
              placeHolder="from"
            />
            <Field
              name="to"
              type="number"
              component={PriceInput}
              placeHolder="to"
            />
          </Box>
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
  enableReinitialize: true,
})(FilterForm);
