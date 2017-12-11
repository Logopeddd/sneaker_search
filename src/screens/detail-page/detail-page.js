import React from 'react';
import PropTypes from 'prop-types';

import {
  Article,
  Section,
  Box,
  Heading,
  Carousel,
  Image,
  Label,
  Value,
  Anchor,
} from 'grommet';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/product';

import TilesComponent from '../../components/tiles/tiles';
import DetailPageTile from '../../components/tiles/tile/detail-page_tile';

class DetailPage extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.loadCurrentProduct(id);
  }

  render() {
    const { product } = this.props;
    console.log(this.props);
    return (
      <Article colorIndex="light-2-a" pad={{ horizontal: 'xlarge' }}>
        <Heading uppercase tag="h4" margin="small">
          <Anchor path="/">home</Anchor> /{' '}
          <Anchor path="/catalog">catalog</Anchor> / {product.name}
        </Heading>
        <Heading align="center" strong uppercase tag="h4">
          {product.brand}
        </Heading>
        <Heading align="center" uppercase tag="h1">
          {product.name}
        </Heading>
        <Section direction="row">
          <Box basis="2/3">
            <Carousel>
              <Image src={product.img} />
              <Image src={product.img} />
              <Image src={product.img} />
            </Carousel>
          </Box>

          <Box basis="1/3" margin={{ left: 'large' }}>
            <Value value={`$${product.price}`} align="start" />
            <Label uppercase>sizes</Label>
            <TilesComponent
              selectable
              tile={DetailPageTile}
              tiles={product.sizes}
              keys="size"
            />
          </Box>
        </Section>
      </Article>
    );
  }
}

const mapStateToProps = state => ({
  product: state.currentProduct,
});

DetailPage.defaultProps = {
  product: {},
};

DetailPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape(),
  }).isRequired,
  product: PropTypes.shape({
    name: PropTypes.string,
    brand: PropTypes.string,
  }),
  loadCurrentProduct: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, actionCreators)(DetailPage);
