import React from 'react';
import { Form, Footer, Button } from 'grommet';

import FormFieldSelect from './select';

const brands = ['nike', 'adidas', 'puma'];
const sizes = [5, 6, 7, 8, 9, 10, 11, 12];
const colors = ['black', 'white', 'green', 'red', 'blue'];

const FilterSidebarForm = () => (
  <Form pad="medium">
    <FormFieldSelect label="brand" options={brands} />
    <FormFieldSelect label="size" options={sizes} />
    <FormFieldSelect label="color" options={colors} />
    <Footer justify="center" pad={{ vertical: 'medium' }}>
      <Button plain label="Submit" type="submit" />
    </Footer>
  </Form>
);
export default FilterSidebarForm;
