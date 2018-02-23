import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Box, Label } from 'grommet';
import { stringify } from 'qs';

import history from '../../history';
import FilterForm from '../forms/filter-form';
import { showFilter } from '../../ducks/filter';

class FilterComponent extends React.Component {
  onClose = () => {
    this.props.dispatch(showFilter(false));
  };

  handleChange = values => {
    history.replace({ search: stringify(values) });
    this.props.handleSubmit(values);
  };

  render() {
    return (
      <Box className="filter-component" colorIndex="light-1">
        <Box colorIndex="grey-2-a" onClick={this.onClose}>
          <Label margin="small" uppercase align="center">
            {this.props.amount || 'no '} items found
          </Label>
        </Box>
        <FilterForm
          destroyOnUnmount={false}
          initialValues={this.props.initialValues}
          onChange={this.handleChange}
        />
      </Box>
    );
  }
}

const { func, number, shape, arrayOf, string } = PropTypes;

FilterComponent.propTypes = {
  dispatch: func.isRequired,
  amount: number.isRequired,
  initialValues: shape({
    brand: arrayOf(string),
  }).isRequired,
  handleSubmit: func.isRequired,
};

const mapStateToProps = state => ({
  filter: state.filter,
});

export default connect(mapStateToProps)(FilterComponent);
