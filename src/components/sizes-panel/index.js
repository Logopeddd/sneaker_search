import React from 'react';
import PropTypes from 'prop-types';
import { Box, Label, Value, Tiles, Tile } from 'grommet';

import Table from '../../components/table';

class SizesPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedSize: '', price: props.price };
  }
  componentWillReceiveProps(props) {
    this.setState({ price: props.price });
  }
  onSizeClick = size => {
    const price = size.shops.reduce(
      (min, shop) => (min <= shop.price ? min : shop.price),
      size.shops[0].price,
    );
    this.setState({ selectedSize: size, price });
  };

  render() {
    const { sizes } = this.props;
    return (
      <Box basis="1/3" margin={{ left: 'large' }}>
        <Value value={`from $${this.state.price}`} align="center" />
        <Label uppercase>sizes</Label>
        <Tiles selectable flush={false}>
          {sizes.map(size => (
            <Tile
              key={size.value}
              onClick={() => this.onSizeClick(size)}
              colorIndex="light-2"
              pad={{ horizontal: 'medium', vertical: 'small' }}
            >
              {size.value}
            </Tile>
          ))}
        </Tiles>
        <Table shops={this.state.selectedSize.shops} />
      </Box>
    );
  }
}

SizesPanel.defaultProps = {
  sizes: [],
  price: null,
};

const { number, arrayOf, shape, string } = PropTypes;

SizesPanel.propTypes = {
  price: number,
  sizes: arrayOf(
    shape({
      value: string,
      shops: arrayOf(
        shape({
          price: number,
        }),
      ),
    }),
  ),
};

export default SizesPanel;
