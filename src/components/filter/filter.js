import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Box, Label } from 'grommet';
import FilterForm from '../forms/filter-form';
import { filterDisplay } from '../../actions/filter';

import './filter.css';

class FilterComponent extends React.Component {
  onClose = () => {
    this.props.dispatch(filterDisplay(false));
  };

  render() {
    return (
      <Box className="filter-component" colorIndex="light-1">
        <Box colorIndex="grey-2-a" onClick={this.onClose}>
          <Label margin="small" uppercase align="center">
            {this.props.amount} items found
          </Label>
        </Box>
        <FilterForm
          initialValues={this.props.initialValues}
          onSubmit={this.onClose}
        />
      </Box>
    );
  }
}

FilterComponent.propTypes = {
  dispatch: PropTypes.func.isRequired,
  amount: PropTypes.number.isRequired,
  initialValues: PropTypes.shape({
    brand: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  filter: state.filter,
});

export default connect(mapStateToProps)(FilterComponent);
