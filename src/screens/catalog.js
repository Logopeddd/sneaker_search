import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { parse } from 'qs';
import { Article, Heading, Anchor, Section } from 'grommet';

import FilterComponent from '../components/filter';
import Tiles from '../components/tiles';
import CatalogPageTile from '../components/tiles/catalog-page_tile';

import { loadProducts } from '../ducks/products';

class CatalogPage extends React.Component {
  constructor(props) {
    super(props);
    const { location: { search } } = props;
    this.state = { values: parse(search.substring(1)) };
  }

  componentDidMount() {
    this.props.loadProducts(this.state.values);
  }

  render() {
    const { filterOnDisplay, products, match: { params } } = this.props;

    const filter = (
      <FilterComponent
        handleSubmit={this.props.loadProducts}
        amount={products.length}
        initialValues={this.state.values}
      />
    );

    return (
      <Article
        className="screen-content"
        colorIndex="light-2"
        pad={{ horizontal: 'xlarge' }}
      >
        <Heading className="no-margin-bottom" uppercase tag="h4" margin="small">
          <Anchor path="/">home</Anchor> / catalog
        </Heading>
        <Heading uppercase strong align="center" tag="h2">
          {params.department}
        </Heading>
        <Section pad="none" align="start" direction="row" colorIndex="light-2">
          {filterOnDisplay && filter}
          <Tiles tile={CatalogPageTile} tiles={products} />
        </Section>
      </Article>
    );
  }
}

const mapStateToProps = state => ({
  filterOnDisplay: state.filter,
  products: state.products,
});

CatalogPage.defaultProps = {
  products: [],
};

const { shape, string, func, bool, arrayOf } = PropTypes;

CatalogPage.propTypes = {
  location: shape({ search: string.isRequired }).isRequired,
  loadProducts: func.isRequired,
  filterOnDisplay: bool.isRequired,
  products: arrayOf(shape),
  match: shape({ params: shape.isRequired }).isRequired,
};

export default connect(mapStateToProps, { loadProducts })(CatalogPage);
