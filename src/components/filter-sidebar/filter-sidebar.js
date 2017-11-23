import React from 'react';
import { Sidebar, Box, Label, Header } from 'grommet';
import FilterSidebarForm from './filter-sidebar_form';

class FilterSidebar extends React.Component {
  render() {
    return (
      <Sidebar
        separator="right"
        className="filter-sidebar"
        size="large"
        colorIndex="light-2-a"
        fixed
      >
        <Header separator="bottom" colorIndex="light-2-a" />
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
