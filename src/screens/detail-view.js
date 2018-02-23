import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Article, Section, Box, Heading, Anchor } from 'grommet';
import Gallery from '../components/gallery/index';

import { loadCurrentProduct } from '../ducks/product';
import SizesPanel from '../components/sizes-panel/index';
import ScrollToTopOnMount from '../components/scroll-to-top';

class DetailViewPage extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.loadCurrentProduct(id);
  }

  render() {
    const { product } = this.props;
    return (
      <Article
        className="screen-content"
        colorIndex="light-2"
        pad={{ horizontal: 'xlarge' }}
      >
        <ScrollToTopOnMount />
        <Heading uppercase tag="h4" margin="small">
          <Anchor path="/">home</Anchor> /{' '}
          <Anchor path="/catalog">catalog</Anchor> / {product.model}
        </Heading>
        <Heading align="center" strong uppercase tag="h4">
          {product.brand}
        </Heading>
        <Heading align="center" uppercase tag="h1">
          {product.model}
        </Heading>
        <Section direction="row">
          <Box basis="2/3">
            <Gallery items={product.imgs} />
          </Box>
          <SizesPanel sizes={product.sizes} price={product.price} />
        </Section>
      </Article>
    );
  }
}

const mapStateToProps = ({ product }) => ({
  product,
});

DetailViewPage.defaultProps = {
  product: { imgs: [], sizes: [] },
};

const { shape, string, func, arrayOf } = PropTypes;

DetailViewPage.propTypes = {
  match: shape({
    params: shape(),
  }).isRequired,
  product: shape({
    imgs: arrayOf(string),
    model: string,
    brand: string,
  }),
  loadCurrentProduct: func.isRequired,
};

export default connect(mapStateToProps, { loadCurrentProduct })(DetailViewPage);
