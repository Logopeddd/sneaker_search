import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Sidebar, Box, Label, Header, Title, Button } from 'grommet';
import FilterSidebarForm from './filter-sidebar_form';
import { sidebarEnabled } from '../../actions/sidebar';

class FilterSidebar extends React.Component {
  constructor() {
    super();
    this.onClose = this.onClose.bind(this);
  }
  onClose() {
    this.props.dispatch(sidebarEnabled(false));
  }

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
        <FilterSidebarForm onClick={this.onClose} />
      </Sidebar>
    );
  }
}

FilterSidebar.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  sidebar: state.sidebar,
});

export default connect(mapStateToProps)(FilterSidebar);
