import React from 'react';
import { connect } from 'react-redux';
import { Sidebar, Box, Label } from 'grommet';
import FilterSidebarForm from './filter-sidebar_form';

class FilterSidebar extends React.Component {
  show = () => {
    this.props.dispatch({ type: 'SHOW_SIDEBAR' });
  };

  hide = () => {
    this.props.dispatch({ type: 'HIDE_SIDEBAR' });
  };

  render() {
    return (
      <Sidebar
        onClick={this.hide}
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

function mapStateToProps(state) {
    return {
        visible: state.visible,
    };
}


export default connect(mapStateToProps)(FilterSidebar);
