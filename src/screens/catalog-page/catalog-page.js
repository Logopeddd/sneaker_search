import React from 'react';
import { connect } from 'react-redux';
import { Article, Heading, Anchor, Section, Box } from 'grommet';
import ScrollToTop from '../../components/scroll-to-top/scroll-to-top';

import FilterComponent from '../../components/filter/filter';
import TilesComponent from '../../components/tiles/tiles';
import CatalogPageTile from '../../components/tiles/tile/catalog-page_tile';

import items from '../../assets/items';

import './catalog-page.css';

const CatalogPage = props => {
  const {
    filterOn,
    filter: { values },
    match: { params },
    location: { state },
  } = props;
  let tiles = items;
  if (params.department)
    tiles = tiles.filter(item => item.department.includes(params.department));

  if (values) {
    if (values.brand && !!values.brand.length)
      tiles = tiles.filter(item => values.brand.includes(item.brand));
    if (values.size && !!values.size.length)
      tiles = tiles.filter(item =>
        values.size.some(size => item.size.includes(size)),
      );
    if (values.minPrice)
      tiles = tiles.filter(item => item.price > values.minPrice);
    if (values.maxPrice)
      tiles = tiles.filter(item => item.price < values.maxPrice);
  }

  let filter;
  const brand = state ? state.brand : [];
  if (filterOn)
    filter = (
      <FilterComponent amount={tiles.length} initialValues={{ brand }} />
    );
  return (
    <Article
      className="screen-content"
      colorIndex="light-2-a"
      pad={{ horizontal: 'xlarge' }}
    >
      <Heading className="no-margin-bottom" uppercase tag="h4" margin="small">
        <Anchor path="/">home</Anchor> / catalog
      </Heading>
      <Heading uppercase strong align="center" tag="h2">
        {params.department}
      </Heading>
      <Section pad="none" align="start" direction="row" colorIndex="light-2-a">
        <ScrollToTop />
        {filter}
        <TilesComponent tile={CatalogPageTile} tiles={tiles} />
      </Section>
    </Article>
  );
};

const mapStateToProps = state => ({
  filterOn: state.filter,
  filter: state.form.filter || {},
});

export default connect(mapStateToProps)(CatalogPage);
