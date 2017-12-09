import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Sidebar as GrommetSidebar, Box, Label } from 'grommet';
import FilterForm from '../forms/filter-form';
import { sidebarEnabled } from '../../actions/sidebar';

class Sidebar extends React.Component {
  onClose = () => {
    this.props.dispatch(sidebarEnabled(false));
  };

  render() {
    return (
      <GrommetSidebar
        separator="right"
        className="filter-sidebar"
        colorIndex="light-1"
        full
        size="large"
      >
        <Box size="large" colorIndex="grey-2-a">
          <Label margin="small" uppercase align="center">
            {this.props.amount} items found
          </Label>
        </Box>
        <FilterForm
          initialValues={this.props.initialValues}
          onSubmit={this.onClose}
        />
      </GrommetSidebar>
    );
  }
}

Sidebar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  amount: PropTypes.number.isRequired,
  initialValues: PropTypes.shape({
    brand: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  sidebar: state.sidebar,
});

export default connect(mapStateToProps)(Sidebar);
