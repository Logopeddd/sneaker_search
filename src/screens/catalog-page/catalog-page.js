import React from 'react';
import { connect } from 'react-redux';
import { Split, Article } from 'grommet';
import Sidebar from '../../components/sidebar/sidebar';
import TilesComponent from '../../components/tiles/tiles';
import CatalogPageTile from '../../components/tiles/tile/catalog-page_tile';

import items from '../../assets/items';

const CatalogPage = props => {
  const {
    sidebar: { enabled },
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
  if (enabled)
    filter = <Sidebar amount={tiles.length} initialValues={{ brand }} />;
  return (
    <Split className="screen-content" priority="right" flex="right">
      {filter}
      <Article colorIndex="light-2-a" align="center">
        <TilesComponent tile={CatalogPageTile} tiles={tiles} />
      </Article>
    </Split>
  );
};

const mapStateToProps = state => ({
  sidebar: state.sidebar,
  filter: state.form.filter || {},
});

export default connect(mapStateToProps)(CatalogPage);
