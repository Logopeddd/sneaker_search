import React from 'react';
import { Sidebar, Box, Label } from 'grommet';
import FilterSidebarForm from './filter-sidebar_form';

class FilterSidebar extends React.Component {
  render() {
    return (
      <Sidebar
        separator="left"
        className="filter-sidebar"
        size="large"
        colorIndex="light-2-a"
        fixed
      >
        <Box size="large" colorIndex="grey-2-a">
          <Label margin="small" uppercase align="center">
            ??? items found
          </Label>
        </Box>
        <FilterSidebarForm />
      </Sidebar>
    );
  }
}
export default FilterSidebar;
